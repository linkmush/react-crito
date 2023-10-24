import React from 'react'

const ServiceBox = ({title, description, url}) => {
  return (
    <div className="service-box">
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="circle-arrow" url={url}><ion-icon id="arrow" name="arrow-forward-outline"></ion-icon></button>
    </div>
  )
}

export default ServiceBox