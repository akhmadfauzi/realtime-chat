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

export function fetchUsers() {
	return function (dispatch) {
		dispatch(requestUsers());
		return firebase.database().ref('users').on('value', (data)=>{
			dispatch(receivedUsers(data.val()));
        });
	}
}