'use strict';

import pino from 'pino';
import * as serializers from '@kasa/koa-logging/lib/serializers';

interface ResponseBody {
    status: string,
    code: number,
    message: string
}

interface SerializedResponse {
    statusCode: number,
    duration: number,
    type: string,
    headers: any,
    body: ResponseBody
}

function responseBodySerializer(input: ResponseBody): ResponseBody {
    return {
        status: input.status,
        message: input.message,
        code: input.code
    };
}

function responseSerializer(ctx): SerializedResponse {
    return {
        statusCode: ctx.status,
        duration: ctx.duration,
        type: ctx.type,
        headers: (ctx.response || {}).headers,
        body: responseBodySerializer(ctx.body || {})
    };
}

const options = {
    level: process.env.LOG_LEVEL || (process.env.NODE_ENV === 'production' ? 'info' : 'debug'),
    redact: ['req.headers.authorization'],
    serializers: {
        ...serializers,
        res: responseSerializer
    }
};

export default pino(options);
