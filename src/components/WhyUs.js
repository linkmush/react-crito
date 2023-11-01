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
              <WhyusBoxes type="thumbs-up-outline" />
              <WhyusBoxes type="nuclear-outline" />
              <WhyusBoxes type="construct-outline" />
              <WhyusBoxes type="person-add-outline" />
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