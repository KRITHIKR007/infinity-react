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
}

const EventCard: React.FC<EventCardProps> = ({ 
  title, description, venue, registrationFee, teamSize, details, image, organizer 
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
          {organizer && <span className="event-item-detail"><i className="fas fa-users-cog"></i> {organizer}</span>}
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
                {organizer && (
                  <div className="event-detail-item">
                    <span className="label">Organized by:</span>
                    <span className="value">{organizer}</span>
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

const CulturalEventsPage = () => {
  const events = [
    {
      title: "STEP SYNC",
      description: "Solo dance competition showcasing various dance forms and individual talent.",
      venue: "Colosseum",
      registrationFee: "₹500",
      teamSize: "Individual",
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
      image: "/images/solo-dance.jpg"
    },
    {
      title: "NRITYA VEDIKA",
      description: "Group dance competition showcasing coordination, choreography, and teamwork.",
      venue: "Colosseum",
      registrationFee: "₹800",
      teamSize: "6-15 members",
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
      image: "/images/group-dance.jpg"
    },
    {
      title: "ECHOES & STRINGS",
      description: "Solo singing competition to showcase vocal talent across various genres.",
      venue: "FET",
      registrationFee: "₹299",
      teamSize: "Individual",
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
      image: "/images/solo-singing.jpg"
    },
    {
      title: "RESONANCE",
      description: "Music competition for duets and groups showcasing harmony and musical collaboration.",
      venue: "FET",
      registrationFee: "₹399 (Duet), ₹699 (Group)",
      teamSize: "2 (Duet) or 3+ (Group)",
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
      image: "/images/group-music.jpg"
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
      image: "/images/fashion-show.jpg"
    },
    {
      title: "EKPHRASTIC POETRY",
      description: "Poetry writing competition inspired by visual art.",
      venue: "FET",
      registrationFee: "₹199",
      teamSize: "Individual",
      details: (
        <>
          <h4>Task:</h4>
          <p>Write a poem based on a given artwork</p>
          
          <h4>Guidelines:</h4>
          <ul>
            <li>Maximum Length: 20 lines</li>
            <li>Time: 60 minutes</li>
            <li>Can be in English or regional languages</li>
            <li>Poem must be original and created during the event</li>
          </ul>
          
          <h4>Judging Criteria:</h4>
          <ul>
            <li>Relevance to artwork</li>
            <li>Creativity</li>
            <li>Imagery and language</li>
            <li>Emotional impact</li>
          </ul>
        </>
      ),
      image: "/images/poetry.jpg"
    },
    {
      title: "TALE REWIND",
      description: "Story writing competition with a creative twist - write a story leading to a predefined ending.",
      venue: "FET",
      registrationFee: "₹199",
      teamSize: "Individual",
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
      image: "/images/story-writing.jpg"
    },
    {
      title: "JUST A MINUTE (JAM)",
      description: "Speech competition testing quick thinking and verbal fluency.",
      venue: "FET",
      registrationFee: "₹199",
      teamSize: "Individual",
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
          
          <h4>Judging Criteria:</h4>
          <ul>
            <li>Fluency</li>
            <li>Adherence to rules</li>
            <li>Content relevance</li>
            <li>Engagement</li>
          </ul>
        </>
      ),
      image: "/images/jam-speech.jpg"
    },
    {
      title: "WAVE YOUR STORY",
      description: "Speech recital competition showcasing oratory and dramatic skills.",
      venue: "FET",
      registrationFee: "₹299",
      teamSize: "Individual",
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
          
          <h4>Judging Criteria:</h4>
          <ul>
            <li>Delivery and expression</li>
            <li>Voice modulation</li>
            <li>Stage presence</li>
            <li>Memorization</li>
            <li>Overall impact</li>
          </ul>
        </>
      ),
      image: "/images/speech-recital.jpg"
    },
    {
      title: "SHORT FILM MAKING",
      description: "Filmmaking competition showcasing storytelling and cinematography skills.",
      venue: "FET (submission and screening)",
      registrationFee: "₹599",
      teamSize: "3-8 members",
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
          
          <h4>Judging Criteria:</h4>
          <ul>
            <li>Storytelling</li>
            <li>Technical quality (cinematography, sound, editing)</li>
            <li>Acting and direction</li>
            <li>Theme interpretation</li>
            <li>Overall impact</li>
          </ul>
        </>
      ),
      image: "/images/short-film.jpg"
    }
  ];

  return (
    <div className="events-page">
      <div className="events-header">
        <h1>Cultural Events</h1>
        <p>Express yourself through art, music, dance and more</p>
      </div>

      <div className="events-container">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
};

const TechnicalEventsPage: React.FC = () => {
  const events = [
    {
      title: "PITCH4SUSTAIN",
      description: "Tackle real-world sustainability challenges with innovative solutions.",
      venue: "002",
      registrationFee: "₹500",
      teamSize: "1-5 members",
      organizer: "$Echo & Anova Teams",
      details: (
        <>
          <h4>Theme:</h4>
          <p>Sustainable Development and Innovation</p>
          
          <h4>Format:</h4>
          <ul>
            <li>Round 1: Idea Submission</li>
            <li>Round 2: Prototype Development</li>
            <li>Round 3: Final Pitch</li>
          </ul>
          
          <h4>Judging Criteria:</h4>
          <ul>
            <li>Innovation & Creativity (25%)</li>
            <li>Technical Feasibility (25%)</li>
            <li>Sustainability Impact (25%)</li>
            <li>Presentation & Demo (25%)</li>
          </ul>
          
          <h4>Prizes:</h4>
          <ul>
            <li>🏆 1st Place: ₹10,000 + Certificates</li>
            <li>🥈 2nd Place: ₹5,000 + Certificates</li>
            <li>🥉 3rd Place: ₹3,000 + Certificates</li>
          </ul>
        </>
      ),
      image: "/images/events/tech/pitch4sustain-poster.jpg"
    },
    {
      title: "CTRL+Z – UNDO THE CHAOS",
      description: "Debugging & Code Reordering Challenge where teams fix scrambled code.",
      venue: "FET",
      registrationFee: "₹200",
      teamSize: "3-4 members",
      organizer: "Neuron, DATA.AI, Info-Sphere, Cognito",
      details: (
        <>
          <h4>Objective:</h4>
          <p>Debug and rearrange scrambled code to match expected output.</p>
          
          <h4>Judging Criteria:</h4>
          <ul>
            <li>Accuracy & Correctness (50%)</li>
            <li>Completion Rate (30%)</li>
            <li>Efficiency (10%)</li>
            <li>Speed (10%)</li>
          </ul>
          
          <h4>Restrictions:</h4>
          <ul>
            <li>No AI tools or online help</li>
            <li>Only basic text editors allowed (No auto-debugging features)</li>
            <li>No internet access</li>
          </ul>
          
          <h4>Prizes:</h4>
          <ul>
            <li>🏆 1st Place: ₹4000 + Certificate</li>
            <li>🥈 2nd Place: ₹2000 + Certificate</li>
            <li>🎖 All participants receive certificates</li>
          </ul>
        </>
      ),
      image: "/images/events/tech/ctrlz-poster.jpg"
    },
    {
      title: "SYNTAX SCRAMBLE",
      description: "Blind Coding + Debugging challenge to test coding skills without execution.",
      venue: "FET",
      registrationFee: "₹150",
      teamSize: "Individual",
      details: (
        <>
          <h4>Structure:</h4>
          <ul>
            <li>Round 1 (Blind Coding - 45 min): Write code without execution</li>
            <li>Round 2 (Debugging - 30 min): Fix errors in given code</li>
          </ul>
          
          <h4>Languages:</h4>
          <ul>
            <li>C, C++, Java, Python</li>
          </ul>
          
          <h4>Prizes:</h4>
          <ul>
            <li>🏆 1st Place: ₹2000 + Certificate</li>
            <li>🥈 2nd Place: ₹1000 + Certificate</li>
          </ul>
        </>
      ),
      image: "/images/events/tech/syntax-scramble-poster.jpg"
    },
    {
      title: "PHANTOM HUNT",
      description: "Cybersecurity challenge featuring cryptography, steganography, and network security tasks.",
      venue: "FET",
      registrationFee: "₹500",
      teamSize: "4-5 members",
      organizer: "Cybersecurity Club",
      details: (
        <>
          <h4>Format:</h4>
          <p>Capture The Flag (CTF) competition with progressive challenges</p>
          
          <h4>Categories:</h4>
          <ul>
            <li>Web Security</li>
            <li>Cryptography</li>
            <li>Steganography</li>
            <li>Reverse Engineering</li>
            <li>Network Security</li>
          </ul>
          
          <h4>Prizes:</h4>
          <ul>
            <li>🏆 1st Place: ₹8000 + Certificate</li>
            <li>🥈 2nd Place: ₹4000 + Certificate</li>
            <li>🥉 3rd Place: ₹2000 + Certificate</li>
          </ul>
        </>
      ),
      image: "/images/events/tech/phantom-hunt-poster.jpg"
    },
    {
      title: "INNOVATHON",
      description: "24-hour innovation marathon to develop solutions for industry problems.",
      venue: "IIAME",
      registrationFee: "₹300",
      teamSize: "3-5 members",
      details: (
        <>
          <h4>Format:</h4>
          <p>24-hour hackathon to design and prototype solutions</p>
          
          <h4>Problem Statements:</h4>
          <p>Industry challenges from partner companies</p>
          
          <h4>Resources Provided:</h4>
          <ul>
            <li>Workspace & Internet</li>
            <li>Meals & Refreshments</li>
            <li>Mentorship Sessions</li>
            <li>Basic Components</li>
          </ul>
          
          <h4>Prizes:</h4>
          <ul>
            <li>🏆 1st Place: ₹15,000 + Internship Opportunities</li>
            <li>🥈 2nd Place: ₹7,500 + Certificates</li>
            <li>🥉 3rd Place: ₹5,000 + Certificates</li>
          </ul>
        </>
      ),
      image: "/images/events/tech/innovathon-poster.jpg"
    }
  ];

  return (
    <div className="events-page">
      <div className="events-hero">
        <div className="events-hero-content">
          <h1>Technical Events</h1>
          <p>Challenge your skills and showcase your technical prowess</p>
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

export default TechnicalEventsPage;