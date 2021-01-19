import React from 'react';
import './Event.css';

function Event({ item, index, clickHandler, isSelectedEvent}) {
	const handleClick = (ev) => {
		clickHandler(ev);
	}
	const customIndex = (index + 1) < 10 ? `0${index+1}` : index+1;
	return (
		<div
			className="event"
			key={`${item}-${index}`}
			onClick={() => handleClick(index)}
		>
			<img
				className="event-img"
				src={item['event-image-name']}
				alt={`event-${customIndex.toString()}`}
				style={{ border: isSelectedEvent ? '2px solid #0471dc' : '' }}
			/>
			<span>{item['event-name']}</span>
		</div>
	);
}
export default Event;
