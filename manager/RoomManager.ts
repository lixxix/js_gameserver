import { BaseManager } from "./BaseManager";
import * as fs from "fs";
import * as path from "path";
import { RoomEntity } from "../entity/RoomEntity";
import { AnswerRoom } from "../entity/room/AnswerRoom";

export class RoomManager extends BaseManager
{
    static _instance : RoomManager = null;

    private _rooms : RoomEntity[] = [];
    constructor(config_path:string)
    {
        super()
        RoomManager._instance = this;
        let room_config = fs.readFileSync(config_path, {
            flag:"r", encoding:"utf-8"
        });

        let config_data = JSON.parse(room_config);
        if (config_data)
        {
            if (config_data.room){
                if (config_data.room instanceof Array){
                    config_data.room.forEach( (item:any) => {
                        let room = new AnswerRoom(item.id,item.player);
                        this._rooms.push(room);
                    });
                    console.log("房间已开启")
                }
                else{
                    console.error("应该保存成数组的形式，测试阶段")
                }
            }
        }
    }

    public static getRoomById(id:number):RoomEntity{
        let rooms = this._instance._rooms.filter( room => room.getId()==id);
        if (rooms.length > 0){
            return rooms[0];
        }
        return null;
    }
}

new RoomManager(path.join(__dirname, "../config/room.json"));