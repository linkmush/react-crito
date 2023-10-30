import React from 'react'

import WhyusBoxes from './WhyusBoxes'
import twoladies from '../assets/images/amy-hirschi-K0c8ko3e6AA-unsplash.jpg'

const WhyUs = () => {
  return (
    <section className="why-choose-us">
    <div className="backround-square"></div>
    <div className="container">
        <div className="header-tags">
            <p className="header-tags-p">Why Choose Us</p>
            <h2 className="header-tags-h2">Why We Are The<br/>Best Business<br/>Consulting Agency</h2>
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