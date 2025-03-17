import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  // Close menu when clicking on a link
  const closeMenu = () => {
    setMenuOpen(false);
  };
  
  // Check if link is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img 
            src="/images/INFINITY GOLD LOGO 24.png" 
            alt="Infinity Logo" 
            className="logo-image rotating-logo"
          />
          <span className="text-gradient">INFINITY</span>
        </Link>
        
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className={`hamburger ${menuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              <i className="fas fa-home"></i> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/about" 
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              <i className="fas fa-info-circle"></i> About
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/technical-events" 
              className={`nav-link ${isActive('/technical-events') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              <i className="fas fa-laptop-code"></i> Technical Events
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/cultural-events" 
              className={`nav-link ${isActive('/cultural-events') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              <i className="fas fa-music"></i> Cultural Events
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/contact" 
              className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              <i className="fas fa-envelope"></i> Contact
            </Link>
          </li>
          <div className="nav-cta">
            <Link 
              to="/register" 
              className="register-btn"
              onClick={closeMenu}
            >
              Register Now
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
