import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AppWrapper from './components/AppWrapper';
import HomePage from './pages/HomePage';
import TechnicalEventsPage from './pages/TechnicalEventsPage';
import CulturalEventsPage from './pages/CulturalEventsPage';
import ContactPage from './pages/ContactPage';
import CreditsPage from './pages/CreditsPage';
import RegistrationPage from './pages/RegistrationPage';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="background-gradient">
          <div className="orb"></div>
          <div className="orb"></div>
        </div>
        
        <AppWrapper>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/technical-events" element={<TechnicalEventsPage />} />
            <Route path="/cultural-events" element={<CulturalEventsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/credits" element={<CreditsPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            
            {/* Protected route for admin dashboard */}
            <Route path="/admin-dashboard/*" element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } />
            
            {/* Catch-all redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AppWrapper>
      </div>
    </Router>
  );
}

export default App;
