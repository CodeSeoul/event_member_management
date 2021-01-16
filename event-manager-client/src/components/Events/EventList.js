import React from 'react'
import Event from './Event'

const EventList = ({ events }) => {
	return (
		<div>
			{events.length === 0 && <div>There are no events.</div>}
			{events.length > 0 && (
				<div className="pancake-parent">
					{events.map((event, index) => {
						return <Event index={index} {...event} />
					})}
				</div>
			)}
		</div>
	)
}

export default EventList
