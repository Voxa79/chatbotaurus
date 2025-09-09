// Utilitaires de sécurité pour nettoyer et protéger les données

/**
 * Nettoie les données sensibles du localStorage
 */
export const cleanSensitiveData = () => {
  const sensitivePatterns = [
    /runtime_local_/i,
    /token/i,
    /secret/i,
    /password/i,
    /api[_-]?key/i,
    /auth/i,
    /session/i,
    /private/i,
    /credential/i
  ];
  
  // Nettoyer localStorage
  const keysToRemove = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key) || '';
    
    // Vérifier si la clé ou la valeur contient des données sensibles
    const isSensitive = sensitivePatterns.some(pattern => 
      pattern.test(key) || pattern.test(value)
    );
    
    if (isSensitive) {
      keysToRemove.push(key);
    }
  }
  
  // Supprimer les clés sensibles
  keysToRemove.forEach(key => {
    // Log silencieux pour éviter le spam en console
    if (process.env.NODE_ENV === 'development') {
      console.log(`🔒 Nettoyage données: ${key}`);
    }
    localStorage.removeItem(key);
  });
  
  // Nettoyer sessionStorage
  const sessionKeysToRemove = [];
  for (let i = 0; i < sessionStorage.length; i++) {
    const key = sessionStorage.key(i);
    const value = sessionStorage.getItem(key) || '';
    
    const isSensitive = sensitivePatterns.some(pattern => 
      pattern.test(key) || pattern.test(value)
    );
    
    if (isSensitive) {
      sessionKeysToRemove.push(key);
    }
  }
  
  sessionKeysToRemove.forEach(key => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`🔒 Nettoyage session: ${key}`);
    }
    sessionStorage.removeItem(key);
  });
  
  return {
    localStorageCleared: keysToRemove.length,
    sessionStorageCleared: sessionKeysToRemove.length
  };
};

/**
 * Sécurise le stockage en chiffrant les données sensibles
 */
export const secureStorage = {
  // Clé de chiffrement simple (en production, utiliser une vraie solution crypto)
  key: 'local-ai-secure-key-2024',
  
  /**
   * Chiffrement simple XOR (pour démo - utiliser crypto-js en production)
   */
  encrypt(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
      result += String.fromCharCode(text.charCodeAt(i) ^ this.key.charCodeAt(i % this.key.length));
    }
    return btoa(result);
  },
  
  /**
   * Déchiffrement XOR
   */
  decrypt(encrypted) {
    try {
      const text = atob(encrypted);
      let result = '';
      for (let i = 0; i < text.length; i++) {
        result += String.fromCharCode(text.charCodeAt(i) ^ this.key.charCodeAt(i % this.key.length));
      }
      return result;
    } catch (e) {
      console.error('Erreur de déchiffrement:', e);
      return null;
    }
  },
  
  /**
   * Stockage sécurisé
   */
  setItem(key, value) {
    const encrypted = this.encrypt(JSON.stringify(value));
    localStorage.setItem(`secure_${key}`, encrypted);
  },
  
  /**
   * Récupération sécurisée
   */
  getItem(key) {
    const encrypted = localStorage.getItem(`secure_${key}`);
    if (!encrypted) return null;
    
    const decrypted = this.decrypt(encrypted);
    if (!decrypted) return null;
    
    try {
      return JSON.parse(decrypted);
    } catch (e) {
      console.error('Erreur de parsing JSON:', e);
      return null;
    }
  },
  
  /**
   * Suppression sécurisée
   */
  removeItem(key) {
    localStorage.removeItem(`secure_${key}`);
  }
};

/**
 * Validation et assainissement des URLs
 */
