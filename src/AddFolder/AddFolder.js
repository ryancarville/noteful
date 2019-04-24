import React, { Component } from 'react';
import { MyContext } from '../MyProvider';
import { Link } from 'react-router-dom';

export default class AddFolder extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: '',
			name: ''
		};
	}
	createFolderId(folderId) {
		this.setState({
			id: folderId
		});
	}

	createFolderName(folderName) {
		this.setState({
			name: folderName
		});
	}

	render() {
		const folderInfo = { id: this.state.id, name: this.state.name };
		return (
			<MyContext.Consumer>
				{context => (
					<form
						id='addFolder'
						onSubmit={() => context.state.AddFolder(folderInfo)}>
						<label htmlFor='folderId'>Folder Id: </label>
						<input
							type='text'
							name='folderId'
							id='folderIdInput'
							className='formInput'
							onChange={e => this.createFolderId(e.target.value)}
						/>
						<label htmlFor='folderName'>Folder Name: </label>
						<input
							type='text'
							id='folderName'
							name='folderName'
							className='formInput'
							onChange={e => this.createFolderName(e.target.value)}
						/>

						<button type='submit'>Add Folder</button>
					</form>
				)}
			</MyContext.Consumer>
		);
	}
}
