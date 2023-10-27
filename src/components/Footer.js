import React from 'react'
import { Link } from 'react-router-dom'

import logotype from '../assets/images/logotype-white.svg'
import backgroundlineswhiteright from '../assets/images/s-line-right.svg'

const Footer = () => {
  return (
    <footer className="footer">
    <img className="background-lines-white-right" src={backgroundlineswhiteright} alt="backround-lines-right-white" />
    <div className="container">
        <div className="footer-logo-text">
            <Link to="/"><img src={logotype} alt="logo-white" /></Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati<br />voluptas voluptates! Voluptates laborum<br />nam ratione minus necessitatibus, iure praesentium.</p>
        </div>
        <div className="footer-objects">
            <div className="footer-company">
                <h3>Company</h3>
                <Link to="/">About</Link>
                <Link to="/">Features</Link>
                <Link to="/">Works</Link>
                <Link to="/">Career</Link>
            </div>
            <div className="footer-Help">
                <h3>Help</h3>
                <Link to="/">Customer Support</Link>
                <Link to="/">Delivery Details</Link>
                <Link to="/">Terms & Conditions</Link>
                <Link to="/">Privacy Policy</Link>
            </div>
            <div className="footer-Resources">
                <h3>Resources</h3>
                <Link to="/">Free eBooks</Link>
                <Link to="/">Development Tutorial</Link>
                <Link to="/">How to - Blog</Link>
                <Link to="/">Youtube Playlist</Link>
            </div>
            <div className="footer-Link">
                <h3>Link</h3>
                <Link to="/">Free eBooks</Link>
                <Link to="/">Development Tutorial</Link>
                <Link to="/">How to - Blog</Link>
                <Link to="/">Youtube Playlist</Link>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer