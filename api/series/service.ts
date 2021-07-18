'use strict';

import { ContextStandard } from '../types';
import SeriesModel from './model';
import { SeriesListSchema } from './definition';

export default class SeriesService {
  static async listSeries(ctx: ContextStandard): Promise<SeriesListSchema> {
    let modelList: SeriesModel[];
    try {
      modelList = await SeriesModel.find(ctx.dbTransactionManager);
    } catch (e) {
      ctx.log.error('Failed to get list of series models');
      throw e;
    }

    return (ctx.body = {
      series: modelList.map((model) => model.toJSON()),
    });
  }
}
