import React from 'react'

const Header = () => (
  <div>
    <h2>ProLabs Example</h2>
  </div>
  <nav>
    <div className="nav-wrapper blue darken-4">
      <div className="container">
        <a href="/" className="brand-logo">ProLabs App Example</a>
        {/*
         REACT-ROUTES
        <ul className="right hide-on-med-and-down">
          <li><Link to="/">ToDos</Link></li>
          <li><Link to="/section">Section</Link></li>
        </ul>
        */}
      </div>
    </div>
  </nav>
)

export default Header
