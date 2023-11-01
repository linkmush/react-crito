import React from 'react'

import SectionTitle from './Generics/SectionTitle'
import Button from './Generics/Button'
import ProjectBoxes from './ProjectBoxes'

const ProjectSection = () => {
  return (
    <section className="project-section">
        <div className="container">
            <div className="section-title">
            <SectionTitle title="Project & Case Studies" description="Let’s Looks Our Global Projects" />
            </div>
            <div className="project-and-cases">
            <ProjectBoxes projectType="business" />
            <ProjectBoxes projectType="responsive" />
            <ProjectBoxes projectType="employees" />
            <ProjectBoxes projectType="/" />
            </div>
            <div className="center-content">
                <Button type="black" text="All Recent Projects" url="/services/consulting" />
            </div>
        </div>
    </section>
  )
}

export default ProjectSection