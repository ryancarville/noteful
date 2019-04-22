import React, { Component } from 'react';
import { MyContext } from '../MyProvider';

import './Folders.css';

class Folders extends Component {
	render() {
		return (
			<div className='sideBar'>
				<ul className='folders'>
					<MyContext.Consumer>
						{context => {
							context.state.foldersFn(context.state.folders);
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
