import type { AttendeeData } from './AttendeeData';

export type EventListData = {
	events: EventListItemData[];
};

export type EventListItemData = {
	id: number;
	title: string;
	date: Date;
	timeslot: string;
	seriesName: string | null;
	description: string;
	imageUrl: string;
};

export type EventDetailData = {
	id: number;
	title: string;
	date: Date;
	timeslot: string;
	seriesName: string | null;
	location: string;
	description: string;
	attendees: AttendeeData[];
};
