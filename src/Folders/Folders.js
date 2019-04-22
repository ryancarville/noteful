import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Folders.css';

class Folders extends Component {
	render() {
		const folders = this.props.folders.map((f, i) => {
			return (
				<Link to={`/folders/${f.id}`} key={f.id}>
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
