import React, { Component } from 'react';
import Folders from '../Folders/Folders';
import '../Notes/Notes.css';
import { MyContext } from '../MyProvider';

console.log('ShowNote ran');
class ShowNote extends Component {
	displayNote(notes, noteId) {
		const note = notes.filter(note => note.id === noteId);
		console.log(note);
		return (
			<li key={note.id}>
				<p>{note.name}</p>
				<br />
				<p>{note.content}</p>
				<br />
				Date Modified: {note.modified}
				<button type='button' className='deleteNoteBTN'>
					Delete Note
				</button>
			</li>
		);
	}
	render() {
		const noteId = window.location.pathname.substring(8);
		console.log(noteId);
		return (
			<div className='stageWrap'>
				<Folders />
				<div className='mainPage'>
					<div className='Notes'>
						<ul className='notes'>
							<MyContext.Consumer>
								{context => this.displayNote(context.state.notes, noteId)}
							</MyContext.Consumer>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default ShowNote;
