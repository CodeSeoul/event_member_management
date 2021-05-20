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

  toJSON(): object {
    return {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      shortBio: this.shortBio,
      imageUrl: this.imageUrl,
    };
  }
}
