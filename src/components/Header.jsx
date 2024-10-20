// src/components/Header.jsx
import React from 'react';
import Navigation from './Navigation'; // Import Navigation component

const Header = () => {
  return (
    <header className="py-3 mb-4 border-bottom">
      <div className="container d-flex flex-wrap justify-content-center">
        <a href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
          <h1 className="header-title">Kate Hannah</h1>
        </a>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
