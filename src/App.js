import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import NotesInFolder from './NotesInFolder/NotesInFolder';
import ShowNote from './ShowNote/ShowNote';

import './App.css';
import Folders from './Folders/Folders';
import AddFolder from './AddFolder/AddFolder';
import AddNote from './AddNote/AddNote';

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

						<Route path='/folders/:folder_id' exact component={NotesInFolder} />

						<Route path='/notes/:note_id' exact component={ShowNote} />

						<Route path={`/addFolder`} component={AddFolder} />

						<Route path={`/addNote`} component={AddNote} />
					</Switch>
				</main>
			</div>
		);
	}
}

export default App;
