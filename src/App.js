import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import laff from '../src/laugh-track.wav';

function App() {
	const [yeet, setYeet] = useState(0);
	const playAudio = () => {
		new Audio(laff).play();
		setYeet(yeet + 1);
	};
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" onClick={playAudio} />
				<p className="beep" style={{ fontSize: `2.5rem`, marginBottom: `0` }}>
					{yeet === 0
						? 'Press the speaker to play a laugh track.'
						: `Played the laugh track ${yeet} times.`}
				</p>
				<p style={{ fontSize: `.7rem`, marginTop: `0` }}>
					<code>
						Licensed under the Attribution License. <br />
						Sourced from{' '}
						<a href="https://freesound.org/people/lonemonk/sounds/72842/">
							freesound.org
						</a>
					</code>
				</p>
			</header>
		</div>
	);
}

export default App;
