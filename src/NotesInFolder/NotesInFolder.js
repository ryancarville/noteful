import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../Notes/Notes.css';
import { MyContext } from '../MyProvider';

console.log('NotesInFolders ran');
class NotesInFolder extends Component {
	filterNotes(notes, folderId, deleteNote) {
		const notesFiltered = notes.filter(note => note.folderId === folderId);
		console.log(notesFiltered);
		return notesFiltered.map((n, i) => {
			return (
				<div key={i}>
					<li key={n.id}>
						<Link to={`/notes/${n.id}`}>{n.name}</Link>
						<br />
						<br />
						Date Modified: {n.modified}
					</li>

					<button
						type='button'
						className='deleteNoteBTN'
						onClick={() => deleteNote(`${n.id}`)}>
						Delete Note
					</button>
				</div>
			);
		});
	}

	render() {
		const folderId = window.location.pathname.substring(9);
		console.log(folderId);
		return (
			<div className='stageWrap'>
				<div className='mainPage'>
					<div className='Notes'>
						<ul className='notes'>
							<MyContext.Consumer>
								{context =>
									this.filterNotes(
										context.state.notes,
										folderId,
										context.state.handelDelete
									)
								}
							</MyContext.Consumer>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default NotesInFolder;
