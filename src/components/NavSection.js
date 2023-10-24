import React from 'react'
import Button from './Generics/Button'

import Logotype from  '../assets/images/logotype.svg'

const NavSection = () => {
  return (
    <section className="nav-section">
    <div className="container">
        <a href="#"><img src={Logotype} alt="logo" /></a>
        <button className="bars"><ion-icon name="menu-outline"></ion-icon></button>
        <div className="menu">
            <div className="top-menu">
                <div className="contact-information">
                    <div className="phone">
                        <a href="#"><ion-icon name="call-outline"></ion-icon></a>
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
                    <a href="https://www.facebook.com/" target="_blank"><ion-icon name="logo-facebook"></ion-icon></a>
                    <a href="https://twitter.com/" target="_blank"><ion-icon name="logo-twitter"></ion-icon></a>
                    <a href="https://www.instagram.com/" target="_blank"><ion-icon name="logo-instagram"></ion-icon></a>
                    <a href="https://www.linkedin.com/" target="_blank"><ion-icon name="logo-linkedin"></ion-icon></a>
                </div>
            </div>
            <div className="main-menu">
                <nav>
                    <a className="active" href="index.html">Home</a>
                    <a href="#">Service</a>
                    <a href="#">News</a>
                    <a href="contact.html">Contact</a>
                </nav>
                <Button text="Login" url="/login" />
            </div>
        </div>
    </div>
    </section>
  )
}

export default NavSection
