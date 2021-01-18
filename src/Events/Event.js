import React, {useState} from 'react';
import './Event.css';

function Event({item, index, clickHandler}) {
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
			/>
			<span>{item['event-name']}</span>
		</div>
	);
}
export default Event;
