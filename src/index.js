import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MyProvider from './MyProvider';
import './index.css';
import App from './App';

ReactDOM.render(
	<BrowserRouter>
		<MyProvider>
			<App />
		</MyProvider>
	</BrowserRouter>,
	document.getElementById('root')
);
