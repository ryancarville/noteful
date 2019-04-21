import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Notes.css';
import { MyContext } from '../MyProvider';

console.log('notes');
class Notes extends Component {
	notes(notes) {
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
	}

	render() {
		console.log(this.context);
		return (
			<div className='mainPage'>
				<div className='Notes'>
					<MyContext.Consumer>
						{context => (
							<ul className='notes'>{this.notes(context.state.notes)}</ul>
						)}
					</MyContext.Consumer>
				</div>
			</div>
		);
	}
}
export default Notes;
