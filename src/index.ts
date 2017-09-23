import {ExpressMiddleware, ExpressServer} from '@mo/express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as cookies from 'cookie-parser';
import * as session from 'express-session';
import {SessionOptions} from 'express-session';
import * as helmet from 'helmet';
import {IHelmetConfiguration} from 'helmet';
import {MoonOption, Plugin, PluginPackage} from '@mo/core';
import * as e from 'express';

@PluginPackage(ExpressServer)
export class ExpressDefaultPluginPackage {

    @MoonOption('session-option')
    sessionOption: SessionOptions = {
        secret: 'NEXTION_DEFAULT_SESSION',
        cookie: {
            maxAge: 60000 * 20	// 20 minutes
        },

        resave: true,
        saveUninitialized: true
    };
    @Plugin(ExpressMiddleware)
    session = session(this.sessionOption);
    helmetOption: IHelmetConfiguration = {};
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
}

/**
 * Created by yskun on 2017/7/13.
 */
