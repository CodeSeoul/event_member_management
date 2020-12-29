'use strict';

import KoaJoiRouter from 'koa-joi-router';
import Service from './service';

const router = KoaJoiRouter();
// TODO: this
// const Joi = KoaJoiRouter.Joi;

router.prefix('/series');

router.route({
    path: '/',
    method: 'GET',
    handler: Service.listSeries
});

export default router;
