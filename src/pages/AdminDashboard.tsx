import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

// Define type interfaces for better type safety
interface Registration {
  id: number;
  name: string;
  email: string;
  event: string;
  status: 'Confirmed' | 'Pending' | 'Cancelled';
  payment: string | null;
  teamName: string;
  teamMembers: string[];
}

interface Payment {
  id: number;
  registrationId: number;
  amount: number;
  date: string;
  screenshot: string;
  verified: boolean;
}

interface Team {
  id: number;
  name: string;
  event: string;
  members: string[];
  college: string;
  contactEmail: string;
  contactPhone: string;
}

// Mock data is the same, just add casting to match interfaces
const mockRegistrations: Registration[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', event: 'PITCH4SUSTAIN', status: 'Confirmed', payment: '/images/payments/payment1.jpg', teamName: 'Tech Wizards', teamMembers: ['John Doe', 'Alice Brown', 'Bob Wilson'] },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', event: 'STEP SYNC', status: 'Pending', payment: '/images/payments/payment2.jpg', teamName: 'N/A', teamMembers: ['Jane Smith'] },
  { id: 3, name: 'Mike Johnson', email: 'mike@example.com', event: 'PHANTOM HUNT', status: 'Confirmed', payment: '/images/payments/payment3.jpg', teamName: 'Code Breakers', teamMembers: ['Mike Johnson', 'Sarah Adams', 'Tom Lee', 'Lisa Wang'] },
  { id: 4, name: 'Sarah Williams', email: 'sarah@example.com', event: 'COSMIC DRIFT', status: 'Confirmed', payment: '/images/payments/payment4.jpg', teamName: 'Star Walkers', teamMembers: ['Sarah Williams', 'Raj Patel', 'Emma Davis', 'Tyler Brown', 'Mia Clark'] },
  { id: 5, name: 'Alex Brown', email: 'alex@example.com', event: 'CTRL+Z', status: 'Pending', payment: null, teamName: 'Debug Masters', teamMembers: ['Alex Brown', 'Chris Green', 'Diana White'] },
];

// Mock payment data
const mockPayments: Payment[] = [
  { id: 1, registrationId: 1, amount: 500, date: '2025-02-15', screenshot: '/images/payments/payment1.jpg', verified: true },
  { id: 2, registrationId: 2, amount: 500, date: '2025-02-16', screenshot: '/images/payments/payment2.jpg', verified: false },
  { id: 3, registrationId: 3, amount: 500, date: '2025-02-16', screenshot: '/images/payments/payment3.jpg', verified: true },
  { id: 4, registrationId: 4, amount: 2500, date: '2025-02-17', screenshot: '/images/payments/payment4.jpg', verified: true },
];

