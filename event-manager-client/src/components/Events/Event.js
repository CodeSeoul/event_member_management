import React from 'react'
import { Link } from 'react-router-dom'

// Event appears on EventListPage
const Event = ({ id, date, time, location, eventTitle }) => {
	const eventStyle = {
		border: '1px solid black',
		padding: '15px',
		marginTop: '8px',
		marginLeft: '4px',
		marginRight: '4px',
	}

	return (
		<div className="pancake-child" style={eventStyle}>
			<h4>
				<Link to={`/events/${id}`}>{eventTitle}</Link>
			</h4>
			<p>Location: {location}</p>
			<p>Date: {date}</p>
			<p>Time: {time}</p>
		</div>
	)
}
export default Event
