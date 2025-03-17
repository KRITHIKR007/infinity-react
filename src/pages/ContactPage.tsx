import React, { useEffect, useState } from 'react';
import './EventsPage.css'; // Using the same CSS file for styling consistency

const ContactPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="events-page">
      <div className="events-hero">
        <div className="events-hero-content">
          <h1 className="events-title reveal-text">Contact Us</h1>
          <p className="events-subtitle">Reach out to our team for any queries or information about Infinity 2025</p>
          <div className="events-highlight-bar">
            <div className="highlight-item">
              <i className="fas fa-envelope"></i>
              <span>culturalclubfet.ju@gmail.com</span>
            </div>
            <div className="highlight-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>Jain (Deemed-to-be-University)</span>
            </div>
          </div>
        </div>
      </div>

      <div className={`contact-section ${isLoaded ? 'fade-in' : ''}`}>
        <div className="container">
          <h2 className="section-title">Event Coordinators</h2>
          
          <div className="contact-cards">
            <div className="contact-card">
              <div className="contact-header">
                <i className="fas fa-laptop-code"></i>
                <h3>Technical Events</h3>
              </div>
              <div className="contact-info">
                <p className="contact-name">Dhrub Kumar Jha</p>
                <p className="contact-phone">
                  <i className="fas fa-phone"></i> +91 8296019911
                </p>
                <p>
                  <i className="fas fa-envelope"></i> tech.infinity2025@jain.ac.in
                </p>
              </div>
            </div>
            
            <div className="contact-card">
              <div className="contact-header">
                <i className="fas fa-music"></i>
                <h3>Cultural Events</h3>
              </div>
              <div className="contact-info">
                <p className="contact-name">Rohan</p>
                <p className="contact-phone">
                  <i className="fas fa-phone"></i> +91 9353074448
                </p>
                <p>
                  <i className="fas fa-envelope"></i> cultural.infinity2025@jain.ac.in
                </p>
              </div>
            </div>
            
            <div className="contact-card">
              <div className="contact-header">
                <i className="fas fa-user-tie"></i>
                <h3>General Inquiries</h3>
              </div>
              <div className="contact-info">
                <p className="contact-name">Faculty Coordinator</p>
                <p className="contact-phone">
                  <i className="fas fa-phone"></i> +91 9876543210
                </p>
                <p>
                  <i className="fas fa-envelope"></i> infinity2025@jain.ac.in
                </p>
              </div>
            </div>
          </div>
          
          <div className="developer-section">
            <h2 className="section-title">Website Development Team</h2>
            <div className="contact-cards">
              <div className="contact-card with-image">
                <div className="contact-image">
                  <img src="/images/team/developer.jpg" alt="Developer" 
                    onError={(e) => { 
                      e.currentTarget.src = 'https://via.placeholder.com/150?text=Developer';
                      e.currentTarget.classList.add('fallback-image');
                    }} 
                  />
                </div>
                <div className="developer-content">
                  <div className="developer-bio">
                    <h3>Web Development Team</h3>
                    <p>Designed and developed by students from the Department of Computer Science, Faculty of Engineering and Technology.</p>
                  </div>
                  <div className="developer-connect">
                    <h4>Connect with us:</h4>
                    <ul className="social-links">
                      <li><a href="https://github.com/infinity-team" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
                      <li><a href="https://www.linkedin.com/school/jain-university/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                      <li><a href="mailto:dev.infinity2025@jain.ac.in"><i className="fas fa-envelope"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-section">
            <h2 className="section-title">Send Us a Message</h2>
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" required placeholder="Enter your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" required placeholder="Enter your email" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required placeholder="Enter message subject" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} required placeholder="Type your message here..."></textarea>
              </div>
              <button type="submit" className="btn-submit">Send Message</button>
            </form>
          </div>
          
          <div className="venue-map">
            <h2 className="section-title">Visit Us</h2>
            <div className="map-container">
              <iframe 
                title="Jain University Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9455218077494!2d77.5910555!3d12.975712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17b7e7039533%3A0x438f913ad7b42768!2sJain%20University!5e0!3m2!1sen!2sin!4v1645769775953!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
