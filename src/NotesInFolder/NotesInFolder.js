import React, { Component } from 'react';
import Folders from '../Folders/Folders';

class NotesInFolder extends Component {
	render() {
		const notes = this.props.notes.find((n, i) => {
			return (
				<>
					<li key={n.id}>
						{n.name}
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
			<div>
				<Folders folders={this.props.folders} />
				Hello
			</div>
		);
	}
}

export default NotesInFolder;
