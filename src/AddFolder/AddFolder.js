import React, { Component } from 'react';
import { MyContext } from '../MyProvider';
import ValidationError from '../ValidationError/ValidationError';
import './AddFolder.css';
import PropTypes from 'prop-types';

export default class AddFolder extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			nameValid: false,
			validationMessages: {
				name: ''
			}
		};
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

	formValid() {
		this.setState({
			formValid: this.state.nameValid
		});
	}

	render() {
		const folderInfo = { folder_name: this.state.name };
		return (
			<div className='addFolderWrap'>
				<MyContext.Consumer>
					{context => (
						<form
							id='addFolder'
							onSubmit={() => context.state.AddFolder(folderInfo)}
							action='/'>
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
