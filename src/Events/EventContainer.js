import React from 'react';
import Event from './Event';
import './EventContainer.css';

function EventContainer({clickHandler, eventData}) {
	const getEventData = () => {
		const eventDataMarkUp = eventData.map((item, index) => {
			return (
				<Event item={item} index={index} clickHandler={clickHandler}/>
			);
	});
		return eventDataMarkUp;
	}
	return (
		<div>
			<h1> Popular Events</h1>
			<div className="event-container">
				{getEventData()}
			</div>
		</div>
	);
}

export default EventContainer;
