import * as ActionTypes from './constants'
import UsersData as users from '../api/usersData'

// ACTION CREATORS
// This are functions that create (dispatch) action objects (most actions are user events)
// All actions are automatically sent to **all** reducers. It is the reducer's job to determine how to handle that action
// (can also just ignore it)

export const getUsers = () => ({
  type: ActionTypes.GET_USERS,
  payload: users
})

export const selectUser = (user) => ({
  type: ActionTypes.SELECT_USER,
  payload: user
})

export const logUser = (user) => {
  console.log('User ' + user)
}
