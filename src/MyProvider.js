import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export const MyContext = React.createContext();
class MyProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			folders: [],
			notes: [],
			foldersFn: folders => {
				folders.map((f, i) => {
					return (
						<Link to={`/folders/:${f.id}`} key={f.id}>
							<li key={f.id}>{f.name}</li>
						</Link>
					);
				});
				console.log('Folder Map Called');
			},
			notesFn: notes => {
				notes.map((n, i) => {
					return (
						<div key={i}>
							<li key={n.id}>
								<Link to={`/notes/:${n.id}`}>{n.name}</Link>
								<br />
								<br />
								Date Modified: {n.modified}
							</li>

							<button type='button' className='deleteNoteBTN'>
								Delete Note
							</button>
						</div>
					);
				});
				console.log('Notes Map Called');
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
