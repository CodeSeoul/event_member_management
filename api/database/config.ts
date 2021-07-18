'use strict';

import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

let port: number;
if (!process.env.DB_PORT) {
  port = 3306;
} else {
  port = parseInt(process.env.DB_PORT, 10);
  if (isNaN(port)) {
    throw new TypeError('Given value for DB_PORT was not an integer');
  }
}

export default {
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: port || 3306,
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_SCHEMA || 'app',
  // +09:00 is Asia/Seoul
  timezone: process.env.TZ || '+09:00',
  entities: [`${__dirname}/../**/model.ts`],
  migrations: [`${__dirname}/../../migrations/*.ts`],
  synchronize: false,
  logging: false,
} as MysqlConnectionOptions;
