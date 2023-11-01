import React from 'react'

const ContactBoxes = ({ selectedOption }) => {
  return (
    <div>
      {selectedOption === 'location' && (
        <div className="square-info-adress">
            <div className="icon-container">
                <ion-icon className="location-icon" name="location-outline"></ion-icon>
            </div>
            <div className="square-info-text">
                <h2>Visit us</h2>
                <p>Sveavägen 31<br/>111 34 STOCKHOLM</p>
            </div>
        </div>
      )}
      {selectedOption === 'phone' && (
        <div className="square-info-phone">
            <div className="icon-container">
                <ion-icon name="call-outline" className="phone-icon"></ion-icon>
            </div>
            <div className="square-info-text">
                <h2>Call us</h2>
                <p>+46 (8) 121 470 50<br/>+46 (8) 121 470 51</p>
            </div>
        </div>
      )}
      {selectedOption === 'email' && (
        <div className="square-info-email">
             <div className="icon-container">
                <ion-icon className="email-icon" name="mail-outline"></ion-icon>
            </div>
            <div className="square-info-text">
                <h2>Email us</h2>
                <p>info@crito.com<br/>support@crito.com</p>
            </div>
        </div>
      )}
    </div>
  )
}

export default ContactBoxes