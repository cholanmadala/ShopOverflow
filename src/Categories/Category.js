import React from 'react';
import './Category.css';

function Category({ item, index, clickHandler, isCurrentSelection }) {
	// Declare a new state variable, which we'll call "count"
	// const [count, setCount] = useState(0);
	const handleClick = (ev) => {
		clickHandler(ev);
	}

	return (
		<div className="category" key={`${item}-${index}`} onClick={() => handleClick(index)}>
			{/* <img className="event-img" src={`event-${customIndex.toString()}-img.jpeg`} alt={`event-${customIndex.toString()}`}/> */}
			<img
				style={{ border: isCurrentSelection ? '2px solid #0471dc' : ''}}
				src={item['category-image-name']}
				alt="category-icon"
				className="category-img"
			/>
			<span>
				{item['category-name'].toLowerCase()}
			</span>
		</div>
	);
}
export default Category;
