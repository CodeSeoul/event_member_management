import type { EventDetailData } from '$lib/EventData';
import type { LoadEvent } from '@sveltejs/kit';

export async function load({ params, fetch }: LoadEvent): Promise<EventDetailData | null> {
	// {"route":{"id":"/events/[slug]"},"params":{"slug":"3"},"data":null,"url":"http://localhost:5173/events/3"}
	console.debug(`load params: ${JSON.stringify(params)}`);
	if (!params.slug) {
		throw new Error('No event ID passed to event detail page');
	}
	const eventId: number = parseInt(params.slug, 10);
	if (isNaN(eventId)) {
		throw new Error('Event ID was not a number');
	}
	console.debug(`load event id: ${eventId}`);
	const url = `http://localhost:8000/events/${eventId}`;
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
		throw new Error(`Failed to retrieve event list due to error: ${error}`);
	}
	const data = await response.json();
	console.debug(data);
	return {
		id: data.id,
		title: data.title,
		seriesName: data.seriesName,
		timeslot: '',
		date: new Date(data.startTimestamp),
		location: '',
		description: data.description,
		attendees: []
	};
}
