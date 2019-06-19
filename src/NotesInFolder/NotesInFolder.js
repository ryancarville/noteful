import React, { Component } from 'react';

import FilterNotes from '../FilterNotes/FilterNotes';
import '../Notes/Notes.css';

class NotesInFolder extends Component {
	render() {
<<<<<<< HEAD
		const folderId = this.props.match.params.undefined.substring(1);
		const notes = this.props.notes.filter(note => note.folderId === folderId);
		const note = notes.map((n, i) => {
			return (
				<div key={i}>
					<li key={n.id}>
						<Link to={`/notes/${n.id}`}>{n.name}</Link>
						<br />
						<br />
						Date Modified: {n.modified}
					</li>

					<button type='button' className='deleteNoteBTN'>
						Delete Note
					</button>
				</div>
			);
		});

=======
		const folderId = this.props.match.params.folder_id;
>>>>>>> componentRefactor
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
