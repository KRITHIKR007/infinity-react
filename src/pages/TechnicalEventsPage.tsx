import React, { useEffect, useState } from 'react';
import EventCard from '../components/EventCard';
import './EventsPage.css';

const TechnicalEventsPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
  }, []);
  
  // Technical events data
  const technicalEvents = [
    {
      title: "PITCH4SUSTAIN",
      description: "A sustainability-focused hackathon where teams develop innovative solutions for environmental challenges.",
      venue: "002 Block",
      registrationFee: "₹500 per team",
      teamSize: "1-5 members",
      date: "MAR 28",
      image: "/images/posters/pitch4sustain.jpg",
      organizer: "Department of Computer Science",
      contact: "+91 8296019911",
      details: (
        <div className="event-description">
          <h4>About the Event</h4>
          <p>PITCH4SUSTAIN is a sustainability hackathon focused on developing innovative solutions for environmental challenges. Teams will work to create functional prototypes addressing sustainability issues.</p>
          
          <h4>Themes</h4>
          <ul>
            <li>Good Health & Well-being</li>
            <li>Decent Work & Economic Growth</li>
            <li>Zero Hunger</li>
            <li>Affordable & Clean Energy</li>
            <li>Sustainable Cities & Communities</li>
          </ul>
          
          <h4>Prototype Requirements</h4>
          <ul>
            <li>Must be functional (hardware/software/simulation)</li>
          </ul>
          
          <h4>Presentation Format</h4>
          <ul>
            <li>10-minute pitch + 5-minute Q&A</li>
          </ul>
          
          <h4>Judging Criteria</h4>
          <ul>
            <li>Innovation (20%)</li>
            <li>Technical Feasibility (25%)</li>
            <li>Impact & Sustainability (20%)</li>
            <li>Scalability (15%)</li>
            <li>Presentation (20%)</li>
          </ul>
          
          <h4>Prizes</h4>
          <ul>
            <li>1st Prize: ₹10,000 + Certificates</li>
            <li>2nd Prize: ₹5,000 + Certificates</li>
            <li>3rd Prize: ₹3,000 + Certificates</li>
          </ul>
        </div>
      )
    },
    {
      title: "CTRL+Z – UNDO THE CHAOS",
      description: "A challenging debugging and code reordering competition that tests problem-solving skills.",
      venue: "FET Computer Labs",
      registrationFee: "₹200 per team",
      teamSize: "3-4 members",
      date: "MAR 28",
      image: "/images/posters/ctrl+z.jpg",
      organizer: "Neuron, DATA.AI, Info-Sphere, Cognito",
      contact: "+91 8296019911",
      details: (
        <div className="event-description">
          <h4>About the Event</h4>
          <p>CTRL+Z – UNDO THE CHAOS is an exciting debugging and code reordering challenge where teams must debug and rearrange scrambled code to match expected outputs.</p>
          
          <h4>Judging Criteria</h4>
          <ul>
            <li>Accuracy & Correctness (50%)</li>
            <li>Completion Rate (30%)</li>
            <li>Efficiency (10%)</li>
            <li>Speed (10%)</li>
          </ul>
          
          <h4>Restrictions</h4>
          <ul>
            <li>No AI tools or online help</li>
            <li>Only basic text editors allowed (No auto-debugging features)</li>
            <li>No internet access during the competition</li>
          </ul>
          
          <h4>Prizes</h4>
          <ul>
            <li>1st Prize: ₹4,000 + Certificate</li>
            <li>2nd Prize: ₹2,000 + Certificate</li>
            <li>All participants receive certificates</li>
          </ul>
        </div>
      )
    },
    {
      title: "SYNTAX SCRAMBLE",
      description: "A coding competition that tests algorithmic thinking, problem-solving, and programming efficiency.",
      venue: "FET Computer Labs",
      registrationFee: "₹150 per person",
      teamSize: "Individual",
      date: "MAR 28",
      image: "/images/posters/syntax scramble.jpg",
      organizer: "Coding Club",
      contact: "+91 8296019911",
      details: (
        <div className="event-description">
          <h4>About the Event</h4>
          <p>SYNTAX SCRAMBLE combines blind coding and debugging in an intense individual competition that challenges participants' programming skills.</p>
          
          <h4>Structure</h4>
          <ul>
            <li>Round 1 (Blind Coding - 45 min): Write code without execution</li>
            <li>Round 2 (Debugging - 25 min): Debug another participant's code</li>
            <li>Round 3 (Execution & Judging - 20 min): Code is tested</li>
          </ul>
          
          <h4>Judging Criteria</h4>
          <ul>
            <li>Accuracy (40%)</li>
            <li>Efficiency (30%)</li>
            <li>Debugging Skill (20%)</li>
            <li>Creativity (10%)</li>
          </ul>
          
          <h4>Disqualification Rules</h4>
          <ul>
            <li>Using online compilers or copying code</li>
          </ul>
          
          <h4>Prizes</h4>
          <ul>
            <li>1st Prize: ₹3,000 + Certificate</li>
            <li>2nd Prize: ₹1,500 + Certificate</li>
            <li>3rd Prize: ₹500 + Certificate</li>
          </ul>
        </div>
      )
    },
    {
      title: "PHANTOM HUNT",
      description: "A thrilling cybersecurity challenge that tests technical knowledge and problem-solving skills.",
      venue: "FET Campus",
      registrationFee: "₹500 per team",
      teamSize: "4-5 members",
      date: "MAR 28",
      image: "/images/posters/phnatum hunt.jpg",
      organizer: "Technical Club",
      contact: "+91 8296019911",
      details: (
        <div className="event-description">
          <h4>About the Event</h4>
          <p>PHANTOM HUNT is a exciting cybersecurity challenge that tests participants' skills in cryptography, network analysis, and ethical hacking.</p>
          
          <h4>Event Phases</h4>
          <ul>
            <li>Phase 1: CTF (QR codes, OSINT, encrypted messages)</li>
            <li>Phase 2: Network analysis (packet tracing, cybersecurity puzzles)</li>
            <li>Phase 3: Advanced cybersecurity tasks</li>
          </ul>
          
          <h4>Rules</h4>
          <ul>
            <li>Only ethical hacking techniques allowed</li>
            <li>No sharing answers between teams</li>
            <li>Time limits apply, elimination in each phase</li>
          </ul>
          
          <h4>Tools Used</h4>
          <ul>
            <li>Wireshark, Cisco Packet Tracer, encryption tools</li>
          </ul>
          
          <h4>Prizes</h4>
          <ul>
            <li>1st Prize: ₹8,000 + Certificates</li>
            <li>2nd Prize: ₹4,000 + Certificates</li>
            <li>3rd Prize: ₹2,000 + Certificates</li>
          </ul>
        </div>
      )
    },
    {
      title: "INNOVATHON",
      description: "An innovation marathon where teams develop prototypes to solve industry-specific challenges.",
      venue: "IIAME Innovation Hub",
      registrationFee: "₹300 per team",
      teamSize: "3-5 members",
      date: "MAR 28",
      image: "/images/posters/innovation.jpg",
      organizer: "IIAME",
      contact: "+91 8296019911",
      details: (
        <div className="event-description">
          <h4>About the Event</h4>
          <p>INNOVATHON brings together creative minds to brainstorm and develop solutions for given problem statements. Teams must develop functional solutions within the provided timeframe.</p>
          
          <h4>General Rules</h4>
          <ul>
            <li>Teams will be provided with a problem statement</li>
            <li>Must develop a functional solution within the given timeframe</li>
            <li>Must adhere to ethical standards</li>
          </ul>
          
          <h4>Judging Criteria</h4>
          <ul>
            <li>Innovation and Originality</li>
            <li>Technical Implementation</li>
            <li>Solution Effectiveness</li>
            <li>Presentation</li>
          </ul>
          
          <h4>Prizes</h4>
          <ul>
            <li>1st Prize: ₹15,000 + Internship Opportunities + Certificates</li>
            <li>2nd Prize: ₹8,000 + Certificates</li>
            <li>3rd Prize: ₹4,000 + Certificates</li>
          </ul>
        </div>
      )
    },
    {
      title: "MODEL BLITZ",
      description: "A competition showcasing engineering models and 3D design skills using SolidWorks.",
      venue: "FET Design Lab",
      registrationFee: "₹250 per entry",
      teamSize: "Individual",
      date: "MAR 28",
      image: "/images/posters/model blitz.jpg",
      organizer: "Engineering Department",
      contact: "+91 8296019911",
      details: (
        <div className="event-description">
          <h4>About the Event</h4>
          <p>MODEL BLITZ is a 3D model design competition where participants use SolidWorks to design models based on given problem statements. No physical assembly is required.</p>
          
          <h4>Software Used</h4>
          <ul>
            <li>SolidWorks (will be provided)</li>
          </ul>
          
          <h4>Judging Criteria</h4>
          <ul>
            <li>Design Accuracy</li>
            <li>Creativity and Innovation</li>
            <li>Technical Feasibility</li>
            <li>Presentation</li>
          </ul>
          
          <h4>Prizes</h4>
          <ul>
            <li>1st Prize: ₹7,000 + Certificates</li>
            <li>2nd Prize: ₹4,000 + Certificates</li>
            <li>3rd Prize: ₹2,000 + Certificates</li>
          </ul>
        </div>
      )
    },
    {
      title: "DRONEXTREME",
      description: "A drone racing and payload deployment challenge that tests piloting skills and technical modifications.",
      venue: "IIAME Ground",
      registrationFee: "₹600 per team",
      teamSize: "2-3 members",
      date: "MAR 28",
      image: "/images/posters/dron etream.jpg",
      organizer: "Aeronautics Department",
      contact: "+91 8296019911",
      details: (
        <div className="event-description">
          <h4>About the Event</h4>
          <p>DRONEXTREME is an exciting drone challenge where teams must deploy a payload at a target location. This event tests participants' drone piloting skills and technical knowledge.</p>
          
          <h4>Rules</h4>
          <ul>
            <li>Teams must bring their own drones</li>
            <li>Only pre-approved models allowed</li>
            <li>Maximum drone dimensions: 30cm x 30cm x 15cm</li>
            <li>Maximum weight: 500g</li>
            <li>All drones must have a fail-safe mechanism</li>
          </ul>
          
          <h4>Judging Criteria</h4>
          <ul>
            <li>Accuracy of Payload Deployment</li>
            <li>Time Taken</li>
            <li>Technical Modifications</li>
            <li>Piloting Skills</li>
          </ul>
          
          <h4>Prizes</h4>
          <ul>
            <li>1st Prize: ₹12,000 + Certificates</li>
            <li>2nd Prize: ₹8,000 + Certificates</li>
            <li>3rd Prize: ₹4,000 + Certificates</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <div className="events-page">
      <div className="events-hero">
        <div className="events-hero-content">
          <h1 className="events-title reveal-text">Technical Events</h1>
          <p className="events-subtitle">Explore cutting-edge competitions that challenge your technical skills</p>
          <div className="events-highlight-bar">
            <div className="highlight-item">
              <i className="fas fa-calendar-alt"></i>
              <span>March 28, 2025</span>
            </div>
            <div className="highlight-item">
              <i className="fas fa-medal"></i>
              <span>Exciting Prizes</span>
            </div>
            <div className="highlight-item">
              <i className="fas fa-users"></i>
              <span>Team & Solo Events</span>
            </div>
          </div>
        </div>
      </div>

      <div className={`events-container ${isLoaded ? 'fade-in' : ''}`}>
        {technicalEvents.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            description={event.description}
            venue={event.venue}
            registrationFee={event.registrationFee}
            teamSize={event.teamSize}
            details={event.details}
            image={event.image}
            organizer={event.organizer}
            contact={event.contact}
            date={event.date}
          />
        ))}
      </div>
    </div>
  );
};

export default TechnicalEventsPage;