import React from 'react'

import '../App.css';
import Header from '../components/Header';
import NewsShowcase from '../components/NewsShowcase';
import Footer from '../components/Footer';
import FooterBottom from '../components/FooterBottom';

const NewsDetails = () => {
  return (
  <>
    <Header />
    <main>
    <NewsShowcase />
    </main>
    <Footer />
    <FooterBottom />
  </>
  )
}

export default NewsDetails