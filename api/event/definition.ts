'use strict';

import KoaJoiRouter from 'koa-joi-router';
import { SeriesWithIdSchema, seriesWithIdSchema } from '../series/definition';
import { MemberWithIdSchema, memberWithIdSchema } from '../members/definition';

const joi = KoaJoiRouter.Joi;

export interface EventSchema {
  title: string,
  series?: SeriesWithIdSchema | number,
  members: MemberWithIdSchema[] | number[],
  description: string,
  startTimestamp?: Date,
  durationMinutes?: number,
  imageUrl?: string,
  venueId?: number,
  venue?: string,
  onlineLink?: string,
  createdAt?: Date,
  updatedAt?: Date,
}
export const eventSchema = joi.object({
  title: joi.string().max(64),
  series: seriesWithIdSchema.optional(),
  seriesId: joi.number().integer().optional(),
  members: joi.array().items(memberWithIdSchema, joi.number().integer()),
  description: joi.string(),
  startTimestamp: joi.date().allow(null).optional(),
  durationMinutes: joi.number().integer().allow(null).optional(),
  imageUrl: joi.string().max(255).allow(null).optional(),
  venueId: joi.number().integer().allow(null).optional(),
  venue: joi.string().allow(null).optional(),
  onlineLink: joi.string().allow(null).optional(),
  createdAt: joi.date().optional(),
  updatedAt: joi.date().optional(),
});

export interface EventWithIdSchema extends EventSchema {
  id: number,
}
export const eventWithIdSchema = eventSchema.keys({
  id: joi.number().integer(),
});

export interface EventListSchema {
  events: EventWithIdSchema[],
}
export const eventListSchema = joi.object({
  events: joi.array().items(eventWithIdSchema),
});
