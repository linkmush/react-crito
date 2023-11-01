import React from 'react'

import ContactBoxes from './ContactBoxes'

const ContactInfo = () => {
  return (
    <section className="contact-info">
        <div className="container">
            <div className="square-info">
                <ContactBoxes selectedOption="location" />
                <ContactBoxes selectedOption="phone" />
                <ContactBoxes selectedOption="email" />
            </div> 
        </div>   
    </section>
  )
}

export default ContactInfo