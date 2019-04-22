import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { MyContext } from './MyProvider';
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
						<MyContext.Consumer>
							{context => (
								<Route
									path={`/folders/:${context.state.folders.id}`}
									component={NotesInFolder}
								/>
							)}
						</MyContext.Consumer>
						<MyContext.Consumer>
							{context => (
								<Route
									path={`/notes/:${context.state.notes.id}`}
									component={ShowNote}
								/>
							)}
						</MyContext.Consumer>
					</Switch>
				</main>
			</div>
		);
	}
}

export default App;
