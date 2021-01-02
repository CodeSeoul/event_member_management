'use strict';

import {version} from '../version.json';
import {Series, SeriesList, SeriesWithId} from '../series/definition';
import {Event, EventWithId, EventList} from "../event/definition";

export const swaggerUiConfig = {
    title: 'SNS Event API Swagger Console',
    swaggerOptions: {
        url: '/docs/spec.json'
    },
    routePrefix: '/docs',
    exposeSpec: false,
    hideTopbar: true,
    favicon: 'favicon.png'
};

export const swaggerSpecConfig = {
    info: {
        title: 'SNS Event API',
        description: 'API for managing events and members',
        version
    },
    basePath: '/',
    tags: [
        {
            name: 'event',
            description: 'An Event represents an online or offline event for members to attend'
        },
        {
            name: 'series',
            description: 'A Series represents a collection of events that are related in some manner. An event can only belong to one series.'
        }
    ],
    definitions: {
        Series,
        SeriesWithId,
        SeriesList,
        Event,
        EventWithId,
        EventList
    }
};
