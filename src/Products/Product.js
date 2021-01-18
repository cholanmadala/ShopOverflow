import React from 'react';
import Rating from './Rating';
import './Product.css';

function Product({ item, index, clickHandler }) {

	return (
		<div className="product" key={`${item}-${index}`}>
			{/* <img className="event-img" src={`event-${customIndex.toString()}-img.jpeg`} alt={`event-${customIndex.toString()}`}/> */}
			<img src={item['product-image-name']} alt="image" className="product-img" />
			<span>
					<a href={`http://walmart.com/ip/${item['product-id']}`} target='_blank'>
							{item['product-name']}
					</a>
			</span>
			<Rating />
			<div className="deliveryLabels">Free pickup today</div>
			<div className="product-price">{item['product-price']}</div>
			<div className="deliveryLabels">Free delivery</div>
			<div className="deliveryLabels">Free pickup today</div>
			<button className="add-to-cart-button" onClick={() => {clickHandler()}}>Add to Cart</button>
		</div>
	);
}
export default Product;