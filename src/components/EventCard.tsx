import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './EventCard.css';

interface EventCardProps {
  title: string;
  description: string;
  venue: string;
  registrationFee: string;
  teamSize: string;
  details: React.ReactNode;
  image: string;
  organizer?: string;
  contact?: string;
  date?: string;
}

const EventCard: React.FC<EventCardProps> = ({ 
  title, description, venue, registrationFee, teamSize, details, image, organizer, contact, date = "MAR 28-30"
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const publicUrl = process.env.PUBLIC_URL || '';
  const imagePath = `${publicUrl}${image}`;
  
  // Fallback image in case the event image is not available
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = `${publicUrl}/images/placeholder.jpg`;
    e.currentTarget.classList.add('fallback-image');
  };

  return (
    <div className="event-item">
      <div className="event-item-image event-poster">
        <img src={imagePath} alt={`${title} Poster`} onError={handleImageError} />
        <div className="event-image-overlay">
          <span className="event-date">{date}</span>
        </div>
      </div>
      <div className="event-item-content">
        <h3 className="event-item-title">{title}</h3>
        <p className="event-item-description">{description}</p>
        <div className="event-item-details">
          <span className="event-item-detail"><i className="fas fa-map-marker-alt"></i> {venue}</span>
          <span className="event-item-detail"><i className="fas fa-users"></i> {teamSize}</span>
          <span className="event-item-detail"><i className="fas fa-rupee-sign"></i> {registrationFee}</span>
          {contact && <span className="event-item-detail"><i className="fas fa-phone"></i> {contact}</span>}
        </div>
        <div className="event-item-actions">
          <button className="btn-modern" onClick={() => setShowDetails(true)}>View Details</button>
          <Link to="/register" className="register-button">Register Now</Link>
        </div>
      </div>
      
      {showDetails && (
        <div className="event-modal">
          <div className="event-modal-backdrop" onClick={() => setShowDetails(false)}></div>
          <div className="event-modal-content">
            <button className="event-modal-close" onClick={() => setShowDetails(false)}>
              <i className="fas fa-times"></i>
            </button>
            <div className="event-modal-image">
              <img src={imagePath} alt={title} onError={handleImageError} />
              <div className="event-image-badge">{date}</div>
            </div>
            <div className="event-modal-body">
              <div className="modal-header">
                <h2>{title}</h2>
                <div className="event-badges">
                  <span className="event-badge venue">
                    <i className="fas fa-map-marker-alt"></i> {venue}
                  </span>
                  <span className="event-badge team">
                    <i className="fas fa-users"></i> {teamSize}
                  </span>
                  <span className="event-badge fee">
                    <i className="fas fa-rupee-sign"></i> {registrationFee}
                  </span>
                </div>
              </div>
              
              <div className="modal-description">
                <p>{description}</p>
              </div>
              
              <div className="event-details-grid">
                {organizer && (
                  <div className="event-detail-item">
                    <span className="label">Organized by:</span>
                    <span className="value">{organizer}</span>
                  </div>
                )}
                {contact && (
                  <div className="event-detail-item">
                    <span className="label">Contact:</span>
                    <span className="value">{contact}</span>
                  </div>
                )}
              </div>
              
              <div className="event-description-detailed">
                {details}
              </div>
              
              <div className="modal-footer">
                <Link to="/register" className="btn-cta register-btn">Register Now</Link>
                <button className="btn-secondary" onClick={() => setShowDetails(false)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventCard;
