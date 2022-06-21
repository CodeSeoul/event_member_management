'use strict';

import KoaJoiRouter from 'koa-joi-router';
import Service from './service'
import {MemberList} from "./definition";

const router = KoaJoiRouter();

router.prefix('/member');

router.route({
    meta: {
        swagger: {
            summary: 'List members',
            tags: ['member'],
        },
    },
    path: '/',
    method: 'GET',
    handler: Service.listMembers,
    validate: {
        output: {
            200: {
                body: MemberList,
                // @ts-ignore
                ref: '#/definitions/MemberList',
            },
        },
    },
});

export default router;
