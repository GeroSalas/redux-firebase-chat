import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import Header from './Header/container'
import Footer from './Footer/container'
import UserContainer from './Users/container'


// REDUX CONTAINER - Smart Main Component

const App = () => (
  <div>
    <Header />
    <div className="container">
      {/* this.props.children */}
      <UserContainer />
    </div>
    <Footer />
  </div>
)

/*
App.propTypes = {
  children: PropTypes.object.isRequired,
};
*/

export default connect()(App)
