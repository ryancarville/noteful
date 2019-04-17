import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Notes from '../Notes/Notes';
import './Folders.css';

class Folders extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		console.log(this.props.folders);
		console.log(this.props.notes);

		const folders = this.props.folders.map((f, i) => {
			return (
				<Link to={`/folders/:${f.id}`}>
					<li key={f.id}>{f.name}</li>
				</Link>
			);
		});

		return (
			<>
				<div className='sideBar'>
					<ul className='folders'>
						{folders}
						<button type='button'>Add Folder</button>
					</ul>
				</div>
			</>
		);
	}
}
export default Folders;
