import type { EventDetailData } from '../../../lib/EventData';

export function load(): EventDetailData {
	return {
		id: 1,
		eventTitle: 'test',
		eventDate: new Date(),
		eventTime: new Date(),
		location: 'Gangnam',
		details: 'Things happen here',
		attendees: [
			{
				id: 1,
				name: 'Hong Gildong',
				role: 'Engineer',
				company: 'The Best Company',
				signUpDate: new Date(),
				profilePhotoUrl: 'https://randomuser.me/api/portraits/men/83.jpg',
				personalWebsite: 'https://twitter.com/simonhlee97'
			}
		]
	};
}
