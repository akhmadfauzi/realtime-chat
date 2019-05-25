import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { initializedFirebase } from './components/push-notification';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const store = createStore(() => ({}));
// Disable for UI construction
// if ('serviceWorker' in navigator) {
// 	navigator.serviceWorker
// 		.register('./firebase-messaging-sw.js')
// 		.then(function () { console.log("Service Worker Registered"); })
// 		.catch(err=>{
// 			console.log('error occured')
// 		});
// }

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>,
    document.getElementById('root'));

// Disable for UI construction
// initializedFirebase();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
