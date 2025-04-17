import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROLES, ROLE_PERMISSIONS } from './constants';
import { api } from '../services/api';

const INACTIVITY_TIMEOUT = 30 * 60 * 1000; // 30 Minuten

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth muss innerhalb eines AuthProvider verwendet werden');
  }
  return context;
};

// Rollen und Berechtigungen
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [lastActivity, setLastActivity] = useState(Date.now());
  const navigate = useNavigate();

  const handleLogout = useCallback(async () => {
    try {
      await api.logout();
      localStorage.removeItem('token');
      setUser(null);
      navigate('/');
    } catch (error) {
      console.error('Logout Fehler:', error);
      setError('Fehler beim Abmelden');
    }
  }, [navigate]);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const userData = await api.getProfile();
          setUser(userData);
        } catch (error) {
          console.error('Token Verifizierung Fehler:', error);
          handleLogout();
        }
      }
    };
    checkAuth();
  }, [handleLogout]);

  useEffect(() => {
    const checkInactivity = () => {
      const now = Date.now();
      if (user && now - lastActivity > INACTIVITY_TIMEOUT) {
        handleLogout();
      }
    };

    const activityInterval = setInterval(checkInactivity, 1000);
    return () => clearInterval(activityInterval);
  }, [user, lastActivity, handleLogout]);

  const updateLastActivity = () => {
    setLastActivity(Date.now());
  };

  const login = async (username, password) => {
    try {
      const { token, user: userData } = await api.login(username, password);
      localStorage.setItem('token', token);
      setUser(userData);
      setError(null);
      updateLastActivity();

      // Direkte Weiterleitung basierend auf der Rolle
      switch (userData.role) {
        case ROLES.ADMIN:
          navigate('/admin/dashboard');
          break;
        case ROLES.EDITOR:
          navigate('/editor/dashboard');
          break;
        case ROLES.VIEWER:
          navigate('/viewer/dashboard');
          break;
        default:
          navigate('/');
      }

      return true;
    } catch (error) {
      console.error('Login Fehler:', error);
      setError(error.message || 'Ein Fehler ist aufgetreten');
      return false;
    }
  };

  const hasPermission = (requiredPermissions) => {
    if (!user) return false;
    if (user.role === ROLES.ADMIN) return true;
    return requiredPermissions.every(permission => user.permissions.includes(permission));
  };

  const hasRole = (requiredRole) => {
    if (!user) return false;
    return user.role === requiredRole;
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      error, 
      login, 
      logout: handleLogout, 
      hasPermission, 
      hasRole,
      updateLastActivity
    }}>
      {children}
    </AuthContext.Provider>
  );
};

// Protected Route Komponente mit Berechtigungsprüfung
export const ProtectedRoute = ({ children, requiredRole, requiredPermissions }) => {
  const { user, hasPermission, hasRole, updateLastActivity } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    updateLastActivity();
  }, [updateLastActivity]);

  useEffect(() => {
    if (user) {
      if (requiredRole && !hasRole(requiredRole)) {
        navigate('/error/unauthorized');
      } else if (requiredPermissions && !hasPermission(requiredPermissions)) {
        navigate('/error/unauthorized');
      }
    }
  }, [user, requiredRole, requiredPermissions, hasPermission, hasRole, navigate]);

  if (!user) {
    return null;
  }

  if (requiredRole && !hasRole(requiredRole)) {
    return null;
  }

  if (requiredPermissions && !hasPermission(requiredPermissions)) {
    return null;
  }

  return children;
};

export { ROLES, ROLE_PERMISSIONS }; 