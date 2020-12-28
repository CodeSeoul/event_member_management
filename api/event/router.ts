'use strict';

import KoaJoiRouter from 'koa-joi-router';
import Service from './service';

const router = KoaJoiRouter();
// TODO: Setup filtering, constraints, etc
// const Joi = KoaJoiRouter.Joi;

router.prefix('/event');

router.route({
    path: '/',
    method: 'GET',
    handler: Service.listEvents
});

export default router;
