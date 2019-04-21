import React, { Component } from 'react';

export const MyContext = React.createContext();
class MyProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			folders: [],
			notes: []
		};
		console.log(this.state);
	}

	callAPIs() {
		const api_endpoint = 'http://localhost:9090';

		//get folders and notes
		Promise.all([
			fetch(`${api_endpoint}/notes`),
			fetch(`${api_endpoint}/folders`)
		]);
		if (!notesRes.ok) {
			return notesRes.json().then(e => Promise.reject(e));
		}
		if (!foldersRes.ok) {
			return foldersRes
				.json()
				.then(e => Promise.reject(e));
		}
		.then(res => Promise.all(res.map(r => r.json())))
		.then(([notesRes, foldersRes]) => {
			notesRes.then(notesRes => {
				this.setState({
					notes: notesRes,
					error: null
				});
				console.log(this.state);
			});
		
		foldersRes
			.then(foldersRes => {
				this.setState({
					folders: foldersRes,
					error: null
				});
				console.log(this.state);
			})
		})
			.catch(err => {
				this.setState({
					error: err.message
				});
			});
	}

	async componentDidMount() {
		console.log(this.state);
		await this.callAPIs();
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
