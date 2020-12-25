import {Context} from "koa";
import P from "pino";
import DatabaseConnection from "./database/connection";

declare interface ContextWithLogger extends Context {
    log: P.Logger
}

declare interface ContextWithLoggerDb extends ContextWithLogger {
    db: DatabaseConnection;
}
