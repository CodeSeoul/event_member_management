import type { EventListData } from '$lib/EventData';
import type { LoadEvent } from '@sveltejs/kit';

export async function load({ fetch }: LoadEvent): Promise<EventListData | null> {
	const url = 'http://localhost:8000/events';
	const options = {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json;charset=UTF-8'
		}
	};
	let response;
	try {
		response = await fetch(url, options);
	} catch (error) {
		console.error(`Failed to retrieve event list due to error: ${error}`);
		return null;
	}
	const data = await response.json();
	console.debug(data);
	const eventList = data._embedded;
	const outputList: EventListData = {
		events: []
	};
	for (const event of eventList.events) {
		outputList.events.push({
			id: event.id,
			title: event.title,
			date: new Date(event.startTimestamp),
			timeslot: '',
			seriesName: null,
			description: event.description,
			imageUrl: event.imageUrl
		});
	}
	return outputList;
	/*
    createdAt: "2023-03-19T13:40:59.758617Z",
    description: "such new, so event"
    durationMinutes: 120
    id: 3
    imageUrl: "https://imgs.search.brave.com/ETZSXHRxNOTB6w7R9iEP1HFR6ps4blygjf8HHUi-gYk/rs:fit:1200:1200:1/g:ce/aHR0cDovL2kwLmt5/bS1jZG4uY29tL2Vu/dHJpZXMvaWNvbnMv/b3JpZ2luYWwvMDAw/LzAwMC8xMDcvc21p/bHkuanBn"
    onlineLink: null
    rsvps: []
    startTimestamp: "2022-06-22T08:51:00.000+00:00"
    title: "New Event"
    updatedAt: "2023-03-19T13:40:59.758617Z"
    venue: "Yo mama's house"
     */
}
