// src/components/Navigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <ul className="nav">
      <li className="nav-item"><Link to="/" className="nav-link">About</Link></li>
      <li className="nav-item"><Link to="/portfolio" className="nav-link">Portfolio</Link></li>
      <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
      <li className="nav-item"><Link to="/resume" className="nav-link">Resume</Link></li>
    </ul>
  );
};

export default Navigation;
