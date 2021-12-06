import { ClientSocket } from "./ClientSocket";
export class UserManager {
    static _instance: UserManager = null;

    private _idleClients: Array<ClientSocket> = [];
    private _userClients: Map<number, ClientSocket> = new Map<number, ClientSocket>();

    constructor() {
        UserManager._instance = this;
    }

    public static getClient(userid: number) {
        return this._instance._userClients.get(userid);
    }

    public static getOnline(): number {
        return this._instance._userClients.size;
    }

    public static getIdleCount(): number {
        return this._instance._idleClients.length;
    }

    public static activeClient(userid: number, client: ClientSocket) {
        let user = this.getClient(userid);
        if (user) {
            user.SendErrorInfo("您的账号已在另一个地方进行登陆!", 1);
            //此时这个人已经被挤掉了，重复登陆
            user.closeConnect();
            user = null;
        }
        this._instance._userClients.set(userid, client);
        let index = this._instance._idleClients.indexOf(client);
        if (index != -1) {
            this._instance._idleClients.splice(index, 1);
        }
    }

    public static deleteClinet(client: ClientSocket, userid: number = 0) {
        if (userid != 0) {
            this._instance._userClients.delete(userid);
        }
        else {
            let index = this._instance._idleClients.indexOf(client);
            if (index != -1)
                this._instance._idleClients.splice(index, 1)
        }
    }

    public static pushIdle(client: ClientSocket) {
        if (this._instance._idleClients.indexOf(client) == -1)
            this._instance._idleClients.push(client);
        else {
            console.error("idle client already pushed");
        }
    }
}

new UserManager();
