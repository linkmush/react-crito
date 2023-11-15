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
            <WhyusBoxes icon={<ion-icon name="thumbs-up-outline"></ion-icon>} title="Process Excellence" text="Lorem, ipsum dolor sit amet consectetur." />
            <WhyusBoxes icon={<ion-icon name="nuclear-outline"></ion-icon>} title="Strategic Planning" text="Lorem, ipsum dolor sit amet consectetur." />
            <WhyusBoxes icon={<ion-icon name="construct-outline"></ion-icon>} title="Experience Design" text="Lorem, ipsum dolor sit amet consectetur." />
            <WhyusBoxes icon={<ion-icon name="person-add-outline"></ion-icon>} title="Artificial Intelligence" text="Lorem, ipsum dolor sit amet consectetur." />
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