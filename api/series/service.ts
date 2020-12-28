'use strict';

import {ContextWithLoggerDb} from "../types";
import SeriesModel from "./model";

export default class SeriesService {
    static async listSeries(ctx: ContextWithLoggerDb) {
        let modelList;
        try {
            modelList = await SeriesModel.find(ctx.dbTransactionManager);
        } catch (e) {
            ctx.log.error('Failed to get list of series models');
            throw e;
        }

        return ctx.body = {
            series: modelList
        };
    }
}
