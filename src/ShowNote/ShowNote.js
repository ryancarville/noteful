import React, { Component } from 'react';
import '../Notes/Notes.css';
import DisplayNotes from '../DisplayNotes/DisplayNotes';

class ShowNote extends Component {
	render() {
		const noteId = this.props.match.params.note_id;
		console.log(noteId);
		return (
			<div className='stageWrap'>
				<div className='mainPage'>
					<div className='Notes'>
						<ul className='notes'>
							<DisplayNotes noteId={noteId} />
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default ShowNote;
