import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MyProvider from './MyProvider';
import './index.css';
import App from './App';

console.log('Index ran');
ReactDOM.render(
	<MyProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</MyProvider>,
	document.getElementById('root')
);
