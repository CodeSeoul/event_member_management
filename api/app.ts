'use strict';

import Koa from "koa";
import bodyParser from "koa-bodyparser";
import logging from '@kasa/koa-logging';

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

// app.use(koaSwagger({
//     routePrefix: '/swagger',
//     swaggerOptions: {
//         // You'd want to change this in a real application
//         url: 'http://localhost:3000/_api.json'
//     }
// }));

export = app;
