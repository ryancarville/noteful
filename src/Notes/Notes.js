import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Notes.css';

class Notes extends Component {
	render() {
		const notes = this.props.notes.map((n, i) => {
			return (
				<>
					<li key={n.id}>
						<Link to={`/notes/:${n.id}`}>{n.name}</Link>
						<br />
						<br />
						Date Modified: {n.modified}
					</li>

					<button type='button' className='deleteNoteBTN'>
						Delete Note
					</button>
				</>
			);
		});
		return (
			<div className='mainPage'>
				<div className='Notes'>
					<ul className='notes'>{notes}</ul>
				</div>
			</div>
		);
	}
}
export default Notes;
