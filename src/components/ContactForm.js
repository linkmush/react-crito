import React from 'react'

import Button from './Generics/Button'



const ContactForm = () => {
  return (
    <section className="message-form">
        <div className="container">
            <h2>Leave us a message<br/>for any information.</h2>
            <form id="messageForm" method="post">
                <div className="mb-3 mt-4">
                    <input className="form-input" type="text" id="name" name="name" title="Name" placeholder="Name*" tabindex="1" />
                </div>
                <div className="mb-3">
                    <input className="form-input" type="email" id="email" name="email" title="Email" placeholder="Email*" tabindex="2" />
                </div>
                <div className="mb-5">
                    <textarea className="form-input" id="message" name="message" title="Message" placeholder="Your Message*" tabindex="3"></textarea>
                </div>
                <div className="d-grid">
                    <button className="btn-yellow" type="submit">Send Message <ion-icon id="arrow" name="arrow-forward-outline"></ion-icon></button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default ContactForm