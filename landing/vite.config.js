import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Import des modules de sécurité
import { securityMonitor } from './src/security-monitor.js';
import { healthHandler } from './src/health.js';
import botProtection from './src/bot-protection.js';

// Plugin de sécurité intégré maximum
const securityPlugin = () => {
  return {
    name: 'europa-security-10',
    configureServer(server) {
      // Démarrer les systèmes de sécurité
      botProtection.startCleanup();
      
      // Endpoint health check sécurisé
      server.middlewares.use('/health', healthHandler);
      
      // Endpoint dashboard sécurité (admin uniquement)
      server.middlewares.use('/security/dashboard', (req, res) => {
        const userAgent = req.headers['user-agent'] || '';
        if (!userAgent.includes('Admin')) {
          res.statusCode = 403;
          res.end(JSON.stringify({error: 'Access denied'}));
          return;
        }
        
        const stats = {
          security: securityMonitor.getSecurityStatus(),
          bot_protection: botProtection.getStats(),
          timestamp: new Date().toISOString()
        };
        
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(stats, null, 2));
      });
      
      // Endpoint vérification bot
      server.middlewares.use('/api/verify-human', botProtection.getVerificationEndpoint());
      
      // Monitoring de sécurité global
      server.middlewares.use(securityMonitor.getMiddleware());
      
      // Protection anti-bot
      server.middlewares.use(botProtection.getProtectionMiddleware());
      
      // Middlewares de sécurité spécialisés
      server.middlewares.use('/api', (req, res, next) => {
        res.setHeader('X-RateLimit-Limit', '30');
        res.setHeader('X-API-Security', 'maximum');
        res.setHeader('X-Europa-API', '10.0');
        next();
      });
      
      // Protection globale renforcée
      server.middlewares.use((req, res, next) => {
        const clientIP = req.socket.remoteAddress;
        const userAgent = req.headers['user-agent'] || '';
        const url = req.url;
        
        // Détection avancée d'attaques
        const attackPatterns = [
          /(\.\.|\/etc\/|\/var\/|\/usr\/|\/proc\/)/i, // Path traversal
          /(union|select|insert|delete|drop|exec)/i, // SQL injection
          /<script|javascript:|vbscript:/i, // XSS
          /(curl|wget|python|perl|ruby)/i, // Command line tools
          /(\${|<%|{{)/i // Template injection
        ];
        
        const isAttack = attackPatterns.some(pattern => 
          pattern.test(url) || pattern.test(userAgent)
        );
        
        if (isAttack) {
          res.setHeader('X-Attack-Detected', 'true');
          res.statusCode = 403;
          res.end(JSON.stringify({
            error: 'Security Violation',
            code: 'ATTACK_DETECTED',
            message: 'Malicious request blocked'
          }));
          return;
        }
        
        // Autoriser tous les assets de développement Vite
        const allowedPaths = [
          '/src/',            // Tous les fichiers source
          '/assets/',         // Assets buildés
          '/static/',         // Assets statiques
          '/@vite/',          // Modules Vite dev
          '/@fs/',            // Filesystem Vite dev
          '/node_modules/',   // Toutes les dépendances npm
          '/favicon.ico',     // Favicon
          '/__vite_ping'      // Vite health check
        ];
        
        // Vérifier si c'est un asset autorisé
        const isAllowedAsset = allowedPaths.some(path => url.startsWith(path)) ||
                              url.match(/\.(js|jsx|ts|tsx|css|scss|sass|less|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot|json|mjs|cjs)$/);
        
        // Ne bloquer que les fichiers vraiment sensibles
        const sensitiveFiles = [
          '/.env',
          '/.git/',
          '/docker-compose',
          '/Dockerfile',
          '/.vscode/',
          '/.idea/',
          '/backup/',
          '/logs/'
        ];
        
        const isSensitive = sensitiveFiles.some(path => url.startsWith(path));
        
        if (isSensitive) {
          res.statusCode = 403;
          res.end(JSON.stringify({
            error: 'Access Forbidden',
            code: 'SENSITIVE_PATH_BLOCKED'
          }));
          return;
        }
        
        // Headers sécurité obligatoires sur chaque réponse
        res.setHeader('X-Frame-Options', 'DENY');
        res.setHeader('X-Content-Type-Options', 'nosniff');
        res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
        res.setHeader('X-XSS-Protection', '1; mode=block');
        res.setHeader('X-Europa-Security', '10.0');
        res.setHeader('X-Security-Scan', 'protected');
        
        next();
      });
    }
  };
};

// Configuration CSP différentiée dev/prod avec CDN autorisés
const getCSP = () => {
  const isProd = process.env.NODE_ENV === 'production';
  
  // CDN et domaines de confiance
  const trustedCDNs = [
    'https://vg-bunny-cdn.b-cdn.net',
    'https://js.stripe.com',
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://cdn.jsdelivr.net',
    'https://unpkg.com'
  ];
  
  const cdnList = trustedCDNs.join(' ');
  
  if (isProd) {
    return `default-src 'self'; script-src 'self' 'unsafe-inline' ${cdnList}; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com ${cdnList}; img-src 'self' data: https: ${cdnList}; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' ${cdnList}; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests`;
  } else {
    // CSP développement permettant les CDN mais sécurisée
    return `default-src 'self' 'unsafe-inline' 'unsafe-eval' data: blob: ws: wss: ${cdnList}; script-src 'self' 'unsafe-inline' 'unsafe-eval' ${cdnList}; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com ${cdnList}; img-src * data: blob:; font-src * data: https://fonts.gstatic.com; connect-src * ws: wss:; frame-src 'self'; object-src 'none'`;
  }
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), securityPlugin()],
  server: {
    host: '0.0.0.0',
    port: 3030,
    // Headers de sécurité next-gen
    headers: {
      // Core Security Headers
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      
      // Permissions Policy next-gen
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=(self "https://js.stripe.com"), usb=(), magnetometer=(), accelerometer=(), gyroscope=(), bluetooth=(), fullscreen=(self), autoplay=()',
      
      // CSP dynamique
      'Content-Security-Policy': getCSP(),
      
      // Headers Cross-Origin adaptés pour le développement
      'Cross-Origin-Embedder-Policy': process.env.NODE_ENV === 'production' ? 'require-corp' : 'unsafe-none',
      'Cross-Origin-Opener-Policy': process.env.NODE_ENV === 'production' ? 'same-origin' : 'unsafe-none',
      'Cross-Origin-Resource-Policy': process.env.NODE_ENV === 'production' ? 'same-origin' : 'cross-origin',
      
      // Cache sécurisé
      'Cache-Control': process.env.NODE_ENV === 'production' ? 'public, max-age=31536000, immutable' : 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      
      // Identification serveur masquée
      'Server': 'Europa-Secure/1.0',
      'X-Powered-By': 'Next-Gen Security'
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // Configuration pour la production
  build: {
    // Désactiver les source maps en prod pour éviter l'exposition du code
    sourcemap: process.env.NODE_ENV === 'development',
    // Minification pour obfusquer le code
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: process.env.NODE_ENV === 'production',
        drop_debugger: true
      }
    }
  }
})