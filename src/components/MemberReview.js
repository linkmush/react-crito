import React, { useState, useEffect } from 'react'

import cassandra from '../assets/images/Ellipse 1.png'
import amanda from '../assets/images/Ellipse 2.png'
import jack from '../assets/images/Ellipse 3.png'

const MemberReview = ({ section }) => {
  const [testimonialSection, setTestimonialSection] = useState()

  useEffect(() => {
    //console.log('useEffect memberreview körs');
    if (section === 1) {
      setTestimonialSection(
        <div className="Testimonial-main-1">
          <div className="Testimonial-main-1">
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
                  <p>"Lorem ipsum dolor, sit amet<br/>consectetur adipisicing elit. Laudantium<br/>libero, ad dignissimos velit qui, dolorum<br/>obcaecati cum saepe nesciunt nemo<br/>eligendi numquam voluptate"</p>
                      <div className="buisness-manager">
                          <img className="buisness-manager-1" src={cassandra} alt="image of buisness-manager" />
                              <div className="buisness-manager-text">
                                  <h3>Cassandra Warren</h3>
                      <p>Business Manager, Dorfus</p>
                  </div>
              </div>
          </div>
        </div>
      )
    } else if (section === 2) {
      setTestimonialSection(
          <div className="Testimonial-main-2">
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
                  <p>"Lorem ipsum dolor, sit amet<br/>consectetur adipisicing elit. Laudantium<br/>libero, ad dignissimos velit qui, dolorum<br/>obcaecati cum saepe nesciunt nemo<br/>eligendi numquam voluptate"</p>
                      <div className="senior-develepor">
                      <img className="Senior-Developer-1" src={amanda} alt="image of senior develepor" />
                          <div className="senior-develepor-text">
                              <h3>Amanda Tulling</h3>
                      <p>Senior Developer, Square</p>
                  </div>
              </div>
          </div>
      )
    } else if (section === 3) {
      setTestimonialSection(
          <div className="Testimonial-main-3">
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
                  <p>"Lorem ipsum dolor, sit amet<br/>consectetur adipisicing elit. Laudantium<br/>libero, ad dignissimos velit qui, dolorum<br/>obcaecati cum saepe nesciunt nemo<br/>eligendi numquam voluptate"</p>
                      <div className="key-account-manager">
                          <img className="key-account-manager-1" src={jack} alt="image of key account manager" />
                              <div className="key-account-manager-text">
                                  <h3>Jack McDogglas</h3>
                      <p>Key Account Manager, Gobona</p>
                 </div>
              </div>
          </div>
      )
    }
    //console.log('useEffect rendera testimonial-sections:', testimonialSection);
  }, [])

  return (
    <div className="Testimonial-main">
      {testimonialSection}
    </div>
  )
}

export default MemberReview
