import React from 'react'

import Button from './Generics/Button'
import SectionTitle from './Generics/SectionTitle'
import FeatureBoxes from '../components/FeatureBoxes'

const FeatureSection = () => {
  return (
    <section className="features">
    <div className="container">
        <div className="section-title-button">
          <p>Features</p>
          <h2>Our Accounting is<br/>trusted by thousand<br/>of companies</h2>
          <Button type="yellow" text="Learn More" url="/services/consulting" />
        </div>
        <div className="feature-advice">
          <FeatureBoxes featureType="business" />
          <FeatureBoxes featureType="startup" />
          <FeatureBoxes featureType="finance" />
          <FeatureBoxes featureType="default" />
        </div>
    </div>
</section>
  )
}

export default FeatureSection