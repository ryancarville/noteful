import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import NotesInFolder from './NotesInFolder/NotesInFolder';
import { MyContext } from './MyProvider';
import ShowNote from './ShowNote/ShowNote';

import './App.css';

class App extends Component {
	render() {
		console.log(this.context);
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
							{state => (
								<Route
									path={`/folders/:${state.folders.id}`}
									render={() => <NotesInFolder />}
								/>
							)}
							{state => (
								<Route
									path={`/notes/:${state.notes.id}`}
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
