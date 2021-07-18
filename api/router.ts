'use strict';

import KoaJoiRouter from 'koa-joi-router';
import { SwaggerAPI } from 'koa-joi-router-docs';

import EventRouter from './event/router';
import MembersRouter from './members/router';
import SeriesRouter from './series/router';
import { swaggerSpecConfig } from './swagger/config';

const router = KoaJoiRouter();

router.use('', MembersRouter.router.routes());
router.use('', EventRouter.router.routes());
router.use('', SeriesRouter.router.routes());

const generator = new SwaggerAPI();
generator.addJoiRouter(EventRouter);
generator.addJoiRouter(SeriesRouter);
generator.addJoiRouter(MembersRouter);
const spec = generator.generateSpec(swaggerSpecConfig);

router.get('/docs/spec.json', (ctx) => {
  ctx.body = JSON.stringify(spec, null, ' ');
});

/*
 * Note that koa-joi-router-docs is using an outdated version of Joi.
 * Upgrading to the latest version (7.0.0) causes a version mismatch error.
 * Please occasionally check if koi-joi-router-docs is updated.
 * Or if you're feeling motivated, submit a PR to update it.
 */
export default router;
