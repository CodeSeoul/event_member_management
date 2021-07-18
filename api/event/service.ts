'use strict';

import 'reflect-metadata';
import { ContextStandard } from '../types';
import EventModel from './model';
import { EventListSchema, EventSchema, EventWithIdSchema } from './definition';

export default class EventService {
  static async listEvents(ctx: ContextStandard): Promise<EventListSchema> {
    let modelList: EventModel[];
    try {
      modelList = await EventModel.find(ctx.dbTransactionManager);
    } catch (e) {
      ctx.log.error('Failed to get list of event models');
      throw e;
    }

    return (ctx.body = {
      events: await Promise.all(
        modelList.map(
          async (model) => await model.toJSON(ctx.dbTransactionManager)
        )
      ),
    });
  }

  static async createEvent(ctx: ContextStandard): Promise<EventWithIdSchema> {
    const requestBody = (ctx.request.body as unknown) as EventSchema;
    let event = ctx.dbTransactionManager.create(EventModel, requestBody as EventModel);
    try {
      event = await event.save(ctx.dbTransactionManager);
    } catch (e) {
      ctx.log.error('Failed to write event to database');
      throw e;
    }

    return (ctx.body = await event.toJSON(ctx.dbTransactionManager));
  }
}
