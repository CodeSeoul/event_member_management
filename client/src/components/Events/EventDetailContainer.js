import React, {useState, useEffect, useCallback} from "react";
import {useParams} from 'react-router-dom'
import { getEvent } from "./mock-api";
import Attendees from "./Attendees";

export default function EventDetailContainer(){
  const [event, setEvent] = useState({});
  const {id} = useParams();
  const fetchEvent = useCallback(async() =>{
    const result = await getEvent();
    setEvent({...result});
  }, [])
 
  useEffect(() =>{
      fetchEvent();
  }, [id]);

  const { id, date, time, location, eventTitle, eventDetails } = event;
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

