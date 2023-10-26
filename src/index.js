import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './views/Home';
import Contact from './views/Contact';
import News from './views/News';
import NewsDetails from './views/NewsDetails';
import NotFound from './views/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="wrapper">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/news' element={<News /> } />
        <Route path='/newsdetails' element={<NewsDetails /> } />
        <Route path='/contact' element={<Contact /> } />
        <Route path='*' element={<NotFound /> } />
      </Routes>
    </BrowserRouter>
    </div>
  </React.StrictMode>
);