import React from 'react';
import './App.css';

function App() {
	const handleClick = (e: React.MouseEvent<HTMLUListElement>) => {
		const target = e.target as HTMLLIElement;
		console.log(target.value);
	}

	return (
		<div className="App">
			<ul onClick={handleClick}>
				{Array.from({ length: 1000 }, (_, i) => i + 1).map((item) => (
					<li key={item} value={item} style={{ cursor: "pointer" }} >{item}</li>
				))}
			</ul>
		</div>
	)
}

export default App
