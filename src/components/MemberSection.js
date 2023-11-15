import React from 'react'
import { Link } from 'react-router-dom'

import SectionTitle from './Generics/SectionTitle'
import Button from './Generics/Button'
import MemberImg from './MemberImg'
import MemberReview from './MemberReview'

import officer from '../assets/images/member-1 (1).png'
import consultant from '../assets/images/member-1 (2).png'
import kimberly from '../assets/images/member-1 (3).png'
import justin from '../assets/images/member-1 (4).png'
import cassandra from '../assets/images/Ellipse 1.png'
import amanda from '../assets/images/Ellipse 2.png'
import jack from '../assets/images/Ellipse 3.png'


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
              <MemberImg image={officer} name="Kristine Palmer" description="Chef Operation Officer" customClass="team-member-1" />
              <MemberImg image={consultant} name="Mark Aubri" description="Senior Consultant" customClass="team-member-2" />
              <MemberImg image={kimberly} name="Kimberly Hansen" description="Senior Consultant" customClass="team-member-3" />
              <MemberImg image={justin} name="Justin Willoman" description="Senior Tech Consultant" customClass="team-member-4" />
            </div>
              <div className="center-content">
                  <Link to='/'><i className="fa-solid fa-circle"></i></Link>
                  <Link to='/' className="active"><i className="fa-solid fa-circle"></i></Link>
                  <Link to='/'><i className="fa-solid fa-circle"></i></Link>
                  <Link to='/'><i className="fa-solid fa-circle"></i></Link>
                  <Link to='/'><i className="fa-solid fa-circle"></i></Link>
              </div>
              <div className="Testimonial-section">
                <div className="Testimonial-header">
                  <SectionTitle title="Testimonial" description="What Our Client Says" />
                </div>
                <div className="reviews">
                  <MemberReview
                    clientReview="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"
                    image={cassandra}
                    name="Cassandra Warren"
                    description="Business Manager, Dorfus"
                    customClass="Testimonial-main-1"  
                  />
                  <MemberReview 
                    clientReview="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"
                    image={amanda}
                    name="Amanda Tulling"
                    description="Senior Developer, Square"
                    customClass="Testimonial-main-1"
                  />
                  <MemberReview 
                    clientReview="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"
                    image={jack}
                    name="Jack McDogglas"
                    description="Key Account Manager, Gobona"
                    customClass="Testimonial-main-1" 
                  />
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