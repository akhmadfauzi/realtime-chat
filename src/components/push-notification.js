import firebase from 'firebase/app';
import 'firebase/messaging';
import 'firebase/database';
import { FIREBASE_CONFIG, VAPID_KEY } from '../config';

export const initializeDatabase = ()=>{
	firebase.database();
}
const initializedMessaging = () => {
	
	const messaging = firebase.messaging();
	messaging.usePublicVapidKey(VAPID_KEY);

	Notification.requestPermission().then(function (permission) {
		console.log('Permission granted')
		if (permission === 'granted') {
			messaging.onTokenRefresh(function () {
				messaging.getToken().then(function (currentToken) {
					if (currentToken) {
						console.log(currentToken);
						sendTokenToServer(currentToken);
						updateUIForPushEnabled(currentToken);
					} else {
						console.log('No Instance ID token available. Request permission to generate one.');
						updateUIForPushPermissionRequired();
						setTokenSentToServer(false);
					}
				}).catch(function (err) {
					console.log('An error occurred while retrieving token. ', err);
					// showToken('Error retrieving Instance ID token. ', err);
					setTokenSentToServer(false);
				});

			});



		} else {
			console.log('Unable to get permission to notify.');
		}
	});

	messaging.onMessage(function (payload) {
		console.log('Message received. ', payload);
	});



	function resetUI() {
		// clearMessages();
		// showToken('loading...');
		// [START get_token]
		// Get Instance ID token. Initially this makes a network call, once retrieved
		// subsequent calls to getToken will return from cache.
		messaging.getToken().then(function (currentToken) {
			if (currentToken) {
				sendTokenToServer(currentToken);
				updateUIForPushEnabled(currentToken);
			} else {
				// Show permission request.
				console.log('No Instance ID token available. Request permission to generate one.');
				// Show permission UI.
				updateUIForPushPermissionRequired();
				setTokenSentToServer(false);
			}
		}).catch(function (err) {
			console.log('An error occurred while retrieving token. ', err);
			// showToken('Error retrieving Instance ID token. ', err);
			setTokenSentToServer(false);
		});
		// [END get_token]
	}

	// uncomment thislater
	// function showToken(currentToken) {
	// 	// Show token in console and UI.
	// 	var tokenElement = document.querySelector('#token');
	// 	tokenElement.textContent = currentToken;
	// }
	
	// Send the Instance ID token your application server, so that it can:
	// - send messages back to this app
	// - subscribe/unsubscribe the token from topics
	function sendTokenToServer(currentToken) {
		if (!isTokenSentToServer()) {
			console.log('Sending token to server...');
			// TODO(developer): Send the current token to your server.
			setTokenSentToServer(true);
		} else {
			console.log(currentToken);
			console.log('Token already sent to server so won\'t send it again ' +
				'unless it changes');
		}
	}
	function isTokenSentToServer() {
		return window.localStorage.getItem('sentToServer') === '1';
	}
	function setTokenSentToServer(sent) {
		window.localStorage.setItem('sentToServer', sent ? '1' : '0');
	}

	// function showHideDiv(divId, show) {
	// 	const div = document.querySelector('#' + divId);
	// 	if (show) {
	// 		div.style = 'display: visible';
	// 	} else {
	// 		div.style = 'display: none';
	// 	}
	// }
	// function requestPermission() {
	// 	console.log('Requesting permission...');
	// 	// [START request_permission]
	// 	messaging.requestPermission().then(function () {
	// 		console.log('Notification permission granted.');
	// 		// TODO(developer): Retrieve an Instance ID token for use with FCM.
	// 		// [START_EXCLUDE]
	// 		// In many cases once an app has been granted notification permission, it
	// 		// should update its UI reflecting this.
	// 		// resetUI();
	// 		// [END_EXCLUDE]
	// 	}).catch(function (err) {
	// 		console.log('Unable to get permission to notify.', err);
	// 	});
	// 	// [END request_permission]
	// }
	// function deleteToken() {
	// 	// Delete Instance ID token.
	// 	// [START delete_token]
	// 	messaging.getToken().then(function (currentToken) {
	// 		messaging.deleteToken(currentToken).then(function () {
	// 			console.log('Token deleted.');
	// 			setTokenSentToServer(false);
	// 			// [START_EXCLUDE]
	// 			// Once token is deleted update UI.
	// 			resetUI();
	// 			// [END_EXCLUDE]
	// 		}).catch(function (err) {
	// 			console.log('Unable to delete token. ', err);
	// 		});
	// 		// [END delete_token]
	// 	}).catch(function (err) {
	// 		console.log('Error retrieving Instance ID token. ', err);
	// 		// showToken('Error retrieving Instance ID token. ', err);
	// 	});
	// }
	// // Add a message to the messages element.
	// function appendMessage(payload) {
	// 	const messagesElement = document.querySelector('#messages');
	// 	const dataHeaderELement = document.createElement('h5');
	// 	const dataElement = document.createElement('pre');
	// 	dataElement.style = 'overflow-x:hidden;';
	// 	dataHeaderELement.textContent = 'Received message:';
	// 	dataElement.textContent = JSON.stringify(payload, null, 2);
	// 	messagesElement.appendChild(dataHeaderELement);
	// 	messagesElement.appendChild(dataElement);
	// }
	// // Clear the messages element of all children.
	// function clearMessages() {
	// 	const messagesElement = document.querySelector('#messages');
	// 	while (messagesElement.hasChildNodes()) {
	// 		messagesElement.removeChild(messagesElement.lastChild);
	// 	}
	// }
	function updateUIForPushEnabled(currentToken) {
		// showHideDiv(tokenDivId, true);
		// showHideDiv(permissionDivId, false);
		// showToken(currentToken);
	}
	function updateUIForPushPermissionRequired() {
		// showHideDiv(tokenDivId, false);
		// showHideDiv(permissionDivId, true);
	}
	resetUI();
}
export const initializedFirebase = () => {
	firebase.initializeApp(FIREBASE_CONFIG);
	initializedMessaging();
	initializeDatabase();

}

