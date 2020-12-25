'use strict';

import {ContextWithLoggerDb} from "../types";
import EventModel from "./model";

export default class EventController {
    static async listEvents(ctx: ContextWithLoggerDb) {
        let modelList;
        try {
            modelList = await EventModel.getList(ctx.db);
        } catch (e) {
            ctx.log.error('Failed to get list of event models');
            throw e;
        }

        return ctx.body = {
            events: modelList
        };
    }
}
