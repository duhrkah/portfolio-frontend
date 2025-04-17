import React, { useState } from 'react';
import { useAuth } from '../AuthProvider';
import BaseDashboard from './BaseDashboard';
import { FiShield, FiUsers, FiUserCheck, FiClock } from 'react-icons/fi';
import { useNotification } from '../../context/NotificationContext';
import { PERMISSIONS } from '../constants';
import UserManagement from '../UserManagement';

const SystemManagement = () => {
  const { showNotification, hasPermission } = useAuth();

  const handleSystemSettings = () => {
    if (!hasPermission([PERMISSIONS.MANAGE_SETTINGS])) {
      showNotification('Sie haben keine Berechtigung, Systemeinstellungen zu verwalten', 'error');
      return;
    }
    showNotification('Systemeinstellungen öffnen', 'info');
    // Implementierung folgt
  };

  const handleViewLogs = () => {
    if (!hasPermission([PERMISSIONS.VIEW_SYSTEM_LOGS])) {
      showNotification('Sie haben keine Berechtigung, Systemprotokolle anzuzeigen', 'error');
      return;
    }
    showNotification('Systemprotokolle anzeigen', 'info');
    // Implementierung folgt
  };

  return (
    <div className="bg-surface-dark rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium text-text-dark">Systemverwaltung</h2>
        <div className="flex space-x-4">
          {hasPermission([PERMISSIONS.MANAGE_SETTINGS]) && (
            <button
              onClick={handleSystemSettings}
              className="flex items-center px-4 py-2 bg-primary-dark text-white rounded-md hover:bg-primary-dark/90"
            >
              <FiShield className="mr-2" />
              Einstellungen
            </button>
          )}
          {hasPermission([PERMISSIONS.VIEW_SYSTEM_LOGS]) && (
            <button
              onClick={handleViewLogs}
              className="flex items-center px-4 py-2 bg-primary-dark text-white rounded-md hover:bg-primary-dark/90"
            >
              <FiShield className="mr-2" />
              Systemprotokolle
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const AdminDashboardContent = () => {
  const { user, hasPermission } = useAuth();
  const { showNotification } = useNotification();
  const [stats] = useState({
    totalUsers: 42,
    activeUsers: 38,
    lastLogin: new Date().toISOString()
  });

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-text-dark">Willkommen, {user?.name}!</h1>
        <p className="mt-2 text-sm text-text-dark/80">
          Hier ist eine Übersicht Ihrer Administrator-Funktionen.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-surface-dark rounded-lg shadow p-6">
          <div className="flex items-center">
            <FiUsers className="text-4xl text-primary-dark mr-4" />
            <div>
              <h2 className="text-lg font-medium text-text-dark">Gesamtbenutzer</h2>
              <p className="text-3xl font-bold">{stats.totalUsers}</p>
            </div>
          </div>
        </div>

        <div className="bg-surface-dark rounded-lg shadow p-6">
          <div className="flex items-center">
            <FiUserCheck className="text-4xl text-primary-dark mr-4" />
            <div>
              <h2 className="text-lg font-medium text-text-dark">Aktive Benutzer</h2>
              <p className="text-3xl font-bold">{stats.activeUsers}</p>
            </div>
          </div>
        </div>

        <div className="bg-surface-dark rounded-lg shadow p-6">
          <div className="flex items-center">
            <FiClock className="text-4xl text-primary-dark mr-4" />
            <div>
              <h2 className="text-lg font-medium text-text-dark">Letzter Login</h2>
              <p className="text-3xl font-bold">
                {new Date(stats.lastLogin).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 space-y-6">
        {hasPermission([PERMISSIONS.MANAGE_USERS]) && <UserManagement />}
        {hasPermission([PERMISSIONS.MANAGE_SYSTEM]) && <SystemManagement />}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-surface-dark rounded-lg shadow p-6">
            <h2 className="text-lg font-medium text-text-dark mb-4">Schnellzugriff</h2>
            <div className="space-y-4">
              {hasPermission([PERMISSIONS.MANAGE_USERS]) && (
                <button
                  onClick={() => showNotification('Benutzerverwaltung geöffnet', 'info')}
                  className="w-full flex items-center justify-between px-4 py-2 border border-background-dark rounded-md text-sm font-medium text-text-dark hover:bg-background-dark/30"
                >
                  Benutzer verwalten
                  <span className="ml-2 text-text-dark/60">→</span>
                </button>
              )}
              {hasPermission([PERMISSIONS.MANAGE_SETTINGS]) && (
                <button
                  onClick={() => showNotification('Einstellungen geöffnet', 'info')}
                  className="w-full flex items-center justify-between px-4 py-2 border border-background-dark rounded-md text-sm font-medium text-text-dark hover:bg-background-dark/30"
                >
                  Systemeinstellungen
                  <span className="ml-2 text-text-dark/60">→</span>
                </button>
              )}
            </div>
          </div>

          <div className="bg-surface-dark rounded-lg shadow p-6">
            <h2 className="text-lg font-medium text-text-dark mb-4">Aktuelle Aktivitäten</h2>
            <div className="space-y-4">
              {hasPermission([PERMISSIONS.MANAGE_USERS]) && (
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-text-dark">Neuer Benutzer registriert</p>
                    <p className="text-sm text-text-dark/60">Vor 5 Minuten</p>
                  </div>
                  <button className="text-sm text-primary-dark hover:text-primary-dark/80">
                    Details
                  </button>
                </div>
              )}
              {hasPermission([PERMISSIONS.MANAGE_SYSTEM]) && (
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-text-dark">System-Update abgeschlossen</p>
                    <p className="text-sm text-text-dark/60">Vor 1 Stunde</p>
                  </div>
                  <button className="text-sm text-primary-dark hover:text-primary-dark/80">
                    Details
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AdminDashboard = () => {
  return (
    <BaseDashboard>
      <AdminDashboardContent />
    </BaseDashboard>
  );
};

export default AdminDashboard; 