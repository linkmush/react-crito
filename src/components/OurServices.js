import React from 'react'
import ServiceBox from './ServiceBox'

import img_backgroundlinesright from '../assets/images/background-lines-right.svg'

const OurServices = () => {
  return (
    <section className="our-services">
    <img className="backround-swirl-lines" src={img_backgroundlinesright} alt="backround-lines-right" />
    <div className="container">
        <div className="the-best-service">
            <p>Our Service</p>
            <h2>We Provide The Best</h2>
            <h2>Service For Consulting</h2>
        </div>
        <div className="four-squares">
        <ServiceBox title="Business Advice" description="Lorem, ipsum dolor sit amet consecetur adipisicing elit. Officiis in nam possimus" link="services/businessadvice" />
        <ServiceBox title="Startup Business" description="Lorem, ipsum dolor sit amet consecetur adipisicing elit. Officiis in nam possimus" link="services/startupbusiness" />
        <ServiceBox title="Financial Advice" description="Lorem, ipsum dolor sit amet consecetur adipisicing elit. Officiis in nam possimus" link="/services/FinancialAdvice" />
        <ServiceBox title="Risk Management" description="Lorem, ipsum dolor sit amet consecetur adipisicing elit. Officiis in nam possimus" link="services/riskmanagement" />
        </div>
        <div className="center-button">
            <button className="btn-transparent">Browse Services <ion-icon id="arrow" name="arrow-forward-outline"></ion-icon></button>
        </div>
    </div>
    </section>
  )
}

export default OurServices