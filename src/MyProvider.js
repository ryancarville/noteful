import React, { Component } from 'react';

export const MyContext = React.createContext();
class MyProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			folders: [],
			notes: [],
			deleteNote: () => {}
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
