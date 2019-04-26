import React, { Component } from 'react';
import { MyContext } from '../MyProvider';
import ValidationError from '../ValidationError/ValidationError';
import './AddFolder.css';
import PropTypes from 'prop-types';

export default class AddFolder extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: '',
			name: '',
			idValid: false,
			nameValid: false,
			validationMessages: {
				id: '',
				name: ''
			}
		};
	}
	createFolderId(folderId) {
		this.setState(
			{
				id: folderId
			},
			() => {
				this.validateID(folderId);
			}
		);
	}

	createFolderName(folderName) {
		this.setState(
			{
				name: folderName
			},
			() => {
				this.validateName(folderName);
			}
		);
	}

	//validation

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
			if (fieldValue.length < 7) {
				fieldErrors.id = 'Id must be at least 7 characters long';
				hasError = true;
			} else {
				fieldErrors.id = '';
				hasError = false;
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

	formValid() {
		this.setState({
			formValid: this.state.nameValid && this.state.idValid
		});
	}

	render() {
		const folderInfo = { id: this.state.id, name: this.state.name };
		return (
			<div className='addFolderWrap'>
				<MyContext.Consumer>
					{context => (
						<form
							id='addFolder'
							onSubmit={() => context.state.AddFolder(folderInfo)}
							action='/'>
							<label htmlFor='folderId'>Folder Id: </label>
							<br />
							<input
								type='text'
								name='folderId'
								id='folderIdInput'
								className='formInput'
								onChange={e => this.createFolderId(e.target.value)}
							/>
							<br />
							<ValidationError
								hasError={!this.state.idValid}
								message={this.state.validationMessages.id}
							/>
							<br />
							<label htmlFor='folderName'>Folder Name: </label>
							<br />
							<input
								type='text'
								id='folderName'
								name='folderName'
								className='formInput'
								onChange={e => this.createFolderName(e.target.value)}
							/>
							<br />
							<ValidationError
								hasError={!this.state.nameValid}
								message={this.state.validationMessages.name}
							/>
							<br />
							<button
								type='submit'
								id='addFolderSubmitBtn'
								disabled={!this.state.formValid}>
								Add Folder
							</button>
						</form>
					)}
				</MyContext.Consumer>
			</div>
		);
	}
}

AddFolder.propTypes = {
	value: PropTypes.string
};
