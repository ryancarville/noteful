import React, { Component } from 'react';
import Folders from '../Folders/Folders';
import Notes from '../Notes/Notes';
import './HomePage.css';

class HomePage extends Component {
	render() {
		return (
			<div className='stageWrap'>
				<Notes />
			</div>
		);
	}
}

export default HomePage;
