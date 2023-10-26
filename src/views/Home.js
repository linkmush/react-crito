import React from 'react'

import '../App.css';
import FeatureSection from '../components/FeatureSection';
import Footer from '../components/Footer';
import FooterBottom from '../components/FooterBottom';
import Header from '../components/Header';
import MemberSection from '../components/MemberSection';
import OurServices from '../components/OurServices';

const Home = () => {
  return (
    <div className="wrapper">
    <Header />
    <main>
     <FeatureSection />
     <OurServices />
     <MemberSection />
    </main>
    <Footer />
    <FooterBottom />
  </div>
  )
}

export default Home