#!/usr/bin/env node

import { spawn, exec } from 'child_process';
import { promises as fs } from 'fs';
import path from 'path';
import crypto from 'crypto';

/**
 * Script de déploiement sécurisé
 * Vérifie la sécurité avant déploiement et configure l'environnement de production
 */

const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  reset: '\x1b[0m',
  bright: '\x1b[1m'
};

console.log(`${colors.bright}${colors.blue}🚀 DÉPLOIEMENT SÉCURISÉ - Local AI Landing${colors.reset}\n`);

// Configuration de déploiement
const deployConfig = {
  buildDir: 'dist',
  backupDir: 'backups',
  maxBackups: 5,
  requiredEnvVars: [
    'NODE_ENV',
    'PORT',
    'HTTPS'
  ],
  securityChecks: true,
  compressionLevel: 9
};

// 1. Vérifications pré-déploiement
async function preDeploymentChecks() {
  console.log(`${colors.yellow}🔍 Vérifications pré-déploiement...${colors.reset}`);
  
  const checks = [];
  
  // Vérifier que nous sommes en mode production
  if (process.env.NODE_ENV !== 'production') {
    checks.push('NODE_ENV doit être défini à "production"');
  }
  
  // Vérifier les variables d'environnement requises
  for (const envVar of deployConfig.requiredEnvVars) {
    if (!process.env[envVar]) {
      checks.push(`Variable d'environnement manquante: ${envVar}`);
    }
  }
  
  // Vérifier l'existence des fichiers de configuration sécurisés
  const requiredFiles = [
    'vite.config.prod.js',
    'middleware/security.js',
    'src/utils/security.js'
  ];
  
  for (const file of requiredFiles) {
    try {
      await fs.access(file);
    } catch (error) {
      checks.push(`Fichier requis manquant: ${file}`);
    }
  }
  
  if (checks.length > 0) {
    console.log(`${colors.red}❌ Échecs de vérification:${colors.reset}`);
    checks.forEach(check => console.log(`   ${colors.red}• ${check}${colors.reset}`));
    throw new Error('Vérifications pré-déploiement échouées');
  }
  
  console.log(`${colors.green}✅ Toutes les vérifications pré-déploiement réussies${colors.reset}`);
}

// 2. Audit de sécurité rapide
async function quickSecurityAudit() {
  console.log(`\n${colors.yellow}🛡️  Audit de sécurité rapide...${colors.reset}`);
  
  return new Promise((resolve, reject) => {
    exec('npm audit --audit-level high', (error, stdout, stderr) => {
      if (error && error.code > 0) {
        console.log(`${colors.red}⚠️  Vulnérabilités de sécurité détectées${colors.reset}`);
        console.log(`${colors.yellow}Exécutez 'npm audit fix' avant le déploiement${colors.reset}`);
        reject(new Error('Vulnérabilités de sécurité détectées'));
      } else {
        console.log(`${colors.green}✅ Audit de sécurité passé${colors.reset}`);
        resolve();
      }
    });
  });
}

// 3. Sauvegarde de l'ancien déploiement
async function createBackup() {
  console.log(`\n${colors.yellow}💾 Création de la sauvegarde...${colors.reset}`);
  
  try {
    // Créer le répertoire de sauvegarde s'il n'existe pas
    await fs.mkdir(deployConfig.backupDir, { recursive: true });
    
    // Générer un nom de sauvegarde avec timestamp
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupName = `backup-${timestamp}`;
    const backupPath = path.join(deployConfig.backupDir, backupName);
    
    // Vérifier si le répertoire de build existe
    try {
      await fs.access(deployConfig.buildDir);
      
      // Copier le répertoire de build actuel
      await fs.cp(deployConfig.buildDir, backupPath, { recursive: true });
      
      console.log(`${colors.green}✅ Sauvegarde créée: ${backupPath}${colors.reset}`);
      
      // Nettoyer les anciennes sauvegardes
      await cleanOldBackups();
      
    } catch (error) {
      console.log(`${colors.yellow}⚠️  Pas de build précédent à sauvegarder${colors.reset}`);
    }
    
  } catch (error) {
    console.log(`${colors.red}❌ Erreur lors de la sauvegarde: ${error.message}${colors.reset}`);
    throw error;
  }
}

