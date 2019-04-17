import React, { Component } from 'react';
import Folders from '../Folders/Folders';
import Notes from '../Notes/Notes';
import './HomePage.css';

class HomePage extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		console.log(this.props.folders);
		console.log(this.props.notes);
		return (
			<div className='stageWrap'>
				<Folders folders={this.props.folders} />
				<Notes notes={this.props.notes} />
			</div>
		);
	}
}

export default HomePage;
