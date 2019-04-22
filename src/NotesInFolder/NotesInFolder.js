import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Folders from '../Folders/Folders';
import '../Notes/Notes.css';
import { MyContext } from '../MyProvider';

class NotesInFolder extends Component {
	filterNotes(notes, folderId) {
		const notesFiltered = notes.filter(note => note.folderId === folderId);
		console.log(notesFiltered);
		return notesFiltered.map((n, i) => {
			return (
				<div key={i}>
					<li key={n.id}>
						<Link to={`/notes/:${n.id}`}>{n.name}</Link>
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
	}

	render() {
		const folderId = window.location.pathname.substring(10);
		console.log(folderId);
		return (
			<div className='stageWrap'>
				<Folders />
				<div className='mainPage'>
					<div className='Notes'>
						<ul className='notes'>
							<MyContext.Consumer>
								{context => this.filterNotes(context.state.notes, folderId)}
							</MyContext.Consumer>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default NotesInFolder;
