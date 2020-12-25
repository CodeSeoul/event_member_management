'use strict';

import {PoolConnection} from "mysql2/promise";

export default class DatabaseConnection {
    private connection: PoolConnection

    constructor(connection: PoolConnection) {
        this.connection = connection;
    }

    async execute(sql: string, parameters: any): Promise<any> {
        const [results, fields] = await this.connection.execute(sql, parameters);
        return {
            results,
            fields
        };
    }

    async startTransaction(): Promise<void> {
        await this.connection.query('start transaction');
    }

    async rollback(): Promise<void> {
        await this.connection.query('rollback');
    }

    async commit(): Promise<void> {
        await this.connection.query('commit');
    }

    release(): void {
        this.connection.release();
    }
}