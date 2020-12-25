'use strict';

let port;
if (!process.env.DB_PORT) {
    port = 3306;
} else {
    port = parseInt(process.env.DB_PORT, 10);
    if (isNaN(port)) {
        throw new TypeError('Given value for DB_PORT was not an integer');
    }
}

export default {
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA || 'app',
    host: process.env.DB_HOST || 'localhost',
    port: port || 3306,
    // +09:00 is Asia/Seoul
    timezone: process.env.TZ || '+09:00'
};
