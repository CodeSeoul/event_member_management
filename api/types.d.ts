import { Context } from 'koa';
import P from 'pino';
import { EntityManager } from 'typeorm';

declare interface ContextWithLogger extends Context {
  log: P.Logger;
}

declare interface ContextWithLoggerDb extends ContextWithLogger {
  dbTransactionManager: EntityManager;
}
