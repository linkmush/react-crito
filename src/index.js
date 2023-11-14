import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './views/Home';
import Contact from './views/Contact';
import News from './views/News';
import NewsDetails from './views/NewsDetails';
import NotFound from './views/NotFound';
import AutoScrollTop from './components/Generics/AutoScrollTop';
import { ArticleProvider } from './components/Generics/ArticleContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="wrapper">
      <BrowserRouter>
        <ArticleProvider>
          <AutoScrollTop />
            <Routes>
              <Route path='/' element={<Home /> } />
              <Route path='/news' element={<News /> } />
              <Route path='/newsdetails/:id' element={<NewsDetails />} />
              <Route path='/contact' element={<Contact /> } />
              <Route path='*' element={<NotFound /> } />
            </Routes>
        </ArticleProvider>
      </BrowserRouter>
    </div>
  </React.StrictMode>
);