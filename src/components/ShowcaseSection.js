import React from 'react'

import Button from './Generics/Button'

import img_backgroundlines from '../assets/images/background-lines.svg'
import img_showcase from '../assets/images/showcase-image.svg'

function ShowcaseSection() {
  return (
    <section className="showcase">
      <img className="background-lines" src={img_backgroundlines} alt="Backround pictures of lines" />
      <div className="container">
          <div className="content">
              <h1>We Provide The Best Business Solutions</h1>
                  <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                  <Button type="yellow" text="Get Consulting" url="/services/get-consulting" />
                  <Button type="transparent" text="Learn More" url="/services/consulting" />
          </div>
          <img className="img" src={img_showcase} alt="image of a man" />
      </div>
    </section>  
  )
}

export default ShowcaseSection