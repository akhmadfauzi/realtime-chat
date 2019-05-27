import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { initializedFirebase } from './components/push-notification';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import reducer from './redux/reducers';

const middlewares = [thunk];
if (process.env.NODE_ENV === `development`) {
	middlewares.push(logger);
}

if ('serviceWorker' in navigator) {
	navigator.serviceWorker
	.register('../firebase-messaging-sw.js')
	.then(function () { console.log("Service Worker Registered"); })
	.catch(err=>{
		console.log('error occured')
	});
}

initializedFirebase();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(...middlewares)));
ReactDOM.render(
	<Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>,
	document.getElementById('root'));
	
	
	
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
