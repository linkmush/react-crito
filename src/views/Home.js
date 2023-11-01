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
import ProjectSection from '../components/ProjectSection';
import ArticleNews from '../components/ArticleNews';
import NewsLetter from '../components/NewsLetter';

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
     <ProjectSection />
     <MemberSection />
     <ArticleNews />
     <NewsLetter />
    </main>
    <Footer />
    <FooterBottom />
  </>
  )
}

export default Home