import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Folders from '../Folders/Folders';
import '../Notes/Notes.css';

class NotesInFolder extends Component {
	render() {
		console.log(this.props.match.params);
		const folderId = this.props.match.params.undefined.substring(1);
		const notes = this.props.notes.filter(note => note.folderId === folderId);
		const note = notes.map((n, i) => {
			return (
				<>
					<li key={n.id}>
						<Link to={`/notes/:${n.id}`}>{n.name}</Link>
						<br />
						<br />
						Date Modified: {n.modified}
					</li>

					<button type='button' className='deleteNoteBTN'>
						Delete Note
					</button>
				</>
			);
		});

		return (
			<div className='stageWrap'>
				<Folders folders={this.props.folders} />
				<div className='mainPage'>
					<div className='Notes'>
						<ul className='notes'>{note}</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default NotesInFolder;
