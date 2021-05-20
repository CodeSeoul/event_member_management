'use strict';

import KoaJoiRouter from 'koa-joi-router';

const Joi = KoaJoiRouter.Joi;

export const Series = Joi.object({
  name: Joi.string().max(64),
});

export const SeriesWithId = Series.keys({
  id: Joi.number().integer(),
});

export const SeriesList = Joi.object({
  series: Joi.array().items(SeriesWithId),
});
