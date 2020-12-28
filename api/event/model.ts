'use strict';

import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    EntityManager,
    TransactionManager,
    FindManyOptions,
    CreateDateColumn, UpdateDateColumn
} from 'typeorm';

@Entity({ name: 'event' })
export default class EventModel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 80 })
    title: string;

    @Column()
    seriesId?: number;

    // TODO: series
    series?: string;

    @Column()
    description: string;

    @Column()
    startTimestamp?: number;

    @Column()
    durationMinutes?: number;

    @Column({ length: 255 })
    imageUrl?: string;

    @Column()
    venueId?: number

    // TODO: venue
    venue?: string;

    @Column({ length: 255 })
    onlineLink?: string;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;

    static find(@TransactionManager() manager: EntityManager, options?: FindManyOptions<EventModel>): Promise<EventModel[]> {
        return manager.find(EventModel, options);
    }

    toJSON(): object {
        return {
            id: this.id,
            title: this.title,
            seriesId: this.seriesId,
            series: this.series,
            description: this.description,
            startTimestamp: this.startTimestamp,
            durationMinutes: this.durationMinutes,
            imageUrl: this.imageUrl,
            venueId: this.venueId,
            venue: this.venue,
            onlineLink: this.onlineLink
        };
    }
}
