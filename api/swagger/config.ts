'use strict';

import { version } from '../version.json';
import { seriesSchema, seriesListSchema, seriesWithIdSchema } from '../series/definition';
import { eventSchema, eventListSchema, eventWithIdSchema } from '../event/definition';
import { memberSchema, memberListSchema, memberWithIdSchema } from '../members/definition';

export const swaggerUiConfig = {
  title: 'SNS Event API Swagger Console',
  swaggerOptions: {
    url: '/docs/spec.json',
  },
  routePrefix: '/docs',
  exposeSpec: false,
  hideTopbar: true,
  favicon: 'favicon.png',
};

export const swaggerSpecConfig = {
  info: {
    title: 'SNS Event API',
    description: 'API for managing events and members',
    version,
  },
  basePath: '/',
  tags: [
    {
      name: 'event',
      description:
        'An Event represents an online or offline event for members to attend',
    },
    {
      name: 'series',
      description:
        'A Series represents a collection of events that are related in some manner. An event can only belong to one series.',
    },
  ],
  definitions: {
    series: seriesSchema,
    seriesWithId: seriesWithIdSchema,
    seriesList: seriesListSchema,
    event: eventSchema,
    eventWithId: eventWithIdSchema,
    eventList: eventListSchema,
    memeber: memberSchema,
    memberWithId: memberWithIdSchema,
    memberList: memberListSchema,
  },
};
