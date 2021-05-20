'use strict';

import 'reflect-metadata';
import { ContextWithLoggerDb } from '../types';
import EventModel from './model';

export default class EventService {
  static async listEvents(ctx: ContextWithLoggerDb) {
    let modelList: EventModel[];
    try {
      modelList = await EventModel.find(ctx.dbTransactionManager);
    } catch (e) {
      ctx.log.error('Failed to get list of event models');
      throw e;
    }

    return (ctx.body = {
      events: modelList.map((model) => model.toJSON()),
    });
  }
}
