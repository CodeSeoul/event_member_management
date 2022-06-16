'use strict';

import KoaJoiRouter from 'koa-joi-router';
import {EventWithId} from "../event/definition";

const Joi = KoaJoiRouter.Joi;

export const Member = Joi.object({
    firstName: Joi.string().max(64),
    lastName: Joi.string().max(64),
    imageUrl: Joi.string().allow(null).optional(),
    shortBio: Joi.string().allow(null).optional(),
    events: Joi.alternatives()
        .try(EventWithId, Joi.number().integer())
        .optional(),
});

export const MemberWithId = Member.keys({
    id: Joi.number().integer(),
});

export const MemberList = Joi.object({
    members: Joi.array().items(MemberWithId),
});
