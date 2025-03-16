import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './EventsPage.css';

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
}

const EventCard: React.FC<EventCardProps> = ({ 
  title, description, venue, registrationFee, teamSize, details, image, organizer, contact 
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const publicUrl = process.env.PUBLIC_URL || '';
  const imagePath = `${publicUrl}${image}`;
  
  // Fallback image in case the event image is not available
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = `${publicUrl}/images/placeholder.jpg`;
    // Add a class to indicate fallback image is being used
    e.currentTarget.classList.add('fallback-image');
  };

  return (
    <div className="event-item">
      <div className="event-item-image event-poster">
        <img src={imagePath} alt={`${title} Poster`} onError={handleImageError} />
        <div className="event-image-overlay">
          <span className="event-date">MAR 28</span>
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
            </div>
            <div className="event-modal-body">
              <h2>{title}</h2>
              <p>{description}</p>
              <div className="event-details-grid">
                <div className="event-detail-item">
                  <span className="label">Venue:</span>
                  <span className="value">{venue}</span>
                </div>
                <div className="event-detail-item">
                  <span className="label">Team Size:</span>
                  <span className="value">{teamSize}</span>
                </div>
                <div className="event-detail-item">
                  <span className="label">Registration Fee:</span>
                  <span className="value">{registrationFee}</span>
                </div>
                {contact && (
                  <div className="event-detail-item">
                    <span className="label">Contact:</span>
                    <span className="value">{contact}</span>
                  </div>
                )}
              </div>
              <div className="event-description">
                {details}
              </div>
              <Link to="/register" className="btn-modern register-btn">Register Now</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const CulturalEventsPage: React.FC = () => {
  const events = [
    {
      title: "STEP SYNC",
      description: "Solo dance competition showcasing various dance forms and individual talent.",
      venue: "Colosseum",
      registrationFee: "₹500",
      teamSize: "Individual",
      contact: "Varshini (9493681014)",
      details: (
        <>
          <h4>Dance Forms Accepted:</h4>
          <ul>
            <li>Indian Classical</li>
            <li>Bollywood</li>
            <li>Western</li>
            <li>Fusion</li>
          </ul>
          
          <h4>Performance Guidelines:</h4>
          <ul>
            <li>Performance Time: 3-4 minutes</li>
            <li>Music must be submitted in advance</li>
            <li>Props allowed (setup time included in performance time)</li>
          </ul>
        </>
      ),
      image: "/images/events/cultural/stepsync-poster.jpg" // Updated image path
    },
    {
      title: "NRITYA VEDIKA",
      description: "Group dance competition showcasing coordination, choreography, and teamwork.",
      venue: "Colosseum",
      registrationFee: "₹800",
      teamSize: "6-15 members",
      contact: "Sathya (8197400217)",
      details: (
        <>
          <h4>Performance Guidelines:</h4>
          <ul>
            <li>Performance Time: 6-8 minutes</li>
            <li>Any dance style or fusion is allowed</li>
            <li>Props and costumes are encouraged</li>
            <li>Music must be submitted 2 days before the event</li>
          </ul>
          <h4>Judging Criteria:</h4>
          <ul>
            <li>Choreography</li>
            <li>Synchronization</li>
            <li>Stage presence</li>
            <li>Costume & presentation</li>
            <li>Overall impact</li>
          </ul>
        </>
      ),
      image: "/images/events/cultural/nrityavedika-poster.jpg" // Updated image path
    },
    {
      title: "ECHOES & STRINGS",
      description: "Solo singing competition showcasing vocal talent across various genres.",
      venue: "FET",
      registrationFee: "₹299",
      teamSize: "Individual",
      contact: "Varshini (9493681014)",
      details: (
        <>
          <h4>Performance Guidelines:</h4>
          <ul>
            <li>Performance Time: 3 minutes</li>
            <li>No background music allowed</li>
            <li>Acoustic instruments permitted</li>
            <li>Any language allowed</li>
          </ul>
          <h4>Judging Criteria:</h4>
          <ul>
            <li>Vocal quality</li>
            <li>Pitch accuracy</li>
            <li>Rhythm</li>
            <li>Expression</li>
            <li>Overall performance</li>
          </ul>
        </>
      ),
      image: "/images/events/cultural/echoes-poster.jpg" // Updated image path
    },
    {
      title: "RESONANCE",
      description: "Music competition for duets and groups showcasing harmony and musical collaboration.",
      venue: "FET",
      registrationFee: "₹399 (Duet), ₹699 (Group)",
      teamSize: "2 (Duet) or 3+ (Group)",
      contact: "Sathya (8197400217)",
      details: (
        <>
          <h4>Performance Guidelines:</h4>
          <ul>
            <li>Duet Performance Time: 5 minutes</li>
            <li>Group Performance Time: 7 minutes</li>
            <li>Instruments must be brought by participants</li>
            <li>Setup time: 2 minutes (not included in performance time)</li>
          </ul>
          <h4>Categories:</h4>
          <ul>
            <li>Vocal</li>
            <li>Instrumental</li>
            <li>Mixed (vocal + instrumental)</li>
          </ul>
        </>
      ),
      image: "/images/events/cultural/resonance-poster.jpg" // Updated image path
    },
    {
      title: "COSMIC DRIFT",
      description: "Fashion show with a sci-fi theme showcasing futuristic designs and creative presentations.",
      venue: "Colosseum",
      registrationFee: "₹2500",
      teamSize: "10-14 members",
      details: (
        <>
          <h4>Theme:</h4>
          <p>Sci-Fi</p>
          
          <h4>Guidelines:</h4>
          <ul>
            <li>Performance Time: 8-10 minutes</li>
            <li>Music must be submitted 3 days before the event</li>
            <li>Props allowed but must fit the theme</li>
          </ul>
          
          <h4>Judging Criteria:</h4>
          <ul>
            <li>Theme integration</li>
            <li>Costume design</li>
            <li>Creativity</li>
            <li>Choreography</li>
            <li>Overall presentation</li>
          </ul>
        </>
      ),
      image: "/images/events/cultural/cosmicdrift-poster.jpg" // Updated image path
    },
    {
      title: "EKPHRASTIC POETRY",
      description: "Poetry writing competition inspired by visual art.",
      venue: "FET",
      registrationFee: "₹199",
      teamSize: "Individual",
      contact: "Anushree Panatula (6360393131)",
      details: (
        <>
          <h4>Task:</h4>
          <p>Write a poem based on a given artwork</p>
          
          <h4>Guidelines:</h4>
          <ul>
            <li>Max Length: 20 lines</li>
            <li>Time limit: 60 minutes</li>
            <li>Must incorporate elements from the artwork</li>
          </ul>
          
          <h4>Judging Criteria:</h4>
          <ul>
            <li>Creativity</li>
            <li>Imagery</li>
            <li>Emotional impact</li>
            <li>Connection to artwork</li>
          </ul>
        </>
      ),
      image: "/images/events/cultural/poetry-poster.jpg" // Updated image path
    },
    {
      title: "TALE REWIND",
      description: "Story writing competition with a creative twist.",
      venue: "FET",
      registrationFee: "₹199",
      teamSize: "Individual",
      contact: "Samarth Khanadale (9611744161)",
      details: (
        <>
          <h4>Task:</h4>
          <p>Create a story leading to a predefined ending</p>
          
          <h4>Guidelines:</h4>
          <ul>
            <li>Word Limit: 300-700 words</li>
            <li>Time: 90 minutes</li>
            <li>The ending will be provided at the start of the competition</li>
            <li>Story must be original and created during the event</li>
          </ul>
          
          <h4>Judging Criteria:</h4>
          <ul>
            <li>Creativity</li>
            <li>Coherence</li>
            <li>Language and grammar</li>
            <li>Effective use of the provided ending</li>
          </ul>
        </>
      ),
      image: "/images/events/cultural/talerewind-poster.jpg" // Updated image path
    },
    {
      title: "JUST A MINUTE (JAM)",
      description: "Speech competition testing quick thinking and verbal fluency.",
      venue: "FET",
      registrationFee: "₹199",
      teamSize: "Individual",
      contact: "Anushree Panatula (6360393131)",
      details: (
        <>
          <h4>Task:</h4>
          <p>Speak for 1 minute without hesitation, repetition, or deviation</p>
          
          <h4>Rules:</h4>
          <ul>
            <li>Topics will be provided on the spot</li>
            <li>10 seconds of preparation time</li>
            <li>Contestants can challenge each other for hesitations, repetitions, or deviations</li>
            <li>Points awarded for valid challenges and successful completions</li>
          </ul>
        </>
      ),
      image: "/images/events/cultural/jam-poster.jpg" // Updated image path
    },
    {
      title: "WAVE YOUR STORY",
      description: "Speech recital competition showcasing oratory and dramatic skills.",
      venue: "FET",
      registrationFee: "₹299",
      teamSize: "Individual",
      contact: "Samarth Khanadale (9611744161)",
      details: (
        <>
          <h4>Task:</h4>
          <p>Recite a famous historical speech</p>
          
          <h4>Guidelines:</h4>
          <ul>
            <li>Performance Time: 3-5 minutes</li>
            <li>Speech selection must be submitted in advance</li>
            <li>Costumes and props are allowed but optional</li>
            <li>Original speeches not permitted</li>
          </ul>
        </>
      ),
      image: "/images/events/cultural/waveyourstory-poster.jpg" // Updated image path
    },
    {
      title: "SHORT FILM MAKING",
      description: "Filmmaking competition showcasing storytelling and cinematography skills.",
      venue: "FET (submission and screening)",
      registrationFee: "₹599",
      teamSize: "3-8 members",
      contact: "Anushree Panatula (6360393131)",
      details: (
        <>
          <h4>Task:</h4>
          <p>Create an original short film within the given timeframe</p>
          
          <h4>Guidelines:</h4>
          <ul>
            <li>Time Given: 120 Hours (5 days)</li>
            <li>Film Duration: 5-10 minutes</li>
            <li>Original story must be developed, shot & edited during the event period</li>
            <li>Theme will be provided at the start of the competition</li>
          </ul>
        </>
      ),
      image: "/images/events/cultural/shortfilm-poster.jpg" // Updated image path
    }
  ];

  return (
    <div className="events-page">
      <div className="events-hero">
        <div className="events-hero-content">
          <h1>Cultural Events</h1>
          <p>Express yourself through art, music, dance and more at Infinity 2025</p>
          <p><strong>Date:</strong> March 27-28, 2023</p>
          <div className="hero-logo">
            <img 
              src="/images/cultural logo.png" 
              alt="Cultural Logo" 
              className="cultural-logo" 
            />
          </div>
        </div>
      </div>

      <div className="content-container">
        <div className="events-container">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CulturalEventsPage;
