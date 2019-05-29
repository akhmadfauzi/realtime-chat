import firebase from 'firebase/app';

export const REQUEST_USERS = 'REQUEST_USERS';
export const requestUsers = () => ({
	type: REQUEST_USERS
})

export const REQUEST_LOGGED_USER = 'REQUEST_LOGGED_USER';
export const requestLoggedUser = () => ({
	type: REQUEST_LOGGED_USER
})

export const RECEIVED_LOGGED_USER = 'RECEIVED_LOGGED_USER';
export const receivedLoggedUser = (user) => ({
	type: RECEIVED_LOGGED_USER,
	user
})

export const RECEIVED_USERS = 'RECEIVED_USERS';
export const receivedUsers = (users) => ({
	type: RECEIVED_USERS,
	users
});
export const LOGIN_ATTEMPT = 'LOGIN_ATTEMPT';
export const loginAttempt = () => ({
	type: LOGIN_ATTEMPT
})

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const loginSuccess = (user) => ({
	type: LOGIN_SUCCESS,
	user
});

export const LOGIN_FAIL = 'LOGIN_FAIL';
export const loginFail = () => ({
	type: LOGIN_FAIL
});

export const SEND_MESSAGE_ATTEMPT = 'SEND_MESSAGE_ATTEMPT';
export const sendMessageAttempt = () => ({
	type: SEND_MESSAGE_ATTEMPT
});

export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS';
export const sendMessageSuccess = (sender, msgUid) => ({
	type: SEND_MESSAGE_SUCCESS,
	payload:{sender: sender, messageid:msgUid}
});

export const GET_MESSAGE_ATTEMPT = 'GET_MESSAGE_ATTEMPT';
export const getMessageAttempt = () => ({
	type: GET_MESSAGE_ATTEMPT
});

export const GET_MESSAGE_SUCCESS = 'GET_MESSAGE_SUCCESS';
export const getMessageSuccess = () => ({
	type: GET_MESSAGE_SUCCESS
});



export function login(username) {
	return function (dispatch) {
		dispatch(loginAttempt());
		return firebase.database().ref('users/' + username)
			.once('value')
			.then((ss) => {
				if (ss.val()) {
					firebase.database().ref('users/' + username)
						.child('online').set(true);
					window.sessionStorage.setItem('loggedUser', JSON.stringify(ss.val()));
					dispatch(loginSuccess(ss.val()));
				} else {
					dispatch(loginFail());
				}
			});
	}
}

export function fetchLoggedUser(username) {
	return function (dispatch) {
		dispatch(requestLoggedUser());

		return firebase.database().ref('users/' + username)
			.once('value')
			.then((snapshot) => {
				if (snapshot.val()) {
					dispatch(receivedLoggedUser(snapshot.val()));
				}
			});
	}
}




export function sendMessage(sender, text) {
	return function (dispatch) {
		dispatch(sendMessageAttempt());

		const newMessageList =  firebase.database().ref('messages');
		const newMessageRef = newMessageList.push();
			newMessageRef.set({
				text: text,
				user_id: sender,
				timestamps: new Date().getTime(),
				coversation_id: 1
			}, () => {
				const url = newMessageRef.toString();
				const uid = url.substr(url.lastIndexOf('/')+1);
				dispatch(sendMessageSuccess(sender, uid));
			});
	}
}

export function getMessage(conversationId) {
	return function (dispatch) {
		dispatch(getMessageAttempt());
		return firebase.database().ref('messages').on('value', (snapshot) => {
			console.log(snapshot)
			dispatch(getMessageSuccess());
		})
	}
}

export function fetchUsers() {
	return function (dispatch) {
		dispatch(requestUsers());
		return firebase.database().ref('users').on('value', (data) => {
			dispatch(receivedUsers(data.val()));
		});
	}
}