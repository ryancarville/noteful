import React, { Component } from 'react';

export const MyContext = React.createContext();
class MyProvider extends Component {
	//shared state
	constructor(props) {
		super(props);
		this.state = {
			folders: [],
			notes: [],
			//hadnle delete events
			handelDelete: noteId => {
				const options = {
					method: 'DELETE',
					headers: {
						'content-type': 'application/json'
					}
				};
				fetch(
					`https://stormy-badlands-14920.herokuapp.com/api/notes/` + noteId,
					options
				).then(note => {
					this.callAPIs();
				});
			},
			//handle adding of new folders
			AddFolder: folderInfo => {
				const options = {
					method: 'POST',
					body: JSON.stringify(folderInfo),
					headers: {
						'content-type': 'application/json'
					}
				};
				fetch(
					`https://stormy-badlands-14920.herokuapp.com/api/folders`,
					options
				).then(folderInfo => {
					this.callAPIs();
				});
			},
			//handle the adding of new notes
			AddNote: noteInfo => {
				const options = {
					method: 'POST',
					body: JSON.stringify(noteInfo),
					headers: {
						'content-type': 'application/json'
					}
				};
				fetch(
					`https://stormy-badlands-14920.herokuapp.com/api/notes/`,
					options
				).then(noteInfo => {
					this.callAPIs();
				});
			}
		};
	}

	//main api fetch to server for data
	async callAPIs() {
		//api endpoint
		const api_endpoint = 'https://stormy-badlands-14920.herokuapp.com/api';
		//get folders and notes
		await Promise.all([
			fetch(`${api_endpoint}/notes`),
			fetch(`${api_endpoint}/folders`)
		])
			.then(([notesRes, foldersRes]) => {
				if (!notesRes.ok) return notesRes.json().then(e => Promise.reject(e));
				if (!foldersRes.ok)
					return foldersRes.json().then(e => Promise.reject(e));
				return Promise.all([notesRes.json(), foldersRes.json()]);
			})
			.then(([notes, folders]) => {
				this.setState({
					folders: folders,
					notes: notes,
					error: null
				});
			})
			.catch(err => {
				this.setState({
					error: err.message
				});
			});
	}

	componentDidMount() {
		this.callAPIs();
	}
	render() {
		return (
			<MyContext.Provider value={{ state: this.state }}>
				{this.props.children}
			</MyContext.Provider>
		);
	}
}

export default MyProvider;
