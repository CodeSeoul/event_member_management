'use strict';

import {ContextWithLoggerDb} from "../types";
import MembersModel from "./model";
export default class MembersService {
    static async listMembers(ctx: ContextWithLoggerDb) {
        let modelList: MembersModel[];
        try {
            modelList = await MembersModel.find(ctx.dbTransactionManager);
        } catch (e) {
            ctx.log.error('Failed to get list of members models');
            throw e;
        }

        return ctx.body = {
            members: modelList
        };
    }
}
