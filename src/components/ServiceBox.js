import React from 'react'

const ServiceBox = ({title, description, url}) => {
  return (
    <div className="service-box">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={url} className="circle-arrow">
        <ion-icon id="arrow" name="arrow-forward-outline"></ion-icon>
      </a>
    </div>
  )
}

export default ServiceBox