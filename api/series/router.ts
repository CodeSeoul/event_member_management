'use strict';

import KoaJoiRouter from 'koa-joi-router';
import Controller from './service';

const router = KoaJoiRouter();
// TODO: this
// const Joi = KoaJoiRouter.Joi;

router.prefix('/series');

router.route({
    path: '/',
    method: 'GET',
    handler: Controller.listSeries
});

export default router;
