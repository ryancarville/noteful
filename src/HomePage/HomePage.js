import React, { Component } from 'react';
import Folders from '../Folders/Folders';
import Notes from '../Notes/Notes';
import './HomePage.css';

class HomePage extends Component {
	render() {
		return (
			<main>
				<div className='stageWrap'>
					<Folders folders={this.props.folders} />
					<Notes notes={this.props.notes} />
				</div>
			</main>
		);
	}
}

export default HomePage;
