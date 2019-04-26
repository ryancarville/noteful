import React, { Component } from 'react';
import { MyContext } from '../MyProvider';
import './AddNote.css';
import ValidationError from '../ValidationError/ValidationError';
import PropTypes from 'prop-types';

export default class AddNote extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: '',
			name: '',
			modified: '',
			folderId: '',
			content: '',
			idValid: false,
			nameValid: false,
			contentValid: false,
			formValid: false,
			validationMessages: {
				id: '',
				name: '',
				content: ''
			}
		};
	}
	createNoteId(noteId) {
		this.setState(
			{
				id: noteId
			},
			() => {
				this.validateID(noteId);
			}
		);
	}

	createNoteName(noteName) {
		this.setState(
			{
				name: noteName
			},
			() => {
				this.validateName(noteName);
			}
		);
	}

	createNoteModified() {
		let dateMod = new Date();
		let date =
			dateMod.getFullYear() +
			'-' +
			(dateMod.getMonth() + 1) +
			'-' +
			dateMod.getDate() +
			' ' +
			dateMod.getHours() +
			':' +
			dateMod.getMinutes() +
			':' +
			dateMod.getSeconds();

		this.setState({ modified: date });
	}

	createNoteFolderId(noteFolderId) {
		this.setState({
			folderId: noteFolderId
		});
	}

	createNoteContent(noteContent) {
		this.setState(
			{
				content: noteContent
			},
			() => {
				this.validateContent(noteContent);
			}
		);
	}

	//validation
	validateName(fieldValue) {
		const fieldErrors = { ...this.state.validationMessages };
		let hasError = false;

		fieldValue = fieldValue.trim();
		if (fieldValue.length === 0) {
			fieldErrors.name = 'Name is required';
			hasError = true;
		} else {
			if (fieldValue.length < 3) {
				fieldErrors.name = 'Name must be at least 3 characters long';
				hasError = true;
			} else {
				fieldErrors.name = '';
				hasError = false;
			}
		}

		this.setState(
			{
				validationMessages: fieldErrors,
				nameValid: !hasError
			},
			this.formValid
		);
	}

	validateID(fieldValue) {
		const fieldErrors = { ...this.state.validationMessages };
		let hasError = false;

		fieldValue = fieldValue.trim();
		if (fieldValue.length === 0) {
			fieldErrors.id = 'Id is required';
			hasError = true;
		} else {
			if (fieldValue.length < 10) {
				fieldErrors.id = 'Id must be at least 10 characters long';
				hasError = true;
			} else {
				if (
					!fieldValue.match(
						new RegExp(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/)
					)
				) {
					fieldErrors.id = 'Id must contain at least one number and one letter';
					hasError = true;
				} else {
					fieldErrors.id = '';
					hasError = false;
				}
			}
		}

		this.setState(
			{
				validationMessages: fieldErrors,
				idValid: !hasError
			},
			this.formValid
		);
	}

	validateContent(fieldValue) {
		const fieldErrors = { ...this.state.validationMessages };
		let hasError = false;

		fieldValue = fieldValue.trim();
		if (fieldValue.length === 0) {
			fieldErrors.content = 'Content is required';
			hasError = true;
		} else {
			if (fieldValue.length < 1) {
				fieldErrors.content = 'Content must be at least 1 characters long';
				hasError = true;
			} else {
				fieldErrors.content = '';
				hasError = false;
			}
		}

		this.setState(
			{
				validationMessages: fieldErrors,
				contentValid: !hasError
			},
			this.formValid
		);
	}

	formValid() {
		this.setState({
			formValid:
				this.state.nameValid && this.state.idValid && this.state.contentValid
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
						<form
							id='addNote'
							onSubmit={() => context.state.AddNote(noteInfo)}
							action='/'>
							<label htmlFor='noteId'>Note Id: </label>
							<br />
							<input
								type='text'
								id='noteIdInput'
								className='formInput'
								name='noteId'
								onChange={e => this.createNoteId(e.target.value)}
							/>
							<ValidationError
								hasError={!this.state.idValid}
								message={this.state.validationMessages.id}
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
							<ValidationError
								hasError={!this.state.nameValid}
								message={this.state.validationMessages.name}
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
									return (
										<option key={i} value={f.id}>
											{f.name}
										</option>
									);
								})}
							</select>
							<br />
							<label htmlFor='noteBody'>Note Content: </label>
							<br />
							<textarea
								id='noteBodyInput'
								className='formInput'
								name='noteBody'
								onChange={e => this.createNoteContent(e.target.value)}
							/>
							<ValidationError
								hasError={!this.state.contentValid}
								message={this.state.validationMessages.content}
							/>
							<br />
							<button
								type='submit'
								id='addNoteSubmitBtn'
								onClick={() => this.createNoteModified()}
								disabled={!this.state.formValid}>
								Add Note
							</button>
						</form>
					)}
				</MyContext.Consumer>
			</div>
		);
	}
}

AddNote.propType = {
	value: PropTypes.string
};
