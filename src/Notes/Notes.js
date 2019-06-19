import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Notes.css';
import { MyContext } from '../MyProvider';
import PropTypes from 'prop-types';

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
										<>
											<li key={n.id}>
												<Link to={`/notes/${n.id}`} key={'link' + n.id}>
													{n.note_name}
												</Link>
												<br />
												<br />
												Date Modified: {n.date_mod}
											</li>
											<Link to='/' key={'Btnlink' + i}>
												<button
													key={i}
													type='button'
													className='deleteNoteBTN'
													onClick={() => context.state.handelDelete(`${n.id}`)}>
													Delete Note
												</button>
											</Link>
										</>
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

Notes.propTypes = {
	value: PropTypes.array
};
