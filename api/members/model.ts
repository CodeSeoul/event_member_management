'use strict';

import {
  Column,
  CreateDateColumn,
  Entity,
  EntityManager,
  FindManyOptions,
  ManyToMany,
  PrimaryGeneratedColumn,
  TransactionManager,
  UpdateDateColumn
} from "typeorm";
import EventModel from "../event/model";
import { MemberSchema, MemberWithIdSchema } from './definition';

@Entity({ name: 'member' })
export default class MemberModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 64 })
  firstName: string;

  @Column({ length: 64 })
  lastName: string;

  @Column({})
  imageUrl: string;

  @Column({})
  shortBio: string;

  @ManyToMany(
    () => EventModel,
    events => events.members,
    { eager: false },
  )
  events?: EventModel;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  static find(@TransactionManager() manager: EntityManager, options?: FindManyOptions<MemberModel>): Promise<MemberModel[]> {
    return manager.find(MemberModel, options);
  }

  constructor(schema?: MemberSchema) {
    if (schema) {
      this.firstName = schema.firstName;
      this.lastName = schema.lastName;
      this.imageUrl = schema.imageUrl;
      this.shortBio = schema.shortBio;
      this.createdAt = new Date();
      this.updatedAt = new Date();
    }
  }

  toJSON(this: MemberModel): MemberWithIdSchema {
    return {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      shortBio: this.shortBio,
      imageUrl: this.imageUrl,
    };
  }
}
