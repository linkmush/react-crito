import React from 'react'

import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FooterBottom from '../components/FooterBottom';
import NewsLetter from '../components/NewsLetter';
import NewsShowcase from '../components/NewsShowcase';
import ArticleMain from '../components/ArticleMain';

const News = () => {
  return (
  <>
    <Header /> 
    <main>
    <NewsShowcase />
    <ArticleMain />
    <NewsLetter />
    </main>
    <Footer />
    <FooterBottom />
  </>
  
  )
}

export default News