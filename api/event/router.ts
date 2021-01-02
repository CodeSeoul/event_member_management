'use strict';

import KoaJoiRouter from 'koa-joi-router';
import Service from './service';
import {EventList} from "./definition";

const router = KoaJoiRouter();
// TODO: Setup filtering, constraints, etc
// const Joi = KoaJoiRouter.Joi;

router.prefix('/event');

router.route({
    meta: {
        swagger: {
            summary: 'List events',
            tags: ['event']
        }
    },
    path: '/',
    method: 'GET',
    handler: Service.listEvents,
    validate: {
        output: {
            200: {
                body: EventList,
                // @ts-ignore
                ref: '#/definitions/EventList'
            }
        }
    }
});

export default router;
