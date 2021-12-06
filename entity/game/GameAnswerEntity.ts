import { GameAnswer } from "../../data/GameData";
import { MSG } from "../../message/Message";
import { Answer } from "../../models/Answer";
import { User } from "../../models/User";
import { ClientSocket } from "../../net/ClientSocket";
import { game } from "../../Proto.js/proto";
import { GameEntity } from "../GameEntity";

//答题游戏由2人组合
export class GameAnswerEntity extends GameEntity {

    private _will_answer_players: ClientSocket[] = [];
    protected answers: Answer[] = [];
    protected cur_answer: Answer = null;
    protected playerScores: game.PlayerScore[] = [];

    constructor() {
        super(2);
    }

    onUserReady() {
        //开启游戏，随机考题 发送考题
        for (let i = 0; i < this._players.length; i++) {
            this.playerScores[i] = new game.PlayerScore();
            this.playerScores[i].index = i;
            this.playerScores[i].score = 0;
        }

        let players = new game.PlayerScores();
        players.scores = this.playerScores
        this.SendData(-1, MSG.game_send_playerscores, players);

        this.generateQuestion();

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

        //答题人数
        this._will_answer_players = this._players.concat();
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
        let index = this._will_answer_players.indexOf(client);
        if (index != -1) {
            this._will_answer_players.splice(index, 1);
            if (this._will_answer_players.length == 0) {
                if (this.answers.length) {
                    this.cur_answer = this.answers.shift();
                    this.SendData(-1, MSG.game_send_question, {
                        id: this.cur_answer.id,
                        question: this.cur_answer.question,
                        selection: this.cur_answer.selection
                    });

                    this._will_answer_players = this._players.concat();
                }
                else {
                    let scores = this.playerScores.concat();
                    scores.sort((a, b) => {
                        return b.score - a.score;
                    })
                    //第一个是胜利的，第二个是失败的
                    for (let i = 0; i < scores.length; i++) {
                        if (i == 0) {
                            let game_result = new game.GameResult();
                            game_result.win = true;
                            game_result.gold = 100;  //获得100金币
                            
                            let cli = this._players[scores[i].index];
 
                            // try {
                            //     let user =  await User.findByPk(cli.mData.userid);
                            //     if (user){
                            //         user.increment("gold", {by:100})
                            //     } 
                            // }
                            // catch(err){
                            //     console.error(err)
                            // }
                 
                            this.SendData(cli.getIndex(), MSG.game_end_result, game_result);
                        }
                        else {

                            let game_result = new game.GameResult();
                            game_result.win = false;
                            game_result.gold = 10;  //获得100金币

                            let cli = this._players[scores[i].index];
    
                            // try {
                            //     let user =  await User.findByPk(cli.mData.userid);
                            //     if (user){
                            //         user.increment("gold", {by:10})
                            //     } 
                            // }
                            // catch(err){
                            //     console.error(err)
                            // }
                          
                            this.SendData(cli.getIndex(), MSG.game_end_result, game_result);
                        }
                    }

                    this.dismissGame();
                }
            }
            else {
                // console.log("等剩下的玩家回答")
            }
        }
        else {
            client.SendErrorInfo("您这个问题已经回答了，等其他玩家回答吧", 0)
        }

    }

    subUserAnswer(obj: any, client: ClientSocket) {
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
    }

    generateQuestion() {
        GameAnswer.sort((a, b) => {
            return .5 - Math.random();
        });

        this.answers = GameAnswer.concat();
    }



}