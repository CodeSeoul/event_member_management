'use strict';

import {
    Column,
    CreateDateColumn,
    Entity, EntityManager, FindManyOptions,
    ManyToMany, JoinTable,
    PrimaryGeneratedColumn,
    TransactionManager,
    UpdateDateColumn
} from "typeorm";
import EventModel from "../event/model";


@Entity({name: 'members'})
export default class MembersModel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 64})
		firstName: string;
		
		@Column({length: 64})
		lastName: string;

		@Column({})
		imageUrl: string;

		@Column({})
		shortBio: string;
		
		// Deleted Events

    @CreateDateColumn({type: 'timestamp'})
    createdAt: Date;

    @UpdateDateColumn({type: 'timestamp'})
    updatedAt: Date;

    static find(@TransactionManager() manager: EntityManager, options?: FindManyOptions<MembersModel>): Promise<MembersModel[]> {
        return manager.find(MembersModel, options);
    }

    toJSON(): object {
        return {
            id: this.id,
						firstName: this.firstName,
						lastName: this.lastName,
						shortBio: this.shortBio,
            imageUrl: this.imageUrl
        };
    }
}
