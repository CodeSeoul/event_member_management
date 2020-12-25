'use strict';

import Koa from 'koa';

import logging from '@kasa/koa-logging';
import logger from './logger/logger';
import bodyParser from 'koa-bodyparser';
import EventRouter from './event/router';
import databaseMiddleware from './database/middleware';

// import swaggerUiPkg from 'koa2-swagger-ui';
// const { koaSwagger } = swaggerUiPkg;

const app = new Koa();
app.use(bodyParser());
app.use(logging({
    logger,
    overrideSerializers: false
}));
app.use(databaseMiddleware());
app.use(EventRouter.middleware());
// app.use(koaSwagger({
//     routePrefix: '/swagger',
//     swaggerOptions: {
//         // You'd want to change this in a real application
//         url: 'http://localhost:3000/_api.json'
//     }
// }));

app.listen(3000, () => {
    logger.info('Started on port 3000!');
});
