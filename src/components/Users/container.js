import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { selectUser, logUser } from './actions'
import { getUsers } from './reducer'
import UserList from './userListComponent'


// REDUX CONTAINER - Smart Component
// Containers fetch data from application state and pass a subset of it as props to presentational components to display

const mapStateToProps = (state, ownProps) => ({
  users: state.users
})

const matchDispatchToProps = (dispatch, ownProps) => ({
  bindActionCreators({
    onUserClick: logUser
  }, dispatch)
})


const UserContainer = connect(mapStateToProps, mapDispatchToProps)(UserList)
export default UserContainer
