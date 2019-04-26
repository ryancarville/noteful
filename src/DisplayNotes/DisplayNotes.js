import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../MyProvider';

export default class DisplayNotes extends Component {
	render() {
		return (
			<MyContext.Consumer>
				{context => {
					const noteId = this.props.noteId;

					const note = context.state.notes.filter(note => note.id === noteId);
					console.log(note[0]);
					return (
						<>
							<li key={note.id}>
								<p>{note[0].name}</p>
								<br />
								<p>{note[0].content}</p>
								<br />
								Date Modified: {note[0].modified}
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
