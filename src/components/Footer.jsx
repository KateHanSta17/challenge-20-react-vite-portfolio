// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-4 my-4 border-top">
      <div className="container d-flex flex-wrap justify-content-between align-items-center">
        <div className="col-md-4 d-flex align-items-center">
          <img src="public/assets/Challenge 20 logo.jpg" alt="Kate Hannah Logo" className="footer-logo" />
          <span className="text-muted">
            © 2024 This app was created by <a href="https://github.com/KateHanSta17" target="_blank" rel="noopener noreferrer">Kate Hannah</a> for Coding Bootcamp October 2024
          </span>
        </div>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a href="https://github.com/KateHanSta17" target="_blank" rel="noopener noreferrer" className="text-muted">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                <path d="...GitHub SVG Path..." />
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a href="https://www.linkedin.com/in/katestapley-ecommerce/" target="_blank" rel="noopener noreferrer" className="text-muted">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                <path d="...LinkedIn SVG Path..." />
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a href="https://instagram.com/kate_hannah_s" target="_blank" rel="noopener noreferrer" className="text-muted">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                <path d="...Instagram SVG Path..." />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
