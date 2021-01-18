import React, {useState} from 'react';
import EventContainer from './Events/EventContainer';
import CategoryContainer from './Categories/CategoryContainer';
import ProductContainer from './Products/ProductContainer';
import './App.css';

import data from './Data/eventData.json';

function App() {
	const [selectedEvent, setSelectedEvent] = useState(0);
	const [selectedCategory, setSelectedCategory] = useState(0);
	const [counter, setCounter] = useState(0);
	const eventClickHandler = (eventId) => {
		console.log('event clicked, this is inside App.js', eventId);
		setSelectedEvent(eventId);
		// when event changed, select the first category by default for the next event
		setSelectedCategory(0);
	}
	const categoryClickHandler = (categoryId) => {
		console.log('category clicked, this is inside App.js', categoryId);
		setSelectedCategory(categoryId);
	}

	const productClickHandler = () => {
		const newCounter = counter + 1;
		setCounter(newCounter);
		console.log('product add to cart clicked', counter);
	}
	return (
		<div className="App">
			<header className="App-header">
				<div className="headerContentOne">
				<h1>Walmart</h1>
				<img src='walmart-spark-logo.png' alt='walmart_logo' className="logo" />
				</div>
				<div className="headerContentTwo">
					<img src='cart_icon.svg' alt='walmart-cart' className='cart-icon' />
					<span className="counter">{counter}</span>
				</div>
			</header>
			<header className="header2">
				<h4>Our Brand New Event Driven AI based shopping experience is available now!!!</h4>
			</header>
			<EventContainer
				eventData={data || []}
				clickHandler={eventClickHandler}
			/>
			<CategoryContainer
				categoryData={data[selectedEvent].categories || []}
				clickHandler={categoryClickHandler}
			/>
			<ProductContainer
				productData={data[selectedEvent].categories[selectedCategory].products || [] }
				clickHandler={productClickHandler}
			/>
		</div>
	);
}

export default App;
