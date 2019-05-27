import React, { Component } from 'react';
import firebase from 'firebase/app';
import { connect } from 'react-redux';
import '../styles/chat-room.scss';
import ChatMessage from './ChatMessage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserProfile from '../components/UserProfile';
import { sendMessage } from '../redux/actions';
class ChatRoom extends Component {

	onInputHandler(e) {
		const target = e.target;
		if (target.value !== '') {
			target.style.height = '20px';
			target.setAttribute('style', 'height:' + target.scrollHeight + 'px !important;')
		} else {
			target.style.height = 'auto';
			target.setAttribute('style', 'height:20px !important;')
		}
	}

	getName(id) {
		// console.log(this.props.users[id].username)
		// let users = ["Barry Fleming", "Ikra Carrillo", "Leanna Orr", "Hammad Garza", "Zarah Burrows", "Harlee Gallagher", "Bert Brown", "Felicity Herrera", "Hailie Wise", "Andreas Wilkinson"];
		// return users[id];
		return this.props.users[id].username;
	}

	participationCheker(sender, receiver) {
		firebase
			.database()
			.ref('participants/' + sender)
			.once('value', (snapshot) => {
				return snapshot.val()
			})
			.then(senderSnapshot => {
				firebase.database()
					.ref('participants/' + receiver)
					.once('value', (receiverSnapshot) => {
						const sender = senderSnapshot.val();
						const receiver = receiverSnapshot.val();
						if (!sender || !receiver) {
							// create new conversation
							// with participants of these guy
						}
					})
			})
	}

	onSubmitHandler() {
		const text = document.getElementById('text');
		const sender = JSON.parse(window.sessionStorage.getItem('loggedUser'));
		const receiver = this.props.match.params.id;
		this.participationCheker(sender.username, receiver)
		text.value = '';
	}

	getMessages() {
		firebase.database().ref('messages').limitToLast(1).once('child_added', (snapshot) => {
			console.log('key', snapshot.key);
			console.log('val', snapshot.val().text);
		})
	}


	getChatMessages() {
		return '';
		//<ChatMessage isSender={false} text="lorem ipsum"></ChatMessage>
	}

	render() {
		const id = this.props.match.params.id;
		const profile = this.props.users[id] ? <UserProfile name={this.getName(id)}></UserProfile> : 'loading'
		return (
			<div className="chat-room">
				<div className="chat-room__header">
					{profile}
				</div>
				<div className="chat-room__body">
					{this.getChatMessages()}
				</div>
				<div className="chat-room__footer">
					<div className="text-editor">
						<div className="text-editor__left">
							<textarea id="text" onInput={this.onInputHandler.bind(this)}></textarea>
						</div>
						<div className="text-editor__right">
							<button onClick={this.onSubmitHandler.bind(this)}><FontAwesomeIcon icon="paper-plane" /></button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	loggedUser: state.user ? state.user : {},
	users: state.users ? state.users : {}
})

const mapDispatchToProps = {
	sendMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom)
