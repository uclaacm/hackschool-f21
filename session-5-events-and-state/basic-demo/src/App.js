import { useState } from 'react';
import './App.css';

function App() {
	const [text, setText] = useState('Click Me!');

	const handleClick = () => {
		setText('Clicked!');
	};

	const toggleMessage = () => {
		setText((prev) => {
			if (prev === 'Click Me!') {
				return 'Unclick Me!';
			} else return 'Click Me!';
		});
	};

	return (
		<div className="App">
			<button onClick={handleClick}>{text}</button>
		</div>
	);
}

export default App;
