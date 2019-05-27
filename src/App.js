import React from 'react';
import { connect } from 'react-redux'
import './styles/app.scss';
import Header from './containers/Header';
import Sidebar from './containers/Sidebar';
import Content from './containers/Content';
import Footer from './containers/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faCoffee, faBars, faPaperPlane, faHeart, faTimes } from '@fortawesome/free-solid-svg-icons'
import Login from './components/Login';
import {fetchLoggedUser} from './redux/actions';

library.add(faCheckSquare, faCoffee, faBars, faPaperPlane, faHeart, faTimes)


function checkUser(loggedUser,fn) {
	if (loggedUser) {
		fn(loggedUser.username);
	}
}

function App(props) {
	const loggedUser = JSON.parse(window.sessionStorage.getItem('loggedUser'));
	console.log(props);
	if(!props.user){
		checkUser(loggedUser,props.fetchLoggedUser);
	}

	if (props.user || loggedUser) {
		return (
			<div className="app">
				<Header></Header>
				<Sidebar></Sidebar>
				<Content></Content>
				<Footer></Footer>
			</div>
		);
	}
	else {
		return (
			<div className="app">
				<Login></Login>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	user: state.user
})

const mapDispatchToProps = {
	fetchLoggedUser
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
