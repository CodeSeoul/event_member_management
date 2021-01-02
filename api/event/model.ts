'use strict';

import {
  Column,
  CreateDateColumn,
  Entity,
  EntityManager,
  FindManyOptions,
  ManyToOne,
  PrimaryGeneratedColumn,
  TransactionManager,
  UpdateDateColumn,
} from 'typeorm';

import SeriesModel from '../series/model';

@Entity({ name: 'event' })
export default class EventModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 80 })
  title: string;

  @Column()
  seriesId?: number;

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
    options?: FindManyOptions<EventModel>
  ): Promise<EventModel[]> {
    return manager.find(EventModel, options);
  }

  toJSON(): object {
    return {
      id: this.id,
      title: this.title,
      series: this.series?.toJSON(),
      description: this.description,
      startTimestamp: this.startTimestamp,
      durationMinutes: this.durationMinutes,
      imageUrl: this.imageUrl,
      venueId: this.venueId,
      venue: this.venue,
      onlineLink: this.onlineLink,
    };
  }
}
