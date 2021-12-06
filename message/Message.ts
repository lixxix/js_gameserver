import { user } from "../Proto.js/proto.js";
import * as $protobuf from "protobufjs";
import { game } from "../Proto.js/proto.js";

export enum MSG {
    login = 1,
    login_success,

    enter_game,
    enter_game_success,

    game_matching,  //游戏匹配
    game_match_cancel, //取消匹配

    game_playerinfos,  //用户来到位置上进行和其他玩家一起游戏

    game_user_ready,  //用户准备好了， 就是进入了游戏 

    game_send_question,  //发送题目

    game_send_playerscore,  //发送积分

    game_send_playerscores,  //全部分数一般是开始游戏的时候

    game_user_answer,   //解答

    game_answer_result,     //答题回复

    game_next_question,     //客户端请求

    game_end_result,
    
    game_dismiss,

    error
};

type Proto<T> = {

    create(properties?: any): T;

    encode(message: any, writer?: $protobuf.Writer): $protobuf.Writer;

    encodeDelimited(message: any, writer?: $protobuf.Writer): $protobuf.Writer;

    decode(reader: ($protobuf.Reader | Uint8Array), length?: number): T;

    decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): T;

    verify(message: { [k: string]: any }): (string | null);

    fromObject(object: { [k: string]: any }): T;

    toObject(message: T, options?: $protobuf.IConversionOptions): { [k: string]: any };

    prototype: {
        toJSON(): { [k: string]: any };
    }
}

export class ReadData {
    msgid: number;
    obj: Object;
    constructor(msg, obj) {
        this.msgid = msg;
        this.obj = obj;
    }
}

export class MessageProto {
    map: Map<MSG, Proto<any>> = null!;
    constructor() {
        this.map = new Map<MSG, Proto<any>>();
        // 在这里注册消息解析
        this.map.set(MSG.login, user.Login)
        this.map.set(MSG.login_success, user.LoginSuccess);
        this.map.set(MSG.enter_game, user.EnterGame);
        this.map.set(MSG.enter_game_success, user.EnterGame);

        this.map.set(MSG.game_matching, game.GameMatching)
        this.map.set(MSG.error, user.ErrorInfo)

        this.map.set(MSG.game_playerinfos, game.PlayerInfos);
        this.map.set(MSG.game_send_question, game.QuestionData);
        this.map.set(MSG.game_user_answer, game.QuestionAnswer);
        this.map.set(MSG.game_answer_result, game.QuestionResult);

        this.map.set(MSG.game_end_result, game.GameResult)

        this.map.set(MSG.game_send_playerscore, game.PlayerScore);
        this.map.set(MSG.game_send_playerscores, game.PlayerScores);

    }

    public ReadData(buffer: ArrayBuffer): ReadData {
        if (buffer.byteLength < 2)
            return null;

        let temp_buffer: Uint8Array = new Uint8Array(buffer);
        let dataview: DataView = new DataView(temp_buffer.buffer);
        let msgid = dataview.getUint16(0);
        // console.log("recevice",msgid)
        let proto = this.map.get(msgid);
        if (proto) {
            let analysis_data = new Uint8Array(buffer, 2);
            let encode = proto.decode(analysis_data);
            return new ReadData(msgid, proto.toObject(encode));
        }
        else {
            return new ReadData(msgid, null);
        }
    }

    public WriteData(msgid: number, data: Object = null): any {
        if (data) {
            let proto = this.map.get(msgid);
            if (proto) {
                // console.log(data)
                let dd = proto.create(data);
                let encode = proto.encode(dd).finish();
                let buf = new Uint8Array(2 + encode.length);
                let dv = new DataView(buf.buffer);
                dv.setUint16(0, msgid);
                buf.set(encode, 2);
                return buf;
            }
            else {
                console.error(`写入消息 没有对应的消息${msgid}`)
                return null;
            }
        }
        else {
            let buf = new Uint8Array(2)
            let dv = new DataView(buf.buffer);
            dv.setUint16(0, msgid);
            return buf;
        }
    }
}

export const Message: MessageProto = new MessageProto();