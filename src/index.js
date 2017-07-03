import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Admin from './components/Admin';
import Checkout from './components/Checkout';

import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import ecommerce from './reducers'

let store = createStore(ecommerce, compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)
);

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<div>
				<Route exact path="/" component={App} />
				<Route path="/admin" component={Admin}/>
			</div>
		</Router>
	</Provider>,
	document.getElementById('root')
)

registerServiceWorker();
