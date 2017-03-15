import React, { PropTypes } from 'react'

require('./style.scss');

// PRESENTATIONAL COMPONENT
// Dumb components are only used for displaying data in webpage (view)

const UserItem = ({ user, onClick }) => (
  <li onClick={onClick}>
    {user.name} - {user.email}
  </li>
)

UserItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    photo_url: PropTypes.string.isRequired
  }).isRequired),
  onClick: PropTypes.func.isRequired
}

export default UserItem
