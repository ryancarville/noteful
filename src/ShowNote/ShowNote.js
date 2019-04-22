import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Folders from '../Folders/Folders';
import '../Notes/Notes.css';

class ShowNote extends Component {
	render() {
		const noteId = this.props.match.params.undefined.substring(1);
		const note = this.props.notes.filter(note => note.id === noteId);

		return (
			<div className='stageWrap'>
				<Folders folders={this.props.folders} />
				<div className='mainPage'>
					<div className='Notes'>
						<ul className='notes'>
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
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default ShowNote;
