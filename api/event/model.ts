'use strict';

import DatabaseConnection from "../database/connection";

interface EventModelOptions {
    id?: number
    title: string
    description: string
    seriesId?: number
    // TODO: seriesList
    series?: any
    startTimestamp?: number
    durationMinutes?: number
    imageUrl?: string
    venueId?: number
    // TODO: venue
    venue?: string
    onlineLink?: string
}

export default class EventModel {
    private readonly db: DatabaseConnection;
    private isNew: boolean;
    private isChanged: boolean;

    private _id: number;
    private _title: string;
    private _seriesId: number;
    // TODO: _series
    private _series: any;
    private _description: string;
    private _startTimestamp: number;
    private _durationMinutes: number;
    private _imageUrl: string;
    private _venueId: number
    // TODO: _venue
    private _venue: any;
    private _onlineLink: string;

    constructor(db: DatabaseConnection, data: EventModelOptions) {
        this.db = db;
        this.isNew = true;
        this.isChanged = false;

        // TODO: define getters and setters to mark as new or changed
        this._id = data.id;
        this._title = data.title;
        this._seriesId = data.seriesId;
        this._series = data.series;
        this._description = data.description;
        this._startTimestamp = data.startTimestamp;
        this._durationMinutes = data.durationMinutes;
        this._imageUrl = data.imageUrl;
        this._venueId = data.venueId;
        this._venue = data.venue;
        this._onlineLink = data.onlineLink;
    }

    async save(): Promise<void> {
        // TODO: this
    }

    static async getList(db: DatabaseConnection): Promise<EventModel[]> {
        const dbResults = await db.execute(
                `select * from event`,
                {}
            );

        return dbResults.results.map(record => {
            const model = new EventModel(db, record);
            model.isNew = false;
            return model;
        });
    }

    static async get(db: DatabaseConnection, id: number): Promise<EventModel> {
        const dbResults = await db.execute(
                `select * from event where id = :id`,
            { id }
        );

        if (dbResults.results.length === 0) {
            // TODO: define 404 error
        }

        const model = new EventModel(db, dbResults.result[0]);
        model.isNew = false;
        return model;
    }

    toJSON(): object {
        return {
            id: this._id,
            title: this._title,
            seriesId: this._seriesId,
            series: this._series,
            description: this._description,
            startTimestamp: this._startTimestamp,
            durationMinutes: this._durationMinutes,
            imageUrl: this._imageUrl,
            venueId: this._venueId,
            venue: this._venue,
            onlineLink: this._onlineLink
        };
    }
}
