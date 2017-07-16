/// <reference types="express-session" />
/// <reference types="cors" />
/// <reference types="helmet" />
/// <reference types="express" />
import * as e from 'express';
import { SessionOptions } from "express-session";
import { CorsOptions } from "cors";
import { IHelmetConfiguration } from "helmet";
export declare class ExpressDefaultPluginPackage {
    sessionOption: SessionOptions;
    corsOption: CorsOptions;
    helmetOption: IHelmetConfiguration;
    cors: Function;
    helmet: Function;
    logger: Function;
    bodyParser: e.RequestHandler;
    bodyParserUrl: e.RequestHandler;
    cookies: e.RequestHandler;
    session: e.RequestHandler;
}
