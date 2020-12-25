'use strict';

import {Next} from "koa";
import DatabaseWrapper from './wrapper';
import {ContextWithLogger} from "../types";

export default () => {
    return async (ctx: ContextWithLogger, next: Next) => {
        try {
            ctx.db = await DatabaseWrapper.getInstance().getConnection();
        } catch (e) {
            ctx.log.error('Failed to get database connection');
            throw e;
        }

        try {
            await ctx.db.startTransaction();
        } catch (e) {
            ctx.log.error('Failed to start database transaction');
            throw e;
        }

        try {
            await next();
        } catch (e) {
            await ctx.db.rollback();
            ctx.db.release();
            throw e;
        }

        try {
            await ctx.db.commit();
        } catch (e) {
            ctx.log.error('Failed to commit database transaction');
            throw e;
        }
        ctx.db.release();
    };
}
