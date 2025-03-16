import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="geometric-shape shape1"></div>
        <div className="geometric-shape shape2"></div>
        <div className="geometric-shape shape3"></div>
      </div>
      
      <div className="footer-container">
        <div className="footer-section info-section">
          <Link to="/" className="footer-logo">
            <span className="text-gradient">INFINITY 2025</span>
          </Link>
          <p className="footer-tagline">Annual Technical & Cultural Fest</p>
          <p className="footer-description">
            Join us for an extraordinary celebration of innovation, technology, and culture. 
            Infinity 2025 brings together students from across the country to compete, create, 
            and connect through diverse events and competitions.
          </p>
          <div className="footer-social">
            <a href="https://www.instagram.com/culturalclub.fet?igsh=ZDJ5aHExd3YwOWs4" className="social-icon" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="mailto:culturalclubfet.ju@gmail.com" className="social-icon" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        
        <div className="footer-section links-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/"><i className="fas fa-chevron-right"></i> Home</Link></li>
            <li><Link to="/technical-events"><i className="fas fa-chevron-right"></i> Technical Events</Link></li>
            <li><Link to="/cultural-events"><i className="fas fa-chevron-right"></i> Cultural Events</Link></li>
            <li><Link to="/register"><i className="fas fa-chevron-right"></i> Register</Link></li>
            <li><Link to="/contact"><i className="fas fa-chevron-right"></i> Contact</Link></li>
            <li><Link to="/about"><i className="fas fa-chevron-right"></i> About Us</Link></li>
          </ul>
        </div>
        
        <div className="footer-section contact-section">
          <h3>Contact Info</h3>
          <div className="footer-contact">
            <p>
              <i className="fas fa-envelope"></i> 
              <a href="mailto:culturalclubfet.ju@gmail.com">culturalclubfet.ju@gmail.com</a>
            </p>
            <p>
              <i className="fas fa-laptop-code"></i> 
              <a href="tel:+918296019911">+91 82960 19911</a>
              <span className="contact-label">(Dhrub Kumar Jha - Technical Events)</span>
            </p>
            <p>
              <i className="fas fa-music"></i> 
              <a href="tel:+919353074448">+91 93530 74448</a>
              <span className="contact-label">(Rohan - Cultural Events)</span>
            </p>
            <p><i className="fas fa-map-marker-alt"></i> Colosseum, FET, IIAME, 002</p>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>&copy; {currentYear} Infinity 2025. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/admin-login" className="admin-link">Admin Login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
