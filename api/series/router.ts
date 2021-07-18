'use strict';

import KoaJoiRouter from 'koa-joi-router';
import Service from './service';
import { seriesListSchema } from './definition';

const router = KoaJoiRouter();

router.prefix('/series');

router.route({
  meta: {
    swagger: {
      summary: 'List series',
      tags: ['series'],
    },
  },
  path: '/',
  method: 'GET',
  handler: Service.listSeries,
  validate: {
    output: {
      '200': {
        body: seriesListSchema,
        // ref: '#/definitions/SeriesList',
      },
    },
  },
});

export default router;
