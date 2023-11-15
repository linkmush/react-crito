import React from 'react'

const MemberReview = ({clientReview, image, name, description, customClass}) => {
  return (
    <div className="review">
        <div className="stars">
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
        </div>
          <div className="client-review">
            <p>{clientReview}</p>
        </div>
        <div className="client">
            <img src={image} alt="" />
            <div className="client-name">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default MemberReview