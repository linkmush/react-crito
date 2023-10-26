import React from 'react'

import logotype from '../assets/images/logotype-white.svg'
import backgroundlineswhiteright from '../assets/images/s-line-right.svg'

const Footer = () => {
  return (
    <footer className="footer">
    <img className="background-lines-white-right" src={backgroundlineswhiteright} alt="backround-lines-right-white" />
    <div className="container">
        <div className="footer-logo-text">
            <a href="index.html"><img src={logotype} alt="logo-white" /></a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati<br />voluptas voluptates! Voluptates laborum<br />nam ratione minus necessitatibus, iure praesentium.</p>
        </div>
        <div className="footer-objects">
            <div className="footer-company">
                <h3>Company</h3>
                <a href="#">About</a>
                <a href="#">Features</a>
                <a href="#">Works</a>
                <a href="#">Career</a>
            </div>
            <div className="footer-Help">
                <h3>Help</h3>
                <a href="#">Customer Support</a>
                <a href="#">Delivery Details</a>
                <a href="#">Terms & Conditions</a>
                <a href="#">Privacy Policy</a>
            </div>
            <div className="footer-Resources">
                <h3>Resources</h3>
                <a href="#">Free eBooks</a>
                <a href="#">Development Tutorial</a>
                <a href="#">How to - Blog</a>
                <a href="#">Youtube Playlist</a>
            </div>
            <div className="footer-Link">
                <h3>Link</h3>
                <a href="#">Free eBooks</a>
                <a href="#">Development Tutorial</a>
                <a href="#">How to - Blog</a>
                <a href="#">Youtube Playlist</a>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer