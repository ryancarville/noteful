import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../MyProvider';

export default class FilterNotes extends Component {
	render() {
		return (
			<MyContext.Consumer>
				{context => {
					const notes = context.state.notes;
					console.log(notes);
					const folderId = this.props.folderId;
					console.log(folderId);
					const notesFiltered = notes.filter(
						note => note.folderId === folderId
					);
					console.log(notesFiltered);
					notesFiltered.map((n, i) => {
						return (
							<div key={i}>
								<li key={n.id}>
									<Link to={`/notes/${n.id}`}>{n.name}</Link>
									<br />
									<br />
									Date Modified: {n.modified}
								</li>
								<button
									type='button'
									className='deleteNoteBTN'
									onClick={() => context.state.deleteNote(`${n.id}`)}>
									Delete Note
								</button>
							</div>
						);
					});
				}}
			</MyContext.Consumer>
		);
	}
}
