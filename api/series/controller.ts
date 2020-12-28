'use strict';

import {ContextWithLoggerDb} from "../types";
import SeriesModel from "./model";

export default class SeriesController {
    static async listSeries(ctx: ContextWithLoggerDb) {
        let modelList;
        try {
            modelList = await SeriesModel.getList(ctx.db);
        } catch (e) {
            ctx.log.error('Failed to get list of series models');
            throw e;
        }

        return ctx.body = {
            series: modelList
        };
    }
}
