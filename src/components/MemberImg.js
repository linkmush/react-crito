import React from 'react'

const MemberImg = ({ image, name, description, customClass }) => {
  return (
    <div className={`target-members ${customClass}`}>
        <img src={image} />
        <h3>{name}</h3>
        <p>{description}</p>
    </div>
  )
}

export default MemberImg
