import type { EventListData } from '$lib/EventListData';

export function load(): EventListData {
	return {
		events: [
			{
				id: 1,
				eventTitle: 'test',
				eventDate: new Date(),
				eventTime: new Date()
			}
		]
	};
}
