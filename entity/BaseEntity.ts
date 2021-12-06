import { ClientSocket } from "../net/ClientSocket";
import { Timer } from "../net/Timer";

// 基础继承单位， 可以实现用户， 房间， 游戏桌子 
export abstract class BaseEntity {

    public mhandler : number = 0;
    private _timestart: number = 0;
    private static _handlerId: number = 0;
    public static maxTimer: number = 16;
    private mTimer : Timer = null;

    constructor(){
        this.mTimer = Timer.getInstance();
        this.mhandler = ++BaseEntity._handlerId;  
        if (BaseEntity._handlerId >= 0xFFFFFFF)
            BaseEntity._handlerId = 0;    
        this._timestart = this.mhandler * BaseEntity.maxTimer; 

        // this.mTimer.SetTimerCallBack(this._onTimer, this);
    }

    public enableTimer(enable:boolean = true){
        if (enable){
            if(this.mTimer.isTimerOpen(this.mhandler)){
                console.error("定时器已开启")
                debugger;
            }
            else {
                this.mTimer.SetTimerCallBack(this.onTimer,this);
            }
        }
        else{
            if (this.mTimer.isTimerOpen(this.mhandler)){
                this.mTimer.removeHandler(this.mhandler);
            }
        }
    }

    public getTimerStartId(){
        return this._timestart;
    }

    public killHandler(){
        this.mTimer.removeHandler(this.mhandler)
    }

    SetTimer(id: number, interval: number, repeat: number = 1) {
        if(this.mTimer.isTimerOpen(this.mhandler) == false)
        {
            this.enableTimer(true)
        }

        if (this.mTimer) {
            this.mTimer.setTimer(this._timestart + id, interval, repeat);
        }
    }

    public abstract onTimer(id: number);
   
    KillTimer(id: number) {
        if (this.mTimer) {
            this.mTimer.killTimer(this._timestart+id);
        }
    }

    // 客户端消息
    public abstract ClientMessage(msgid:number, obj:any , client:ClientSocket)
    // 客户端关闭消息
    public abstract ClientClose(client:ClientSocket);    
}