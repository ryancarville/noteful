import React, { Component } from 'react';
import { MyContext } from '../MyProvider';
import { Link } from 'react-router-dom';
import './AddNote.css';

export default class AddNote extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: '',
			name: '',
			modified: '',
			folderId: '',
			content: ''
		};
	}
	createNoteId(noteId) {
		this.setState({
			id: noteId
		});
	}

	createNoteName(noteName) {
		this.setState({
			name: noteName
		});
	}

	createNoteModified(noteModified) {
		this.setState({
			modified: noteModified
		});
	}

	createNoteFolderId(noteFolderId) {
		this.setState({
			folderId: noteFolderId
		});
		console.log(this.state.folderId);
	}

	createNoteContent(noteContent) {
		this.setState({
			content: noteContent
		});
	}
	render() {
		const noteInfo = {
			id: this.state.id,
			name: this.state.name,
			modified: this.state.modified,
			folderId: this.state.folderId,
			content: this.state.content
		};
		return (
			<div className='addNoteWrap'>
				<MyContext.Consumer>
					{context => (
						<form id='addNote' onSubmit={() => context.state.AddNote(noteInfo)}>
							<label htmlFor='noteId'>Note Id: </label>
							<br />
							<input
								type='text'
								id='noteIdInput'
								className='formInput'
								name='noteId'
								onChange={e => this.createNoteId(e.target.value)}
							/>
							<br />
							<label htmlFor='noteTitle'>Title: </label>
							<br />
							<input
								type='text'
								id='noteTitleInput'
								className='formInput'
								name='noteTitle'
								onChange={e => this.createNoteName(e.target.value)}
							/>
							<br />
							<label htmlFor='noteModified'>Note Modified: </label>
							<br />
							<input
								type='text'
								id='noteModifiedInput'
								className='formInput'
								name='noteModified'
								onChange={e => this.createNoteModified(e.target.value)}
							/>
							<br />
							<label htmlFor='folderId'>Folder: </label>
							<br />
							<select
								type='text'
								name='folderId'
								id='noteFolderIdInput'
								className='formInput'
								onChange={e => this.createNoteFolderId(e.target.value)}>
								<option value=''>No Folder</option>
								{context.state.folders.map((f, i) => {
									return <option value={f.id}>{f.name}</option>;
								})}
							</select>
							<br />
							<label htmlFor='noteBody'>Note Content: </label>
							<br />
							<input
								type='textarea'
								id='noteBodyInput'
								className='formInput'
								name='noteBody'
								onChange={e => this.createNoteContent(e.target.value)}
							/>
							<br />
							<Link to='/'>
								<button type='submit'>Add Note</button>
							</Link>
						</form>
					)}
				</MyContext.Consumer>
			</div>
		);
	}
}
