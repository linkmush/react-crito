import React from 'react'

import '../App.css';
import Header from '../components/Header';
import NewsShowcase from '../components/NewsShowcase';
import Footer from '../components/Footer';
import FooterBottom from '../components/FooterBottom';
import ArticleNews from '../components/ArticleNews';
import DetailsMain from '../components/DetailsMain';

const NewsDetails = () => {
  return (
  <>
    <Header />
    <main>
    <NewsShowcase />
    <DetailsMain />
    <ArticleNews />
    </main>
    <Footer />
    <FooterBottom />
  </>
  )
}

export default NewsDetails