import React from 'react'

import WhyusBoxes from './WhyusBoxes'
import twoladies from '../assets/images/amy-hirschi-K0c8ko3e6AA-unsplash.jpg'
import SectionTitle from './Generics/SectionTitle'

const WhyUs = () => {
  return (
      <section className="why-choose-us">
      <div className="backround-square"></div>
      <div className="container">
          <div className="header-tags">
          <SectionTitle
              title="Why Choose Us"
              description={"Why We Are The\nBest Business\nConsulting Agency"}
              titleClassName="header-tags-p"
              descriptionClassName="header-tags-h2"
            />
              <WhyusBoxes id={1} />
              <WhyusBoxes id={2} />
              <WhyusBoxes id={3} />
              <WhyusBoxes id={4} />
          </div>
          <div>
              <div className="why-choose-us-img">
                  <img className="two-women-img" src={twoladies} alt="picture of two ladies" />
              </div>
          </div>
      </div>
      </section>
  )
}

export default WhyUs