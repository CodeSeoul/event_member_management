'use strict';

import KoaJoiRouter from 'koa-joi-router';
import Service from './service';
import { eventSchema, eventListSchema, eventWithIdSchema } from './definition';

const router = KoaJoiRouter();

router.prefix('/event');

router.route({
  meta: {
    swagger: {
      summary: 'List events',
      tags: ['event'],
    },
  },
  path: '/',
  method: 'GET',
  handler: Service.listEvents,
  validate: {
    output: {
      200: {
        body: eventListSchema,
        // ref: '#/definitions/EventList',
      },
    },
  },
});

router.route({
  meta: {
    swagger: {
      summary: 'Create event',
      tags: ['event'],
    },
  },
  path: '/',
  method: 'POST',
  handler: Service.createEvent,
  validate: {
    type: 'json',
    body: eventSchema,
    output: {
      200: {
        body: eventWithIdSchema,
        // ref: '#/definitions/EventWithId',
      },
    },
  },
});

export default router;
