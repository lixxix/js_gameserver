import { MSG } from "../message/Message";
import { ClientSocket } from "../net/ClientSocket";
import { BaseEntity } from "./BaseEntity";
import { GameEntity } from "./GameEntity";

//游戏采用即时分配制度，有需要的时候进行分配，玩完就直接结束游戏。
export class RoomEntity extends BaseEntity {
    public onTimer(id: number) {
        // throw new Error("Method not implemented.");
    }

    _gameEntitys: Map<number, GameEntity> = new Map<number, GameEntity>();

    _clients: ClientSocket[] = [];   //存在用户

    _playingClients: ClientSocket[] = []; //游戏中用户

    _matchQueue: ClientSocket[] = [];

    protected game_players : number = 0; //游戏人数
    private _id: number = 1;
    //装载的是游戏entity -- 很多个
    constructor(id: number, game_player_cnt: number) {
        super();
        this._id = id;
        this.game_players = game_player_cnt;
    }

    getId() {
        return this._id;
    }

    getInfo(){
        let str = `房间id:${this._id} 房间在线:${this._clients.length} 游戏局数:${GameEntity.getCurrentId()} 游玩游戏:${this._gameEntitys.size}组`
        return str;
    }

    dismissGame(id:number){
        // let dismissid = this._gameEntitys.filter
        let game = this._gameEntitys.get(id)
        if (game){
            this._gameEntitys.delete(id)
        }
        else{
            debugger;
        }
    }

    enterRoom(client: ClientSocket) {
        if (client.location == 0) {
            //用户进入的时候将用户位置标志到此房间
            client.enterRoom(this);
            this._clients.push(client);

            //客户端收到消息可以进行切换界面啥的
            client.SendData(MSG.enter_game_success, { gameid: this._id });
        }
        else {
            console.error(`用户异常${client.userid}，所在房间${client.location} 当前：${client.location}`);
            //不加入进去，相当于用户并没有进入房间管理
        }
    }

    leaveRoom(client: ClientSocket) {
        let index = this._clients.indexOf(client);
        if (index != -1) {
            this._clients.splice(index, 1);
            client.leaveRoom(this);
        }
        else {
            debugger;
            console.error(`${client.userid}并不在此房间！`);
        }
        index = this._matchQueue.indexOf(client)
        if (index != -1){
            this._matchQueue.splice(index,1)
            console.log("从排队中删除")
        }
    }

    //房间消息，包含了对应的信息和来自哪个用户的标识
    public ClientMessage(msgid: number, obj: any, client: ClientSocket) {
        switch (msgid) {
            case MSG.game_matching:
                return this.subGameMatch(obj.matching, client);
        }
    }

    public ClientClose(client: ClientSocket) {
        // console.log("客户端关闭")
        this.leaveRoom(client);
    }

    private subGameMatch(matching: boolean, client: ClientSocket) {
        if (matching) {
            let index = this._matchQueue.indexOf(client);
            if (index != -1) {
                client.SendErrorInfo("您已经在匹配中了", 0);
            }
            else {
                this._matchQueue.push(client);
                client.SendData(MSG.game_matching, { matching });
            }
        }
        else {
            let index = this._matchQueue.indexOf(client);
            if (index == -1) {
                client.SendErrorInfo("您当前未进入匹配", 0);
            }
            else {
                this._matchQueue.splice(index, 1);
                client.SendData(MSG.game_matching, { matching })
            }
        }

        // 判断是否符合开启的条件
        if (this._matchQueue.length >= this.game_players) {
            let game_users = []
            for (let i = 0; i < this.game_players; i++) {
                game_users.push(this._matchQueue.shift())
            }
            let game = this.userMatchReady(game_users);
            if (game){
                this._gameEntitys.set(game.getId(), game);
                game.setPlayers(game_users);
                game.setRoom(this)
            }
            
            // //创建一个游戏，让用户坐下
            // let game = new GameEntity(this.game_players);
            // // 将用户带入到游戏

        }
    }

    //用户已经匹配完成，由派生类进行处理
    protected userMatchReady(players : ClientSocket[]):GameEntity
    {
        return null;
    }

    applyGame() {

    }
}