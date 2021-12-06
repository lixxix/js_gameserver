import { BaseEntity } from "../entity/BaseEntity";
import { MsgProcessHandler } from "./MsgProcessHandler";

export class Timer {

    private static _instance: Timer = null;
    private _handlers: { [key: number]: any } = {}
    private _removeids: any[] = [];
    private _old_time: number = Date.now();
    private _mapEntity: Map<number, Function> = new Map<number, Function>();

    constructor() {
        this._old_time = Date.now();
        setInterval(() => {
            let cur = Date.now();
            let delta = (cur - this._old_time) / 1000;
            this._old_time = cur;
            this.update(delta)
        }, 100);
    }

    public SetTimerCallBack(func: Function, target: BaseEntity) {
        this._mapEntity.set(target.mhandler, func.bind(target));
    }

    public isTimerOpen(id: number) {
        return this._mapEntity.has(id);
    }

    public removeHandler(id: number) {
        this._mapEntity.delete(id);
        for (let i = id * BaseEntity.maxTimer; i < id * BaseEntity.maxTimer + BaseEntity.maxTimer; i++) {
            if (this._handlers[i])
                this._handlers[i] = undefined;
        }
    }

    public static getInstance() {
        if (Timer._instance == null)
            Timer._instance = new Timer()
        return Timer._instance;
    }

    setTimer(id: number, interval: number, repeat: number = 1) {
        var handler_obj = { repeat: repeat, interval: interval, pass: interval }
        var handler = this._handlers[id];
        if (!handler) {
            handler = handler_obj;
            this._handlers[id] = handler;
        }
        else {
            console.error(`TimerId${id} is exists open failed`)
        }
    }

    killTimer(id: number) {
        var handler = this._handlers[id];
        if (handler) {
            delete this._handlers[id];
        }
    }

    update(dt: number) {
        for (let key in this._handlers) {
            let hanlder = this._handlers[key];
            if (hanlder) {
                hanlder.pass -= dt;
                if (hanlder.pass <= 0) {
                    hanlder.pass += hanlder.interval;

                    hanlder.repeat -= 1;
                    if (hanlder.repeat <= 0) {
                        this._removeids.push(key);
                    }
                    else{
                       let id = parseInt(key);
                        let hander = Math.floor(id / BaseEntity.maxTimer);
                        if (this._mapEntity.has(hander)) {
                            this._mapEntity.get(hander)(id - hander * BaseEntity.maxTimer);
                        }
                    }
                }
            }
        }

        this._removeids.forEach((id:any) => {
            delete this._handlers[id];
            id = parseInt(id);
            let hander = Math.floor(id / BaseEntity.maxTimer);
            if (this._mapEntity.has(hander)) {
                this._mapEntity.get(hander)(id - hander * BaseEntity.maxTimer);
            }
        });
        this._removeids.length = 0;
    }

}