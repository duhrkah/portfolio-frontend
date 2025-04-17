import React, { useState } from 'react';
import { useAuth } from '../AuthProvider';
import BaseDashboard from './BaseDashboard';
import { FiEye, FiBookmark, FiClock } from 'react-icons/fi';
import { useNotification } from '../../context/NotificationContext';
import { PERMISSIONS } from '../constants';

const ViewerDashboardContent = () => {
  const { user, hasPermission } = useAuth();
  const { showNotification } = useNotification();
  const [stats] = useState({
    viewedPosts: 25,
    bookmarkedPosts: 8,
    lastView: new Date().toISOString()
  });

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-text-dark">Willkommen, {user?.name}!</h1>
        <p className="mt-2 text-sm text-text-dark/80">
          Hier ist eine Übersicht Ihrer Viewer-Funktionen.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-surface-dark rounded-lg shadow p-6">
          <div className="flex items-center">
            <FiEye className="text-4xl text-primary-dark mr-4" />
            <div>
              <h2 className="text-lg font-medium text-text-dark">Gelesene Beiträge</h2>
              <p className="text-3xl font-bold">{stats.viewedPosts}</p>
            </div>
          </div>
        </div>

        <div className="bg-surface-dark rounded-lg shadow p-6">
          <div className="flex items-center">
            <FiBookmark className="text-4xl text-primary-dark mr-4" />
            <div>
              <h2 className="text-lg font-medium text-text-dark">Lesezeichen</h2>
              <p className="text-3xl font-bold">{stats.bookmarkedPosts}</p>
            </div>
          </div>
        </div>

        <div className="bg-surface-dark rounded-lg shadow p-6">
          <div className="flex items-center">
            <FiClock className="text-4xl text-primary-dark mr-4" />
            <div>
              <h2 className="text-lg font-medium text-text-dark">Letzter Besuch</h2>
              <p className="text-3xl font-bold">
                {new Date(stats.lastView).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-surface-dark rounded-lg shadow p-6">
            <h2 className="text-lg font-medium text-text-dark mb-4">Schnellzugriff</h2>
            <div className="space-y-4">
              {hasPermission([PERMISSIONS.VIEW_POSTS]) && (
                <button
                  onClick={() => showNotification('Beiträge werden geladen', 'info')}
                  className="w-full flex items-center justify-between px-4 py-2 border border-background-dark rounded-md text-sm font-medium text-text-dark hover:bg-background-dark/30"
                >
                  Beiträge durchsuchen
                  <span className="ml-2 text-text-dark/60">→</span>
                </button>
              )}
              {hasPermission([PERMISSIONS.VIEW_POSTS]) && (
                <button
                  onClick={() => showNotification('Lesezeichen werden geladen', 'info')}
                  className="w-full flex items-center justify-between px-4 py-2 border border-background-dark rounded-md text-sm font-medium text-text-dark hover:bg-background-dark/30"
                >
                  Meine Lesezeichen
                  <span className="ml-2 text-text-dark/60">→</span>
                </button>
              )}
            </div>
          </div>

          <div className="bg-surface-dark rounded-lg shadow p-6">
            <h2 className="text-lg font-medium text-text-dark mb-4">Aktuelle Aktivitäten</h2>
            <div className="space-y-4">
              {hasPermission([PERMISSIONS.VIEW_POSTS]) && (
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-text-dark">Neuer Beitrag verfügbar</p>
                    <p className="text-sm text-text-dark/60">Vor 15 Minuten</p>
                  </div>
                  <button className="text-sm text-primary-dark hover:text-primary-dark/80">
                    Lesen
                  </button>
                </div>
              )}
              {hasPermission([PERMISSIONS.VIEW_POSTS]) && (
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-text-dark">Beitrag aktualisiert</p>
                    <p className="text-sm text-text-dark/60">Vor 1 Stunde</p>
                  </div>
                  <button className="text-sm text-primary-dark hover:text-primary-dark/80">
                    Lesen
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

const ViewerDashboard = () => {
  return (
    <BaseDashboard>
      <ViewerDashboardContent />
    </BaseDashboard>
  );
};

export default ViewerDashboard; 