import { combineReducers } from 'redux'
import * as act from '../actions';
const initialState = {
    "users": null,
    "messages": null,
    "conversations": null,
    "user": null,
    "currentConversation": null
}

export  function mainReducer(state = initialState, action) {
    switch (action.type) {
        case act.RECEIVED_USERS:
            return {
                ...state,
                "users": {
                    ...action.users
                }
            }

        case act.LOGIN_SUCCESS:
        case act.RECEIVED_LOGGED_USER:
            return {
                ...state,
                "user": {
                    ...state.user,
                    ...action.user
                }
            }
        default:
            return state;
    }
}

export function messageReducer(state = initialState, action) {
    switch (action.type) {
        case act.SEND_MESSAGE_ATTEMPT:
            {
                return {
                    ...state
                }
            }
        case act.SEND_MESSAGE_SUCCESS:
            {
                const { sender, messageid } = action.payload;
                return {
                    ...state,
                    "currentConversation": {
                        ...state.currentConversation,
                        "messages": {
                            ...state.messages,
                            ...state.messages[messageid] = {
                                "sender": sender,
                                "messageId": messageid
                            }
                        }
                    }
                }
            }
        default:
            return state;
    }
}

export default combineReducers({main: mainReducer, message:messageReducer});