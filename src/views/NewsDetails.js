import React from 'react'

import '../App.css';
import Header from '../components/Header';
import NewsShowcase from '../components/NewsShowcase';
import Footer from '../components/Footer';
import FooterBottom from '../components/FooterBottom';
import DetailsMain from '../components/DetailsMain';
import ArticleDetails from '../components/ArticleDetails';

const NewsDetails = () => {
  return (
  <>
    <Header />
    <main>
    <NewsShowcase />
    <DetailsMain />
    <ArticleDetails />
    </main>
    <Footer />
    <FooterBottom />
  </>
  )
}

export default NewsDetails