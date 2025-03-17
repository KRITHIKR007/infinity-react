import React, { useEffect, useState } from 'react';
import EventCard from '../components/EventCard';
import './EventsPage.css';

const CulturalEventsPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
  }, []);
  
  // Cultural events data
  const culturalEvents = [
    {
      title: "STEP SYNC",
      description: "A solo dance competition showcasing various dance forms from classical to contemporary.",
      venue: "Colosseum",
      registrationFee: "₹500 per person",
      teamSize: "Individual",
      date: "MAR 27",
      image: "/images/posters/stepsynk.jpg",
      organizer: "Cultural Club",
      contact: "+91 9353074448",
      details: (
        <div className="event-description">
          <h4>About the Event</h4>
          <p>STEP SYNC is a prestigious solo dance competition that celebrates all dance forms. From classical to contemporary, hip-hop to freestyle, showcase your talent and expression through movement on this grand stage.</p>
          
          <h4>Rules & Guidelines</h4>
          <ul>
            <li>Performance duration: 3-5 minutes</li>
            <li>Participants must bring their own music (MP3 format)</li>
            <li>Props are allowed but must be arranged by participants</li>
            <li>Obscenity or vulgarity in performance will lead to disqualification</li>
            <li>Judging based on choreography, expression, technique, and stage presence</li>
          </ul>
          
          <h4>Prizes</h4>
          <ul>
            <li>1st Prize: ₹8,000 + Trophy + Certificate</li>
            <li>2nd Prize: ₹4,000 + Certificate</li>
            <li>3rd Prize: ₹2,000 + Certificate</li>
          </ul>
        </div>
      )
    },
    {
      title: "NRITYA VEDIKA",
      description: "Group dance competition featuring choreographies that blend traditional and modern dance forms.",
      venue: "Colosseum Main Stage",
      registrationFee: "₹800 per team",
      teamSize: "6-15 members",
      date: "MAR 28",
      image: "/images/posters/cosmic drift.jpg",
      organizer: "Cultural Department",
      contact: "+91 9353074448",
      details: (
        <div className="event-description">
          <h4>About the Event</h4>
          <p>NRITYA VEDIKA is a grand group dance competition that brings together talented dance troupes to showcase choreographies that blend tradition with innovation. Light up the stage with synchronized movements and creative expressions.</p>
          
          <h4>Rules & Guidelines</h4>
          <ul>
            <li>Team size: 6-15 members</li>
            <li>Performance duration: 6-8 minutes</li>
            <li>Music should be submitted in advance (48 hours)</li>
            <li>Props allowed (setup/removal time: 1 minute)</li>
            <li>Theme fusion is encouraged</li>
            <li>Judging based on choreography, synchronization, theme interpretation, and overall impact</li>
          </ul>
          
          <h4>Prizes</h4>
          <ul>
            <li>1st Prize: ₹15,000 + Trophy + Certificates</li>
            <li>2nd Prize: ₹10,000 + Certificates</li>
            <li>3rd Prize: ₹5,000 + Certificates</li>
          </ul>
        </div>
      )
    },
    {
      title: "ECHOES & STRINGS",
      description: "Solo singing competition celebrating vocal talents across various genres and languages.",
      venue: "FET Auditorium",
      registrationFee: "₹299 per person",
      teamSize: "Individual",
      date: "MAR 27",
      image: "/images/posters/ather frames.jpg",
      organizer: "Music Club",
      contact: "+91 9353074448",
      details: (
        <div className="event-description">
          <h4>About the Event</h4>
          <p>ECHOES & STRINGS is a platform for talented vocalists to showcase their singing prowess. This solo singing competition welcomes all genres from classical to contemporary, in any language.</p>
          
          <h4>Rules & Guidelines</h4>
          <ul>
            <li>Performance duration: 3-4 minutes</li>
            <li>Karaoke tracks allowed (bring your own instrumental)</li>
            <li>One instrument for self-accompaniment is permitted</li>
            <li>Both original compositions and covers are welcome</li>
            <li>Judging based on vocal quality, pitch accuracy, rhythm, and expression</li>
          </ul>
          
          <h4>Prizes</h4>
          <ul>
            <li>1st Prize: ₹6,000 + Certificate</li>
            <li>2nd Prize: ₹3,000 + Certificate</li>
            <li>3rd Prize: ₹1,500 + Certificate</li>
          </ul>
        </div>
      )
    },
    {
      title: "COSMIC DRIFT",
      description: "Fashion show competition with creative themes showcasing design, choreography, and stage presence.",
      venue: "Colosseum Runway",
      registrationFee: "₹2500 per team",
      teamSize: "10-14 members",
      date: "MAR 28",
      image: "/images/posters/resonance.jpg",
      organizer: "Fashion Club",
      contact: "+91 9353074448",
      details: (
        <div>
          <h4>About the Event</h4>
          <p>COSMIC DRIFT is a high-energy fashion show competition that challenges teams to create a thematic runway presentation with innovative designs, choreography, and captivating stage presence.</p>
          
          <h4>Rules & Guidelines</h4>
          <ul>
            <li>Team size: 10-14 members (including models, designers, and coordinators)</li>
            <li>Performance duration: 8-10 minutes</li>
            <li>Theme must be clearly specified during registration</li>
            <li>Music must be submitted 48 hours in advance</li>
            <li>Vulgarity in costumes or performance will lead to disqualification</li>
            <li>Judging based on theme interpretation, costume design, choreography, and overall presentation</li>
          </ul>
          
          <h4>Prizes</h4>
          <ul>
            <li>1st Prize: ₹20,000 + Trophy + Certificates</li>
            <li>2nd Prize: ₹12,000 + Certificates</li>
            <li>3rd Prize: ₹8,000 + Certificates</li>
            <li>Best Theme Interpretation: ₹3,000 + Certificate</li>
          </ul>
        </div>
      )
    },
    {
      title: "EKPHRASTIC POETRY",
      description: "Poetry writing and recitation event inspired by visual art and cultural expressions.",
      venue: "FET Literary Corner",
      registrationFee: "₹199 per person",
      teamSize: "Individual",
      date: "MAR 27",
      image: "/images/posters/pitch4sustain.jpg",
      organizer: "Literary Club",
      contact: "+91 9353074448",
      details: (
        <div>
          <h4>About the Event</h4>
          <p>EKPHRASTIC POETRY is a unique creative writing event where participants create poems inspired by visual art pieces. The event combines appreciation for visual arts with poetic expression.</p>
          
          <h4>Rules & Guidelines</h4>
          <ul>
            <li>Participants will be shown selected artworks during the event</li>
            <li>Writing time: 45 minutes</li>
            <li>Poem length: 15-30 lines</li>
            <li>Languages allowed: English, Hindi, Kannada</li>
            <li>Top 10 poets will recite their poems in the final round</li>
            <li>Judging based on creativity, emotional depth, use of language, and recitation</li>
          </ul>
          
          <h4>Prizes</h4>
          <ul>
            <li>1st Prize: ₹3,000 + Certificate</li>
            <li>2nd Prize: ₹2,000 + Certificate</li>
            <li>3rd Prize: ₹1,000 + Certificate</li>
          </ul>
        </div>
      )
    },
    {
      title: "SHORT FILM MAKING",
      description: "Competition for aspiring filmmakers to create and showcase original short films with creative storytelling.",
      venue: "FET Media Room",
      registrationFee: "₹599 per team",
      teamSize: "3-8 members",
      date: "MAR 27-28",
      image: "/images/posters/innovathon.jpg",
      organizer: "Media Club",
      contact: "+91 9353074448",
      details: (
        <div>
          <h4>About the Event</h4>
          <p>SHORT FILM MAKING is a creative filmmaking competition that challenges teams to conceptualize, shoot, and edit original short films within a given time frame. Showcase your storytelling, cinematography, and editing skills in this cinematic challenge.</p>
          
          <h4>Rules & Guidelines</h4>
          <ul>
            <li>Team size: 3-8 members</li>
            <li>Film duration: 5-10 minutes (including credits)</li>
            <li>Theme will be provided 48 hours before submission</li>
            <li>All footage must be original and shot during the competition period</li>
            <li>Format: MP4/MOV, 1080p resolution</li>
            <li>Judging based on storytelling, cinematography, sound design, editing, and theme interpretation</li>
          </ul>
          
          <h4>Prizes</h4>
          <ul>
            <li>1st Prize: ₹12,000 + Certificates</li>
            <li>2nd Prize: ₹8,000 + Certificates</li>
            <li>3rd Prize: ₹4,000 + Certificates</li>
            <li>Best Director: ₹2,000 + Certificate</li>
            <li>Best Cinematography: ₹2,000 + Certificate</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <div className="events-page">
      <div className="events-hero cultural">
        <div className="events-hero-content">
          <h1 className="events-title reveal-text">Cultural Events</h1>
          <p className="events-subtitle">Celebrate creativity, expression, and artistic talent through our diverse cultural competitions</p>
          <div className="events-highlight-bar">
            <div className="highlight-item">
              <i className="fas fa-calendar-alt"></i>
              <span>March 27-28, 2025</span>
            </div>
            <div className="highlight-item">
              <i className="fas fa-award"></i>
              <span>Prestigious Competitions</span>
            </div>
            <div className="highlight-item">
              <i className="fas fa-microphone-alt"></i>
              <span>Showcase Your Talent</span>
            </div>
          </div>
        </div>
      </div>

      <div className={`events-container ${isLoaded ? 'fade-in' : ''}`}>
        {culturalEvents.map((event, index) => (
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

export default CulturalEventsPage;
