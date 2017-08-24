import {combineReducers} from 'redux'
let userinfo = (state={}, action) => {
    switch(action.type) {
        case 'USERNAME':
           return action.username
        default: 
           return state
    }
}

export default combineReducers({userinfo})