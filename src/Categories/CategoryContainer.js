import React from 'react';
import Category from './Category';
import './CategoryContainer.css';

function CategoryContainer({ categoryData, clickHandler, selectedEventName, selectedCategoryIndex}) {
	const getCategoryData = () => {
		const categoryDataMarkUp = categoryData.map((item, index) => {
			return (
				<Category
					item={item}
					index={index}
					clickHandler={clickHandler}
					isCurrentSelection={index === selectedCategoryIndex}
				/>
			);
		});
		return categoryDataMarkUp;
	}
	return (
		<div>
			<h1>Categories for your selection </h1>
			<div className="event-container">
				{getCategoryData()}
			</div>
		</div>
	);
}

export default CategoryContainer;
