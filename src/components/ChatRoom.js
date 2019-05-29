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
		this.resizeTextInput(target);

	}

	resizeTextInput(element) {
		if (element.value !== '') {
			element.style.height = '20px';
			element.setAttribute('style', 'height:' + element.scrollHeight + 'px !important;')
		} else {
			element.style.height = 'auto';
			element.setAttribute('style', 'height:20px !important;')
		}
	}

	getName(id) {
		return this.props.users[id].username;
	}

	participationCheker(sender, receiver) {
		const senderRef = firebase.database().ref('participants/' + sender);
		const senderData = senderRef.once('value', snapshot => snapshot.val());
		senderData.then(senderSnapshot => {
			firebase.database()
				.ref('participants/' + receiver)
				.once('value', (receiverSnapshot) => {
					const sender = senderSnapshot.val();
					const receiver = receiverSnapshot.val();
					if (!sender || !receiver) {
						// Generate new participation on a conversation 
						// for these guys
						firebase.database().ref('participants').push().set({

						})
					}
				})
		})
	}

	onSubmitHandler() {
		const text = document.getElementById('text');
		const sender = JSON.parse(window.sessionStorage.getItem('loggedUser'));
		const receiver = this.props.match.params.id;
		// this.participationCheker(sender.username, receiver)
		this.props.sendMessage(sender.username, text.value);
		text.value = '';
	}

	getMessages() {
		firebase.database().ref('messages').limitToLast(1).once('child_added', (snapshot) => {
			console.log('key', snapshot.key);
			console.log('val', snapshot.val().text);
		})
	}


	getChatMessages() {
		let messageList = [];
		const activeChat = this.props.activeChat;
		const messages = activeChat.messages;
		
		for (const key in messages) {
			const isSender = this.props.loggedUser.username === messages[key].sender;
			messageList = [...messageList, <ChatMessage key={messages[key].messageId} isSender={isSender} text={messages[key].messageId}></ChatMessage>]
		}

		

		return messageList;

		
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
	users: state.users ? state.users : {},
	activeChat: state.currentConversation ? state.currentConversation : {}
})

const mapDispatchToProps = {
	sendMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom)
