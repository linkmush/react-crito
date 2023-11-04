import React from 'react'
import { Link } from 'react-router-dom'

import SectionTitle from './Generics/SectionTitle'
import Button from './Generics/Button'
import MemberImg from './MemberImg'
import MemberReview from './MemberReview'


const MemberSection = () => {
  return (
    <section className="Meet-our-team">
        <div className="container">
            <div className="header-members">
                <div className="header-members-text">
                  <SectionTitle title="Meet Our Team" description="Experience Team Members" />
                </div>
                  <Button type="transparent" text="Browse Services" url="/services/consulting" />
            </div>
            <div className="team-members">
              <MemberImg id={1} />
              <MemberImg id={2} />
              <MemberImg id={3} />
              <MemberImg id={4} />
            </div>
            <ul className="dots-menu">
                <li className="dots-menu-li"><Link to="/"></Link></li>
                <li className="dots-menu-2"><Link to="/"></Link></li>
                <li className="dots-menu-li"><Link to="/"></Link></li>
                <li className="dots-menu-li"><Link to="/"></Link></li>
                <li className="dots-menu-li"><Link to="/"></Link></li>
              </ul>
              <div className="Testimonial-section">
                <div className="Testimonial-header">
                  <SectionTitle title="Testimonial" description="What Our Client Says" />
                </div>
                <div className="Testimonial-main">
                  <MemberReview section={1} />
                  <MemberReview section={2} /> 
                  <MemberReview section={3} />
                </div>
                <div className="center-btn-black">
                    <Button type="black" text="All Reviews" url="/services/reviews" />
                </div>
              </div>
        </div>
    </section>
  )
}

export default MemberSection