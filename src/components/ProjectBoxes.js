import React from 'react';

import { Link } from 'react-router-dom'
import newspaper from '../assets/images/Image.png'
import watch from '../assets/images/Image (3).png'
import pen from '../assets/images/Image (1).png'
import notebook from '../assets/images/Image (2).png'

const ProjectBoxes = ({ projectType }) => {
  const renderProject = () => {
    switch (projectType) {
      case 'business':
        return (
          <article>
            <img src={newspaper} alt="man reading newspaper" />
            <h3>Grow your business</h3>
            <Link to="/services">Read More <ion-icon id="arrow" name="arrow-forward-outline"></ion-icon></Link>
          </article>
        )
      case 'responsive':
        return (
          <article>
            <img src={watch} alt="apple watch" />
            <h3>Why your client needs a responsive website</h3>
            <Link to="/services">Read More <ion-icon id="arrow" name="arrow-forward-outline"></ion-icon></Link>
          </article>
        )
      case 'employees':
        return (
          <article>
            <img src={pen} alt="pen and paper" />
            <h3>Educate your employees to get better results</h3>
            <Link to="/services">Read More <ion-icon id="arrow" name="arrow-forward-outline"></ion-icon></Link>
          </article>
        )
      default:
        return (
            <article>
              <img src={notebook} alt="notebook" />
              <h3>Business Insights is an important piece of your business</h3>
              <Link to="/services">Read More <ion-icon id="arrow" name="arrow-forward-outline"></ion-icon></Link>
            </article>
          )
    }
  }

  return (
    <div className="project-boxes">
      {renderProject()}
    </div>
  )
}

export default ProjectBoxes