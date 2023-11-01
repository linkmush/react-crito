import React from 'react'
import { NavLink } from 'react-router-dom'

import backgroundlines from '../assets/images/background-lines.svg'

const ContactShowcase = () => {
  return (
    <section className="showcase-contact">
        <img className="backround-lines" src={backgroundlines} alt="Backround pictures of lines" />
        <div className="container">
            <div className="main-menu-showcase">
                <nav>
                    <NavLink className="active-home" to="/">Home</NavLink>
                    <NavLink className="active-contact" to="/contact">Contact</NavLink>
                </nav>
                <div className="content">
                    <h1>Let’s Connect</h1>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactShowcase