import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Configuration de production avec sécurité maximale
export default defineConfig({
  plugins: [react()],
  
  // Configuration du serveur de production
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
    https: process.env.HTTPS === 'true' ? {
      // En production, utiliser des certificats SSL réels
      cert: process.env.SSL_CERT_PATH,
      key: process.env.SSL_KEY_PATH,
    } : false,
    
    // Headers de sécurité pour la production
    headers: {
      // Headers de sécurité de base
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      
      // HSTS - Force HTTPS pendant 2 ans
      'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
      
      // Permissions Policy - Restreindre les APIs dangereuses
      'Permissions-Policy': [
        'camera=()',
        'microphone=()',
        'geolocation=()',
        'payment=()',
        'usb=()',
        'magnetometer=()',
        'accelerometer=()',
        'gyroscope=()',
        'bluetooth=()',
        'ambient-light-sensor=()',
        'autoplay=(self)',
        'fullscreen=(self)'
      ].join(', '),
      
      // CSP de production strict
      'Content-Security-Policy': [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline'", // Nécessaire pour React en prod
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "font-src 'self' https://fonts.gstatic.com data:",
        "img-src 'self' data: https: blob:",
        "media-src 'self' data:",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
        "frame-ancestors 'none'",
        "connect-src 'self' https: wss: ws:",
        "worker-src 'self' blob:",
        "manifest-src 'self'",
        "upgrade-insecure-requests"
      ].join('; '),
      
      // Headers additionnels de sécurité
      'X-Robots-Tag': 'index, follow',
      'X-DNS-Prefetch-Control': 'off',
      'X-Download-Options': 'noopen',
      'X-Permitted-Cross-Domain-Policies': 'none',
      
      // Cache sécurisé
      'Cache-Control': 'public, max-age=31536000, immutable',
      'Vary': 'Accept-Encoding, Accept',
      
      // CORS strict
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Resource-Policy': 'same-origin'
    }
  },
  
  // Résolution des modules
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  
  // Configuration de build pour production sécurisée
  build: {
    // Pas de source maps en production
    sourcemap: false,
    
    // Minification agressive
    minify: 'terser',
    terserOptions: {
      compress: {
        // Supprimer tous les console.log en production
        drop_console: true,
        drop_debugger: true,
        // Optimisations de sécurité
        pure_funcs: ['console.log', 'console.warn', 'console.info'],
        // Supprimer les commentaires
        drop_comments: true
      },
      mangle: {
        // Obfusquer les noms de variables
        toplevel: true,
        // Garder les noms de fonctions pour le debugging si nécessaire
        keep_fnames: false
      },
      format: {
        // Supprimer tous les commentaires
        comments: false
      }
    },
    
    // Configuration des chunks pour la sécurité
    rollupOptions: {
      output: {
        // Noms de fichiers obfusqués
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
        
        // Séparer les vendor chunks pour la sécurité
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['framer-motion', 'lucide-react']
        }
      }
    },
    
    // Optimisations de performance et sécurité
    target: 'esnext',
    cssCodeSplit: true,
    
    // Limite de taille pour éviter les gros bundles
    chunkSizeWarningLimit: 1000,
    
    // Préload des modules critiques
    modulePreload: {
      polyfill: true
    }
  },
  
  // Optimisations des dépendances
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: ['@vite/client', '@vite/env']
  },
  
  // Preview (pour les tests de production)
  preview: {
    port: process.env.PREVIEW_PORT || 4173,
    host: '0.0.0.0',
    https: process.env.HTTPS === 'true',
    headers: {
      // Mêmes headers que le serveur de production
      'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'Referrer-Policy': 'strict-origin-when-cross-origin'
    }
  }
})