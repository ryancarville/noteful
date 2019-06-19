import React, { Component } from 'react';

import FilterNotes from '../FilterNotes/FilterNotes';
import '../Notes/Notes.css';

console.log('NotesInFolders ran');
class NotesInFolder extends Component {
	render() {
		const folderId = this.props.match.params.folder_id;
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
