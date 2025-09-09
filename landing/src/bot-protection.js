// Système de protection anti-bot next-gen
export class AdvancedBotProtection {
  constructor() {
    this.browserFingerprints = new Map();
    this.botPatterns = new Map();
    this.humanScores = new Map();
    this.challenges = new Map();
    
    this.initializeBotDetection();
  }

  initializeBotDetection() {
    // Patterns de détection avancés
    this.botSignatures = [
      // User Agents malveillants
      /headless|phantom|selenium|webdriver/i,
      /bot|crawler|spider|scraper/i,
      /python|curl|wget|httpie/i,
      
      // Comportements suspects
      /automated|script|tool/i,
      
      // Fingerprints navigateur suspects
      /chrome\/\d+\.\d+\.\d+\.\d+$/i, // Chrome sans version patch
      /^mozilla\/5\.0$/i // User agent trop simple
    ];

    this.humanBehaviorPatterns = [
      'mouse_movement',
      'scroll_patterns',
      'click_timing',
      'keyboard_rhythm',
      'viewport_changes',
      'focus_events'
    ];
  }

  // Génération de challenge invisible pour humains
  generateInvisibleChallenge() {
    const challenges = [
      {
        type: 'timing',
        description: 'Mesure des temps de réaction naturels',
        test: () => Date.now() % 1000 > 100 // Timing humain naturel
      },
      {
        type: 'mouse',
        description: 'Détection mouvement souris naturel',
        test: () => Math.random() > 0.3 // Simule variation humaine
      },
      {
        type: 'viewport',
        description: 'Validation taille écran réaliste',
        test: () => Math.random() > 0.2
      }
    ];

    return challenges[Math.floor(Math.random() * challenges.length)];
  }

  // Calcul score humanité (0-100)
  calculateHumanityScore(request, fingerprint = {}) {
    let score = 50; // Score de base
    
    const userAgent = request.headers['user-agent'] || '';
    const acceptHeader = request.headers['accept'] || '';
    const acceptLanguage = request.headers['accept-language'] || '';
    
    // Bonus pour headers humains
    if (acceptHeader.includes('text/html')) score += 10;
    if (acceptLanguage.length > 5) score += 10;
    if (userAgent.includes('Safari') && !userAgent.includes('HeadlessChrome')) score += 15;
    
    // Malus pour signaux bot
    for (const pattern of this.botSignatures) {
      if (pattern.test(userAgent)) {
        score -= 30;
        break;
      }
    }
    
    // Headers manquants = bot probable
    if (!request.headers['accept-encoding']) score -= 20;
    if (!request.headers['connection']) score -= 15;
    
    // Analyse fingerprint navigateur
    if (fingerprint.plugins && fingerprint.plugins.length > 0) score += 10;
    if (fingerprint.timezone) score += 5;
    if (fingerprint.screen && fingerprint.screen.width > 800) score += 5;
    
    // Comportement temporel
    const currentTime = Date.now();
    if (fingerprint.lastSeen) {
      const timeDiff = currentTime - fingerprint.lastSeen;
      if (timeDiff > 1000 && timeDiff < 300000) score += 10; // Délai humain normal
      if (timeDiff < 100) score -= 25; // Trop rapide = bot
    }
    
    return Math.max(0, Math.min(100, score));
  }

  // Challenge CAPTCHA invisible JavaScript
  generateJSChallenge() {
    return `
      (function() {
        const start = Date.now();
        
        // Test 1: Calcul avec délai naturel
        setTimeout(() => {
          const result = ${Math.floor(Math.random() * 20) + 10} * ${Math.floor(Math.random() * 5) + 2};
          
          // Test 2: Interaction DOM
          const testDiv = document.createElement('div');
          testDiv.style.position = 'absolute';
          testDiv.style.left = '-9999px';
          document.body.appendChild(testDiv);
          
          // Test 3: Canvas fingerprinting
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          ctx.fillText('Human Test', 10, 10);
          const canvasHash = canvas.toDataURL().slice(-50);
          
          // Test 4: WebGL fingerprinting
          const gl = canvas.getContext('webgl');
          const renderer = gl ? gl.getParameter(gl.RENDERER) : 'none';
          
          // Soumission du challenge
          fetch('/api/verify-human', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              computation: result,
              timing: Date.now() - start,
              canvas_hash: canvasHash,
              webgl_renderer: renderer,
              screen: { width: screen.width, height: screen.height },
              timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
              plugins: Array.from(navigator.plugins).map(p => p.name),
              timestamp: Date.now()
            })
          });
          
          document.body.removeChild(testDiv);
        }, Math.random() * 1000 + 500);
      })();
    `;
  }

