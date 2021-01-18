import React from 'react';
import Category from './Category';
import './CategoryContainer.css';

function CategoryContainer({ categoryData, clickHandler, selectedEventName}) {
	const getCategoryData = () => {
		const categoryDataMarkUp = categoryData.map((item, index) => {
			return (
				<Category item={item} index={index} clickHandler={clickHandler} />
			);
		});
		return categoryDataMarkUp;
	}
	return (
		<div>
			<h1> {selectedEventName ? `Categories for ${selectedEventName} event` : 'Categories' } </h1>
			<div className="event-container">
				{getCategoryData()}
			</div>
		</div>
	);
}

export default CategoryContainer;
