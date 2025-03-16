import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

// Local implementation of handleImageError
const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  const publicUrl = process.env.PUBLIC_URL || '';
  e.currentTarget.src = `${publicUrl}/images/placeholder.jpg`;
  e.currentTarget.classList.add('fallback-image');
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const publicUrl = process.env.PUBLIC_URL || '';

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <div className="navbar-logo-container">
            <img 
              src={`${publicUrl}/images/INFINITY GOLD LOGO 24.png`} 
              alt="Infinity Logo" 
              className="navbar-logo-img"
              onError={handleImageError}
            />
          </div>
          <span className="text-gradient">INFINITY 2025</span>
        </Link>
        
        <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className="menu-icon-bar"></div>
          <div className="menu-icon-bar"></div>
          <div className="menu-icon-bar"></div>
        </div>

        <div className={`nav-backdrop ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}></div>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/technical-events" className={`nav-link ${location.pathname === '/technical-events' ? 'active' : ''}`}>
              Technical Events
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cultural-events" className={`nav-link ${location.pathname === '/cultural-events' ? 'active' : ''}`}>
              Cultural Events
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className={`nav-link ${location.pathname === '/register' ? 'active' : ''}`}>
              Register
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>
              Contact
            </Link>
          </li>
          <li className="nav-item highlight">
            <Link to="/admin" className="btn-modern btn-navbar">
              <i className="fas fa-lock"></i> Admin
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
