'use strict';

import P from 'pino';
import MockedFunction = jest.MockedFunction;
import { EntityTarget } from 'typeorm/common/EntityTarget';
import { DeepPartial } from 'typeorm/common/DeepPartial';

// Pulled from EntityManager
type CreateSingleEntity<Entity> = (entityClass: EntityTarget<Entity>, plainObject?: DeepPartial<Entity>) => Entity;
type CreateManyEntities<Entity> = (entityClass: EntityTarget<Entity>, plainObjects?: DeepPartial<Entity[]>) => Entity[];
export interface ContextCustomProperties {
  dbTransactionManager: {
    create?: MockedFunction<CreateSingleEntity<any> | CreateManyEntities<any>>,
    save?: MockedFunction<any>,
  },
  log: P.Logger,
}
