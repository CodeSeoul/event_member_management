import React from "react";
import { getEvent } from "./mock-api";
import Attendees from "./Attendees";

class EventDetailContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidMount() {
		getEvent(this.props.match.params.id)
			.then((event) => this.setState({ ...event }))
			.catch((error) => console.log(error))
	}

	render() {
		const { id, date, time, location, eventTitle, eventDetails } = this.state
		return (
			<>
				<div className="eventDetails">
					<h1>Event Title: {eventTitle}</h1>
					<div>Event ID: {id}</div>
					<p>Location: {location}</p>
					<p>Date: {date}</p>
					<p>Time: {time}</p>
					<p>Event Details: {eventDetails}</p>
					<hr />
				</div>
				<Attendees />
			</>
		)
	}
}

export default EventDetailContainer
