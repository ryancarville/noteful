import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import NotesInFolder from './NotesInFolder/NotesInFolder';
import Notes from './Notes/Notes';
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
					path='/folders'
					render={props => (
						<NotesInFolder
							{...props}
							folders={this.state.folders}
							notes={this.state.notes}
						/>
					)}
				/>
				<Route
					path='/notes'
					render={props => (
						<Notes
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
