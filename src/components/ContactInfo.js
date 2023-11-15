import React from 'react'

import ContactBoxes from './ContactBoxes'

const ContactInfo = () => {
  return (
    <section className="contact-info">
        <div className="container">
            <div className="square-info">
            <ContactBoxes icon={<ion-icon className="location-icon" name="location-outline"></ion-icon>} title="Visit us" description1="Sveavägen 31" description2="111 34 STOCKHOLM" />
            <ContactBoxes icon={<ion-icon name="call-outline" className="phone-icon"></ion-icon>} title="Call us" description1="+46 (8) 121 470 50" description2="+46 (8) 121 470 51" />
            <ContactBoxes icon={<ion-icon className="email-icon" name="mail-outline"></ion-icon>} title="Email us" description1="info@crito.com" description2="support@crito.com" />
            </div> 
        </div>   
    </section>
  )
}

export default ContactInfo