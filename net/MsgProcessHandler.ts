import { ClientSocket } from "../net/ClientSocket";
import { Timer } from "./Timer";

export class MsgProcessHandler {
    protected mclient: ClientSocket = null;
    protected mTimer: Timer = null;
 
    constructor(pclient: ClientSocket) {
        this.mTimer = Timer.getInstance();
        this.mclient = pclient;
        if (this.mclient)
            this.mclient.RegisterHandler(this);
        // this._handler = ++MsgProcessHandler._handlerId;
        // if (MsgProcessHandler._handlerId >= 0xFFFFFFF)
        //     MsgProcessHandler._handlerId = 0;
        // console.error(this._handler)
        // this._timestart = this._handler * MsgProcessHandler._maxTimer;
    }

    // public getTimerStartId(){
    //     return this._timestart;
    // }

    public ProcessMessage(msgid: number, obj: any) {
        console.error("un rewrite ProcessMessage")
    }

    SendErrorInfo(msg: string) {
        if (this.mclient) {
            this.mclient.SendErrorInfo(msg, 0);
        }
    }

    SendData(msgid: number, obj: any) {
        if (this.mclient) {
            this.mclient.SendData(msgid, obj);
        }
        else {
            console.error("绑定socket是问题的")
        }
    }

    // SetTimer(id: number, interval: number, func: Function, repeat: number = 1) {
    //     if (this.mTimer) {
    //         this.mTimer.setTimer(this._timestart + id, func, this, interval, repeat);
    //     }
    // }

    // KillTimer(id: number) {
    //     if (this.mTimer) {
    //         this.mTimer.killTimer(this._timestart+id);
    //     }
    // }


    public update(dt: number) {
        // console.log(dt);
    }
}