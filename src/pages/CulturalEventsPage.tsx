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
      image: "/images/posters/stepsynk.jpg" 
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
      image: "/images/posters/britya veduka.jpg"
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
      image: "/images/posters/echoed strangel.jpg"
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
      image: "/images/posters/resonance.jpg"
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
      image: "/images/posters/cosmic drift.jpg"
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
      image: "/images/posters/poetry.jpg"
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
      image: "/images/posters/tale rewind.jpg"
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
      image: "/images/posters/just s minut.jpg"
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
      image: "/images/posters/wave the falge.jpg"
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
      image: "/images/posters/ather frames.jpg"
    },
    {
      title: "CAPTURE THE MOMENT",
      description: "Photography competition to showcase visual storytelling skills.",
      venue: "FET",
      registrationFee: "₹250",
      teamSize: "Individual",
      contact: "Samarth Khanadale (9611744161)",
      details: (
        <>
          <h4>Theme:</h4>
          <p>Urban Life & Nature's Resilience</p>
          
          <h4>Guidelines:</h4>
          <ul>
            <li>Maximum 3 entries per participant</li>
            <li>Photos must be taken during the event period</li>
            <li>Basic editing allowed (no compositing or heavy manipulation)</li>
            <li>Submission deadline: March 27, 6 PM</li>
          </ul>
          
          <h4>Judging Criteria:</h4>
          <ul>
            <li>Composition</li>
            <li>Technical quality</li>
            <li>Creativity</li>
            <li>Storytelling</li>
            <li>Theme relevance</li>
          </ul>
        </>
      ),
      image: "/images/posters/capture the moment.jpg"
    },
    {
      title: "MOTION FUSION",
      description: "Videography competition for creating compelling short video content.",
      venue: "FET",
      registrationFee: "₹350",
      teamSize: "1-2 members",
      contact: "Anushree Panatula (6360393131)",
      details: (
        <>
          <h4>Challenge:</h4>
          <p>Create a 60-90 second video on the given theme</p>
          
          <h4>Theme:</h4>
          <p>Transitions: Between Worlds</p>
          
          <h4>Guidelines:</h4>
          <ul>
            <li>All footage must be captured during the event period</li>
            <li>Editing and post-production allowed</li>
            <li>Background music must be royalty-free or original</li>
            <li>Submission deadline: March 28, 12 PM</li>
          </ul>
          
          <h4>Judging Criteria:</h4>
          <ul>
            <li>Cinematography</li>
            <li>Editing techniques</li>
            <li>Creativity</li>
            <li>Storytelling</li>
            <li>Audio integration</li>
          </ul>
        </>
      ),
      image: "/images/posters/motion fusion.jpg"
    }
  ];

  return (
    <div className="events-page">
      <div className="events-hero cultural-hero">
        <div className="hero-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        <div className="events-hero-content">
          <div className="hero-badge">Cultural Events</div>
          <h1>Express. Create. Inspire.</h1>
          <p className="hero-description">
            Unleash your creativity and artistic talents through performances, competitions, 
            and expressive platforms designed to celebrate diverse cultural artforms.
          </p>
          <div className="hero-details">
            <div className="hero-detail">
              <i className="fas fa-calendar-alt"></i> March 28-30, 2025
            </div>
            <div className="hero-detail">
              <i className="fas fa-map-marker-alt"></i> Colosseum, FET
            </div>
            <div className="hero-detail">
              <i className="fas fa-music"></i> 12+ Cultural Events
            </div>
          </div>
          <div className="hero-cta">
            <Link to="/register" className="btn-cta">Register Now</Link>
            <a href="#events-list" className="btn-secondary">
              <i className="fas fa-arrow-down"></i> Explore Events
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="/images/cultural-events-hero.png" 
            alt="Cultural Events" 
            onError={(e) => {
              e.currentTarget.src = "/images/placeholder.jpg";
              e.currentTarget.classList.add("fallback-image");
            }}
          />
        </div>
      </div>

      <div className="content-container" id="events-list">
        <div className="section-header">
          <h2>Our Cultural Events</h2>
          <p>Showcase your talent in these exciting cultural competitions</p>
        </div>
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
