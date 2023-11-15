import React from 'react'
import { Link } from 'react-router-dom'

const ContactBoxes = ({ icon, title, description1, description2 }) => {
  return (
    <div className="contact-square">
       <div className="info-contact">
       <Link to='/contact' className="btn-black">{icon}</Link>
        <div className="information">
            <h2>{title}</h2>
            <p>{description1}</p>
            <p>{description2}</p>
        </div>
       </div>
    </div>
  )
}

export default ContactBoxes