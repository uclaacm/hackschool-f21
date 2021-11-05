import React from 'react';
import './Counter.css';

function Counter(props) {
	return (
		<div className="counter">
			<p>Counter: {props.counter}</p>
		</div>
	);
}

export default Counter;
