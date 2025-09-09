// Système de monitoring de sécurité temps réel
import fs from 'fs';
import path from 'path';

class SecurityMonitor {
  constructor() {
    this.alerts = [];
    this.metrics = {
      requests: 0,
      blocked: 0,
      suspicious: 0,
      attacks: 0,
      uptime: Date.now()
    };
    this.setupLogging();
    this.startMetricsCollection();
  }

  setupLogging() {
    const logDir = '/var/log/security';
    if (!fs.existsSync(logDir)) {
      try {
        fs.mkdirSync(logDir, { recursive: true, mode: 0o750 });
      } catch (error) {
        console.warn('Cannot create security log directory:', error.message);
      }
    }
  }

  logSecurityEvent(level, event, details = {}) {
    const timestamp = new Date().toISOString();
    const logEntry = {
      timestamp,
      level,
      event,
      details,
      service: 'landing-site'
    };

    // Console log pour développement
    const colorMap = {
      'CRITICAL': '\x1b[31m', // Rouge
      'WARNING': '\x1b[33m',  // Jaune
      'INFO': '\x1b[36m',     // Cyan
      'SUCCESS': '\x1b[32m'   // Vert
    };

    console.log(
      `${colorMap[level] || '\x1b[0m'}[${timestamp}] ${level}: ${event}\x1b[0m`,
      Object.keys(details).length > 0 ? details : ''
    );

    // Sauvegarde fichier si disponible
    try {
      const logFile = `/var/log/security/landing-${new Date().toISOString().split('T')[0]}.log`;
      fs.appendFileSync(logFile, JSON.stringify(logEntry) + '\n');
    } catch (error) {
      // Ignore les erreurs de log en production
    }

    // Ajouter aux alertes en mémoire
    if (level === 'CRITICAL' || level === 'WARNING') {
      this.alerts.push({
        ...logEntry,
        id: Date.now().toString()
      });

      // Garder seulement les 100 dernières alertes
      if (this.alerts.length > 100) {
        this.alerts = this.alerts.slice(-100);
      }
    }
  }

  recordRequest(ip, userAgent, url, blocked = false, suspicious = false, attack = false) {
    this.metrics.requests++;
    if (blocked) this.metrics.blocked++;
    if (suspicious) this.metrics.suspicious++;
    if (attack) this.metrics.attacks++;

    if (attack) {
      this.logSecurityEvent('CRITICAL', 'Attack detected', {
        ip, userAgent, url, type: 'attack'
      });
    } else if (suspicious) {
      this.logSecurityEvent('WARNING', 'Suspicious activity', {
        ip, userAgent, url, type: 'suspicious'
      });
    } else if (blocked) {
      this.logSecurityEvent('INFO', 'Request blocked', {
        ip, url, reason: 'security_policy'
      });
    }
  }

  getSecurityStatus() {
    const uptime = Date.now() - this.metrics.uptime;
    const attackRate = this.metrics.attacks / (uptime / 1000 / 3600); // attaques par heure
    const blockRate = (this.metrics.blocked / this.metrics.requests) * 100;
    
    let securityLevel = 'HIGH';
    if (attackRate > 10 || blockRate > 50) {
      securityLevel = 'CRITICAL';
    } else if (attackRate > 5 || blockRate > 20) {
      securityLevel = 'MEDIUM';
    }

    return {
      level: securityLevel,
      uptime: Math.floor(uptime / 1000),
      requests: this.metrics.requests,
      blocked: this.metrics.blocked,
      suspicious: this.metrics.suspicious,
      attacks: this.metrics.attacks,
      attack_rate_per_hour: attackRate.toFixed(2),
      block_percentage: blockRate.toFixed(2),
      recent_alerts: this.alerts.slice(-10),
      timestamp: new Date().toISOString()
    };
  }

  startMetricsCollection() {
    // Collecte de métriques toutes les 60 secondes
    setInterval(() => {
      const status = this.getSecurityStatus();
      
      if (status.level === 'CRITICAL') {
        this.logSecurityEvent('CRITICAL', 'Security level critical', {
          attack_rate: status.attack_rate_per_hour,
          block_rate: status.block_percentage
        });
      }
      
      // Log de status toutes les 10 minutes
      if (Date.now() % 600000 < 60000) {
        this.logSecurityEvent('INFO', 'Security status report', status);
      }
    }, 60000);
  }

  // Middleware d'intégration
  getMiddleware() {
    return (req, res, next) => {
      const startTime = Date.now();
      const ip = req.ip || req.connection.remoteAddress;
      const userAgent = req.headers['user-agent'] || '';
      
      // Hook sur la réponse pour logger le résultat
      const originalEnd = res.end;
      res.end = (...args) => {
        const responseTime = Date.now() - startTime;
        const blocked = res.statusCode === 403 || res.statusCode === 429;
        const suspicious = res.statusCode === 404 && req.url.includes('..');
        const attack = res.getHeader('X-Attack-Detected') === 'true';
        
        this.recordRequest(ip, userAgent, req.url, blocked, suspicious, attack);
        
        // Log des réponses lentes (potentielle attaque DoS)
        if (responseTime > 5000) {
          this.logSecurityEvent('WARNING', 'Slow response detected', {
            ip, url: req.url, response_time: responseTime
          });
        }
        
        originalEnd.apply(res, args);
      };
      
      next();
    };
  }
}

// Instance globale
export const securityMonitor = new SecurityMonitor();

// Endpoint pour le dashboard de sécurité
export const securityDashboard = (req, res) => {
  const userAgent = req.headers['user-agent'] || '';
  
  // Accès restreint au dashboard
  if (!userAgent.includes('Admin') && !req.headers['x-admin-token']) {
    return res.status(403).json({ error: 'Access denied' });
  }
  
  const status = securityMonitor.getSecurityStatus();
  
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-cache');
  
  res.json({
    security_dashboard: status,
    configuration: {
      csp_enforced: process.env.CSP_ENFORCED === 'true',
      bot_protection: process.env.BOT_PROTECTION === 'true',
      rate_limit_enabled: process.env.RATE_LIMIT_ENABLED === 'true',
      security_level: process.env.SECURITY_LEVEL
    },
    version: '1.0.0'
  });
};

export default securityMonitor;