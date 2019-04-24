import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Notes.css';
import { MyContext } from '../MyProvider';

console.log('Notes ran');
class Notes extends Component {
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
											<Link to='/'>
												<button
													type='button'
													className='deleteNoteBTN'
													onClick={() => context.state.handelDelete(`${n.id}`)}>
													Delete Note
												</button>
											</Link>
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
