'use strict';

import { ContextWithLoggerDb } from "../types";
import MemberModel from "./model";

export default class MembersService {
    static async listMembers(ctx: ContextWithLoggerDb) {
        let modelList: MemberModel[];
        try {
            modelList = await MemberModel.find(ctx.dbTransactionManager);
        } catch (e) {
            ctx.log.error('Failed to get list of members models');
            throw e;
        }

        return ctx.body = {
            members: modelList.map((model) => model.toJSON()),
        };
    }
}
