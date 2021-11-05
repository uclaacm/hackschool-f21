import { useState } from 'react';
import './App.css';

import Counter from './components/Counter';

function App() {
	const [numClicks, setNumClicks] = useState(0);
	const [counters, setCounters] = useState([]);

	const handleClick = () => {
		// Increment the counter on click
		setNumClicks((prev) => {
			return prev + 1;
		});

		// Add a new counter on click
		setCounters((prev) => {
			let newArr = prev.slice();

			// Increment all counters in the previous state
			newArr = newArr.map((counter) => {
				return counter + 1;
			});

			// Create a new counter
			newArr.push(0);

			return newArr;
		});
	};

	const renderCounters = counters.map((counter) => {
		return <Counter counter={counter} />;
	});

	return (
		<div className="App">
			<div className="master-counter">
				<h2>Counter: {numClicks}</h2>
				<button onClick={handleClick}>Click Me!</button>
			</div>
			<div className="counter-container">{renderCounters}</div>
		</div>
	);
}

export default App;
