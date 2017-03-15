import { combineReducers } from 'redux'
import * as ActionTypes    from './constants'
//import { fromJS } from 'immutable'

// REDUCER - Pure Functions (with no side-effects)
// Given the same arguments, it should calculate the next state and return it. No surprises. No side effects. No API calls. No mutations. Just a calculation
// Reducers take in actions and update part of application state (only the part of state that this reducer is responsible for)
// We combine all reducers into a single object (rootReducer) before updated data is dispatched (sent) to redux store
// Your entire applications state (store) is just whatever gets returned from all your reducers

const users = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.GET_USERS:
        return action.payload
    default:
        return state
  }
}

const selectedUser = (state = null, action) => {
    switch (action.type) {
        case ActionTypes.SELECT_USER:
            return action.payload
        default:
            return state
    }
}

const userReducers = combineReducers({ users, selectedUser })
export default userReducers
