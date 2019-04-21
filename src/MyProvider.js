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

	componentDidMount() {
		const foldersURL = 'http://localhost:9090/folders';
		const notesURL = 'http://localhost:9090/notes';
		const options = {
			method: 'GET'
		};
		//get folders
		fetch(foldersURL, options)
			.then(res => {
				if (!res.ok) {
					throw new Error('Something went wrong, please try again later.');
				}
				return res;
			})
			.then(res => res.json())
			.then(foldersData => {
				const folders = foldersData;
				this.setState({
					folders: folders,
					error: null
				});
				console.log(this.state);
			})
			.catch(err => {
				this.setState({
					error: err.message
				});
			});

		//get notes
		fetch(notesURL, options)
			.then(res => {
				if (!res.ok) {
					throw new Error('Something went wrong, please try again later.');
				}
				return res;
			})
			.then(res => res.json())
			.then(notesData => {
				const notes = notesData;
				this.setState({
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

	render() {
		return (
			<MyContext.Provider value={{ state: this.state }}>
				{this.props.children}
			</MyContext.Provider>
		);
	}
}

export default MyProvider;
