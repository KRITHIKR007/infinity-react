import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <Link to="/" className="footer-logo">
            <span className="text-gradient">INFINITY 2025</span>
          </Link>
          <p>Annual Technical & Cultural Fest</p>
          <div className="footer-social">
            <a href="https://facebook.com" className="social-icon" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" className="social-icon" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" className="social-icon" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" className="social-icon" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/"><i className="fas fa-chevron-right"></i> Home</Link></li>
            <li><Link to="/technical-events"><i className="fas fa-chevron-right"></i> Technical Events</Link></li>
            <li><Link to="/cultural-events"><i className="fas fa-chevron-right"></i> Cultural Events</Link></li>
            <li><Link to="/register"><i className="fas fa-chevron-right"></i> Register</Link></li>
            <li><Link to="/contact"><i className="fas fa-chevron-right"></i> Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact Info</h3>
          <div className="footer-contact">
            <p><i className="fas fa-envelope"></i> infinity2025@email.com</p>
            <p><i className="fas fa-phone"></i> +91 9493681014 (Varshini)</p>
            <p><i className="fas fa-phone"></i> +91 6360393131 (Anushree)</p>
            <p><i className="fas fa-map-marker-alt"></i> Colosseum, FET, IIAME, 002</p>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Infinity 2025. All Rights Reserved.</p>
        <p className="credits">
          <Link to="/admin-login" className="admin-link">Admin Login</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
