import React, { useState, useEffect } from 'react';
import { useAuth } from './AuthProvider';
import { FiUser, FiMapPin, FiBook, FiTwitter, FiLinkedin, FiGithub, FiPhone, FiLock, FiCamera, FiSave, FiX, FiEdit } from 'react-icons/fi';

const UserProfile = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    bio: '',
    socialLinks: {
      twitter: '',
      linkedin: '',
      github: ''
    },
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        location: user.location || '',
        bio: user.bio || '',
        socialLinks: {
          twitter: user.socialLinks?.twitter || '',
          linkedin: user.socialLinks?.linkedin || '',
          github: user.socialLinks?.github || ''
        },
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
    }
  }, [user]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewImage(file);
    }
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simuliere API-Call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsEditing(false);
      // Hier würde der API-Call zum Speichern der Änderungen stehen
    } catch (error) {
      console.error('Fehler beim Speichern des Profils:', error);
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      setErrors({ ...errors, password: 'Passwörter stimmen nicht überein' });
      return;
    }
    try {
      // Simuliere API-Call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFormData({
        name: user.name || '',
        email: user.email || '',
        location: user.location || '',
        bio: user.bio || '',
        socialLinks: {
          twitter: user.socialLinks?.twitter || '',
          linkedin: user.socialLinks?.linkedin || '',
          github: user.socialLinks?.github || ''
        },
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
      setErrors({});
      // Hier würde der API-Call zum Ändern des Passworts stehen
    } catch (error) {
      console.error('Fehler beim Ändern des Passworts:', error);
    }
  };

  return (
    <div className="min-h-screen bg-background-dark text-text-dark pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold mb-6">Profil</h2>

        {/* Profilbild und Basisinformationen */}
        <div className="bg-surface-dark rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center space-x-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-surface-light">
                {previewImage ? (
                  <img src={previewImage} alt="Profil" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <FiUser className="text-4xl text-gray-400" />
                  </div>
                )}
              </div>
              <label className="absolute bottom-0 right-0 bg-primary-dark text-white p-2 rounded-full cursor-pointer hover:bg-primary-light">
                <FiCamera />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            </div>
            <div>
              <h3 className="text-xl font-semibold">{user?.name}</h3>
              <p className="text-gray-400">{user?.email}</p>
              <p className="text-gray-400 capitalize">{user?.role}</p>
            </div>
          </div>
        </div>

        {/* Persönliche Informationen */}
        <div className="bg-surface-dark rounded-lg shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Persönliche Informationen</h3>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="text-primary-dark hover:text-primary-light"
            >
              {isEditing ? <FiX /> : <FiEdit />}
            </button>
          </div>
          <form onSubmit={handleProfileSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 bg-background-dark border border-background-dark rounded-md text-white"
                disabled={!isEditing}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">E-Mail</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 bg-background-dark border border-background-dark rounded-md text-white"
                disabled={!isEditing}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Standort</label>
              <div className="relative">
                <FiMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full pl-10 pr-3 py-2 bg-background-dark border border-background-dark rounded-md text-white"
                  disabled={!isEditing}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Bio</label>
              <div className="relative">
                <FiBook className="absolute left-3 top-3 text-gray-400" />
                <textarea
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  className="w-full pl-10 pr-3 py-2 bg-background-dark border border-background-dark rounded-md text-white"
                  rows="3"
                  disabled={!isEditing}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Social Links</label>
              <div className="space-y-2">
                <div className="relative">
                  <FiTwitter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={formData.socialLinks.twitter}
                    onChange={(e) => setFormData({
                      ...formData,
                      socialLinks: { ...formData.socialLinks, twitter: e.target.value }
                    })}
                    className="w-full pl-10 pr-3 py-2 bg-background-dark border border-background-dark rounded-md text-white"
                    placeholder="Twitter Profil"
                    disabled={!isEditing}
                  />
                </div>
                <div className="relative">
                  <FiLinkedin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={formData.socialLinks.linkedin}
                    onChange={(e) => setFormData({
                      ...formData,
                      socialLinks: { ...formData.socialLinks, linkedin: e.target.value }
                    })}
                    className="w-full pl-10 pr-3 py-2 bg-background-dark border border-background-dark rounded-md text-white"
                    placeholder="LinkedIn Profil"
                    disabled={!isEditing}
                  />
                </div>
                <div className="relative">
                  <FiGithub className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={formData.socialLinks.github}
                    onChange={(e) => setFormData({
                      ...formData,
                      socialLinks: { ...formData.socialLinks, github: e.target.value }
                    })}
                    className="w-full pl-10 pr-3 py-2 bg-background-dark border border-background-dark rounded-md text-white"
                    placeholder="GitHub Profil"
                    disabled={!isEditing}
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Telefon</label>
              <div className="relative">
                <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-10 pr-3 py-2 bg-background-dark border border-background-dark rounded-md text-white"
                  disabled={!isEditing}
                />
              </div>
            </div>
            {isEditing && (
              <button
                type="submit"
                className="px-4 py-2 bg-primary-dark text-white rounded-md hover:bg-primary-light"
              >
                <FiSave className="inline mr-2" />
                Speichern
              </button>
            )}
          </form>
        </div>

        {/* Passwort ändern */}
        <div className="bg-surface-dark rounded-lg shadow-lg p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4">Passwort ändern</h3>
          <form onSubmit={handlePasswordChange} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Aktuelles Passwort</label>
              <div className="relative">
                <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  value={formData.currentPassword}
                  onChange={(e) => setFormData({ ...formData, currentPassword: e.target.value })}
                  className="w-full pl-10 pr-3 py-2 bg-background-dark border border-background-dark rounded-md text-white"
                  disabled={!isEditing}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Neues Passwort</label>
              <div className="relative">
                <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  value={formData.newPassword}
                  onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
                  className="w-full pl-10 pr-3 py-2 bg-background-dark border border-background-dark rounded-md text-white"
                  disabled={!isEditing}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Passwort bestätigen</label>
              <div className="relative">
                <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full pl-10 pr-3 py-2 bg-background-dark border border-background-dark rounded-md text-white"
                  disabled={!isEditing}
                />
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">{errors.password}</p>
              )}
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-primary-dark text-white rounded-md hover:bg-primary-light"
            >
              Passwort ändern
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile; 