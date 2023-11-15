import React from 'react'
import Button from './Generics/Button'
import SectionTitle from './Generics/SectionTitle'
import FeaturesBoxes from './FeaturesBoxes'

import handshake from '../assets/images/handshake.png'
import idea from '../assets/images/idea.png'
import bars from '../assets/images/bars.png'
import box from '../assets/images/box.png'

const FeatureSection = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="section-title-button">
          <SectionTitle title="Features" description={"Our Accounting is\ntrusted by thousand\nof companies"} />
          <Button type="yellow" text="Learn More" url="/services/consulting" />
        </div>
        <div className="feature-advice">
          <FeaturesBoxes image={handshake} title="Business Advice" text="Lorem ipsum dolor sit amet consectetur adipisicing elit." customClass="child-1" />
          <FeaturesBoxes image={idea} title="Startup Business" text="Lorem ipsum dolor sit amet consectetur adipisicing elit." customClass="child-1" />
          <FeaturesBoxes image={bars} title="Financial Advice" text="Lorem ipsum dolor sit amet consectetur adipisicing elit." customClass="child-2" />
          <FeaturesBoxes image={box} title="Risk Management" text="Lorem ipsum dolor sit amet consectetur adipisicing elit." customClass="child-2" />
        </div>
      </div>
    </section>
  )
}

export default FeatureSection