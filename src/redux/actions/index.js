import firebase from 'firebase/app';

export const REQUEST_USERS = 'REQUEST_USERS';
export const requestUsers = () => ({
	type: REQUEST_USERS
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
export const sendMessageSuccess = () => ({
	type: SEND_MESSAGE_SUCCESS

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

export function sendMessage(sender, text) {
	return function (dispatch) {
		dispatch(sendMessageAttempt());

		return firebase.database().ref('messages').push()
			.set({
				text: text,
				user_id: sender,
				timestamps: new Date().getTime(),
				coversation_id: 1
			}, () => {
				dispatch(sendMessageSuccess());
			});
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