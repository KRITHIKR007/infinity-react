import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './EventDetailsPage.css';

interface EventDetail {
  id: string;
  title: string;
  description: string;
  venue: string;
  registrationFee: string;
  teamSize: string;
  date: string;
  time?: string;
  image: string;
  organizer?: string;
  contact?: string;
  rules?: string[];
  prizes?: string[];
  about?: string;
  requirements?: string[];
  judges?: string[];
  category: 'technical' | 'cultural';
}

const EventDetailsPage: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const [event, setEvent] = useState<EventDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // In a real app, you would fetch the event details from a backend API
    // For this demo, we'll simulate a fetch with setTimeout
    setLoading(true);
    setTimeout(() => {
      // Find the event in our local data
      const foundEvent = getAllEvents().find(e => e.id === eventId);
      
      if (foundEvent) {
        setEvent(foundEvent);
        setLoading(false);
      } else {
        setError("Event not found");
        setLoading(false);
      }
    }, 800);
    
    // Add a delay before showing animations
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [eventId]);

  // Function to get all available events
  const getAllEvents = (): EventDetail[] => {
    return [
      // Technical Events
      {
        id: "pitch4sustain",
        title: "PITCH4SUSTAIN",
        category: "technical",
        description: "A sustainability-focused hackathon where teams develop innovative solutions for environmental challenges.",
        venue: "002 Block",
        registrationFee: "₹500 per team",
        teamSize: "1-5 members",
        date: "March 28, 2025",
        time: "9:00 AM - 6:00 PM",
        image: "/images/posters/pitch4sustain.jpg",
        organizer: "Anova, GDG on Campus, Zigbee",
        contact: "+91 8296019911",
        about: "PITCH4SUSTAIN is a 24-hour hackathon focused on developing innovative solutions for environmental sustainability. Teams will work to create functional prototypes addressing sustainability issues.",
        rules: [
          "Teams must consist of 1-5 members",
          "All code must be written during the event",
          "Solutions must address a sustainability challenge",
          "Final presentations should be under 5 minutes",
          "Judging based on innovation, feasibility, and impact"
        ],
        prizes: [
          "1st Prize: ₹10,000 + Certificates",
          "2nd Prize: ₹5,000 + Certificates",
          "3rd Prize: ₹3,000 + Certificates"
        ],
        requirements: [
          "Laptops with necessary software",
          "Student ID cards",
          "Power adapters",
          "Preliminary project idea"
        ]
      },
      {
        id: "ctrl-z",
        title: "CTRL+Z – UNDO THE CHAOS",
        category: "technical",
        description: "A debugging and code reordering competition that tests problem-solving skills.",
        venue: "FET Computer Labs",
        registrationFee: "₹200 per team",
        teamSize: "3-4 members",
        date: "March 28, 2025",
        time: "11:00 AM - 3:00 PM",
        image: "/images/posters/ctrl+z.jpg",
        organizer: "Neuron, DATA.AI, Info-Sphere, Cognito",
        contact: "+91 8296019911",
        about: "CTRL+Z is an exciting challenge that tests participants' ability to debug and rearrange scrambled code to match expected outputs, pushing their problem-solving skills to the limit.",
        rules: [
          "Teams of 3-4 members",
          "No AI tools or online help allowed",
          "Only basic text editors permitted (no auto-debugging features)",
          "No internet access during the competition"
        ],
        prizes: [
          "1st Prize: ₹4,000 + Certificate",
          "2nd Prize: ₹2,000 + Certificate",
          "All participants receive certificates"
        ],
        requirements: [
          "Basic programming knowledge",
          "Familiarity with debugging techniques",
          "Problem-solving skills"
        ]
      },
      {
        id: "syntax-scramble",
        title: "SYNTAX SCRAMBLE",
        category: "technical",
        description: "A coding competition that tests algorithmic thinking, problem-solving, and programming efficiency.",
        venue: "FET Computer Labs",
        registrationFee: "₹150 per person",
        teamSize: "Individual",
        date: "March 28, 2025",
        time: "10:00 AM - 2:00 PM",
        image: "/images/posters/syntax scramble.jpg",
        organizer: "Coding Club",
        contact: "+91 8296019911",
        about: "SYNTAX SCRAMBLE combines blind coding and debugging in an intense competition that challenges participants' programming skills without allowing code execution until the final testing phase.",
        rules: [
          "Individual participation only",
          "Round 1 (Blind Coding - 45 min): Write code without execution",
          "Round 2 (Debugging - 25 min): Debug another participant's code",
          "Round 3 (Execution & Judging - 20 min): Code is tested",
          "Using online compilers or copying code will lead to disqualification"
        ],
        prizes: [
          "1st Prize: ₹3,000 + Certificate",
          "2nd Prize: ₹1,500 + Certificate",
          "3rd Prize: ₹500 + Certificate"
        ],
        requirements: [
          "Strong programming fundamentals",
          "Problem-solving skills",
          "Knowledge of at least one programming language"
        ]
      },
      {
        id: "phantom-hunt",
        title: "PHANTOM HUNT",
        category: "technical",
        description: "A thrilling cybersecurity challenge that tests technical knowledge and problem-solving skills.",
        venue: "FET Campus",
        registrationFee: "₹500 per team",
        teamSize: "4-5 members",
        date: "March 27-28, 2025",
        time: "10:00 AM onwards",
        image: "/images/posters/phnatum hunt.jpg",
        organizer: "Technical Club",
        contact: "+91 8296019911",
        about: "PHANTOM HUNT is an exciting cybersecurity challenge that tests participants' skills in cryptography, network analysis, and ethical hacking across three progressive phases.",
        rules: [
          "Teams must consist of 4-5 members",
          "Only ethical hacking techniques allowed",
          "No sharing answers between teams",
          "Time limits apply, elimination in each phase"
        ],
        prizes: [
          "1st Prize: ₹8,000 + Certificates",
          "2nd Prize: ₹4,000 + Certificates",
          "3rd Prize: ₹2,000 + Certificates"
        ],
        requirements: [
          "Student ID cards",
          "Mobile device with internet",
          "Power banks",
          "Basic knowledge of cybersecurity concepts"
        ]
      },
      {
        id: "innovathon",
        title: "INNOVATHON",
        category: "technical",
        description: "An innovation marathon where teams develop prototypes to solve industry-specific challenges.",
        venue: "IIAME Innovation Hub",
        registrationFee: "₹300 per team",
        teamSize: "3-5 members",
        date: "March 28, 2025",
        time: "9:00 AM - 8:00 PM",
        image: "/images/posters/innovation.jpg",
        organizer: "IIAME",
        contact: "+91 8296019911",
        about: "INNOVATHON brings together creative minds to brainstorm and develop solutions for given problem statements. Teams must develop functional solutions within the provided timeframe.",
        rules: [
          "Teams will be provided with a problem statement",
          "Must develop a functional solution within the given timeframe",
          "Must adhere to ethical standards"
        ],
        prizes: [
          "1st Prize: ₹15,000 + Internship Opportunities + Certificates",
          "2nd Prize: ₹8,000 + Certificates",
          "3rd Prize: ₹4,000 + Certificates"
        ],
        requirements: [
          "Innovative thinking",
          "Problem-solving skills",
          "Basic prototyping materials"
        ]
      },
      {
        id: "model-blitz",
        title: "MODEL BLITZ",
        category: "technical",
        description: "A 3D modeling competition showcasing engineering design skills using SolidWorks.",
        venue: "FET Design Lab",
        registrationFee: "₹250 per entry",
        teamSize: "Individual",
        date: "March 28, 2025",
        time: "10:00 AM - 4:00 PM",
        image: "/images/posters/model blitz.jpg",
        organizer: "Engineering Department",
        contact: "+91 8296019911",
        about: "MODEL BLITZ is a 3D model design competition where participants use SolidWorks to design models based on given problem statements. No physical assembly is required.",
        rules: [
          "Individual participation only",
          "Software used: SolidWorks (will be provided)",
          "Task: Design models based on given problem statements",
          "No physical assembly required"
        ],
        prizes: [
          "1st Prize: ₹7,000 + Certificates",
          "2nd Prize: ₹4,000 + Certificates",
          "3rd Prize: ₹2,000 + Certificates"
        ],
        requirements: [
          "Basic knowledge of 3D modeling",
          "Familiarity with SolidWorks"
        ]
      },
      {
        id: "dronextreme",
        title: "DRONEXTREME",
        category: "technical",
        description: "A drone racing and payload deployment challenge that tests piloting skills and technical modifications.",
        venue: "IIAME Ground",
        registrationFee: "₹600 per team",
        teamSize: "2-3 members",
        date: "March 28, 2025",
        time: "11:00 AM - 5:00 PM",
        image: "/images/posters/dron etream.jpg",
        organizer: "Aeronautics Department",
        contact: "+91 8296019911",
        about: "DRONEXTREME is an exciting drone challenge where teams must deploy a payload at a target location, testing participants' drone piloting skills and technical knowledge.",
        rules: [
          "Teams must bring their own drones",
          "Only pre-approved models allowed",
          "Maximum drone dimensions: 30cm x 30cm x 15cm",
          "Maximum weight: 500g",
          "All drones must have a fail-safe mechanism"
        ],
        prizes: [
          "1st Prize: ₹12,000 + Certificates",
          "2nd Prize: ₹8,000 + Certificates",
          "3rd Prize: ₹4,000 + Certificates"
        ],
        requirements: [
          "Drone that meets specifications",
          "Spare parts and batteries",
          "Basic knowledge of drone piloting"
        ]
      },
      
      // Cultural Events
      {
        id: "step-sync",
        title: "STEP SYNC",
        category: "cultural",
        description: "A solo dance competition showcasing various dance forms from classical to contemporary.",
        venue: "Colosseum",
        registrationFee: "₹500 per person",
        teamSize: "Individual",
        date: "March 28, 2025",
        time: "2:00 PM - 6:00 PM",
        image: "/images/posters/stepsynk.jpg",
        organizer: "Cultural Club",
        contact: "+91 9493681014",
        about: "STEP SYNC is a prestigious solo dance competition that celebrates all dance forms. From classical to contemporary, hip-hop to freestyle, showcase your talent and expression through movement on this grand stage.",
        rules: [
          "Performance duration: 3-5 minutes",
          "Participants must bring their own music (MP3 format)",
          "Props are allowed but must be arranged by participants",
          "Obscenity or vulgarity in performance will lead to disqualification"
        ],
        prizes: [
          "1st Prize: ₹8,000 + Trophy + Certificate",
          "2nd Prize: ₹4,000 + Certificate",
          "3rd Prize: ₹2,000 + Certificate"
        ],
        requirements: [
          "Music track in MP3 format (submit 1 hour before performance)",
          "Appropriate attire for the chosen dance style",
          "Props (if needed)",
          "College ID card"
        ]
      },
      {
        id: "nritya-vedika",
        title: "NRITYA VEDIKA",
        category: "cultural",
        description: "Group dance competition featuring choreographies that blend traditional and modern dance forms.",
        venue: "Colosseum Main Stage",
        registrationFee: "₹800 per team",
        teamSize: "6-15 members",
        date: "March 28, 2025",
        time: "4:00 PM - 8:00 PM",
        image: "/images/posters/britya veduka.jpg",
        organizer: "Cultural Club",
        contact: "+91 9493681014",
        about: "NRITYA VEDIKA is a grand group dance competition that brings together talented dance troupes to showcase choreographies that blend tradition with innovation.",
        rules: [
          "Team size: 6-15 members",
          "Performance duration: 6-8 minutes",
          "Music should be submitted in advance (48 hours)",
          "Props allowed (setup/removal time: 1 minute)",
          "Theme fusion is encouraged"
        ],
        prizes: [
          "1st Prize: ₹15,000 + Trophy + Certificates",
          "2nd Prize: ₹10,000 + Certificates",
          "3rd Prize: ₹5,000 + Certificates"
        ],
        requirements: [
          "Music in MP3 format",
          "Coordinated costumes",
          "Props (if needed)",
          "College ID cards for all participants"
        ]
      },
      {
        id: "echoes-strings",
        title: "ECHOES & STRINGS",
        category: "cultural",
        description: "Solo singing competition celebrating vocal talents across various genres and languages.",
        venue: "FET Auditorium",
        registrationFee: "₹299 per person",
        teamSize: "Individual",
        date: "March 27, 2025",
        time: "1:00 PM - 5:00 PM",
        image: "/images/posters/echoed strangel.jpg",
        organizer: "Music Club",
        contact: "+91 9353074448",
        about: "ECHOES & STRINGS is a solo singing competition that provides a platform for vocalists to showcase their talent across various genres and languages.",
        rules: [
          "Performance time: 3 minutes",
          "No background music allowed",
          "Participants must sing without instrumental accompaniment",
          "Languages allowed: Any"
        ],
        prizes: [
          "1st Prize: ₹5,000 + Certificate",
          "2nd Prize: ₹3,000 + Certificate",
          "3rd Prize: ₹1,500 + Certificate"
        ],
        requirements: [
          "Prepared song",
          "College ID card"
        ]
      },
      {
        id: "resonance",
        title: "RESONANCE",
        category: "cultural",
        description: "Music competition for duets and groups showcasing harmonies and musical arrangements.",
        venue: "FET Auditorium",
        registrationFee: "₹399 (Duet), ₹699 (Group)",
        teamSize: "2+ members",
        date: "March 27, 2025",
        time: "5:00 PM - 9:00 PM",
        image: "/images/posters/resonance.jpg",
        organizer: "Music Club",
        contact: "+91 9353074448",
        about: "RESONANCE is a music competition for duets and groups to showcase their harmonies and musical arrangements, celebrating collaborative musical talent.",
        rules: [
          "Duet performance time: 5 minutes",
          "Group performance time: 7 minutes",
          "Musical instruments allowed",
          "Pre-recorded music not allowed"
        ],
        prizes: [
          "Duet - 1st Prize: ₹7,000 + Certificates",
          "Duet - 2nd Prize: ₹4,000 + Certificates",
          "Group - 1st Prize: ₹12,000 + Certificates",
          "Group - 2nd Prize: ₹7,000 + Certificates"
        ],
        requirements: [
          "Own musical instruments",
          "College ID cards for all participants"
        ]
      },
      {
        id: "cosmic-drift",
        title: "COSMIC DRIFT",
        category: "cultural",
        description: "Fashion show competition with creative themes showcasing design, choreography, and stage presence.",
        venue: "Colosseum Runway",
        registrationFee: "₹2500 per team",
        teamSize: "10-14 members",
        date: "March 28, 2025",
        time: "6:00 PM onwards",
        image: "/images/posters/cosmic drift.jpg",
        organizer: "Fashion Club",
        contact: "+91 9493681014",
        about: "COSMIC DRIFT is a high-energy fashion show competition with a sci-fi theme that challenges teams to create a thematic runway presentation with innovative designs, choreography, and captivating stage presence.",
        rules: [
          "Team size: 10-14 members (including models, designers, and coordinators)",
          "Performance duration: 8-10 minutes",
          "Theme must be clearly specified during registration",
          "Music must be submitted 48 hours in advance"
        ],
        prizes: [
          "1st Prize: ₹20,000 + Trophy + Certificates",
          "2nd Prize: ₹12,000 + Certificates",
          "3rd Prize: ₹8,000 + Certificates",
          "Best Theme Interpretation: ₹3,000 + Certificate"
        ],
        requirements: [
          "Complete theme description",
          "Music in MP3 format",
          "Detailed list of team members with roles",
          "College ID cards"
        ]
      },
      {
        id: "ekphrastic-poetry",
        title: "EKPHRASTIC POETRY",
        category: "cultural",
        description: "Poetry writing and recitation event inspired by visual art and cultural expressions.",
        venue: "FET Literary Corner",
        registrationFee: "₹199 per person",
        teamSize: "Individual",
        date: "March 27, 2025",
        time: "11:00 AM - 1:00 PM",
        image: "/images/posters/poetry.jpg",
        organizer: "Literary Club",
        contact: "+91 6360393131",
        about: "EKPHRASTIC POETRY is a unique creative writing event where participants create poems inspired by visual art pieces, combining appreciation for visual arts with poetic expression.",
        rules: [
          "Participants will be shown selected artworks during the event",
          "Writing time: 45 minutes",
          "Poem length: 15-30 lines",
          "Languages allowed: English, Hindi, Kannada",
          "Top 10 poets will recite their poems in the final round"
        ],
        prizes: [
          "1st Prize: ₹3,000 + Certificate",
          "2nd Prize: ₹2,000 + Certificate",
          "3rd Prize: ₹1,000 + Certificate"
        ],
        requirements: [
          "Writing materials",
          "College ID card"
        ]
      },
      {
        id: "tale-rewind",
        title: "TALE REWIND",
        category: "cultural",
        description: "A reverse story writing competition where participants craft narratives leading to a predefined ending.",
        venue: "FET Literary Corner",
        registrationFee: "₹199 per person",
        teamSize: "Individual",
        date: "March 27, 2025",
        time: "2:00 PM - 4:00 PM",
        image: "/images/posters/tale rewind.jpg",
        organizer: "Literary Club",
        contact: "+91 6360393131",
        about: "TALE REWIND is a creative writing challenge where participants craft stories leading to a predefined ending, testing their imagination and narrative skills.",
        rules: [
          "Participants will be given the last paragraph of a story",
          "Task: Write the beginning and middle leading to the provided ending",
          "Word limit: 300-700 words",
          "Languages allowed: English, Hindi, Kannada",
          "Time: 90 minutes"
        ],
        prizes: [
          "1st Prize: ₹3,000 + Certificate",
          "2nd Prize: ₹2,000 + Certificate",
          "3rd Prize: ₹1,000 + Certificate"
        ],
        requirements: [
          "Writing materials",
          "College ID card"
        ]
      },
      {
        id: "jam",
        title: "JUST A MINUTE (JAM)",
        category: "cultural",
        description: "A speech challenge where participants must speak for exactly one minute without hesitation, repetition, or deviation.",
        venue: "FET Seminar Hall",
        registrationFee: "₹199 per person",
        teamSize: "Individual",
        date: "March 27, 2025",
        time: "4:30 PM - 6:30 PM",
        image: "/images/posters/just s minut.jpg",
        organizer: "Literary Club",
        contact: "+91 6360393131",
        about: "JUST A MINUTE (JAM) is a challenging speech competition where participants must speak for exactly 60 seconds on a given topic without hesitation, repetition, or deviation.",
        rules: [
          "Speak for exactly 60 seconds",
          "No hesitation, repetition, or deviation allowed",
          "Topics will be provided on the spot",
          "Languages allowed: English only"
        ],
        prizes: [
          "1st Prize: ₹2,000 + Certificate",
          "2nd Prize: ₹1,000 + Certificate",
          "3rd Prize: ₹500 + Certificate"
        ],
        requirements: [
          "Quick thinking skills",
          "College ID card"
        ]
      },
      {
        id: "wave-your-story",
        title: "WAVE YOUR STORY",
        category: "cultural",
        description: "Speech recital competition focused on delivering famous historical speeches with passion and authenticity.",
        venue: "FET Auditorium",
        registrationFee: "₹299 per person",
        teamSize: "Individual",
        date: "March 27, 2025",
        time: "10:00 AM - 12:00 PM",
        image: "/images/posters/wave the falge.jpg",
        organizer: "Literary Club",
        contact: "+91 6360393131",
        about: "WAVE YOUR STORY is a speech recital competition where participants recreate famous historical speeches with their own interpretation, focusing on delivery, emotion, and impact.",
        rules: [
          "Choose from a provided list of historical speeches",
          "Performance time: 3-5 minutes",
          "Costumes relevant to the historical context are encouraged",
          "Judging based on delivery, emotion, and authenticity"
        ],
        prizes: [
          "1st Prize: ₹4,000 + Certificate",
          "2nd Prize: ₹2,500 + Certificate",
          "3rd Prize: ₹1,500 + Certificate"
        ],
        requirements: [
          "Memorized speech",
          "Appropriate attire/costume",
          "College ID card"
        ]
      },
      {
        id: "short-film",
        title: "SHORT FILM MAKING",
        category: "cultural",
        description: "Competition for aspiring filmmakers to create and showcase original short films with creative storytelling.",
        venue: "FET Media Room",
        registrationFee: "₹599 per team",
        teamSize: "3-8 members",
        date: "March 27-28, 2025",
        time: "Submission by March 26, 2025",
        image: "/images/posters/ather frames.jpg",
        organizer: "Media Club",
        contact: "+91 9353074448",
        about: "SHORT FILM MAKING is a creative filmmaking competition that challenges teams to conceptualize, shoot, and edit original short films within a given time frame.",
        rules: [
          "Team size: 3-8 members",
          "Film duration: 5-10 minutes (including credits)",
          "Theme will be provided 120 hours before submission",
          "All footage must be original and shot during the competition period",
          "Format: MP4/MOV, 1080p resolution"
        ],
        prizes: [
          "1st Prize: ₹12,000 + Certificates",
          "2nd Prize: ₹8,000 + Certificates",
          "3rd Prize: ₹4,000 + Certificates",
          "Best Director: ₹2,000 + Certificate",
          "Best Cinematography: ₹2,000 + Certificate"
        ],
        requirements: [
          "Filming equipment",
          "Editing software",
          "College ID cards for all team members"
        ]
      },
      {
        id: "capture-moment",
        title: "CAPTURE THE MOMENT",
        category: "cultural",
        description: "Photography competition showcasing visual storytelling and creative composition.",
        venue: "FET Campus",
        registrationFee: "₹249 per person",
        teamSize: "Individual",
        date: "March 27, 2025",
        time: "10:00 AM - 4:00 PM",
        image: "/images/posters/capture the moment.jpg",
        organizer: "Media Club",
        contact: "+91 9353074448",
        about: "CAPTURE THE MOMENT is a photography competition that challenges participants to tell stories through their lenses, focusing on composition, lighting, and emotional impact.",
        rules: [
          "Theme will be announced on the day of the event",
          "Submit 3 photographs related to the theme",
          "Basic editing allowed (no compositing or heavy manipulation)",
          "Submit in JPEG format, minimum 8MP resolution"
        ],
        prizes: [
          "1st Prize: ₹4,000 + Certificate",
          "2nd Prize: ₹2,500 + Certificate",
          "3rd Prize: ₹1,500 + Certificate"
        ],
        requirements: [
          "Digital camera or smartphone",
          "College ID card"
        ]
      },
      {
        id: "motion-fusion",
        title: "MOTION FUSION",
        category: "cultural",
        description: "Videography competition focusing on creative visual storytelling through motion pictures.",
        venue: "FET Campus",
        registrationFee: "₹399 per person",
        teamSize: "Individual or Duo",
        date: "March 27, 2025",
        time: "10:00 AM - 5:00 PM",
        image: "/images/posters/motion fusion.jpg",
        organizer: "Media Club",
        contact: "+91 9353074448",
        about: "MOTION FUSION is a videography competition that challenges participants to create short video content that tells a compelling visual story in under two minutes.",
        rules: [
          "Create a video of 60-120 seconds",
          "Theme will be announced on the day of the event",
          "Basic editing and color grading allowed",
          "Submit in MP4 format, 1080p resolution",
          "Original content only"
        ],
        prizes: [
          "1st Prize: ₹5,000 + Certificate",
          "2nd Prize: ₹3,000 + Certificate",
          "3rd Prize: ₹2,000 + Certificate"
        ],
        requirements: [
          "Video camera or smartphone",
          "Basic editing knowledge",
          "College ID card"
        ]
      }
    ];
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">
          <i className="fas fa-circle-notch fa-spin"></i>
        </div>
        <p>Loading event details...</p>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="error-container">
        <div className="error-icon">
          <i className="fas fa-exclamation-triangle"></i>
        </div>
        <h2>Event Not Found</h2>
        <p>Sorry, we couldn't find the event you're looking for.</p>
        <div className="error-actions">
          <Link to="/technical-events" className="btn-primary">Browse Technical Events</Link>
          <Link to="/cultural-events" className="btn-secondary">Browse Cultural Events</Link>
        </div>
      </div>
    );
  }

  const categoryPath = event.category === 'technical' ? '/technical-events' : '/cultural-events';
  const categoryLabel = event.category === 'technical' ? 'Technical Events' : 'Cultural Events';

  return (
    <div className={`event-details-page ${isLoaded ? 'loaded' : ''}`}>
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <i className="fas fa-chevron-right"></i>
        <Link to={categoryPath}>{categoryLabel}</Link>
        <i className="fas fa-chevron-right"></i>
        <span>{event.title}</span>
      </div>

      <div className="event-header">
        <div className="event-header-content">
          <h1 className="event-title">{event.title}</h1>
          <div className="event-meta">
            <span className="event-date">
              <i className="fas fa-calendar-alt"></i> {event.date}
              {event.time && <>, {event.time}</>}
            </span>
            <span className="event-venue">
              <i className="fas fa-map-marker-alt"></i> {event.venue}
            </span>
            <span className="event-category-badge">
              {event.category === 'technical' ? (
                <><i className="fas fa-laptop-code"></i> Technical Event</>
              ) : (
                <><i className="fas fa-music"></i> Cultural Event</>
              )}
            </span>
          </div>
        </div>
      </div>

      <div className="event-content-wrapper">
        <div className="event-main-content">
          <div className="event-poster">
            <img 
              src={`${process.env.PUBLIC_URL}${event.image}`} 
              alt={event.title} 
              onError={(e) => {
                e.currentTarget.src = `${process.env.PUBLIC_URL}/images/placeholder.jpg`;
                e.currentTarget.classList.add('fallback-image');
              }}
            />
          </div>

          <div className="event-description-section">
            <h2>About the Event</h2>
            <p>{event.about}</p>
          </div>

          {event.rules && event.rules.length > 0 && (
            <div className="event-rules-section">
              <h2>Rules & Guidelines</h2>
              <ul className="event-rules-list">
                {event.rules.map((rule, index) => (
                  <li key={index}>{rule}</li>
                ))}
              </ul>
            </div>
          )}

          {event.prizes && event.prizes.length > 0 && (
            <div className="event-prizes-section">
              <h2>Prizes</h2>
              <ul className="event-prizes-list">
                {event.prizes.map((prize, index) => (
                  <li key={index} className="prize-item">
                    {prize}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {event.requirements && event.requirements.length > 0 && (
            <div className="event-requirements-section">
              <h2>Requirements</h2>
              <ul className="event-requirements-list">
                {event.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="event-sidebar">
          <div className="event-registration-card">
            <h3>Registration Details</h3>
            <div className="registration-info">
              <div className="info-item">
                <span className="info-label">Registration Fee</span>
                <span className="info-value">{event.registrationFee}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Team Size</span>
                <span className="info-value">{event.teamSize}</span>
              </div>
              {event.organizer && (
                <div className="info-item">
                  <span className="info-label">Organizer</span>
                  <span className="info-value">{event.organizer}</span>
                </div>
              )}
              {event.contact && (
                <div className="info-item">
                  <span className="info-label">Contact</span>
                  <span className="info-value">
                    <a href={`tel:${event.contact}`}>{event.contact}</a>
                  </span>
                </div>
              )}
            </div>
            <Link to="/register" className="register-button">
              Register Now
            </Link>
          </div>

          <div className="event-share-card">
            <h3>Share Event</h3>
            <div className="share-buttons">
              <button className="share-btn facebook">
                <i className="fab fa-facebook-f"></i> Share
              </button>
              <button className="share-btn twitter">
                <i className="fab fa-twitter"></i> Tweet
              </button>
              <button className="share-btn whatsapp">
                <i className="fab fa-whatsapp"></i> WhatsApp
              </button>
            </div>
          </div>

          <div className="event-venue-card">
            <h3>Venue Information</h3>
            <div className="venue-map-placeholder">
              <i className="fas fa-map-marked-alt"></i>
              <p>{event.venue}</p>
            </div>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="directions-link">
              <i className="fas fa-directions"></i> Get Directions
            </a>
          </div>
        </div>
      </div>

      <div className="other-events-section">
        <h2>Other {event.category === 'technical' ? 'Technical' : 'Cultural'} Events</h2>
        <div className="other-events-grid">
          {getAllEvents()
            .filter(e => e.category === event.category && e.id !== event.id)
            .slice(0, 3)
            .map((otherEvent, index) => (
              <Link to={`/event/${otherEvent.id}`} key={index} className="other-event-card">
                <div className="other-event-image">
                  <img 
                    src={`${process.env.PUBLIC_URL}${otherEvent.image}`} 
                    alt={otherEvent.title}
                    onError={(e) => {
                      e.currentTarget.src = `${process.env.PUBLIC_URL}/images/placeholder.jpg`;
                      e.currentTarget.classList.add('fallback-image');
                    }}
                  />
                </div>
                <div className="other-event-content">
                  <h3>{otherEvent.title}</h3>
                  <p>{otherEvent.date}</p>
                </div>
              </Link>
            ))}
        </div>
        <div className="see-all-events">
          <Link to={categoryPath} className="see-all-link">
            See All {event.category === 'technical' ? 'Technical' : 'Cultural'} Events <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
      
      <div className="cta-register">
        <div className="cta-content">
          <h2>Ready to participate in {event.title}?</h2>
          <p>Join hundreds of students from across the country and showcase your talent!</p>
          <Link to="/register" className="cta-button">
            Register Now <i className="fas fa-chevron-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPage;
