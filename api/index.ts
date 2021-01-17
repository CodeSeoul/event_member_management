'use strict';

import app from './app';
import logger from './logger/logger';
import databaseConfig from './database/config';
import { createConnection } from 'typeorm';

createConnection(databaseConfig)
  .then(() => {
    if (require.main === module) {
      app.listen(3000, () => {
        logger.info('Started on port 3000!');
      });
    }
  })
  .catch((error) => logger.error(error));
