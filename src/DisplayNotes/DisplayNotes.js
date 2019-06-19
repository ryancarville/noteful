import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../MyProvider';
import PropTypes from 'prop-types';

export default class DisplayNotes extends Component {
	render() {
		//note id
		const noteId = this.props.noteId;
		return (
			<MyContext.Consumer>
				{context => {
					const note = context.state.notes.filter(note => note.id == noteId);

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
