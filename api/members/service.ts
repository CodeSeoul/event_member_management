'use strict';

import { ContextStandard } from "../types";
import MemberModel from "./model";
import { MemberListSchema } from './definition';

export default class MembersService {
    static async listMembers(ctx: ContextStandard): Promise<MemberListSchema> {
        let modelList: MemberModel[];
        try {
            modelList = await MemberModel.find(ctx.dbTransactionManager);
        } catch (e) {
            ctx.log.error('Failed to get list of members models');
            throw e;
        }

        return ctx.body = {
            members: modelList
        };
    }
}