// Mock team data
const mockTeams: Team[] = [
  { 
    id: 1, 
    name: 'Tech Wizards', 
    event: 'PITCH4SUSTAIN', 
    members: ['John Doe', 'Alice Brown', 'Bob Wilson'],
    college: 'Engineering College of Technology',
    contactEmail: 'john@example.com',
    contactPhone: '555-123-4567' 
  },
  { 
    id: 2, 
    name: 'Code Breakers', 
    event: 'PHANTOM HUNT', 
    members: ['Mike Johnson', 'Sarah Adams', 'Tom Lee', 'Lisa Wang'],
    college: 'Institute of Computer Science',
    contactEmail: 'mike@example.com',
    contactPhone: '555-987-6543' 
  },
  { 
    id: 3, 
    name: 'Star Walkers', 
    event: 'COSMIC DRIFT', 
    members: ['Sarah Williams', 'Raj Patel', 'Emma Davis', 'Tyler Brown', 'Mia Clark'],
    college: 'Design University',
    contactEmail: 'sarah@example.com',
    contactPhone: '555-456-7890' 
  },
  { 
    id: 4, 
    name: 'Debug Masters', 
    event: 'CTRL+Z', 
    members: ['Alex Brown', 'Chris Green', 'Diana White'],
    college: 'Technical Institute',
    contactEmail: 'alex@example.com',
    contactPhone: '555-654-3210' 
  },
];

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [registrations, setRegistrations] = useState<Registration[]>(mockRegistrations);
  const [payments, setPayments] = useState<Payment[]>(mockPayments);
  const [teams, setTeams] = useState<Team[]>(mockTeams);
  const [selectedPayment, setSelectedPayment] = useState<number | null>(null);
  const [selectedTeam, setSelectedTeam] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [eventFilter, setEventFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const navigate = useNavigate();

  // Statistics calculations
  const totalRegistrations = registrations.length;
  const confirmedRegistrations = registrations.filter(reg => reg.status === 'Confirmed').length;
  const pendingRegistrations = registrations.filter(reg => reg.status === 'Pending').length;
  const totalRevenue = payments.reduce((sum, payment) => sum + payment.amount, 0);
  const verifiedPayments = payments.filter(payment => payment.verified).length;
  const totalTeams = teams.length;
  const uniqueEvents = new Set(teams.map(team => team.event));

  // Load data from API or local storage
  useEffect(() => {
    const loadData = async () => {
      try {
        // Check authentication status
        const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
        if (!isAuthenticated) {
          navigate('/admin-login');
          return;
        }
        
        // In a real app, you would fetch data from an API
        // For now, we'll use a timeout to simulate network request
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Load data from localStorage if available
        try {
          const savedRegistrations = localStorage.getItem('registrations');
          if (savedRegistrations) {
            setRegistrations(JSON.parse(savedRegistrations));
          }
          
          const savedPayments = localStorage.getItem('payments');
          if (savedPayments) {
            // Process payment data - handle base64 images
            const parsedPayments = JSON.parse(savedPayments);
            
            // Map payments to the expected format
            const processedPayments = parsedPayments.map((payment: any) => ({
              ...payment,
              // If the screenshot is a base64 string, keep it as is
              // Otherwise use the old path format
              screenshot: payment.screenshot || `/images/payments/payment${payment.id}.jpg`
            }));
            
            setPayments(processedPayments);
          }
          
          const savedTeams = localStorage.getItem('teams');
          if (savedTeams) {
            setTeams(JSON.parse(savedTeams));
          }
        } catch (parseError) {
          console.error("Error parsing saved data:", parseError);
          setError("Could not load saved data. Using default data instead.");
          // Continue with mock data
        }
        
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading dashboard data:", error);
        setError("Failed to load dashboard data. Please try refreshing the page.");
        setIsLoading(false);
      }
    };
    
    loadData();
  }, [navigate]);

  // Save data to localStorage when it changes
  useEffect(() => {
    try {
      localStorage.setItem('registrations', JSON.stringify(registrations));
      localStorage.setItem('payments', JSON.stringify(payments));
      localStorage.setItem('teams', JSON.stringify(teams));
    } catch (error) {
      console.error("Error saving data to localStorage:", error);
      setError("Failed to save changes. Storage might be full or unavailable.");
    }
  }, [registrations, payments, teams]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/admin-login');
  };

  // Handle status change in registrations with type safety
  const handleStatusChange = (id: number, newStatus: string) => {
    try {
      setRegistrations(prev => 
        prev.map(reg => reg.id === id ? 
          {...reg, status: newStatus as Registration['status']} : reg)
      );
    } catch (error) {
      console.error("Error updating status:", error);
      setError("Failed to update registration status.");
    }
  };
  
  const handleVerifyPayment = (id: number) => {
    try {
      setPayments(prev => 
        prev.map(payment => payment.id === id ? {...payment, verified: true} : payment)
      );
    } catch (error) {
      console.error("Error verifying payment:", error);
      setError("Failed to verify payment.");
    }
  };
  
  // Filter functions
  const getFilteredRegistrations = () => {
    return registrations.filter(reg => {
      // Apply text search
      const matchesSearch = searchTerm === '' || 
        reg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        reg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        reg.event.toLowerCase().includes(searchTerm.toLowerCase()) ||
        reg.teamName.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Apply event type filter
      const matchesEventType = eventFilter === 'all' ||
        (eventFilter === 'technical' && isTechnicalEvent(reg.event)) ||
        (eventFilter === 'cultural' && !isTechnicalEvent(reg.event));
      
      // Apply status filter
      const matchesStatus = statusFilter === 'all' || 
        reg.status.toLowerCase() === statusFilter.toLowerCase();
      
      return matchesSearch && matchesEventType && matchesStatus;
    });
  };
  
  // Helper function to determine if an event is technical
  const isTechnicalEvent = (eventName: string): boolean => {
    const technicalEvents = [
      "PITCH4SUSTAIN", "CTRL+Z", "SYNTAX SCRAMBLE", 
      "PHANTOM HUNT", "INNOVATHON", "MODEL BLITZ", "DRONEXTREME"
    ];
    return technicalEvents.some(tech => eventName.includes(tech));
  };
  
  // View payment screenshot modal
  const openPaymentModal = (id: number) => {
    setSelectedPayment(id);
  };
  
  // View team details modal
  const openTeamModal = (id: number) => {
    setSelectedTeam(id);
  };
  
  // Close modals
  const closeModals = () => {
    setSelectedPayment(null);
    setSelectedTeam(null);
  };
  
  // Auto-close error message after 5 seconds
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  // Filter registrations for display
  const filteredRegistrations = getFilteredRegistrations();

  if (isLoading) {
    return <div className="admin-loading">Loading dashboard data...</div>;
  }

  return (
    <div className="admin-dashboard">
      {/* Error notification */}
      {error && (
        <div className="admin-error-notification">
          <i className="fas fa-exclamation-circle"></i> {error}
          <button onClick={() => setError(null)} className="close-error">
            <i className="fas fa-times"></i>
          </button>
        </div>
      )}
      
      {/* Dashboard Header */}
      <div className="admin-header">
        <h1 className="admin-title">
          <i className="fas fa-tachometer-alt"></i> Admin Dashboard
        </h1>
        <div className="admin-actions">
          <button className="admin-logout" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt"></i> Logout
          </button>
        </div>
      </div>
      
      <div className="admin-layout">
        {/* Sidebar Navigation */}
        <div className="admin-sidebar">
          <nav className="admin-nav">
            <a 
              href="#dashboard" 
              className={`admin-nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab('dashboard');
              }}
            >
              <i className="fas fa-home"></i> Dashboard
            </a>
            <a 
              href="#registrations" 
              className={`admin-nav-item ${activeTab === 'registrations' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab('registrations');
              }}
            >
              <i className="fas fa-user-check"></i> Registrations
            </a>
            <a 
              href="#teams" 
              className={`admin-nav-item ${activeTab === 'teams' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab('teams');
              }}
            >
              <i className="fas fa-users"></i> Teams
            </a>
            <a 
              href="#payments" 
              className={`admin-nav-item ${activeTab === 'payments' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab('payments');
              }}
            >
              <i className="fas fa-rupee-sign"></i> Payments
            </a>
            <a 
              href="#events" 
              className={`admin-nav-item ${activeTab === 'events' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab('events');
              }}
            >
              <i className="fas fa-calendar-check"></i> Events
            </a>
            <div className="admin-divider"></div>
            <a 
              href="#settings" 
              className={`admin-nav-item ${activeTab === 'settings' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab('settings');
              }}
            >
              <i className="fas fa-cog"></i> Settings
            </a>
          </nav>
        </div>
        
        <div className="admin-content">
          {/* Dashboard Overview Tab */}
          {activeTab === 'dashboard' && (
            <div className="admin-dashboard-content">
              <h2 className="admin-section-title">Dashboard Overview</h2>
              
              {/* Stats Grid */}
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-icon">
                    <i className="fas fa-users"></i>
                  </div>
                  <div className="stat-title">Total Registrations</div>
                  <div className="stat-value">{totalRegistrations}</div>
                  <div className="stat-trend trend-up">
                    <i className="fas fa-arrow-up"></i> 12% from last week
                  </div>
                </div>
                
                <div className="stat-card">
                  <div className="stat-icon">
                    <i className="fas fa-user-check"></i>
                  </div>
                  <div className="stat-title">Confirmed</div>
                  <div className="stat-value">{confirmedRegistrations}</div>
                  <div className="stat-details">{pendingRegistrations} pending</div>
                </div>
                
                <div className="stat-card">
                  <div className="stat-icon">
                    <i className="fas fa-money-bill-wave"></i>
                  </div>
                  <div className="stat-title">Revenue</div>
                  <div className="stat-value">₹{totalRevenue}</div>
                  <div className="stat-details">{verifiedPayments} verified payments</div>
                </div>
                
                <div className="stat-card">
                  <div className="stat-icon">
                    <i className="fas fa-user-friends"></i>
                  </div>
                  <div className="stat-title">Teams</div>
                  <div className="stat-value">{totalTeams}</div>
                  <div className="stat-details">Across {uniqueEvents.size} events</div>
                </div>
              </div>
              
              {/* Recent Registrations Table */}
              <h3 className="admin-section-title">Recent Registrations</h3>
              {registrations.length > 0 ? (
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Event</th>
                      <th>Team</th>
                      <th>Status</th>
                      <th>Payment</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {registrations.slice(0, 5).map(reg => (
                      <tr key={reg.id}>
                        <td>{reg.name}</td>
                        <td>{reg.email}</td>
                        <td>{reg.event}</td>
                        <td>{reg.teamName !== 'N/A' ? reg.teamName : 'Individual'}</td>
                        <td>
                          <span className={`status-badge ${reg.status.toLowerCase()}`}>
                            {reg.status}
                          </span>
                        </td>
                        <td>
                          {reg.payment ? (
                            <button 
                              className="btn-table-action btn-view payment-btn"
                              onClick={() => openPaymentModal(reg.id)}
                            >
                              <i className="fas fa-receipt"></i> View
                            </button>
                          ) : (
                            <span className="status-badge pending">Pending</span>
                          )}
                        </td>
                        <td>
                          <div className="table-actions">
                            <button 
                              className="btn-table-action btn-view"
                              onClick={() => reg.teamName !== 'N/A' ? openTeamModal(reg.id) : null}
                              disabled={reg.teamName === 'N/A'}
                              title={reg.teamName === 'N/A' ? 'No team details available' : 'View team details'}
                            >
                              <i className="fas fa-eye"></i>
                            </button>
                            <button className="btn-table-action btn-edit">
                              <i className="fas fa-edit"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="admin-empty-state">
                  <i className="fas fa-clipboard-list"></i>
                  <p>No registrations found</p>
                </div>
              )}
            </div>
          )}
          
          {/* Registrations Tab */}
          {activeTab === 'registrations' && (
            <div className="admin-registrations">
              <h2 className="admin-section-title">All Registrations</h2>
              
              {/* Filter controls */}
              <div className="filter-controls">
                <div className="search-box">
                  <i className="fas fa-search"></i>
                  <input 
                    type="text" 
                    placeholder="Search registrations..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="filter-group">
                  <select 
                    value={eventFilter} 
                    onChange={(e) => setEventFilter(e.target.value)}
                  >
                    <option value="all">All Events</option>
                    <option value="technical">Technical Events</option>
                    <option value="cultural">Cultural Events</option>
                  </select>
                  <select 
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                  >
                    <option value="all">All Status</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="pending">Pending</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
              </div>
              
              {/* Registration Table with filters */}
              {filteredRegistrations.length > 0 ? (
                <>
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Event</th>
                        <th>Team</th>
                        <th>Status</th>
                        <th>Payment</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredRegistrations.map(reg => (
                        <tr key={reg.id}>
                          <td>#{reg.id}</td>
                          <td>{reg.name}</td>
                          <td>{reg.email}</td>
                          <td>{reg.event}</td>
                          <td>{reg.teamName !== 'N/A' ? reg.teamName : 'Individual'}</td>
                          <td>
                            <select 
                              value={reg.status}
                              onChange={(e) => handleStatusChange(reg.id, e.target.value)}
                              className={`status-select ${reg.status.toLowerCase()}`}
                            >
                              <option value="Pending">Pending</option>
                              <option value="Confirmed">Confirmed</option>
                              <option value="Cancelled">Cancelled</option>
                            </select>
                          </td>
                          <td>
                            {reg.payment ? (
                              <button 
                                className="btn-table-action btn-view payment-btn"
                                onClick={() => openPaymentModal(reg.id)}
                              >
                                <i className="fas fa-receipt"></i> View
                              </button>
                            ) : (
                              <span className="status-badge pending">Pending</span>
                            )}
                          </td>
                          <td>
                            <div className="table-actions">
                              <button 
                                className="btn-table-action btn-view"
                                onClick={() => reg.teamName !== 'N/A' ? openTeamModal(reg.id) : null}
                                disabled={reg.teamName === 'N/A'}
                                title={reg.teamName === 'N/A' ? 'No team details available' : 'View team details'}
                              >
                                <i className="fas fa-eye"></i>
                              </button>
                              <button className="btn-table-action btn-edit">
                                <i className="fas fa-edit"></i>
                              </button>
                              <button 
                                className="btn-table-action btn-delete"
                                onClick={() => {
                                  if (window.confirm(`Are you sure you want to delete registration for ${reg.name}?`)) {
                                    setRegistrations(prev => prev.filter(r => r.id !== reg.id));
                                  }
                                }}
                              >
                                <i className="fas fa-trash"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  
                  {/* Pagination */}
                  <div className="pagination">
                    <button className="pagination-btn"><i className="fas fa-chevron-left"></i></button>
                    <button className="pagination-btn active">1</button>
                    <button className="pagination-btn">2</button>
                    <button className="pagination-btn">3</button>
                    <button className="pagination-btn"><i className="fas fa-chevron-right"></i></button>
                  </div>
                </>
              ) : (
                <div className="admin-empty-state">
                  <i className="fas fa-search"></i>
                  <p>No registrations found matching your filters</p>
                  <button 
                    className="btn-modern"
                    onClick={() => {
                      setSearchTerm('');
                      setEventFilter('all');
                      setStatusFilter('all');
                    }}
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          )}
          
          {/* Teams Tab */}
          {activeTab === 'teams' && (
            <div className="admin-teams">
              <h2 className="admin-section-title">Team Management</h2>
              
              <div className="filter-controls">
                <div className="search-box">
                  <i className="fas fa-search"></i>
                  <input 
                    type="text" 
                    placeholder="Search teams..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="filter-group">
                  <select
                    value={eventFilter}
                    onChange={(e) => setEventFilter(e.target.value)}
                  >
                    <option value="all">All Events</option>
                    {Array.from(uniqueEvents).map(event => (
                      <option key={event} value={event}>{event}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              {/* Filter teams based on search and event filter */}
              {teams.filter(team => 
                (searchTerm === '' || 
                  team.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                  team.college.toLowerCase().includes(searchTerm.toLowerCase())
                ) &&
                (eventFilter === 'all' || team.event === eventFilter)
              ).length > 0 ? (
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Team Name</th>
                      <th>Event</th>
                      <th>Members</th>
                      <th>College</th>
                      <th>Contact</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teams.map(team => (
                      <tr key={team.id}>
                        <td>#{team.id}</td>
                        <td>{team.name}</td>
                        <td>{team.event}</td>
                        <td>
                          <div className="team-members-preview">
                            {team.members.length} members
                            <div className="team-members-tooltip">
                              {team.members.map((member, i) => (
                                <div key={i} className="tooltip-member">{member}</div>
                              ))}
                            </div>
                          </div>
                        </td>
                        <td>{team.college}</td>
                        <td>
                          <a href={`mailto:${team.contactEmail}`}>{team.contactEmail}</a><br />
                          <small>{team.contactPhone}</small>
                        </td>
                        <td>
                          <div className="table-actions">
                            <button 
                              className="btn-table-action btn-view"
                              onClick={() => openTeamModal(team.id)}
                            >
                              <i className="fas fa-eye"></i>
                            </button>
                            <button className="btn-table-action btn-edit">
                              <i className="fas fa-edit"></i>
                            </button>
                            <button className="btn-table-action btn-delete">
                              <i className="fas fa-trash"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="admin-empty-state">
                  <i className="fas fa-users"></i>
                  <p>No teams found matching your criteria</p>
                  <button 
                    className="btn-modern"
                    onClick={() => {
                      setSearchTerm('');
                      setEventFilter('all');
                    }}
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          )}
          
          {/* Payments Tab */}
          {activeTab === 'payments' && (
            <div className="admin-payments">
              <h2 className="admin-section-title">Payment Verification</h2>
              
              <div className="payment-stats">
                <div className="payment-stat">
                  <div className="payment-stat-title">Total Amount</div>
                  <div className="payment-stat-value">₹{totalRevenue}</div>
                </div>
                <div className="payment-stat">
                  <div className="payment-stat-title">Verified Payments</div>
                  <div className="payment-stat-value">{verifiedPayments}/{payments.length}</div>
                </div>
                <div className="payment-stat">
                  <div className="payment-stat-title">Pending Verification</div>
                  <div className="payment-stat-value">{payments.length - verifiedPayments}</div>
                </div>
              </div>
              
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Registration</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Screenshot</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {payments.map(payment => {
                    const registration = registrations.find(r => r.id === payment.registrationId);
                    return (
                      <tr key={payment.id}>
                        <td>#{payment.id}</td>
                        <td>
                          {registration ? (
                            <div>
                              <strong>{registration.name}</strong><br />
                              <small>{registration.event}</small>
                            </div>
                          ) : 'Unknown'}
                        </td>
                        <td>₹{payment.amount}</td>
                        <td>{payment.date}</td>
                        <td>
                          <button 
                            className="btn-table-action btn-view"
                            onClick={() => openPaymentModal(payment.id)}
                          >
                            <i className="fas fa-image"></i> View
                          </button>
                        </td>
                        <td>
                          {payment.verified ? (
                            <span className="status-badge confirmed">Verified</span>
                          ) : (
                            <span className="status-badge pending">Pending</span>
                          )}
                        </td>
                        <td>
                          <div className="table-actions">
                            {!payment.verified && (
                              <button 
                                className="btn-table-action btn-approve"
                                onClick={() => handleVerifyPayment(payment.id)}
                              >
                                <i className="fas fa-check"></i>
                              </button>
                            )}
                            <button className="btn-table-action btn-delete">
                              <i className="fas fa-times"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
          
          {/* Events Tab */}
          {activeTab === 'events' && (
            <div className="admin-events">
              <h2 className="admin-section-title">Event Management</h2>
              {/* Events management content */}
              <p>This panel allows you to manage events, update schedules, and track participation.</p>
              
              {/* Event statistics cards */}
              <div className="event-stats-grid">
                <div className="event-stat-card">
                  <h3>Technical Events</h3>
                  <div className="event-participation">
                    <div className="event-name">PITCH4SUSTAIN</div>
                    <div className="event-count">12 teams</div>
                  </div>
                  <div className="event-participation">
                    <div className="event-name">PHANTOM HUNT</div>
                    <div className="event-count">8 teams</div>
                  </div>
                  <div className="event-participation">
                    <div className="event-name">CTRL+Z</div>
                    <div className="event-count">15 teams</div>
                  </div>
                </div>
                
                <div className="event-stat-card">
                  <h3>Cultural Events</h3>
                  <div className="event-participation">
                    <div className="event-name">STEP SYNC</div>
                    <div className="event-count">22 participants</div>
                  </div>
                  <div className="event-participation">
                    <div className="event-name">COSMIC DRIFT</div>
                    <div className="event-count">6 teams</div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="admin-settings">
              <h2 className="admin-section-title">Settings</h2>
              {/* Settings content */}
              <p>Configure system settings, user accounts, and notification preferences.</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Payment Screenshot Modal */}
      {selectedPayment !== null && (
        <div className="admin-modal">
          <div className="admin-modal-backdrop" onClick={closeModals}></div>
          <div className="admin-modal-content">
            <div className="admin-modal-header">
              <h3>Payment Screenshot</h3>
              <button className="admin-modal-close" onClick={closeModals}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="admin-modal-body">
              {(() => {
                const payment = payments.find(p => p.id === selectedPayment);
                
                if (!payment) {
                  return (
                    <div className="error-message">
                      <i className="fas fa-exclamation-circle"></i> Payment details not found
                    </div>
                  );
                }
                
                // Check if screenshot is a base64 string or a file path
                const isBase64 = payment.screenshot && 
                  (payment.screenshot.startsWith('data:image') || payment.screenshot.startsWith('data:application'));
                
                return (
                  <>
                    <div className="payment-screenshot">
                      {isBase64 ? (
                        <img 
                          src={payment.screenshot}
                          alt="Payment Screenshot"
                          onError={(e) => {
                            e.currentTarget.src = `${process.env.PUBLIC_URL}/images/placeholder.jpg`;
                            e.currentTarget.style.opacity = '0.5';
                          }}
                        />
                      ) : (
                        <img 
                          src={`${process.env.PUBLIC_URL}${payment.screenshot}`}
                          alt="Payment Screenshot"
                          onError={(e) => {
                            e.currentTarget.src = `${process.env.PUBLIC_URL}/images/placeholder.jpg`;
                            e.currentTarget.style.opacity = '0.5';
                          }}
                        />
                      )}
                    </div>
                    <div className="payment-details">
                      <p><strong>Amount:</strong> ₹{payment.amount}</p>
                      <p><strong>Date:</strong> {payment.date}</p>
                      <p><strong>Status:</strong> {payment.verified ? 'Verified' : 'Pending Verification'}</p>
                    </div>
                    
                    {!payment.verified && (
                      <button 
                        className="btn-modern btn-approve"
                        onClick={() => {
                          handleVerifyPayment(selectedPayment);
                          closeModals();
                        }}
                      >
                        <i className="fas fa-check"></i> Verify Payment
                      </button>
                    )}
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      )}
      
      {/* Team Details Modal */}
      {selectedTeam !== null && (
        <div className="admin-modal">
          <div className="admin-modal-backdrop" onClick={closeModals}></div>
          <div className="admin-modal-content">
            <div className="admin-modal-header">
              <h3>Team Details</h3>
              <button className="admin-modal-close" onClick={closeModals}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="admin-modal-body">
              {(() => {
                const team = teams.find(t => t.id === selectedTeam);
                if (!team) return <p>Team not found</p>;
                
                return (
                  <div className="team-details">
                    <h4>{team.name}</h4>
                    <p><strong>Event:</strong> {team.event}</p>
                    <p><strong>College:</strong> {team.college}</p>
                    <p><strong>Contact:</strong> {team.contactEmail} | {team.contactPhone}</p>
                    
                    <h5>Team Members</h5>
                    <ul className="team-members-list">
                      {team.members.map((member, i) => (
                        <li key={i} className="team-member-item">
                          <span className="member-number">{i + 1}</span>
                          <span className="member-name">{member}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
