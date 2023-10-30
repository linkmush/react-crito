import React from 'react'
import { Link } from 'react-router-dom'

import woman from '../assets/images/daria-pimkina-tYaccl19A3Q-unsplash.jpg'
import Button from './Generics/Button'

const AboutCompany = () => {
  return (
    <section className="about-company">
    <div className="container">
        <div className="founder">
            <img className="picture-woman" src={woman} alt="picture of women" />
            <div className="square-picture">
                <h4>Samantha Brown, <span className="redtext">Founder</span></h4>
                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
            </div>
        </div>
        <div className="consulting-credit">
            <div className="about-company-text">
                <p id="header">About Company</p>
                <h2>We Are Business Consulting & Credit Repair Experts</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam <br/>officiis quas assumenda esse obcaecati? Ex esse error voluptates<br/> iure vel totam eos.<br/><br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis<br/> esse quasi incidunt adipisci accusantium libero provident<br/> voluptate amet.</p>
            </div>
            <div className="about-company-buttons">
                <Button type="btn-black" text="Learn More" url="/services/consulting" />
                <Link to="/" className="play-video" href="#"><ion-icon name="play-outline"></ion-icon></Link>
                <p className="intro-video">Intro Video</p>
            </div>
        </div>
    </div>
    </section>
  )
}

export default AboutCompany