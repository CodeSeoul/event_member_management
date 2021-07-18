'use strict';

import KoaJoiRouter from 'koa-joi-router';

const joi = KoaJoiRouter.Joi;

export interface MemberSchema {
  firstName: string,
  lastName: string,
  imageUrl: string,
  shortBio: string,
  createdAt?: Date,
  updatedAt?: Date,
}
export const memberSchema = joi.object({
  firstName: joi.string(),
  lastName: joi.string(),
  imageUrl: joi.string(),
  shortBio: joi.string(),
  // TODO: fix circular dependency issue when referencing events
  // events: joi.array().items(EventWithId, joi.number().integer()),
  createdAt: joi.date().optional(),
  updatedAt: joi.date().optional(),
});

export interface MemberWithIdSchema extends MemberSchema {
  id: number,
}
export const memberWithIdSchema = memberSchema.keys({
  id: joi.number().integer(),
});

export interface MemberListSchema {
  members: MemberWithIdSchema[],
}
export const memberListSchema = joi.object({
  members: joi.array().items(memberWithIdSchema),
});
