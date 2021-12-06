import * as WebSocket from "ws";
import { Message, MSG, ReadData as ReadData } from "../message/Message";
import { BaseEntity } from "../entity/BaseEntity";
import { MsgProcessHandler } from "./MsgProcessHandler";
import { RoomEntity } from "../entity/RoomEntity";
import { GameEntity } from "../entity/GameEntity";
import { game } from "../Proto.js/proto";
import { Timer } from "./Timer";
import { UserManager } from "./ClientManager";

export let IdleClients: Array<WebSocket> = [];

export class ClientSocket {
    mSocket: WebSocket = null;

    userid: number = 0;     //没有登陆 id-0

    location: number = 0;   //所在位置

    table: number = -1;
    chair: number = -1;

    private _index : number = -1;       //游戏中的位置

    mData: game.PlayerInfo = new game.PlayerInfo();

    private _room: RoomEntity = null;  //只能在一个房间

    private _game: GameEntity = null;  //如果游戏位置

    public mHandlers: MsgProcessHandler[] = [];

    mUserData: Map<string, any> = new Map<string, any>();


    setIndex(index:number){
        this._index = index;
    }

    getIndex(){
        return this._index;
    }

    constructor(socket: WebSocket) {
        this.mSocket = socket;
        // UserClients.set(1,this);
        //收到客户端消息
        this.mSocket.on("message", (data: Buffer) => {
            //解析消息-- 发送到负责处理的Handler
            let decode: ReadData = Message.ReadData(data);
            if (decode) {
                this.mHandlers.forEach(handler => {
                    handler.ProcessMessage(decode.msgid, decode.obj);
                });

                if (this._game) {
                    this._game.ClientMessage(decode.msgid, decode.obj, this);
                }
                if (this._room) {
                    this._room.ClientMessage(decode.msgid, decode.obj, this);
                }
            }
        });

        this.mSocket.on("close", (error: number, msg: string) => {
            console.log("close 客户端断开", error, msg);
            // Timer.getInstance().killTimerHandlers(this.mHandlers);
            if (this._game) {
                this._game.ClientClose(this);
            }
            if (this._room) {
                this._room.ClientClose(this);
            }
            UserManager.deleteClinet(this,this.userid);
        });

        this.mSocket.on("error", (error: number, msg: string) => {
            console.error("error", error, msg);

        });
    }

    enterRoom(room: RoomEntity) {
        this._room = room;
        this.location = room.getId();
    }
    leaveRoom(room: RoomEntity) {
        if (this._room == room) {
            this._room = null;
            this.location = 0;
        }
        else {
            debugger;
        }
    }

    enterGame(game: GameEntity) {
        this._game = game;
        // this.mData.index = 
        // 没用重连就无所谓
    }

    leaveGame(game: GameEntity) {
        if (this._game == game) {
            this._game = null;
        }
        else {
            console.error("game not ok")
            // debugger;
        }
    }

    RegisterHandler(handler: MsgProcessHandler) {
        this.mHandlers.push(handler);
    }

    UnRegisterHandler(handler: MsgProcessHandler) {
        let index = this.mHandlers.indexOf(handler);
        if (index != -1) {
            this.mHandlers.splice(index, 1);
        }
    }

    closeConnect() {
        if (this.mSocket) {
            // this.mSocket.del
            this.mSocket.close();
        }
    }

    SendData(msgid: number, obj: any = null) {
        let encode = Message.WriteData(msgid, obj);
        if (encode) {
            this.mSocket.send(encode);
        }
    }

    //给特定的集合发送消息
    SendDataToGroup(msgid: number, users: Map<number, ClientSocket>) {

    }
    //给特定的组合发送，不包含自己
    SendDataToGroupWithOutSelf(msgid: number, users: Map<number, ClientSocket>) {

    }


    SendErrorInfo(errorinfo: string, errorcode: number = 0) {
        this.SendData(MSG.error, {
            code: errorcode,
            message: errorinfo
        });
    }

    OnMessage(msgid: number, buffer: any) {

    }

    GetData(name: string): any {
        return this.mUserData.get(name);
    }

    SetData(name: string, data: any) {
        this.mUserData.set(name, data);
    }

    update(dt: number): void {
        this.mHandlers.forEach(handler => {
            handler.update(dt);
        })
    }
}
