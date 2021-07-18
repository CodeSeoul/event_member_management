'use strict';

import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-pino-logger';
import { koaSwagger } from 'koa2-swagger-ui';

import { swaggerUiConfig } from './swagger/config';
import router from './router';
import databaseMiddleware from "./database/middleware";


const app = new Koa();
app.use(bodyParser());
app.use(logger());
app.use(databaseMiddleware());

app.use(router.middleware());
app.use(koaSwagger(swaggerUiConfig));

export default app;
