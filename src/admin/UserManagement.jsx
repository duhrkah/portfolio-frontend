import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import { useAuth } from './AuthProvider';

const UserManagement = () => {
  const { user: currentUser } = useAuth();
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showUserModal, setShowUserModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [userForm, setUserForm] = useState({
    username: '',
    email: '',
    role: 'viewer',
    name: '',
    password: ''
  });

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      setIsLoading(true);
      const data = await api.getUsers();
      setUsers(data);
      setError(null);
    } catch (error) {
      console.error('Fehler beim Laden der Benutzer:', error);
      setError('Fehler beim Laden der Benutzer');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteUser = async (userId) => {
    if (window.confirm('Möchten Sie diesen Benutzer wirklich löschen?')) {
      try {
        await api.deleteUser(userId);
        setUsers(users.filter(u => u.id !== userId));
      } catch (error) {
        console.error('Fehler beim Löschen des Benutzers:', error);
        setError('Fehler beim Löschen des Benutzers');
      }
    }
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
    setUserForm({
      username: user.username,
      email: user.email,
      role: user.role,
      name: user.name,
      password: ''
    });
    setShowUserModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = { ...userForm };
      if (editingUser) {
        delete userData.password;
      }

      if (editingUser && editingUser._id) {
        const response = await api.updateUser(editingUser._id, userData);
        if (response.error) {
          throw new Error(response.error);
        }
      } else {
        const response = await api.createUser(userData);
        if (response.error) {
          throw new Error(response.error);
        }
      }
      await loadUsers();
      setShowUserModal(false);
      setEditingUser(null);
      setUserForm({
        username: '',
        email: '',
        role: 'viewer',
        name: '',
        password: ''
      });
    } catch (error) {
      console.error('Fehler beim Speichern des Benutzers:', error);
      setError(error.message || 'Fehler beim Speichern des Benutzers. Bitte überprüfen Sie die Eingaben.');
    }
  };

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary-dark border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-text-dark">Benutzerverwaltung</h1>
        <button
          onClick={() => {
            setEditingUser(null);
            setUserForm({
              username: '',
              email: '',
              role: 'viewer',
              name: '',
              password: ''
            });
            setShowUserModal(true);
          }}
          className="bg-primary-dark text-white px-4 py-2 rounded-lg hover:bg-primary-dark/90 transition-colors"
        >
          Neuer Benutzer
        </button>
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-500 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <div className="bg-surface-dark rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-background-dark">
          <thead className="bg-background-dark">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-text-dark/60 uppercase tracking-wider">
                Benutzername
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-text-dark/60 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-text-dark/60 uppercase tracking-wider">
                E-Mail
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-text-dark/60 uppercase tracking-wider">
                Rolle
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-text-dark/60 uppercase tracking-wider">
                Aktionen
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-background-dark">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-background-dark/30 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-text-dark">
                  {user.username}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-text-dark">
                  {user.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-text-dark">
                  {user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-text-dark">
                  {user.role}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-text-dark">
                  <button
                    onClick={() => handleEditUser(user)}
                    className="text-primary-dark hover:text-primary-dark/80 mr-4 transition-colors"
                  >
                    Bearbeiten
                  </button>
                  {user.id !== currentUser.id && (
                    <button
                      onClick={() => handleDeleteUser(user.id)}
                      className="text-red-500 hover:text-red-600 transition-colors"
                    >
                      Löschen
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showUserModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-surface-dark p-6 rounded-lg w-full max-w-md border border-background-dark">
            <h2 className="text-xl font-bold text-text-dark mb-4">
              {editingUser ? 'Benutzer bearbeiten' : 'Neuer Benutzer'}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-text-dark mb-1">
                  Benutzername
                </label>
                <input
                  type="text"
                  value={userForm.username}
                  onChange={(e) => setUserForm({ ...userForm, username: e.target.value })}
                  className="w-full px-3 py-2 border border-background-dark bg-background-dark text-text-dark rounded-md focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-transparent"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-text-dark mb-1">
                  Name
                </label>
                <input
                  type="text"
                  value={userForm.name}
                  onChange={(e) => setUserForm({ ...userForm, name: e.target.value })}
                  className="w-full px-3 py-2 border border-background-dark bg-background-dark text-text-dark rounded-md focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-transparent"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-text-dark mb-1">
                  E-Mail
                </label>
                <input
                  type="email"
                  value={userForm.email}
                  onChange={(e) => setUserForm({ ...userForm, email: e.target.value })}
                  className="w-full px-3 py-2 border border-background-dark bg-background-dark text-text-dark rounded-md focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-transparent"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-text-dark mb-1">
                  Rolle
                </label>
                <select
                  value={userForm.role}
                  onChange={(e) => setUserForm({ ...userForm, role: e.target.value })}
                  className="w-full px-3 py-2 border border-background-dark bg-background-dark text-text-dark rounded-md focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-transparent"
                >
                  <option value="viewer">Viewer</option>
                  <option value="editor">Editor</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              {!editingUser && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-text-dark mb-1">
                    Passwort
                  </label>
                  <input
                    type="password"
                    value={userForm.password}
                    onChange={(e) => setUserForm({ ...userForm, password: e.target.value })}
                    className="w-full px-3 py-2 border border-background-dark bg-background-dark text-text-dark rounded-md focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-transparent"
                    required={!editingUser}
                  />
                </div>
              )}
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowUserModal(false)}
                  className="px-4 py-2 text-text-dark bg-background-dark rounded-md hover:bg-background-dark/80 transition-colors"
                >
                  Abbrechen
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-primary-dark rounded-md hover:bg-primary-dark/90 transition-colors"
                >
                  Speichern
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement; 