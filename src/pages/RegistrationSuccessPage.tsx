import React from 'react';
import { Link } from 'react-router-dom';
import './RegistrationSuccessPage.css';

const RegistrationSuccessPage = () => {
  return (
    <div className="success-page">
      <div className="success-container">
        <div className="success-icon">
          <i className="fas fa-check-circle"></i>
        </div>
        <h1>Registration Submitted!</h1>
        <p className="success-message">
          Thank you for registering for Infinity 2025! Your payment information has been submitted and is pending verification.
        </p>
        
        <div className="registration-info">
          <div className="info-item">
            <span className="info-label">Registration ID:</span>
            <span className="info-value">INF25-7842</span>
          </div>
          <div className="info-item">
            <span className="info-label">Payment Status:</span>
            <span className="payment-status status-pending">Pending Verification</span>
          </div>
        </div>
        
        <div className="next-steps">
          <h3>What's Next?</h3>
          <ol>
            <li>Our team will verify your payment (usually within 24-48 hours)</li>
            <li>You will receive a confirmation email once verified</li>
            <li>Use your Registration ID for check-in at the event</li>
          </ol>
        </div>
        
        <div className="contact-info">
          <p>
            If you have any questions, please contact our support team at{' '}
            <a href="mailto:infinity2025@email.com">infinity2025@email.com</a> or call{' '}
            <a href="tel:+919493681014">+91 9493681014</a>
          </p>
        </div>
        
        <div className="success-actions">
          <Link to="/" className="btn-modern primary">Return to Home</Link>
          <Link to="/technical-events" className="btn-modern secondary">Explore Events</Link>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSuccessPage;
