import React, { useState } from 'react';
import { useAuth } from '../AuthProvider';
import BaseDashboard from './BaseDashboard';
import { FiFileText, FiEdit, FiClock } from 'react-icons/fi';
import { useNotification } from '../../context/NotificationContext';
import { PERMISSIONS } from '../constants';

const EditorDashboardContent = () => {
  const { user, hasPermission } = useAuth();
  const { showNotification } = useNotification();
  const [stats] = useState({
    totalPosts: 15,
    draftPosts: 3,
    lastEdit: new Date().toISOString()
  });

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-text-dark">Willkommen, {user?.name}!</h1>
        <p className="mt-2 text-sm text-text-dark/80">
          Hier ist eine Übersicht Ihrer Editor-Funktionen.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-surface-dark rounded-lg shadow p-6">
          <div className="flex items-center">
            <FiFileText className="text-4xl text-primary-dark mr-4" />
            <div>
              <h2 className="text-lg font-medium text-text-dark">Gesamtbeiträge</h2>
              <p className="text-3xl font-bold">{stats.totalPosts}</p>
            </div>
          </div>
        </div>

        <div className="bg-surface-dark rounded-lg shadow p-6">
          <div className="flex items-center">
            <FiEdit className="text-4xl text-primary-dark mr-4" />
            <div>
              <h2 className="text-lg font-medium text-text-dark">Entwürfe</h2>
              <p className="text-3xl font-bold">{stats.draftPosts}</p>
            </div>
          </div>
        </div>

        <div className="bg-surface-dark rounded-lg shadow p-6">
          <div className="flex items-center">
            <FiClock className="text-4xl text-primary-dark mr-4" />
            <div>
              <h2 className="text-lg font-medium text-text-dark">Letzte Bearbeitung</h2>
              <p className="text-3xl font-bold">
                {new Date(stats.lastEdit).toLocaleDateString()}
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
              {hasPermission([PERMISSIONS.CREATE_POST]) && (
                <button
                  onClick={() => showNotification('Neuer Beitrag wird erstellt', 'info')}
                  className="w-full flex items-center justify-between px-4 py-2 border border-background-dark rounded-md text-sm font-medium text-text-dark hover:bg-background-dark/30"
                >
                  Neuen Beitrag erstellen
                  <span className="ml-2 text-text-dark/60">→</span>
                </button>
              )}
              {hasPermission([PERMISSIONS.EDIT_POST]) && (
                <button
                  onClick={() => showNotification('Beiträge verwalten', 'info')}
                  className="w-full flex items-center justify-between px-4 py-2 border border-background-dark rounded-md text-sm font-medium text-text-dark hover:bg-background-dark/30"
                >
                  Beiträge verwalten
                  <span className="ml-2 text-text-dark/60">→</span>
                </button>
              )}
            </div>
          </div>

          <div className="bg-surface-dark rounded-lg shadow p-6">
            <h2 className="text-lg font-medium text-text-dark mb-4">Aktuelle Aktivitäten</h2>
            <div className="space-y-4">
              {hasPermission([PERMISSIONS.EDIT_POST]) && (
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-text-dark">Neuer Beitrag erstellt</p>
                    <p className="text-sm text-text-dark/60">Vor 10 Minuten</p>
                  </div>
                  <button className="text-sm text-primary-dark hover:text-primary-dark/80">
                    Details
                  </button>
                </div>
              )}
              {hasPermission([PERMISSIONS.EDIT_POST]) && (
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-text-dark">Beitrag aktualisiert</p>
                    <p className="text-sm text-text-dark/60">Vor 30 Minuten</p>
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

const EditorDashboard = () => {
  return (
    <BaseDashboard>
      <EditorDashboardContent />
    </BaseDashboard>
  );
};

export default EditorDashboard; 