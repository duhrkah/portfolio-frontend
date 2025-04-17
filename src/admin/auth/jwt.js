// Passwort-Richtlinien
export const PASSWORD_POLICY = {
  minLength: 8,
  requireUppercase: true,
  requireLowercase: true,
  requireNumbers: true,
  requireSpecialChars: true,
  specialChars: '!@#$%^&*()_+-=[]{}|;:,.<>?'
};

// JWT Token generieren (simuliert)
export const generateToken = (user) => {
  // In einer echten Implementierung würde hier ein JWT Token generiert werden
  // Für die Demo geben wir einfach die Benutzerdaten als String zurück
  return JSON.stringify({
    ...user,
    exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24) // Token läuft in 24 Stunden ab
  });
};

// JWT Token verifizieren
export const verifyToken = (token) => {
  try {
    const decoded = JSON.parse(token);
    if (decoded.exp * 1000 < Date.now()) {
      return null; // Token ist abgelaufen
    }
    return decoded;
  } catch (error) {
    return null;
  }
};

// Passwort-Validierung
export const validatePassword = (password) => {
  const errors = [];

  if (password.length < PASSWORD_POLICY.minLength) {
    errors.push(`Das Passwort muss mindestens ${PASSWORD_POLICY.minLength} Zeichen lang sein`);
  }

  if (PASSWORD_POLICY.requireUppercase && !/[A-Z]/.test(password)) {
    errors.push('Das Passwort muss mindestens einen Großbuchstaben enthalten');
  }

  if (PASSWORD_POLICY.requireLowercase && !/[a-z]/.test(password)) {
    errors.push('Das Passwort muss mindestens einen Kleinbuchstaben enthalten');
  }

  if (PASSWORD_POLICY.requireNumbers && !/[0-9]/.test(password)) {
    errors.push('Das Passwort muss mindestens eine Zahl enthalten');
  }

  if (PASSWORD_POLICY.requireSpecialChars && 
      !new RegExp(`[${PASSWORD_POLICY.specialChars}]`).test(password)) {
    errors.push('Das Passwort muss mindestens ein Sonderzeichen enthalten');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

// Token aus LocalStorage abrufen
export const getStoredToken = () => {
  return localStorage.getItem('token');
};

// Token in LocalStorage speichern
export const storeToken = (token) => {
  localStorage.setItem('token', token);
};

// Token aus LocalStorage entfernen
export const removeToken = () => {
  localStorage.removeItem('token');
}; 