import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import NotesInFolder from './NotesInFolder/NotesInFolder';

import ShowNote from './ShowNote/ShowNote';
import store from './STORE/STORE';

import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			folders: store.folders,
			notes: store.notes
		};
	}
	routes() {
		return (
			<Switch>
				<Route
					exact
					path='/'
					render={props => (
						<HomePage
							{...props}
							folders={this.state.folders}
							notes={this.state.notes}
						/>
					)}
				/>
				<Route
					path={`/folders/:${this.state.folders.id}`}
					render={props => (
						<NotesInFolder
							{...props}
							folders={this.state.folders}
							notes={this.state.notes}
						/>
					)}
				/>
				<Route
					path={`/notes/:${this.state.notes.id}`}
					render={props => (
						<ShowNote
							{...props}
							folders={this.state.folders}
							notes={this.state.notes}
						/>
					)}
				/>
			</Switch>
		);
	}
	render() {
		return (
			<div className='App'>
				<header className='header'>
					<Link to='/'>
						<h4>Noteful</h4>
					</Link>
				</header>
				<main>{this.routes()}</main>
			</div>
		);
	}
}

export default App;
