import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Notes.css';
import { MyContext } from '../MyProvider';

console.log('Notes ran');
class Notes extends Component {
	handelDelete(noteId) {
		console.log(noteId);
		fetch(`http://localhost:9090/notes/` + noteId, {
			method: 'DELETE',
			headers: {
				'content-type': 'application/json'
			}
		});
	}
	render() {
		return (
			<div className='mainPage'>
				<div className='Notes'>
					<ul className='notes'>
						<MyContext.Consumer>
							{context =>
								context.state.notes.map((n, i) => {
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
												onClick={this.handelDelete(`${n.id}`)}>
												Delete Note
											</button>
										</div>
									);
								})
							}
						</MyContext.Consumer>
					</ul>
				</div>
			</div>
		);
	}
}
export default Notes;