export const sanitizeUrl = (url) => {
  // Bloquer les protocoles dangereux
  const dangerousProtocols = ['javascript:', 'data:', 'vbscript:', 'file:', 'ftp:'];
  
  const lowerUrl = url.toLowerCase();
  const isDangerous = dangerousProtocols.some(protocol => lowerUrl.startsWith(protocol));
  
  if (isDangerous) {
    console.warn('🚨 URL dangereuse bloquée:', url);
    return '/'; // Rediriger vers l'accueil
  }
  
  // Nettoyer les caractères dangereux
  return url
    .replace(/[<>\"']/g, '') // Supprimer les caractères HTML dangereux
    .replace(/javascript:/gi, '') // Double vérification
    .replace(/data:/gi, '')
    .trim();
};

/**
 * Protection contre les attaques de timing
 */
export const constantTimeCompare = (a, b) => {
  if (a.length !== b.length) {
    return false;
  }
  
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  
  return result === 0;
};

/**
 * Génération de nonces sécurisés pour CSP
 */
export const generateNonce = () => {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

/**
 * Validation des entrées utilisateur
 */
export const validateInput = (input, type = 'text') => {
  if (!input || typeof input !== 'string') {
    return { valid: false, error: 'Input invalide' };
  }
  
  // Patterns de validation
  const patterns = {
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    phone: /^[\+]?[1-9][\d]{0,15}$/,
    url: /^https?:\/\/.+/,
    text: /^[a-zA-Z0-9\s\-_.àáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ]+$/,
    alphanumeric: /^[a-zA-Z0-9]+$/
  };
  
  // Vérifier la longueur
  if (input.length > 1000) {
    return { valid: false, error: 'Input trop long' };
  }
  
  // Détecter les tentatives d'injection
  const injectionPatterns = [
    /<script[^>]*>/i,
    /javascript:/i,
    /on\w+\s*=/i,
    /eval\s*\(/i,
    /expression\s*\(/i,
    /<iframe/i,
    /<object/i,
    /<embed/i
  ];
  
  const hasInjection = injectionPatterns.some(pattern => pattern.test(input));
  if (hasInjection) {
    return { valid: false, error: 'Contenu suspect détecté' };
  }
  
  // Valider selon le type
  const pattern = patterns[type];
  if (pattern && !pattern.test(input)) {
    return { valid: false, error: `Format ${type} invalide` };
  }
  
  return { valid: true, sanitized: input.trim() };
};

/**
 * Intercepte et filtre les erreurs de console pour masquer les erreurs non critiques
 */
const setupErrorFiltering = () => {
  // Intercepter les erreurs de console pour filtrer les erreurs d'extensions
  const originalError = console.error;
  const originalWarn = console.warn;
  
  // Patterns d'erreurs à ignorer (causées par extensions navigateur)
  const ignoredPatterns = [
    /ERR_BLOCKED_BY_CLIENT/,
    /net::ERR_BLOCKED_BY_CLIENT/,
    /Potential permissions policy violation/,
    /No storage available for session/,
    /airbrake.io/,
    /firestore.googleapis.com/,
    /notifier-configs/,
    /booking-.*\.js/
  ];
  
  console.error = (...args) => {
    const message = args.join(' ');
    const shouldIgnore = ignoredPatterns.some(pattern => pattern.test(message));
    
    if (!shouldIgnore) {
      originalError.apply(console, args);
    }
  };
  
  console.warn = (...args) => {
    const message = args.join(' ');
    const shouldIgnore = ignoredPatterns.some(pattern => pattern.test(message));
    
    if (!shouldIgnore) {
      originalWarn.apply(console, args);
    }
  };
};

/**
 * Initialisation de la sécurité au démarrage de l'application
 */
export const initSecurity = () => {
  console.log('🔒 Initialisation de la sécurité...');
  
  // Configurer le filtrage des erreurs en développement
  if (process.env.NODE_ENV === 'development') {
    setupErrorFiltering();
  }
  
  // Nettoyer les données sensibles existantes
  const cleaned = cleanSensitiveData();
  if (cleaned.localStorageCleared > 0 || cleaned.sessionStorageCleared > 0) {
    console.log(`🧹 ${cleaned.localStorageCleared + cleaned.sessionStorageCleared} données sensibles supprimées`);
  }
  
  // Désactiver le drag & drop de fichiers pour éviter les uploads malveillants
  document.addEventListener('dragover', (e) => e.preventDefault());
  document.addEventListener('drop', (e) => {
    e.preventDefault();
    console.warn('🚨 Tentative de drop de fichier bloquée');
  });
  
  // Désactiver le clic droit en production (optionnel)
  if (process.env.NODE_ENV === 'production') {
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      console.warn('🚨 Clic droit désactivé en production');
    });
  }
  
  // Surveiller les tentatives de manipulation du DOM
  if (window.MutationObserver) {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeName === 'SCRIPT' && !node.src.includes(window.location.origin)) {
              console.warn('🚨 Script externe détecté:', node.src);
            }
          });
        }
      });
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
  
  console.log('✅ Sécurité initialisée');
};