'use strict';

import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logging from '@kasa/koa-logging';
import { koaSwagger } from 'koa2-swagger-ui';
import { swaggerUiConfig } from './swagger/config';
import router from './router';
import logger from "./logger/logger";
import databaseMiddleware from "./database/middleware";
import EventRouter from "./event/router";
import SeriesRouter from "./series/router";
import MembersRouter from "./members/router";


const app = new Koa();
app.use(bodyParser());
app.use(logging({
    logger,
    overrideSerializers: false
}));
app.use(databaseMiddleware());
app.use(EventRouter.middleware());
app.use(SeriesRouter.middleware());
app.use(MembersRouter.middleware());
app.use(router.middleware());
app.use(koaSwagger(swaggerUiConfig));

export = app;
