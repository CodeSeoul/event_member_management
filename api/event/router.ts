'use strict';

import KoaJoiRouter from 'koa-joi-router';
import Controller from './service';

const router = KoaJoiRouter();
// TODO: Setup filtering, constraints, etc
// const Joi = KoaJoiRouter.Joi;

router.prefix('/event');

router.route({
    path: '/',
    method: 'GET',
    handler: Controller.listEvents
});

export default router;
