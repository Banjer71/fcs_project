import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TopBar from './components/topbar/Topbar';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Home from './components/pages/Home';
import Elaborations from './components/pages/Elaborations';
import Gallery from './components/pages/Gallery';
import Collaborations from './components/pages/Collaborations';
import Contacts from './components/pages/Contacts';
import PrivateGallery from './components/pages/PrivateGallery'; 
import Fabrics from './components/pages/Fabrics';

function App() {
	return (
		<div className="App">
		<Router>
			<div className="container-top-bar">
				<TopBar />
			</div>
			<NavBar />
			
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/fabrics' component={Fabrics} />
					<Route exact path='/privategallery' component={PrivateGallery} />
					<Route exact path='/elaborations' component={Elaborations} />
					<Route exact path='/collaborations' component={Collaborations} />
					<Route exact path='/contacts' component={Contacts} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
