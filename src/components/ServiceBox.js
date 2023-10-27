import React from 'react'
import { Link } from 'react-router-dom'

const ServiceBox = ({title, description, url}) => {
  return (
    <div className="service-box">
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={url} className="circle-arrow">
        <ion-icon id="arrow" name="arrow-forward-outline"></ion-icon>
      </Link>
    </div>
  )
}

export default ServiceBox