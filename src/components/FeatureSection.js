import React from 'react'

import Button from './Generics/Button'
import SectionTitle from './Generics/SectionTitle'
import FeaturesBoxes from './FeaturesBoxes'

const FeatureSection = () => {
  return (
    <section className="features">
        <div className="container">
            <div className="section-title-button">
              <SectionTitle title="Features" description={"Our Accounting is\ntrusted by thousand\nof companies"} />
              <Button type="yellow" text="Learn More" url="/services/consulting" />
            </div>
            <div className="feature-advice">
              <FeaturesBoxes id={1} />
              <FeaturesBoxes id={2} />
              <FeaturesBoxes id={3} />
              <FeaturesBoxes id={4} />
            </div>
        </div>
    </section>
  )
}

export default FeatureSection