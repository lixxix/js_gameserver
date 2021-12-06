import { ClientSocket } from "../../net/ClientSocket";
import { GameAnswerEntity } from "../game/GameAnswerEntity";
import { GameAnswerSingle } from "../game/GameAnswerSingle";
import { GameEntity } from "../GameEntity";
import { RoomEntity } from "../RoomEntity";


const Timer_Board : number = 1;
export class AnswerRoom extends RoomEntity {

    mCreation: Map<number, any> = new Map<number, any>();

    constructor(id:number, game_player_cnt: number){
        super(id, game_player_cnt);
        // this.SetTimer(Timer_Board,5,0xFFFFFFF)
    }

    onTimer(id:number){
        // console.error(id,"timers")
    }

    createGameEntity(players:ClientSocket[]):GameEntity{
        if (players.length == 1)
        {
            let game = new GameAnswerSingle();
            return game;
        }
        else if (players.length == 2)
        {
            return new GameAnswerEntity();
        }
        return null;
    }

    //用户已经匹配完成，由派生类进行处理
    protected userMatchReady(players : ClientSocket[]):GameEntity
    {
        return this.createGameEntity(players);
    }
}