// 4. Nettoyer les anciennes sauvegardes
async function cleanOldBackups() {
  try {
    const backups = await fs.readdir(deployConfig.backupDir);
    const backupDirs = [];
    
    for (const backup of backups) {
      const backupPath = path.join(deployConfig.backupDir, backup);
      const stats = await fs.stat(backupPath);
      if (stats.isDirectory() && backup.startsWith('backup-')) {
        backupDirs.push({ name: backup, path: backupPath, time: stats.mtime });
      }
    }
    
    // Trier par date (plus récent en premier)
    backupDirs.sort((a, b) => b.time - a.time);
    
    // Supprimer les anciennes sauvegardes si nécessaire
    if (backupDirs.length > deployConfig.maxBackups) {
      const toDelete = backupDirs.slice(deployConfig.maxBackups);
      
      for (const backup of toDelete) {
        await fs.rm(backup.path, { recursive: true, force: true });
        console.log(`${colors.cyan}🗑️  Ancienne sauvegarde supprimée: ${backup.name}${colors.reset}`);
      }
    }
    
  } catch (error) {
    console.log(`${colors.yellow}⚠️  Erreur lors du nettoyage des sauvegardes: ${error.message}${colors.reset}`);
  }
}

// 5. Build de production sécurisé
async function secureBuild() {
  console.log(`\n${colors.yellow}🔨 Build de production sécurisé...${colors.reset}`);
  
  return new Promise((resolve, reject) => {
    // Utiliser la configuration de production sécurisée
    const buildProcess = spawn('npm', ['run', 'build'], {
      stdio: 'inherit',
      env: {
        ...process.env,
        NODE_ENV: 'production',
        VITE_CONFIG: 'vite.config.prod.js'
      }
    });
    
    buildProcess.on('close', (code) => {
      if (code === 0) {
        console.log(`${colors.green}✅ Build de production terminé avec succès${colors.reset}`);
        resolve();
      } else {
        reject(new Error(`Build échoué avec le code ${code}`));
      }
    });
    
    buildProcess.on('error', (error) => {
      reject(error);
    });
  });
}

// 6. Optimisations post-build
async function postBuildOptimizations() {
  console.log(`\n${colors.yellow}⚡ Optimisations post-build...${colors.reset}`);
  
  try {
    const buildPath = deployConfig.buildDir;
    
    // Vérifier que le build existe
    await fs.access(buildPath);
    
    // Créer les fichiers de sécurité additionnels
    await createSecurityFiles(buildPath);
    
    // Créer un fichier de version
    await createVersionFile(buildPath);
    
    // Optimiser les permissions des fichiers
    await optimizeFilePermissions(buildPath);
    
    console.log(`${colors.green}✅ Optimisations post-build terminées${colors.reset}`);
    
  } catch (error) {
    console.log(`${colors.red}❌ Erreur lors des optimisations: ${error.message}${colors.reset}`);
    throw error;
  }
}

// 7. Créer les fichiers de sécurité
async function createSecurityFiles(buildPath) {
  // Créer robots.txt sécurisé
  const robotsTxt = `User-agent: *
Disallow: /admin
Disallow: /api/
Disallow: /.env
Disallow: /config
Disallow: /src
Disallow: /node_modules
Disallow: /backup
Disallow: /logs

# Security
Disallow: *.log
Disallow: *.env
Disallow: *.config

Sitemap: /sitemap.xml`;

  await fs.writeFile(path.join(buildPath, 'robots.txt'), robotsTxt);
  
  // Créer .htaccess pour Apache (optionnel)
  const htaccess = `# Sécurité maximale
<Files ".env">
    Require all denied
</Files>

<Files "*.log">
    Require all denied
</Files>

# Headers de sécurité
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options nosniff
    Header always set X-Frame-Options DENY
    Header always set X-XSS-Protection "1; mode=block"
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
    Header always set Strict-Transport-Security "max-age=63072000; includeSubDomains; preload"
</IfModule>

# Compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>`;

  await fs.writeFile(path.join(buildPath, '.htaccess'), htaccess);
  
  console.log(`${colors.cyan}📄 Fichiers de sécurité créés${colors.reset}`);
}

