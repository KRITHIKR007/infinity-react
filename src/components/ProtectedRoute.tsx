import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
  redirectPath?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  redirectPath = '/admin-login' 
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  
  useEffect(() => {
    // More reliable authentication check
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    console.log("Auth check result:", authStatus);
    setIsAuthenticated(authStatus);
    setIsLoading(false);
    
    // Add event listener for storage changes (in case auth changes in another tab)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'isAuthenticated') {
        setIsAuthenticated(e.newValue === 'true');
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);
  
  // Show loading indicator while checking authentication
  if (isLoading) {
    return <div className="admin-loading">Checking authentication...</div>;
  }
  
  // Redirect to login page if not authenticated
  if (!isAuthenticated) {
    console.log("Not authenticated, redirecting to:", redirectPath);
    // Pass the current location so we can redirect back after login
    return <Navigate to={redirectPath} state={{ from: location }} replace />;
  }
  
  // Render children if authenticated
  return <>{children}</>;
};

export default ProtectedRoute;
