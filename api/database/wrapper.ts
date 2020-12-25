'use strict';

import mysql, {Pool} from 'mysql2/promise';

import config from './config';
import DatabaseConnection from "./connection";

export default class DatabaseWrapper {

    private static instance: DatabaseWrapper;

    private pool: Pool;

    private constructor() {
        this.pool = mysql.createPool({
            user: config.user,
            password: config.password,
            database: config.database,
            host: config.host,
            port: config.port,
            timezone: config.timezone,
            namedPlaceholders: true
        });
    }

    static getInstance(): DatabaseWrapper {
        if (!this.instance) {
            this.instance = new DatabaseWrapper();
        }

        return this.instance;
    }

    async getConnection(): Promise<DatabaseConnection> {
        const conn = await this.pool.getConnection();
        return new DatabaseConnection(conn);
    }

    execute(sql: string, parameters: any): Promise<any> {
        return this.pool.execute(sql, parameters);
    }
}
