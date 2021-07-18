'use strict';

import {
  Column,
  CreateDateColumn,
  Entity,
  EntityManager,
  FindManyOptions,
  OneToMany,
  PrimaryGeneratedColumn,
  TransactionManager,
  UpdateDateColumn,
} from 'typeorm';
import EventModel from '../event/model';
import { SeriesWithIdSchema } from './definition';

@Entity({ name: 'series' })
export default class SeriesModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 64 })
  name: string;

  @OneToMany(() => EventModel, (event) => event.series)
  events?: Promise<EventModel[]>;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  static find(
    @TransactionManager() manager: EntityManager,
    options?: FindManyOptions<SeriesModel>
  ): Promise<SeriesModel[]> {
    return manager.find(SeriesModel, options);
  }

  static findOne(
    @TransactionManager() manager: EntityManager,
    id: number,
    options?: FindManyOptions<SeriesModel>
  ): Promise<SeriesModel> {
    return manager.findOne(SeriesModel, id, options);
  }

  constructor(schema?: SeriesWithIdSchema) {
    if (schema) {
      this.id = schema.id;
      this.name = schema.name;
    }
  }

  toJSON(this: SeriesModel): SeriesWithIdSchema {
    return {
      id: this.id,
      name: this.name,
    };
  }
}
