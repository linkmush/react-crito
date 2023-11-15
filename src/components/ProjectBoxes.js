import React from 'react';

import { Link } from 'react-router-dom'

const ProjectBoxes = ({image, alt, title}) => {

  return (
    <Link className="project" to="/services">
        <img src={image} alt={alt} />
        <h3>{title}</h3>
        <div className="readmore">Read More <ion-icon id="arrow" name="arrow-forward-outline"></ion-icon></div>
    </Link>
  )
}

export default ProjectBoxes