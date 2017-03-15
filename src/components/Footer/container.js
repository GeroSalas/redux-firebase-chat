import React from 'react'

const Footer = () => (
  <footer className="page-footer blue-grey darken-3">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">ProLabs</h5>
            <p className="grey-text text-lighten-4">Driving Innovation</p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Stay Connected</h5>
            <ul>
              <li><a className="grey-text text-lighten-3" href="#!">Facebook</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Twitter</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright blue-grey darken-4">
        <div className="container"> © 2017 - ProLabs - All rights reserved </div>
      </div>
    </footer>
)

export default Footer
