import { MSG } from "../message/Message";
import { ClientSocket } from "../net/ClientSocket";
import { BaseEntity } from "./BaseEntity";
import { RoomEntity } from "./RoomEntity";

export class GameEntity extends BaseEntity {
    
    public ClientClose(client: ClientSocket) {
        // throw new Error("Method not implemented.");
        let index = this._players.indexOf(client);
        if (index != -1)
        {
            this._players.splice(index,1);
            this.dismissGame();
        }   
        else{
            debugger;
        }
    }

    protected _playerCount: number = 0;
    protected _players: ClientSocket[] = [];

    private _ready_user: ClientSocket[] = [];

    private static _gameid: number = 0;

    private _roomEntity: RoomEntity = null;

    private _Id: number = 0;

    public static getCurrentId(){
        return GameEntity._gameid;
    }

    public static createId() {
        return ++GameEntity._gameid
    }

    public getId(): number {
        return this._Id;
    }

    
    public setRoom(room: RoomEntity) {
        this._roomEntity = room;
    }

    public onTimer(id: number){

    }

    constructor(players: number) {
        super();

        this._Id = GameEntity.createId();
        this._playerCount = players;

        for (let i = 0; i < this._playerCount; i++) {
            this._players[i] = null;
        }
    }

    setPlayers(players: ClientSocket[]) {
        if (players.length < this._playerCount) {
            console.error("游戏无法开始，由于人物不足")
        }
        let data = [];
        for (let i = 0; i < this._playerCount; i++) {
            this._players[i] = players[i];
            this._players[i].enterGame(this);
            players[i].mData.index = i;
            data.push(players[i].mData);
            this._players[i].setIndex(i);
        }
        this.SendData(-1, MSG.game_playerinfos, {player:data});
        // 用户进入游戏，确定游戏开始由服务器还是客户端发起 
        this._ready_user.length = 0;
        this._ready_user = this._players.concat();
    }

    //
    public onUserReady(){

    }
    
    dismissGame(){
        // 将用户解散吧，游戏结束了.
        this._players.forEach(player => {
            player.leaveGame(this);
            player.setIndex(-1);
        })
        this.SendData(-1, MSG.game_dismiss,null);
        this._roomEntity.dismissGame(this._Id);
        this.killHandler();
    }

    //发送数据，index是第几个未知的角色 如果index=-1 则发给这个游戏的所有用户
    SendData(index: number, msgid: number, obj: any) {
        if (index == -1) {
            for (let i = 0; i < this._playerCount; i++) {
                if (this._players[i]) {
                    this._players[i].SendData(msgid, obj)
                }
            }
        }
        else {
            if (this._players[index]) {
                this._players[index].SendData(msgid, obj);
            }
        }
    }

    private subUserReady(client:ClientSocket){
        if (client){
            let index = this._ready_user.indexOf(client);
            if (index != -1){
                this._ready_user.splice(index,1)
                // 如果所有玩家都已经准备了，可以开始游戏
            }
            
            if (this._ready_user.length == 0)
            {
                this.onUserReady();
            }
        }
    }

    public GameMessage(msgid:number, obj:any , client :ClientSocket)
    {
        
    }

    public ClientMessage(msgid: number, obj: any, client: ClientSocket) {
        switch(msgid){
            case MSG.game_user_ready:
                return this.subUserReady(client);
            default:
                return this.GameMessage(msgid,obj,client)
        }
    }

}