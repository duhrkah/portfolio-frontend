import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import OfflineDetector from './components/OfflineDetector';
import { AuthProvider, ProtectedRoute, ROLES } from './admin/AuthProvider';
import Login from './admin/Login';
import AdminDashboard from './admin/dashboards/AdminDashboard';
import UserProfile from './admin/UserProfile';
import EditorDashboard from './admin/dashboards/EditorDashboard';
import ViewerDashboard from './admin/dashboards/ViewerDashboard';
import { NotificationProvider } from './context/NotificationContext';
import ForgotPassword from './admin/auth/ForgotPassword';

// Lazy Loading für Seiten
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const Impressum = lazy(() => import('./pages/Impressum'));
const Datenschutz = lazy(() => import('./pages/Datenschutz'));
const Unauthorized = lazy(() => import('./pages/errors/Unauthorized'));
const ServerError = lazy(() => import('./pages/errors/ServerError'));
const BadGateway = lazy(() => import('./pages/errors/BadGateway'));
const RequiresAuth = lazy(() => import('./pages/errors/RequiresAuth'));
const NotFound = lazy(() => import('./pages/errors/NotFound'));

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <NotificationProvider>
          <ThemeProvider>
            <div className="min-h-screen flex flex-col bg-background-dark text-text-dark">
              <Navbar />
              <main className="flex-grow">
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/impressum" element={<Impressum />} />
                    <Route path="/datenschutz" element={<Datenschutz />} />
                    <Route path="/admin/login" element={<Login />} />
                    <Route path="/error/unauthorized" element={<Unauthorized />} />
                    <Route path="/error/server-error" element={<ServerError />} />
                    <Route path="/error/bad-gateway" element={<BadGateway />} />
                    <Route path="/error/requires-auth" element={<RequiresAuth />} />
                    <Route path="/error/not-found" element={<NotFound />} />
                    
                    {/* Admin Routes */}
                    <Route
                      path="/admin/dashboard"
                      element={
                        <ProtectedRoute requiredRole={ROLES.ADMIN}>
                          <AdminDashboard />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/admin/users"
                      element={
                        <ProtectedRoute requiredRole={ROLES.ADMIN}>
                          <AdminDashboard />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/admin/projects"
                      element={
                        <ProtectedRoute requiredRole={ROLES.ADMIN}>
                          <AdminDashboard />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/admin/messages"
                      element={
                        <ProtectedRoute requiredRole={ROLES.ADMIN}>
                          <AdminDashboard />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/admin/analytics"
                      element={
                        <ProtectedRoute requiredRole={ROLES.ADMIN}>
                          <AdminDashboard />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/admin/settings"
                      element={
                        <ProtectedRoute requiredRole={ROLES.ADMIN}>
                          <AdminDashboard />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/admin/forgot-password"
                      element={<ForgotPassword />}
                    />

                    {/* Editor Routes */}
                    <Route
                      path="/editor/dashboard"
                      element={
                        <ProtectedRoute requiredRole={ROLES.EDITOR}>
                          <EditorDashboard />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/editor/projects"
                      element={
                        <ProtectedRoute requiredRole={ROLES.EDITOR}>
                          <EditorDashboard />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/editor/messages"
                      element={
                        <ProtectedRoute requiredRole={ROLES.EDITOR}>
                          <EditorDashboard />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/editor/analytics"
                      element={
                        <ProtectedRoute requiredRole={ROLES.EDITOR}>
                          <EditorDashboard />
                        </ProtectedRoute>
                      }
                    />

                    {/* Viewer Routes */}
                    <Route
                      path="/viewer/dashboard"
                      element={
                        <ProtectedRoute requiredRole={ROLES.VIEWER}>
                          <ViewerDashboard />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/viewer/projects"
                      element={
                        <ProtectedRoute requiredRole={ROLES.VIEWER}>
                          <ViewerDashboard />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/viewer/messages"
                      element={
                        <ProtectedRoute requiredRole={ROLES.VIEWER}>
                          <ViewerDashboard />
                        </ProtectedRoute>
                      }
                    />

                    {/* Gemeinsame Routen */}
                    <Route
                      path="/admin/profile"
                      element={
                        <ProtectedRoute>
                          <UserProfile />
                        </ProtectedRoute>
                      }
                    />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </main>
              <Footer />
              <OfflineDetector />
            </div>
          </ThemeProvider>
        </NotificationProvider>
      </AuthProvider>
    </Router>
  );
};

export default App; 