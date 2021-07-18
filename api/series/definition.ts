'use strict';

import KoaJoiRouter from 'koa-joi-router';

const joi = KoaJoiRouter.Joi;

export interface SeriesSchema {
  name: string,
}
export const seriesSchema = joi.object({
  name: joi.string().max(64),
});

export interface SeriesWithIdSchema extends SeriesSchema {
  id: number,
}
export const seriesWithIdSchema = seriesSchema.keys({
  id: joi.number().integer(),
});

export interface SeriesListSchema {
  series: SeriesWithIdSchema[],
}
export const seriesListSchema = joi.object({
  series: joi.array().items(seriesWithIdSchema),
});
