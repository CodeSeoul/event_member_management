'use strict';

import logger from './logger';
import {Context} from "koa";

export default (ctx: Context) => {
    ctx.log = logger;
}