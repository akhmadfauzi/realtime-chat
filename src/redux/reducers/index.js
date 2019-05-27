import * as act from '../actions';
const initialState = {
    "users":null,
    "messages":null,
    "conversations":null,
    "user":null
}

export default function mainReducer(state = initialState, action){
    switch (action.type) {
        case act.RECEIVED_USERS:
            return {
                ...state,
                "users":{
                    ...action.users
                }
            }
        case act.LOGIN_SUCCESS:
            return {
                ...state,
                "user":{
                    ...state.user,
                    ...action.user
                }
            }
        default:
            return state;
    }
}