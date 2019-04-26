import React, { Component } from 'react';

import FilterNotes from '../FilterNotes/FilterNotes';
import '../Notes/Notes.css';

console.log('NotesInFolders ran');
class NotesInFolder extends Component {
	render() {
		const folderId = window.location.pathname.substring(9);
		console.log(folderId);
		return (
			<div className='stageWrap'>
				<div className='mainPage'>
					<div className='Notes'>
						<ul className='notes'>
							<FilterNotes folderId={folderId} />
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default NotesInFolder;
