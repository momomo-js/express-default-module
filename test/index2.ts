
import {MoServer} from "@mo/core";
import {ExpressServer} from "@mo/express";
import {ExpressDefaultPluginPackage} from "../index";

let server = new MoServer();
let express = new ExpressServer();
server.addServer(express);
express.addPlugin(new ExpressDefaultPluginPackage());
server.startSever();