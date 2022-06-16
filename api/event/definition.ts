'use strict';

import KoaJoiRouter from 'koa-joi-router';
import { SeriesWithId } from '../series/definition';

const Joi = KoaJoiRouter.Joi;

export const Event = Joi.object({
  title: Joi.string().max(64),
  series: Joi.alternatives()
    .try(SeriesWithId, Joi.number().integer())
    .optional(),
  members: Joi.array().items(),
  description: Joi.string(),
  startTimestamp: Joi.date().allow(null).optional(),
  durationMinutes: Joi.number().integer().allow(null).optional(),
  imageUrl: Joi.string().max(255).allow(null).optional(),
  venueId: Joi.number().integer().allow(null).optional(),
  venue: Joi.string().allow(null).optional(),
  onlineLink: Joi.string().allow(null).optional(),
});

export const EventWithId = Event.keys({
  id: Joi.number().integer(),
});

export const EventList = Joi.object({
  events: Joi.array().items(EventWithId),
});
