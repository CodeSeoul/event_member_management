import type Attendee from "./Attendee.svelte";

export type EventListData = {
    events: EventListItemData[];
}

export type EventListItemData = {
    id: number;
    eventTitle: string;
    eventDate: Date;
    eventTime: Date;
}

export type EventDetailData = {
    id: number;
    eventTitle: string;
    eventDate: Date;
    eventTime: Date;
    eventTimeslot: string;
    location: string;
    details: string;
    attendees: Attendee[];
}

