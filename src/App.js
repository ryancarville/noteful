import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import Folders from './Folders/Folders';
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
					component={HomePage}
					folders={this.state.folders}
					notes={this.state.notes}
				/>
				<Route
					path='/folders'
					component={Folders}
					folders={this.state.folders}
				/>
				<Route path='/notes' component={Notes} notes={this.state.notes} />
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
