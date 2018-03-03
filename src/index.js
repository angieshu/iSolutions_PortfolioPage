import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/app/App';
// import Media from './components/Media';

import './index.css';

// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<BrowserRouter>
		<div>
			<Route exact path='/' component={App} />
		</div>
	</BrowserRouter>,
document.getElementById('root'));
