import React from 'react'
import { Link } from 'react-router-dom'

const FooterBoxes = ({ section }) => {
  switch (section) {
    case 'company':
      return (
        <div className="footer-company">
          <h3>Company</h3>
          <Link to="/">About</Link>
          <Link to="/">Features</Link>
          <Link to="/">Works</Link>
          <Link to="/">Career</Link>
        </div>
      )
    case 'help':
      return (
        <div className="footer-Help">
          <h3>Help</h3>
          <Link to="/">Customer Support</Link>
          <Link to="/">Delivery Details</Link>
          <Link to="/">Terms & Conditions</Link>
          <Link to="/">Privacy Policy</Link>
        </div>
      )
    case 'resources':
      return (
        <div className="footer-Resources">
          <h3>Resources</h3>
          <Link to="/">Free eBooks</Link>
          <Link to="/">Development Tutorial</Link>
          <Link to="/">How to - Blog</Link>
          <Link to="/">Youtube Playlist</Link>
        </div>
      )
    default:
        return (
            <div className="footer-Link">
              <h3>Link</h3>
              <Link to="/">Free eBooks</Link>
              <Link to="/">Development Tutorial</Link>
              <Link to="/">How to - Blog</Link>
              <Link to="/">Youtube Playlist</Link>
            </div>
          )
  }
}

export default FooterBoxes