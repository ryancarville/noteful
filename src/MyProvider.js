import React, { Component } from 'react';
export const MyContext = React.createContext();
class MyProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			folders: [],
			notes: [],
			handelDelete: noteId => {
				console.log(noteId);
				const options = {
					method: 'DELETE',
					headers: {
						'content-type': 'application/json'
					}
				};
				fetch(`http://localhost:9090/notes/` + noteId, options).then(note => {
					console.log(note);
					this.callAPIs();
				});
			},

			AddFolder: folderInfo => {
				const options = {
					method: 'POST',
					body: JSON.stringify(folderInfo),
					headers: {
						'content-type': 'application/json'
					}
				};
				fetch(`http://localhost:9090/folders/`, options).then(folderInfo => {
					console.log(folderInfo);
					this.callAPIs();
				});
			},
			AddNote: noteInfo => {
				const options = {
					method: 'POST',
					body: JSON.stringify(noteInfo),
					headers: {
						'content-type': 'application/json'
					}
				};
				fetch(`http://localhost:9090/notes/`, options).then(noteInfo => {
					console.log(noteInfo);
					this.callAPIs();
				});
			}
		};

		console.log(this.state);
	}

	async callAPIs() {
		const api_endpoint = 'http://localhost:9090';
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
				console.log(this.state);
			})
			.catch(err => {
				this.setState({
					error: err.message
				});
			});
	}

	componentDidMount() {
		console.log('Component Did Mount');
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
