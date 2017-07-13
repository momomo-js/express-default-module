import {ExpressMiddleware} from "@mo/express";
import {Plugin} from "@mo/core";
import * as logger from "morgan";
import * as bodyParser from "body-parser";
import * as cookies from "cookie-parser";
import * as session from "express-session";
import * as CORS from "cors";
import * as helmet from "helmet";
import {SessionOptions} from "express-session";
import {CorsOptions} from "cors";
import {IHelmetConfiguration} from "helmet";



export class ExpressDefaultPluginPackage {
    sessionOption: SessionOptions = {
        secret: 'NEXTION_DEFAULT_SESSION',
        cookie: {
            maxAge: 60000 * 20	//20 minutes
        },

        resave: true,
        saveUninitialized: true
    };

    corsOption: CorsOptions = null;

    helmetOption: IHelmetConfiguration = null;

    @Plugin(ExpressMiddleware)
    cors: Function = CORS(this.corsOption);

    @Plugin(ExpressMiddleware)
    helmet: Function = helmet(this.helmetOption);

    @Plugin(ExpressMiddleware)
    logger: Function = logger(process.env.NODE_ENV === 'production' ? 'common' : 'dev');


    @Plugin(ExpressMiddleware)
    bodyParser = bodyParser.json();

    @Plugin(ExpressMiddleware)
    bodyParserUrl = bodyParser.urlencoded({extended: false});

    @Plugin(ExpressMiddleware)
    cookies = cookies();

    @Plugin(ExpressMiddleware)
    session = session(this.sessionOption);

}

/**
 * Created by yskun on 2017/7/13.
 */
