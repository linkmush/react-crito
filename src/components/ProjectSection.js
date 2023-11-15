import React from 'react'

import SectionTitle from './Generics/SectionTitle'
import Button from './Generics/Button'
import ProjectBoxes from './ProjectBoxes'
import newspaper from '../assets/images/Image.png'
import watch from '../assets/images/Image (3).png'
import pen from '../assets/images/Image (1).png'
import notebook from '../assets/images/Image (2).png'

const ProjectSection = () => {
  return (
    <section className="project-section">
        <div className="container">
            <div className="section-title">
            <SectionTitle title="Project & Case Studies" description="Let’s Looks Our Global Projects" />
            </div>
            <div className="project-and-cases">
              <ProjectBoxes image={newspaper} alt="A mans hans reading a business paper" title="Grow your business"  />
              <ProjectBoxes image={watch} alt="Pink Apple products on a desk" title="Why your client needs a responsive website" />
              <ProjectBoxes image={pen} alt="Desk with office supplies" title="Educate your employees to get better results" />
              <ProjectBoxes image={notebook} alt="Laptop with Business Intelligence Insights" title="Business Insights is a important piece of your business" />
            </div>
            <div className="center-content">
                <Button type="black" text="All Recent Projects" url="/services/consulting" />
            </div>
        </div>
    </section>
  )
}

export default ProjectSection