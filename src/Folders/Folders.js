import React, { Component } from 'react';
import { MyContext } from '../MyProvider';
import { Link } from 'react-router-dom';
import './Folders.css';

console.log('Folders ran');

class Folders extends Component {
	render() {
		return (
			<div className='sideBar'>
				<ul className='folders'>
					<MyContext.Consumer>
						{context =>
							context.state.folders.map((f, i) => {
								return (
									<Link to={`/folders/:${f.id}`} key={f.id}>
										<li key={f.id}>{f.name}</li>
									</Link>
								);
							})
						}
					</MyContext.Consumer>
					<button type='button'>Add Folder</button>
				</ul>
			</div>
		);
	}
}

export default Folders;
