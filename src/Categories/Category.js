import React from 'react';
import './Category.css';

function Category({ item, index, clickHandler }) {
	// Declare a new state variable, which we'll call "count"
	// const [count, setCount] = useState(0);
	const handleClick = (ev) => {
		clickHandler(ev);
	}
	return (
		<div className="category" key={`${item}-${index}`} onClick={() => handleClick(index)}>
			{/* <img className="event-img" src={`event-${customIndex.toString()}-img.jpeg`} alt={`event-${customIndex.toString()}`}/> */}
			<img src="https://i5.walmartimages.com/asr/16b4d8fe-6f1a-40b9-af56-429b17a5baa9.87d2fe9f6813a8d94d2fcf3a2335db39.jpeg" alt="image" className="category-img" />
			<span>{item['category-name']}</span>
		</div>
	);
}
export default Category;
