import React from 'react';
import TopBar from './components/topbar/Topbar';
import './App.css';
import NavBar from './components/navbar/NavBar';

function App() {
	return (
		<div className="App">
			<div className="container-top-bar">
				<TopBar />
			</div>
			<NavBar />
		</div>
	);
}

export default App;