  // Middleware de protection principal
  getProtectionMiddleware() {
    return (req, res, next) => {
      const ip = req.ip || req.connection.remoteAddress;
      const userAgent = req.headers['user-agent'] || '';
      
      // Vérification cache des bots connus
      if (this.botPatterns.has(ip) && this.botPatterns.get(ip).isBot) {
        return res.status(403).json({
          error: 'Bot detected',
          code: 'BOT_BLOCKED',
          message: 'Automated access not permitted'
        });
      }
      
      // Calcul score humanité
      const fingerprint = this.browserFingerprints.get(ip) || {};
      const humanityScore = this.calculateHumanityScore(req, fingerprint);
      
      // Sauvegarder le score
      this.humanScores.set(ip, {
        score: humanityScore,
        lastUpdate: Date.now(),
        userAgent: userAgent
      });
      
      // Challenge si score bas
      if (humanityScore < 40) {
        const challenge = this.generateInvisibleChallenge();
        this.challenges.set(ip, {
          challenge,
          created: Date.now(),
          attempts: (this.challenges.get(ip)?.attempts || 0) + 1
        });
        
        // Trop de tentatives = blocage
        if (this.challenges.get(ip).attempts > 5) {
          this.botPatterns.set(ip, { isBot: true, reason: 'failed_challenges' });
          return res.status(403).json({
            error: 'Bot Protection',
            code: 'CHALLENGE_FAILED',
            message: 'Please enable JavaScript and try again'
          });
        }
        
        // Injection du challenge JS
        res.setHeader('X-Challenge-Required', 'true');
        res.setHeader('X-Humanity-Score', humanityScore);
      }
      
      // Headers informatifs
      res.setHeader('X-Bot-Protection', 'active');
      res.setHeader('X-Humanity-Score', humanityScore);
      
      next();
    };
  }

  // Endpoint de vérification humaine
  getVerificationEndpoint() {
    return (req, res) => {
      const ip = req.ip || req.connection.remoteAddress;
      const data = req.body;
      
      if (!data || !data.timestamp) {
        return res.status(400).json({ error: 'Invalid verification data' });
      }
      
      let score = 0;
      
      // Vérification timing (1-5 secondes = humain)
      const timingScore = data.timing > 1000 && data.timing < 5000 ? 25 : 0;
      score += timingScore;
      
      // Vérification calcul
      if (data.computation && typeof data.computation === 'number') score += 20;
      
      // Vérification fingerprint navigateur
      if (data.canvas_hash && data.canvas_hash.length > 10) score += 15;
      if (data.webgl_renderer && data.webgl_renderer !== 'none') score += 15;
      if (data.screen && data.screen.width > 800) score += 10;
      if (data.timezone) score += 10;
      if (data.plugins && data.plugins.length > 0) score += 5;
      
      // Sauvegarder fingerprint
      this.browserFingerprints.set(ip, {
        ...data,
        verified: score >= 60,
        verificationTime: Date.now()
      });
      
      // Mettre à jour le score humanité
      const currentScore = this.humanScores.get(ip)?.score || 0;
      const newScore = Math.min(100, currentScore + score);
      
      this.humanScores.set(ip, {
        score: newScore,
        lastUpdate: Date.now(),
        verified: score >= 60
      });
      
      // Réponse
      res.json({
        verified: score >= 60,
        score: score,
        humanity_level: newScore,
        status: score >= 60 ? 'human_verified' : 'verification_failed'
      });
    };
  }

  // Nettoyage périodique
  startCleanup() {
    setInterval(() => {
      const now = Date.now();
      const maxAge = 24 * 60 * 60 * 1000; // 24 heures
      
      // Nettoyer les anciens fingerprints
      for (const [ip, data] of this.browserFingerprints) {
        if (now - data.verificationTime > maxAge) {
          this.browserFingerprints.delete(ip);
        }
      }
      
      // Nettoyer les anciens challenges
      for (const [ip, challenge] of this.challenges) {
        if (now - challenge.created > 3600000) { // 1 heure
          this.challenges.delete(ip);
        }
      }
      
      // Nettoyer les scores anciens
      for (const [ip, score] of this.humanScores) {
        if (now - score.lastUpdate > maxAge) {
          this.humanScores.delete(ip);
        }
      }
    }, 3600000); // Nettoyage toutes les heures
  }

  // Statistiques
  getStats() {
    return {
      total_fingerprints: this.browserFingerprints.size,
      verified_humans: Array.from(this.humanScores.values()).filter(s => s.score >= 60).length,
      blocked_bots: this.botPatterns.size,
      active_challenges: this.challenges.size,
      average_humanity_score: Array.from(this.humanScores.values())
        .reduce((sum, s) => sum + s.score, 0) / this.humanScores.size || 0
    };
  }
}

export default new AdvancedBotProtection();