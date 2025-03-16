import React from 'react';
import './EventsPage.css'; // Reusing styles for consistency

const ContactPage: React.FC = () => {
  return (
    <div className="events-page">
      <div className="events-hero">
        <div className="events-hero-content">
          <h1>Contact Us</h1>
          <p>Reach out to our team for any queries or assistance</p>
          <p><strong>Infinity 2025</strong> - March 27-28, 2023</p>
        </div>
      </div>

      <div className="content-container">
        <div className="contact-section">
          <h2 className="section-title">Event Contacts</h2>
          
          <div className="contact-cards">
            <div className="contact-card with-image">
              <div className="contact-image">
                <img src="/images/team/Dhrub Kumar Jha.jpg" alt="Dhrub Kumar Jha" />
              </div>
              <div className="contact-content">
                <div className="contact-header">
                  <i className="fas fa-laptop-code"></i>
                  <h3>Technical Events</h3>
                </div>
                <div className="contact-info">
                  <p className="contact-name">Dhrub Kumar Jha</p>
                  <p className="contact-phone">
                    <i className="fas fa-phone"></i> +91 82960 19911
                  </p>
                  <a href="tel:+918296019911" className="btn-modern">Call Now</a>
                </div>
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
                  <i className="fas fa-phone"></i> +91 93530 74448
                </p>
                <a href="tel:+919353074448" className="btn-modern">Call Now</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="developer-section">
          <h2 className="section-title">About the Developer</h2>
          
          <div className="developer-profile">
            <div className="developer-image">
              <img src="/images/team/krithik.jpg" alt="Krithik - Lead Developer" />
            </div>
            <div className="developer-content">
              <div className="developer-bio">
                <p>I'm Krithik, an AI/ML specialist with a passion for building intelligent digital solutions. As the lead developer of this website, I leveraged my expertise in artificial intelligence and machine learning to optimize the event registration process, ensuring efficiency, accuracy, and seamless user interactions.</p>
                
                <p>My role primarily focused on integrating AI-driven insights to enhance user experience, automate verification processes, and improve system performance. Alongside AI/ML, I developed a robust backend using Django and designed an intuitive front end with React, ensuring a smooth and engaging interface.</p>
                
                <p>By combining AI-powered automation with scalable web technologies, I aimed to create a smart, secure, and user-friendly platform that simplifies event management while maintaining top-tier performance and reliability.</p>
              </div>
              
              <div className="developer-connect">
                <h4>📌 Connect with me:</h4>
                <ul className="social-links">
                  <li>
                    <a href="https://www.linkedin.com/in/krithik-r124" target="_blank" rel="noopener noreferrer">
                      🔗 LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/KRITHIKR007" target="_blank" rel="noopener noreferrer">
                      🐙 GitHub
                    </a>
                  </li>
                  <li>
                    <a href="mailto:rkrithik795@gmail.com">
                      📧 Email
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
