import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../MyProvider';
import PropTypes from 'prop-types';

export default class DisplayNotes extends Component {
	render() {
		const noteId = this.props.noteId;
		console.log(noteId);
		return (
			<MyContext.Consumer>
				{context => {
					console.log(context.state.notes);
					const note = context.state.notes.filter(note => note.id === noteId);
					console.log(note);
					return (
						<>
							<li key={note.id}>
								<p>{note[0].note_name}</p>
								<br />
								<p>{note[0].content}</p>
								<br />
								Date Modified: {note[0].date_mod}
							</li>
							<Link to='/'>
								<button
									type='button'
									className='deleteNoteBTN'
									onClick={() => context.state.handelDelete(noteId)}>
									Delete Note
								</button>
							</Link>
						</>
					);
				}}
			</MyContext.Consumer>
		);
	}
}

DisplayNotes.propTypes = {
	value: PropTypes.array
};
