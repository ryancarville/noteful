import React, { Component } from 'react';

import './Notes.css';
import { MyContext } from '../MyProvider';

console.log('notes');
class Notes extends Component {
	render() {
		console.log(this.context);
		return (
			<div className='mainPage'>
				<div className='Notes'>
					<MyContext.Consumer>
						{context => (
							<ul className='notes'>
								{context.state.notesFn(context.state.notes)}
							</ul>
						)}
					</MyContext.Consumer>
				</div>
			</div>
		);
	}
}
export default Notes;
