import React, { Component } from 'react';
import '../Notes/Notes.css';
import DisplayNotes from '../DisplayNotes/DisplayNotes';

class ShowNote extends Component {
	render() {
		const noteId = this.props.match.params.note_id;
		return (
			<div className='stageWrap'>
				<div className='mainPage'>
					<div className='Notes'>
						<ul className='notes'>
<<<<<<< HEAD
							<li key={note[0].id}>
								<Link to={`/notes/${note.id}`}>{note[0].name}</Link>
								<br />
								<p>{note[0].content}</p>
								<br />
								Date Modified: {note[0].modified}
							</li>
							<button type='button' className='deleteNoteBTN'>
								Delete Note
							</button>
=======
							<DisplayNotes noteId={noteId} />
>>>>>>> componentRefactor
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default ShowNote;
