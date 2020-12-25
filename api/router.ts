'use strict';

import KoaJoiRouter from 'koa-joi-router';

import EventRouter from './event/router';

const router = KoaJoiRouter();

router.routes.concat(EventRouter.routes);

export default router;
