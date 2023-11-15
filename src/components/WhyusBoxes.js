import React from 'react'

const WhyusBoxes = ({ icon, title, description }) => {

  return (
    <article className="article-list">
      <div className="article-content">
        <div className="article-icon">
          {icon}
          </div>
        <div className="text-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </article>
  )
}

export default WhyusBoxes