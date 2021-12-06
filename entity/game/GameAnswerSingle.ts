import { GameAnswer } from "../../data/GameData";
import { MSG } from "../../message/Message";
import { Answer } from "../../models/Answer";
import { User } from "../../models/User";
import { ClientSocket } from "../../net/ClientSocket";
import { game } from "../../Proto.js/proto";
import { GameEntity } from "../GameEntity";


const Timer_Answer: number = 1;
//答题游戏单人游戏，系统分配数据
export class GameAnswerSingle extends GameEntity {

    protected answers: Answer[] = [];
    protected cur_answer: Answer = null;
    protected playerScores: game.PlayerScore[] = [];

    constructor() {
        super(1);
        
    }

    onUserReady() {
        //创建用户的积分数据
        for (let i = 0; i < this._players.length; i++) {
            this.playerScores[i] = new game.PlayerScore();
            this.playerScores[i].index = i;
            this.playerScores[i].score = 0;
        }
        //单人游戏测试
        this.SendData(-1, MSG.game_send_playerscore, this.playerScores[0]);

        this.generateQuestion();
        //开启游戏，随机考题 发送考题 -- 这层逻辑
        if (this.answers.length == 0) {
            console.log("开始时就已经把题目用完了，或者没有分配题目")
            debugger;
            return;
        }

        this.cur_answer = this.answers.shift();
        this.SendData(-1, MSG.game_send_question, {
            id: this.cur_answer.id,
            question: this.cur_answer.question,
            selection: this.cur_answer.selection
        });

        this.SetTimer(Timer_Answer,5);
    }

    onTimer(id: number) {
        switch (id) {
            case Timer_Answer:
            {
                if (this.answers.length) {
                    this.cur_answer = this.answers.shift();
                    this.SendData(-1, MSG.game_send_question, {
                        id: this.cur_answer.id,
                        question: this.cur_answer.question,
                        selection: this.cur_answer.selection
                    });
                    this.SetTimer(Timer_Answer, 5, 1);
                }
                else {
                    let game_result = new game.GameResult();
                    game_result.win = true;
                    game_result.gold = 100;  //获得100金币
                    // User.findByPk(client.mData.userid).then(data => {
                    //     if (data) {
                    //         data.increment("gold", { by: 100 });
                    //     }
                    // });
                    // this.SendData(client.getIndex(), MSG.game_end_result, game_result);
                    this.dismissGame();
                }
                // console.error("定时器回调")
                break;
            }
        }
    }


    //除了上层次的消息，其他消息走这里
    public GameMessage(msgid: number, obj: any, client: ClientSocket) {
        switch (msgid) {
            case MSG.game_user_answer:
                return this.subUserAnswer(obj, client);
            case MSG.game_next_question:
                return this.subNextQuestion(obj, client);
        }
    }

    private subNextQuestion(data: any, client: ClientSocket) {
        //下一题
        if (this.answers.length) {
            this.cur_answer = this.answers.shift();
            this.SendData(-1, MSG.game_send_question, {
                id: this.cur_answer.id,
                question: this.cur_answer.question,
                selection: this.cur_answer.selection
            });
            this.SetTimer(Timer_Answer, 5, 1);
        }
        else {
            let game_result = new game.GameResult();
            game_result.win = true;
            game_result.gold = 100;  //获得100金币
            User.findByPk(client.mData.userid).then(data => {
                if (data) {
                    data.increment("gold", { by: 100 });
                }
            });
            this.SendData(client.getIndex(), MSG.game_end_result, game_result);
            this.dismissGame();
        }
    }
    //用户答题
    subUserAnswer(obj: game.QuestionAnswer, client: ClientSocket) {
        let index = client.getIndex();
        if (obj.index == this.cur_answer.anwser) {
            //对了加分
            if (index != -1) {
                let score = this.playerScores[index]
                score.index = index
                score.score += 100;
                this.SendData(-1, MSG.game_send_playerscore, score);

                let result = new game.QuestionResult();
                result.right = true;
                result.score = 100;
                result.user = index;
                result.rightindex = this.cur_answer.anwser;
                result.selection = obj.index;
                this.SendData(-1, MSG.game_answer_result, result);
            }
        }
        else {
            let result = new game.QuestionResult();
            result.right = false;
            result.score = 0;
            result.user = index;
            result.rightindex = this.cur_answer.anwser;
            result.selection = obj.index;
            this.SendData(-1, MSG.game_answer_result, result);
        }
        this.KillTimer(Timer_Answer)
    }

    generateQuestion() {
        console.log(GameAnswer.length)
        GameAnswer.sort((a, b) => {
            return .5 - Math.random();
        });

        this.answers = GameAnswer.concat();
    }
}