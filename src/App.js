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
		setSelectedEvent(eventId);
		// when event changed, select the first category by default for the next event
		setSelectedCategory(0);
	}
	const categoryClickHandler = (categoryId) => {
		setSelectedCategory(categoryId);
	}

	const productClickHandler = () => {
		const newCounter = counter + 1;
		setCounter(newCounter);
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
				<h4>Welcome to ShopOverflow!!!! Our Brand New Event driven Shopping experience is available now!!!</h4>
			</header>
			<EventContainer
				eventData={data || []}
				clickHandler={eventClickHandler}
			/>
			<CategoryContainer
				selectedEventName={data[selectedEvent]['event-name']}
				categoryData={data[selectedEvent].categories || []}
				clickHandler={categoryClickHandler}
			/>
			<ProductContainer
				selectedCategoryName={data[selectedEvent].categories[selectedCategory]['category-name']}
				productData={data[selectedEvent].categories[selectedCategory].products || [] }
				clickHandler={productClickHandler}
			/>
		</div>
	);
}

export default App;
