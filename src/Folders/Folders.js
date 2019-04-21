import React, { Component } from 'react';
import { MyContext } from '../MyProvider';
import { Link } from 'react-router-dom';
import './Folders.css';

class Folders extends Component {
	foldersFn(folders) {
		folders.map((f, i) => {
			return (
				<Link to={`/folders/:${f.id}`} key={f.id}>
					<li key={f.id}>{f.name}</li>
				</Link>
			);
		});
	}
	render() {
		return (
			<div className='sideBar'>
				<ul className='folders'>
					<MyContext.Consumer>
						{context => {
							this.foldersFn(context.state.folders);
						}}
					</MyContext.Consumer>
					<button type='button'>Add Folder</button>
				</ul>
			</div>
		);
	}
}
console.log('folders');
export default Folders;
