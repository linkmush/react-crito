import React from 'react'

import '../App.css';
import FeatureSection from '../components/FeatureSection';
import Footer from '../components/Footer';
import FooterBottom from '../components/FooterBottom';
import Header from '../components/Header';
import MemberSection from '../components/MemberSection';
import OurServices from '../components/OurServices';
import Logos from '../components/Logos'
import AboutCompany from '../components/AboutCompany';
import WhyUs from '../components/WhyUs';

const Home = () => {
  return (
  <>
    <Header />
    <main>
     <Logos />
     <FeatureSection />
     <AboutCompany />
     <OurServices />
     <WhyUs />
     <MemberSection />
    </main>
    <Footer />
    <FooterBottom />
  </>
  )
}

export default Home