'use strict';

import DatabaseConnection from "../database/connection";

interface SeriesModelOptions {
    id?: number
    name: string
}

export default class SeriesModel {
    private readonly db: DatabaseConnection;
    private isNew: boolean;
    private isChanged: boolean;

    private _id: number;
    private _name: string;

    constructor(db: DatabaseConnection, data: SeriesModelOptions) {
        this.db = db;
        this.isNew = true;
        this.isChanged = false;

        // TODO: define getters and setters to mark as new or changed
        this._id = data.id;
        this._name = data.name;
    }

    static async getList(db: DatabaseConnection): Promise<SeriesModel[]> {
        const dbResults = await db.execute(
                `select * from series`,
                {}
            );

        return dbResults.results.map(record => {
            const model = new SeriesModel(db, record);
            model.isNew = false;
            return model;
        });
    }

    toJSON(): object {
        return {
            id: this._id,
            name: this._name
        };
    }
}
