'use strict';

import {
  Column,
  CreateDateColumn,
  Entity,
  EntityManager,
  FindManyOptions,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  TransactionManager,
  UpdateDateColumn
} from "typeorm";

import SeriesModel from '../series/model';
import MemberModel from '../members/model';
import { EventSchema, EventWithIdSchema } from './definition';
import { SeriesWithIdSchema } from '../series/definition';

@Entity({ name: 'event' })
export default class EventModel {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 80 })
  title: string;

  @Column()
  seriesId?: number;

  @ManyToMany(
    () => MemberModel,
    members => members.events,
    { eager: false },
  )
  members: MemberModel[];

  @ManyToOne(() => SeriesModel, (series) => series.events, { eager: true })
  series?: SeriesModel;

  @Column()
  description: string;

  @Column({ type: 'timestamp' })
  startTimestamp?: Date;

  @Column()
  durationMinutes?: number;

  @Column({ length: 255 })
  imageUrl?: string;

  @Column()
  venueId?: number;

  // TODO: venue
  venue?: string;

  @Column({ length: 255 })
  onlineLink?: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  static find(
    @TransactionManager() manager: EntityManager,
    options?: FindManyOptions<EventModel>,
  ): Promise<EventModel[]> {
    return manager.find(EventModel, options);
  }

  constructor(schema?: EventSchema) {
    if (schema) {
      this.title = schema.title;
      this.series = new SeriesModel({
        id: schema.series as number,
        name: null
      });
      this.description = schema.description;
      this.startTimestamp = schema.startTimestamp;
      this.durationMinutes = schema.durationMinutes;
      this.imageUrl = schema.imageUrl;
      this.venueId = schema.venueId;
      this.venue = schema.venue;
      this.onlineLink = schema.onlineLink;
    }
  }

  async save(
    this: EventModel,
    @TransactionManager() manager: EntityManager,
  ): Promise<EventModel> {
    return await manager.save(this);
  }

  async toJSON(this: EventModel, entityManager?: EntityManager): Promise<EventWithIdSchema> {
    let series: SeriesWithIdSchema;
    if (this.series) {
      series = this.series.toJSON();
    } else if (this.seriesId) {
      const foundSeries = await SeriesModel.findOne(entityManager, this.seriesId);
      series = foundSeries?.toJSON();
    }

    return {
      id: this.id,
      title: this.title,
      series,
      description: this.description,
      startTimestamp: this.startTimestamp,
      durationMinutes: this.durationMinutes,
      imageUrl: this.imageUrl,
      venueId: this.venueId,
      venue: this.venue,
      onlineLink: this.onlineLink,
      members: this.members?.map(m => m.toJSON()),
    };
  }
}
