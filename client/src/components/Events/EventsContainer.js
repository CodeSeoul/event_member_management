import React from "react";
import EventList from "./EventList";
import { getEventsList } from "./mock-api";

class EventsContainer extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			events: [],
		}
	}

	componentDidMount() {
		getEventsList()
			.then((events) => this.setState({ events }))
			.catch((error) => alert(error))
	}

	render() {
		return (
			<div>
				<EventList events={this.state.events} />
			</div>
		)
	}
}

export default EventsContainer
