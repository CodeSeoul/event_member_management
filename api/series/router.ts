'use strict';

import KoaJoiRouter from 'koa-joi-router';
import Service from './service';
import {SeriesList} from './definition'

const router = KoaJoiRouter();

router.prefix('/series');

// @ts-ignore
router.route({
    meta: {
        swagger: {
            summary: 'List series',
            tags: ['series']
        }
    },
    path: '/',
    method: 'GET',
    handler: Service.listSeries,
    validate: {
        output: {
            200: {
                body: SeriesList,
                // @ts-ignore
                ref: '#/definitions/SeriesList'
            }
        }
    }
});

export default router;
