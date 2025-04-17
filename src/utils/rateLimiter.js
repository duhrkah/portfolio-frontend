class RateLimiter {
  constructor(limit, windowMs) {
    this.limit = limit; // Maximale Anzahl von Anfragen
    this.windowMs = windowMs; // Zeitfenster in Millisekunden
    this.requests = new Map(); // Speichert die Anfragen
  }

  // Bereinigt alte Anfragen
  cleanup() {
    const now = Date.now();
    for (const [ip, timestamps] of this.requests.entries()) {
      const validTimestamps = timestamps.filter(time => now - time < this.windowMs);
      if (validTimestamps.length === 0) {
        this.requests.delete(ip);
      } else {
        this.requests.set(ip, validTimestamps);
      }
    }
  }

  // Prüft, ob eine Anfrage erlaubt ist
  isAllowed(ip) {
    this.cleanup();
    
    const now = Date.now();
    const timestamps = this.requests.get(ip) || [];
    
    // Entferne alte Anfragen
    const recentTimestamps = timestamps.filter(time => now - time < this.windowMs);
    
    if (recentTimestamps.length >= this.limit) {
      return false;
    }
    
    recentTimestamps.push(now);
    this.requests.set(ip, recentTimestamps);
    return true;
  }

  // Gibt die verbleibende Zeit bis zur nächsten erlaubten Anfrage zurück
  getRemainingTime(ip) {
    const timestamps = this.requests.get(ip) || [];
    if (timestamps.length < this.limit) {
      return 0;
    }
    
    const oldestTimestamp = Math.min(...timestamps);
    return this.windowMs - (Date.now() - oldestTimestamp);
  }
}

// Erstelle eine Instanz mit 5 Anfragen pro Minute
const rateLimiter = new RateLimiter(5, 60 * 1000);

export default rateLimiter; 