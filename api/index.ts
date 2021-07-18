'use strict';

import app from './app';
import databaseConfig from './database/config';
import pino from 'pino';
import { createConnection } from 'typeorm';

const logger = pino();

createConnection(databaseConfig)
  .then(() => {
    if (require.main === module) {
      app.listen(3000, () => {
        logger.info('Started on port 3000!');
      });
    }
  })
  .catch((error) => logger.error(error));
