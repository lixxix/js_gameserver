import { RoomManager } from "../manager/RoomManager";
import { MSG } from "../message/Message";
import { User } from "../models/User";
import { UserManager } from "../net/ClientManager";
import { ClientSocket } from "../net/ClientSocket";
import { MsgProcessHandler } from "../net/MsgProcessHandler";

export class AccountHandler extends MsgProcessHandler {

    constructor(pclient: ClientSocket){
        super(pclient);
    }

    public async ProcessMessage(msgid: number, obj: any) {
        switch (msgid) {
            case MSG.login:
            {
                let {name ,pwd} = obj;
                console.log(name, pwd)
                try {
                    let result = await User.findOrCreate({
                        where:{
                            account: name,
                            password: pwd
                        }
                    });
                    if (result)
                    {
                        let isNeed = result[1]
                        let userData = result[0]
                        if (isNeed){
                            console.log("新人用户",userData.account)
                        }

                        let data = {
                            name: userData.account,
                            id : userData.id,
                            gold :userData.gold
                        }
                        this.mclient.userid = userData.id;
                        UserManager.activeClient(userData.id,this.mclient);
                        this.mclient.mData.gold = userData.gold;
                        this.mclient.mData.userid = userData.id;
                        this.mclient.mData.index = 0;
                        this.mclient.mData.nickname = userData.account;    
                        this.mclient.SendData(MSG.login_success, data);
                    }
                    else{
                        this.mclient.SendErrorInfo("没有注册这个账号！", 1);
                        return this.subUserLogin(obj);
                    }            
                }
                catch(err){
                    //或者发送错误信息
                    console.log(err)
                    // retry 
                    
                    return null;
                }
            }break;
            case MSG.enter_game:
                return this.subEnterGame(obj);
        }
    }

    private subUserLogin({ name, pwd }) {
        console.log(name, pwd)
    }

    private subEnterGame({gameid})
    {
        //选择游戏id-- 进入对应的游戏房间  -- 房间会自动匹配用户给玩家进行游戏，也会匹配机器人
        let room = RoomManager.getRoomById(gameid)
        if (room){
            room.enterRoom(this.mclient);
        }
        else{
            this.SendErrorInfo("当前房间未开启");
        }
    }

    // private onUserRegi
}