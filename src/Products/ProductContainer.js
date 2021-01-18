import React from 'react';
import Product from './Product';
import './ProductContainer.css';

function ProductContainer({ clickHandler, productData, selectedCategoryName='products' }) {
	const getProductData = () => {
		const productDataMarkUp = productData.map((item, index) => {
			return (
				<Product item={item} index={index} clickHandler={clickHandler} />
			);
		});
		return productDataMarkUp;
	}

	return productData ? (
		<div>
			<h1> {`${selectedCategoryName} handpicked for you!`} </h1>
			<div className="product-container">
				{getProductData()}
			</div>
		</div>
	): null;
}

export default ProductContainer;
