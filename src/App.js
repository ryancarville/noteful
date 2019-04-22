import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import NotesInFolder from './NotesInFolder/NotesInFolder';
import ShowNote from './ShowNote/ShowNote';

import './App.css';
import Folders from './Folders/Folders';

console.log('App ran');
class App extends Component {
	render() {
		return (
			<div className='App'>
				<header className='header'>
					<Link to='/'>
						<h4>Noteful</h4>
					</Link>
				</header>
				<main>
					<Folders />
					<Switch>
						<Route exact path='/' component={HomePage} />

						<Route path={`/folders`} component={NotesInFolder} />

						<Route path={`/notes`} component={ShowNote} />
					</Switch>
				</main>
			</div>
		);
	}
}

export default App;
