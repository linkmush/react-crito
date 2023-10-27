import React from 'react'
import { NavLink, Link } from  'react-router-dom'
import Button from './Generics/Button'

import Logotype from  '../assets/images/logotype.svg'

const NavSection = () => {
  return (
    <section className="nav-section">
    <div className="container">
        <Link to="/"><img src={Logotype} alt="logo" /></Link>
        <button className="bars"><ion-icon name="menu-outline"></ion-icon></button>
        <div className="menu">
            <div className="top-menu">
                <div className="contact-information">
                    <div className="phone">
                        <Link to="/"><ion-icon name="call-outline"></ion-icon></Link>
                        +46 (8) 121 470 50
                    </div>
                    <div className="email">
                        <a href="https://gmail.com/" target="_blank"><ion-icon name="mail-outline"></ion-icon></a>
                        info@crito.com
                    </div>
                    <div className="location">
                        <a href="https://www.google.com/maps/place/Sveav%C3%A4gen+31,+111+34+Stockholm,+Sverige/@59.336637,18.0594302,17z/data=!3m1!4b1!4m6!3m5!1s0x465f9d6799554e87:0x6562d2c842903003!8m2!3d59.336637!4d18.0620105!16s%2Fg%2F11c0rp4jyr?entry=ttu" target="_blank"><ion-icon name="location-outline"></ion-icon></a>
                        Sveavägen 31, 111 34 STOCKHOLM
                    </div>
                </div>
                <div className="social-media">
                    <Link to="https://www.facebook.com/" target="_blank"><ion-icon name="logo-facebook"></ion-icon></Link>
                    <Link to="https://twitter.com/" target="_blank"><ion-icon name="logo-twitter"></ion-icon></Link>
                    <Link to="https://www.instagram.com/" target="_blank"><ion-icon name="logo-instagram"></ion-icon></Link>
                    <Link to="https://www.linkedin.com/" target="_blank"><ion-icon name="logo-linkedin"></ion-icon></Link>
                </div>
            </div>
            <div className="main-menu">
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/services">Services</NavLink>
                    <NavLink to="/news">News</NavLink>
                    <NavLink to="/contact">Contacs</NavLink>
                </nav>
                <Button type="yellow" text="Login" url="/login" />
            </div>
        </div>
    </div>
    </section>
  )
}

export default NavSection
