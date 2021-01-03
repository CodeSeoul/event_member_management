'use strict';

import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logging from '@kasa/koa-logging';
import { koaSwagger } from 'koa2-swagger-ui';

import logger from './logger/logger';
import databaseMiddleware from './database/middleware';
import { swaggerUiConfig } from './swagger/config';
import router from './router';

const app = new Koa();
app.use(bodyParser());
app.use(
  logging({
    logger,
    overrideSerializers: false,
  })
);
app.use(databaseMiddleware());
app.use(router.middleware());
app.use(koaSwagger(swaggerUiConfig));

export = app;
