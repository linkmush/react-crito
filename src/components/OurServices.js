import React from 'react'
import ServiceBox from './ServiceBox'

import img_backgroundlinesright from '../assets/images/background-lines-right.svg'
import SectionTitle from './Generics/SectionTitle'
import Button from './Generics/Button'

const OurServices = () => {
  return (
    <section className="our-services">
    <img className="backround-swirl-lines" src={img_backgroundlinesright} alt="backround-lines-right" />
    <div className="container">
        <div className="the-best-service">
            <SectionTitle title="Our Services" description={"We Provide The Best\nService For Consulting"} />
        </div>
        <div className="four-squares">
        <ServiceBox title="Business Advice" description="Lorem, ipsum dolor sit amet consecetur adipisicing elit. Officiis in nam possimus" url="/services/businessadvice" />
        <ServiceBox title="Startup Business" description="Lorem, ipsum dolor sit amet consecetur adipisicing elit. Officiis in nam possimus" url="/service/startupbusiness" />
        <ServiceBox title="Financial Advice" description="Lorem, ipsum dolor sit amet consecetur adipisicing elit. Officiis in nam possimus" url="/services/financialAdvice" />
        <ServiceBox title="Risk Management" description="Lorem, ipsum dolor sit amet consecetur adipisicing elit. Officiis in nam possimus" url="/services/riskmanagement" />
        </div>
        <div className="center-button">
        <Button className="btn-transparent" text="Browse Services" url="/services" />
        </div>
    </div>
    </section>
  )
}

export default OurServices