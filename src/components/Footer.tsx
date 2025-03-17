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
      
      <div className="footer-content-wrapper">
        <div className="footer-container">
          {/* Main Info Section */}
          <div className="footer-section info-section">
            <Link to="/" className="footer-logo">
              <i className="fas fa-infinity"></i>
              <span className="text-gradient">INFINITY 2025</span>
            </Link>
            <p className="footer-tagline">
              <i className="fas fa-star-of-life pulse-icon"></i> 
              Annual Technical & Cultural Fest
            </p>
            <p className="footer-description">
              Join us for an extraordinary celebration of innovation, technology, and culture. 
              Infinity 2025 brings together students from across the country to compete, create, 
              and connect through diverse events and competitions.
            </p>
            <div className="footer-social">
              <a href="https://www.instagram.com/culturalclub.fet?igsh=ZDJ5aHExd3YwOWs4" className="social-icon" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/" className="social-icon" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com/" className="social-icon" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/" className="social-icon" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="mailto:culturalclubfet.ju@gmail.com" className="social-icon" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links Section */}
          <div className="footer-section links-section">
            <h3><i className="fas fa-link"></i> Quick Links</h3>
            <div className="footer-links-columns">
              <ul className="footer-links">
                <li><Link to="/"><i className="fas fa-home"></i> Home</Link></li>
                <li><Link to="/technical-events"><i className="fas fa-laptop-code"></i> Technical Events</Link></li>
                <li><Link to="/cultural-events"><i className="fas fa-music"></i> Cultural Events</Link></li>
                <li><Link to="/register"><i className="fas fa-user-plus"></i> Register</Link></li>
              </ul>
              <ul className="footer-links">
                <li><Link to="/contact"><i className="fas fa-address-book"></i> Contact</Link></li>
                <li><Link to="/about"><i className="fas fa-info-circle"></i> About Us</Link></li>
                <li><Link to="/gallery"><i className="fas fa-images"></i> Gallery</Link></li>
                <li><Link to="/faq"><i className="fas fa-question-circle"></i> FAQs</Link></li>
              </ul>
            </div>
          </div>
          
          {/* Contact Section */}
          <div className="footer-section contact-section">
            <h3><i className="fas fa-headset"></i> Contact Us</h3>
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
              <p>
                <i className="fas fa-map-marker-alt"></i> 
                <span className="location-wrapper">
                  Colosseum, FET, IIAME, 002
                  <a href="https://maps.google.com" className="map-link" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-directions"></i> Get Directions
                  </a>
                </span>
              </p>
            </div>
            <div className="event-dates-wrapper">
              <div className="event-dates">
                <i className="fas fa-calendar-alt"></i>
                <span>27th - 28th March, 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p><i className="far fa-copyright"></i> {currentYear} Infinity 2025. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy"><i className="fas fa-shield-alt"></i> Privacy Policy</Link>
            <span className="separator">|</span>
            <Link to="/terms"><i className="fas fa-file-contract"></i> Terms of Service</Link>
            <span className="separator">|</span>
            <Link to="/admin-login" className="admin-link"><i className="fas fa-user-shield"></i> Admin Login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
