import React, { PropTypes } from 'react'
import UserItem from './userItemComponent'

require('./style.scss');

// PRESENTATIONAL COMPONENT
// Dumb components are only used for displaying data in webpage (view)

const UserList = ({ users, onUserClick }) => (
  <ul>
    { users.map(user => <UserItem  key={user.id} user={user} onClick={() => onUserClick(user)} />) }
  </ul>
)

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    photo_url: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onUserClick: PropTypes.func.isRequired
}

export default UserList
