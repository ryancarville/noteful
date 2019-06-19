import React, { Component } from 'react';
import { MyContext } from '../MyProvider';
import { Link } from 'react-router-dom';
import './Folders.css';
import PropTypes from 'prop-types';

class Folders extends Component {
	render() {
<<<<<<< HEAD
		const folders = this.props.folders.map((f, i) => {
			return (
				<Link to={`/folders/${f.id}`} key={f.id}>
					<li key={f.id}>{f.name}</li>
				</Link>
			);
		});

=======
>>>>>>> componentRefactor
		return (
			<div className='sideBar'>
				<ul className='folders'>
					<MyContext.Consumer>
						{context =>
							context.state.folders.map((f, i) => {
								return (
									<Link to={`/folders/${f.id}`} key={f.id}>
										<li key={f.id}>{f.folder_name}</li>
									</Link>
								);
							})
						}
					</MyContext.Consumer>
				</ul>
				<div className='sideBarBtn'>
					<Link to='/addFolder'>
						<button type='button' id='addFolderBtn' className='sideBarBtn'>
							+ Folder
						</button>
					</Link>
					<Link to='/addNote'>
						<button type='button' id='addNoteBtn' className='sideBarBtn'>
							+ Note
						</button>
					</Link>
				</div>
			</div>
		);
	}
}

export default Folders;

Folders.propTypes = {
	value: PropTypes.array
};
