import * as act from '../actions';
const initialState = {
    "users":null,
    "messages":null,
    "conversations":null
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
        default:
            return state;
    }
}