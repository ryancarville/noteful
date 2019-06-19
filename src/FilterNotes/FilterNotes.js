import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../MyProvider';
import PropTypes from 'prop-types';

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
					return notesFiltered.map((n, i) => {
						return (
							<div key={i}>
								<li key={n.id}>
									<Link to={`/notes/${n.id}`}>{n.note_name}</Link>
									<br />
									<br />
									Date Modified: {n.date_mod}
								</li>
								<button
									type='button'
									className='deleteNoteBTN'
									onClick={() => context.state.handelDelete(`${n.id}`)}>
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

FilterNotes.propTypes = {
	value: PropTypes.array
};
