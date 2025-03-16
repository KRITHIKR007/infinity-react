import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Hide the success message after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-page">
      {submitted && <div className="message-sent">Message sent successfully!</div>}
      
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Have questions about Infinity 2025? Get in touch with our team!</p>
      </div>
      
      <div className="contact-container">
        <div className="contact-form-container">
          <h2 className="form-heading">Send us a message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row grid-2">
              <div>
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-row">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-row">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
              ></textarea>
            </div>
            
            <button type="submit" className="contact-btn">Send Message</button>
          </form>
        </div>
        
        <div className="contact-info-container">
          <div className="contact-info-box">
            <h3>Event Coordinators</h3>
            
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="fas fa-music"></i>
              </div>
              <div className="contact-info-content">
                <h4>Music & Dance Events</h4>
                <p>Varshini: 9493681014</p>
                <p>Sathya: 8197400217</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="fas fa-pen-fancy"></i>
              </div>
              <div className="contact-info-content">
                <h4>Literary & Theater Events</h4>
                <p>Anushree Panatula: 6360393131</p>
                <p>Samarth Khanadale: 9611744161</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="fas fa-laptop-code"></i>
              </div>
              <div className="contact-info-content">
                <h4>Technical Events</h4>
                <p>PITCH4SUSTAIN: $Echo & Anova Teams</p>
                <p>CTRL+Z – UNDO THE CHAOS: Neuron Team</p>
                <p>PHANTOM HUNT: Cybersecurity Club</p>
              </div>
            </div>
          </div>
          
          <div className="contact-info-box">
            <h3>General Information</h3>
            
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <div className="contact-info-content">
                <h4>Event Date</h4>
                <p>March 28, 2025</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-info-content">
                <h4>Venues</h4>
                <p>Colosseum, FET, IIAME, 002</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-info-content">
                <h4>Email</h4>
                <p>infinity2025@email.com</p>
              </div>
            </div>
            
            <div className="social-links">
              <a href="https://facebook.com" className="social-link" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" className="social-link" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" className="social-link" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="venue-map">
        <h2>Event Locations</h2>
        <div className="map-container">
          {/* Replace with actual Google Maps iframe or map component */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0593327425423!2d77.5641!3d12.9345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU2JzA0LjIiTiA3N8KwMzMnNTEuMSJF!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin" 
            allowFullScreen 
            loading="lazy"
            title="Event locations map">
          </iframe>
        </div>
      </div>
      
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          <div className="faq-item">
            <h3>How do I register for events?</h3>
            <p>You can register through our <a href="/register">registration page</a>. Select the events you want to participate in and follow the instructions.</p>
          </div>
          
          <div className="faq-item">
            <h3>Is there an entry fee?</h3>
            <p>Each event has a specific registration fee. The details can be found on the respective event pages.</p>
          </div>
          
          <div className="faq-item">
            <h3>Can I participate in multiple events?</h3>
            <p>Yes, you can register for multiple events as long as there are no scheduling conflicts.</p>
          </div>
          
          <div className="faq-item">
            <h3>Will accommodation be provided?</h3>
            <p>Accommodation information will be available closer to the event date. Please contact us for more details.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
