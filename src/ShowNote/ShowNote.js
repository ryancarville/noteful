import React, { Component } from 'react';

import '../Notes/Notes.css';

import DisplayNotes from '../DisplayNotes/DisplayNotes';

console.log('ShowNote ran');
class ShowNote extends Component {
	render() {
		const noteId = window.location.pathname.substring(7);
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
