'use strict';

import {Next} from "koa";
import {ContextWithLogger} from "../types";
import {getConnection} from "typeorm";

export default () => {
    return async (ctx: ContextWithLogger, next: Next) => {
        await getConnection().transaction(async transactionalEntityManager => {
            ctx.dbTransactionManager = transactionalEntityManager
            await next();
        });
    };
};