import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import BannerSection from './Components/BannerSection';
import AboutSection from './Components/AboutSection';
import ProductsSection from './Components/ProductsSection';
import ContactsSection from './Components/ContactsSection';

import './App.css';

import './Components/Sections.css';

function App() {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Banner Section</Link></li>
            <li><Link to="/about">About Section</Link></li>
            <li><Link to="/products">Products & Services</Link></li>
            <li><Link to="/contacts">Contacts Section</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<BannerSection />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/products" element={<ProductsSection />} />
          <Route path="/contacts" element={<ContactsSection />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
