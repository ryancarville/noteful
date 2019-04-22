import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import NotesInFolder from './NotesInFolder/NotesInFolder';
import { MyContext } from './MyProvider';
import ShowNote from './ShowNote/ShowNote';

import './App.css';

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
					<Switch>
						<Route exact path='/' render={() => <HomePage />} />
						<MyContext.Consumer>
							{context => (
								<Route
									path={`/folders/:${context.state.folders.id}`}
									render={() => <NotesInFolder />}
								/>
							)}
							{context => (
								<Route
									path={`/notes/:${context.state.notes.id}`}
									render={() => <ShowNote />}
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
