'use strict';

import Koa from 'koa';

import logging from '@kasa/koa-logging';
import logger from './logger/logger';
import bodyParser from 'koa-bodyparser';
import {createConnection} from "typeorm";
import {koaSwagger} from 'koa2-swagger-ui';

import router from './router';
import databaseMiddleware from './database/middleware';
import databaseConfig from './database/config';
import {swaggerUiConfig} from './swagger/config';

createConnection(databaseConfig).then(() => {
    const app = new Koa();
    app.use(bodyParser());
    app.use(logging({
        logger,
        overrideSerializers: false
    }));
    app.use(databaseMiddleware());
    app.use(router.middleware());
    app.use(koaSwagger(swaggerUiConfig));

    app.listen(3000, () => {
        logger.info('Started on port 3000!');
    });
}).catch(error => logger.error(error));

