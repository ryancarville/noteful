import React, { Component } from 'react';

import '../Notes/Notes.css';
import { MyContext } from '../MyProvider';

console.log('ShowNote ran');
class ShowNote extends Component {
	displayNote(notes, noteId) {
		let note = notes.filter(note => note.id === noteId);
		console.log(note[0]);
		return (
			<li key={note.id}>
				<p>{note[0].name}</p>
				<br />
				<p>{note[0].content}</p>
				<br />
				Date Modified: {note[0].modified}
			</li>
		);
	}
	render() {
		const noteId = window.location.pathname.substring(7);
		console.log(noteId);
		return (
			<div className='stageWrap'>
				<div className='mainPage'>
					<div className='Notes'>
						<ul className='notes'>
							<MyContext.Consumer>
								{context => this.displayNote(context.state.notes, noteId)}
							</MyContext.Consumer>
							<button type='button' className='deleteNoteBTN'>
								Delete Note
							</button>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default ShowNote;
