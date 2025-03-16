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
      description: "Sustainability Hackathon focused on innovative solutions for environmental challenges.",
      venue: "002",
      registrationFee: "₹500",
      teamSize: "1-5 members",
      organizer: "$Echo, Anova, GDG on Campus, Zigbee",
      details: (
        <>
          <h4>Objective:</h4>
          <p>Solve sustainability challenges with a working prototype.</p>
          
          <h4>Themes:</h4>
          <ul>
            <li>Good Health & Well-being</li>
            <li>Decent Work & Economic Growth</li>
            <li>Zero Hunger</li>
            <li>Affordable & Clean Energy</li>
            <li>Sustainable Cities & Communities</li>
          </ul>
          
          <h4>Prototype Requirements:</h4>
          <p>Must be functional (hardware/software/simulation)</p>
          
          <h4>Presentation Format:</h4>
          <p>10-minute pitch + 5-minute Q&A</p>
          
          <h4>Judging Criteria:</h4>
          <ul>
            <li>Innovation (20%)</li>
            <li>Technical Feasibility (25%)</li>
            <li>Impact & Sustainability (20%)</li>
            <li>Scalability (15%)</li>
            <li>Presentation (20%)</li>
          </ul>
        </>
      ),
      image: "/images/events/tech/pitch4sustain-poster.jpg" // Updated image path
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
      image: "/images/events/tech/ctrlz-poster.jpg" // Updated image path
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
            <li>Round 2 (Debugging - 25 min): Debug another participant's code</li>
            <li>Round 3 (Execution & Judging - 20 min): Code is tested</li>
          </ul>
          
          <h4>Judging Criteria:</h4>
          <ul>
            <li>Accuracy (40%)</li>
            <li>Efficiency (30%)</li>
            <li>Debugging Skill (20%)</li>
            <li>Creativity (10%)</li>
          </ul>
          
          <h4>Disqualification Rules:</h4>
          <p>Using online compilers or copying code</p>
          
          <h4>Prizes:</h4>
          <ul>
            <li>🏆 1st Place: ₹3000</li>
            <li>🥈 2nd Place: ₹1500</li>
            <li>🥉 3rd Place: ₹500</li>
          </ul>
        </>
      ),
      image: "/images/events/tech/syntax-poster.jpg" // Updated image path
    },
    {
      title: "PHANTOM HUNT",
      description: "Cybersecurity CTF (Capture The Flag) challenge combining hacking skills and problem-solving.",
      venue: "FET",
      registrationFee: "₹500",
      teamSize: "4-5 members",
      details: (
        <>
          <h4>Event Phases:</h4>
          <ul>
            <li>Phase 1: CTF (QR codes, OSINT, encrypted messages)</li>
            <li>Phase 2: Network analysis (packet tracing, cybersecurity puzzles)</li>
            <li>Phase 3: Advanced cybersecurity tasks</li>
          </ul>
          
          <h4>Rules:</h4>
          <ul>
            <li>Only ethical hacking techniques allowed</li>
            <li>No sharing answers between teams</li>
            <li>Time limits apply, elimination in each phase</li>
          </ul>
          
          <h4>Tools Used:</h4>
          <p>Wireshark, Cisco Packet Tracer, encryption tools</p>
        </>
      ),
      image: "/images/events/tech/phantom-poster.jpg" // Updated image path
    },
    {
      title: "INNOVATHON",
      description: "Product design and innovation competition focusing on emerging technologies.",
      venue: "IIAME",
      registrationFee: "₹300",
      teamSize: "3-5 members",
      details: (
        <>
          <h4>Objective:</h4>
          <p>Brainstorm and develop solutions for a given problem statement</p>
          
          <h4>General Rules:</h4>
          <ul>
            <li>Teams will be provided with a problem statement</li>
            <li>Must develop a functional solution within the given timeframe</li>
            <li>Must adhere to ethical standards</li>
          </ul>
        </>
      ),
      image: "/images/events/tech/innovathon-poster.jpg" // Updated image path
    },
    {
      title: "MODEL BLITZ",
      description: "3D Model Design competition using SolidWorks.",
      venue: "FET",
      registrationFee: "₹250",
      teamSize: "Individual",
      details: (
        <>
          <h4>Software Used:</h4>
          <p>SolidWorks</p>
          
          <h4>Task:</h4>
          <p>Design models based on given problem statements</p>
          
          <h4>Note:</h4>
          <p>No Physical Assembly Required</p>
        </>
      ),
      image: "/images/events/tech/modelblitz-poster.jpg" // Updated image path
    },
    {
      title: "DRONEXTREME",
      description: "Drone challenge focusing on precision and control.",
      venue: "IIAME",
      registrationFee: "₹600",
      teamSize: "2-3 members",
      details: (
        <>
          <h4>Task:</h4>
          <p>Deploy a payload at a target location</p>
          
          <h4>Rules:</h4>
          <ul>
            <li>Teams must bring their own drones</li>
            <li>Only pre-approved models allowed</li>
          </ul>
        </>
      ),
      image: "/images/events/tech/drone-poster.jpg" // Updated image path
    }
  ];

  return (
    <div className="events-page">
      <div className="events-hero">
        <div className="events-hero-content">
          <h1>Technical Events</h1>
          <p>Showcase your technical skills and innovation at Infinity 2025</p>
          <p><strong>Date:</strong> March 28, 2025</p>
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