// 8. Créer un fichier de version
async function createVersionFile(buildPath) {
  const version = {
    version: process.env.npm_package_version || '1.0.0',
    buildDate: new Date().toISOString(),
    buildHash: crypto.randomBytes(8).toString('hex'),
    nodeEnv: 'production',
    security: {
      httpsEnabled: process.env.HTTPS === 'true',
      hstsEnabled: true,
      cspEnabled: true,
      rateLimitEnabled: true
    }
  };
  
  await fs.writeFile(
    path.join(buildPath, 'version.json'),
    JSON.stringify(version, null, 2)
  );
  
  console.log(`${colors.cyan}📋 Fichier de version créé${colors.reset}`);
}

// 9. Optimiser les permissions des fichiers
async function optimizeFilePermissions(buildPath) {
  // Cette fonction serait plus utile sur des systèmes Unix
  // Pour Windows, nous nous contentons de vérifier l'existence
  try {
    const files = await fs.readdir(buildPath, { recursive: true });
    console.log(`${colors.cyan}🔐 ${files.length} fichiers vérifiés${colors.reset}`);
  } catch (error) {
    console.log(`${colors.yellow}⚠️  Impossible de vérifier les permissions: ${error.message}${colors.reset}`);
  }
}

// 10. Vérifications post-déploiement
async function postDeploymentChecks() {
  console.log(`\n${colors.yellow}🔍 Vérifications post-déploiement...${colors.reset}`);
  
  const buildPath = deployConfig.buildDir;
  
  // Vérifier que les fichiers essentiels sont présents
  const essentialFiles = [
    'index.html',
    'assets',
    'robots.txt',
    'version.json'
  ];
  
  for (const file of essentialFiles) {
    try {
      await fs.access(path.join(buildPath, file));
      console.log(`${colors.green}✅ ${file}${colors.reset}`);
    } catch (error) {
      throw new Error(`Fichier essentiel manquant: ${file}`);
    }
  }
  
  // Vérifier la taille du build
  const stats = await fs.stat(buildPath);
  console.log(`${colors.cyan}📊 Build généré avec succès${colors.reset}`);
}

// Script principal de déploiement
async function deploy() {
  const startTime = Date.now();
  
  try {
    console.log(`${colors.bright}Début du déploiement sécurisé...${colors.reset}\n`);
    
    // Étapes de déploiement
    await preDeploymentChecks();
    
    if (deployConfig.securityChecks) {
      await quickSecurityAudit();
    }
    
    await createBackup();
    await secureBuild();
    await postBuildOptimizations();
    await postDeploymentChecks();
    
    const deployTime = Math.round((Date.now() - startTime) / 1000);
    
    console.log(`\n${colors.bright}${colors.green}🎉 DÉPLOIEMENT RÉUSSI !${colors.reset}`);
    console.log(`${colors.cyan}Temps de déploiement: ${deployTime}s${colors.reset}`);
    console.log(`${colors.cyan}Build disponible dans: ${deployConfig.buildDir}${colors.reset}\n`);
    
    // Instructions de démarrage
    console.log(`${colors.bright}📋 ÉTAPES SUIVANTES:${colors.reset}`);
    console.log(`${colors.yellow}1. Copier le contenu de ${deployConfig.buildDir} vers votre serveur web${colors.reset}`);
    console.log(`${colors.yellow}2. Configurer HTTPS avec vos certificats SSL${colors.reset}`);
    console.log(`${colors.yellow}3. Vérifier que les variables d'environnement sont configurées${colors.reset}`);
    console.log(`${colors.yellow}4. Tester l'application en production${colors.reset}\n`);
    
  } catch (error) {
    console.error(`\n${colors.red}❌ ÉCHEC DU DÉPLOIEMENT${colors.reset}`);
    console.error(`${colors.red}Erreur: ${error.message}${colors.reset}\n`);
    
    // Instructions de récupération
    console.log(`${colors.yellow}🔄 RÉCUPÉRATION:${colors.reset}`);
    console.log(`${colors.yellow}1. Vérifiez les erreurs ci-dessus${colors.reset}`);
    console.log(`${colors.yellow}2. Corrigez les problèmes identifiés${colors.reset}`);
    console.log(`${colors.yellow}3. Relancez le script de déploiement${colors.reset}\n`);
    
    process.exit(1);
  }
}

// Exécution du déploiement
deploy();