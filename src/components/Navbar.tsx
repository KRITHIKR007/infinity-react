import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isOpen ? 'nav-open' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img 
            src="/images/infinity-logo.png" 
            alt="Infinity 2025" 
            className="logo-image"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              // Add type casting to HTMLElement to fix the TypeScript error
              ((e.currentTarget.nextElementSibling as HTMLElement).style.display = 'block');
            }}
          />
          <span className="logo-text text-gradient" style={{ display: 'none' }}>INFINITY 2025</span>
        </Link>

        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          <div className={`hamburger ${isOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>
              <i className="fas fa-home"></i> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/technical-events" 
              className={location.pathname === '/technical-events' ? 'nav-link active' : 'nav-link'}
            >
              <i className="fas fa-laptop-code"></i> Technical Events
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/cultural-events" 
              className={location.pathname === '/cultural-events' ? 'nav-link active' : 'nav-link'}
            >
              <i className="fas fa-music"></i> Cultural Events
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/gallery" 
              className={location.pathname === '/gallery' ? 'nav-link active' : 'nav-link'}
            >
              <i className="fas fa-images"></i> Gallery
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/contact" 
              className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}
            >
              <i className="fas fa-address-book"></i> Contact
            </Link>
          </li>
        </ul>

        <div className="nav-cta">
          <Link to="/register" className="register-btn">
            Register Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
