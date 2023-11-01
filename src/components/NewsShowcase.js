import React from 'react'
import { NavLink } from 'react-router-dom'

import backgroundlines from '../assets/images/background-lines.svg'

const NewsShowcase = () => {
  return (
    <section className="showcase-contact">
        <img className="backround-lines" src={backgroundlines} alt="Backround pictures of lines" />
        <div className="container">
            <div className="main-menu-showcase">
                <nav>
                    <NavLink className="active-home" to="/">Home</NavLink>
                    <NavLink className="active-contact" to="/news">News</NavLink>
                </nav>
                <div className="content">
                    <h1>News & Articles</h1>
                </div>
            </div>
        </div>
    </section>
  )
}

export default NewsShowcase