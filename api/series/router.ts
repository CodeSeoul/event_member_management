'use strict';

import KoaJoiRouter from 'koa-joi-router';
import Controller from './controller';

const router = KoaJoiRouter();
const Joi = KoaJoiRouter.Joi;

router.prefix('/series');

router.route({
  path: '/',
  method: 'GET',
  handler: Controller.listSeries,
});

export default router;
