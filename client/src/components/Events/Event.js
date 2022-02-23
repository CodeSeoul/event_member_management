import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/events.css';

// Event appears on EventListPage
const Event = ({ id, date, time, location, eventTitle }) => {
  //const eventStyle = {
  //border: '1px solid black',
  //padding: '15px',
  //marginTop: '8px',
  //marginLeft: '4px',
  //marginRight: '4px',
  //}

  return (
    <div className="event-container">
      <div className="pancake-child">
        <h4 className="event-header">
          <Link className="event-link" to={`/events/${id}`}>
            {eventTitle}
          </Link>
        </h4>
        <p className="event-location">Location: {location}</p>
        <p className="event-date">Date: {date}</p>
        <p className="event-time">Time: {time}</p>
      </div>
    </div>
  );
};
export default Event;
