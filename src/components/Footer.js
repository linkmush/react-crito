import React from 'react'
import { Link } from 'react-router-dom'

import logotype from '../assets/images/logotype-white.svg'
import backgroundlineswhiteright from '../assets/images/s-line-right.svg'
import FooterBoxes from './FooterBoxes'

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
                    <FooterBoxes section="company" />
                    <FooterBoxes section="help" />
                    <FooterBoxes section="resources" />
                    <FooterBoxes section="/" />
                </div>
            </div>
        </footer>
  )
}

export default Footer