import React from 'react'

import '../App.css';
import Header from '../components/Header';
import ContactShowcase from '../components/ContactShowcase';
import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';
import ContactMap from '../components/ContactMap';
import Footer from '../components/Footer';
import FooterBottom from '../components/FooterBottom';

const Contact = () => {
  return (
    <>
      <Header />
      <main>
      <ContactShowcase />
      <ContactInfo />
      <ContactForm />
      <ContactMap />
      </main>
      <Footer />
      <FooterBottom />
    </>
  )
}

export default Contact