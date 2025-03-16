import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

interface AppWrapperProps {
  children: React.ReactNode;
}

const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
  const location = useLocation();
  const isAdminPage = 
    location.pathname === '/admin-login' || 
    location.pathname === '/admin-dashboard' ||
    location.pathname.startsWith('/admin-dashboard/');
  
  return (
    <>
      {!isAdminPage && <Navbar />}
      <div className="main-content">
        {children}
      </div>
      {!isAdminPage && <Footer />}
    </>
  );
};

export default AppWrapper;
