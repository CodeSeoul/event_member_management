const events = [
	{
		id: 1,
		date: '01-22-2021',
		time: '19:00pm',
		location: 'Seoul Google Campus',
		eventTitle: 'Python Workshop',
		eventDetails:'An event for beginners and people who are interested in the Python language. Our instructor is Tom Python.',
	},
	{
		id: 2,
		date: '01-20-2021',
		time: '19:00pm',
		location: 'Some Coffee Shop',
		eventTitle: 'JS Meetup',
		eventDetails: 'Coding projects and learning javascript together. Open to all levels.',
	},
	{
		id: 3,
		date: '01-18-2021',
		time: '19:00pm',
		location: 'Gangname Cafe',
		eventTitle: 'WordPress Meetup',
		eventDetails:'Bloggers and WordPress developers, we are meeting and sharing our ideas and resources for all things related to WordPress.',
	},
	{
		id: 4,
		date: '01-15-2021',
		time: '19:00pm',
		location: 'Shinchon - Yonsei Univ',
		eventTitle: 'React Workshop',
		eventDetails: 'We will learn React together. React is a frontend library.',
	},
]

export function getEventsList() {
	return Promise.resolve(events)
}

export function getEvent(id) {
	const event = events.find((event) => event.id === parseInt(id))
	return Promise.resolve(event)
}
