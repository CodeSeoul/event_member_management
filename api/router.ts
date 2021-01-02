'use strict';

import KoaJoiRouter from 'koa-joi-router';

import EventRouter from './event/router';
import MembersRouter from './members/router';


const router = KoaJoiRouter();

router.routes.concat(EventRouter.routes, MembersRouter.routes);

export default router;
