import * as WebSocket from "ws";
import { AccountHandler } from "./handler/AccountHandler";
import { ClientSocket } from "./net/ClientSocket";
import { InitGameData } from "./data/GameData";

import express from "express";
import cors from "cors";
import { UserManager } from "./net/ClientManager";
import { RoomManager } from "./manager/RoomManager";
import { initTable } from "./models/associate";

initTable()
InitGameData();


let app = express();
app.use(cors())
app.listen(80);

app.get("/", (req,res)=>{
    let online_str = `在线用户:${UserManager.getOnline()},闲置:${UserManager.getIdleCount()}\n`
    let room = RoomManager.getRoomById(1);
    online_str += room.getInfo()
    res.send(online_str)
});


export let wss: WebSocket.Server = new WebSocket.Server({ port: 8080 });
wss.addListener("connection", (client: WebSocket) => {
    let pclient = new ClientSocket(client);
    UserManager.pushIdle(pclient);
    new AccountHandler(pclient);
});

// 房间应该是另一个链接由服务器开启，用户登陆到房间，房间开启~  这样这里负责通信，用户数登陆
wss.addListener("error", (err: Error) => {
    console.log(err);
});

wss.addListener("close", (client: WebSocket) => {
    console.log("close");
});
