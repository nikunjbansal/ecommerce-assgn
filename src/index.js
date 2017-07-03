import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import AdminContainer from './containers/AdminContainer';
import CheckoutContainer from './containers/CheckoutContainer'
import Success from './components/Success'

import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk';

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'

import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'

import ecommerce from './reducers'

const history = createHistory()

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    ecommerce,
    router: routerReducer
  }), compose(
  		applyMiddleware(routerMiddleware(history)),
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)
)

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

// let store = createStore(ecommerce, compose(
// 		applyMiddleware(thunk),
// 		window.devToolsExtension ? window.devToolsExtension() : f => f
// 	)
// );

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<div>
				<Route exact path="/" component={App} />
				<Route path="/checkout" component={CheckoutContainer} />
				<Route path="/success" component={Success} />
				<Route path="/admin" component={AdminContainer}/>
			</div>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
)

registerServiceWorker();
