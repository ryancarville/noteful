import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Notes.css';
import store_p from '../STORE/STORE';

class Notes extends Component {
	render() {
		const store = store_p.notes;
		const notes = store.map((n, i) => {
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
			<div className='Notes'>
				<ul className='notes'>{notes}</ul>
			</div>
		);
	}
}
export default Notes;
