import React from 'react';
import Category from './Category';
import './CategoryContainer.css';

function CategoryContainer({ categoryData, clickHandler}) {
	const getCategoryData = () => {
		const categoryDataMarkUp = categoryData.map((item, index) => {
			// const clickHandler = (ev) => {
			// 	console.log('event clicked, this is inside eventContainer', ev);
			// }
			return (
				<Category item={item} index={index} clickHandler={clickHandler} />
			);
		});
		return categoryDataMarkUp;
	}
	return (
		<div>
			<h1> Categories </h1>
			<div className="event-container">
				{getCategoryData()}
			</div>
		</div>
	);
}

export default CategoryContainer;
