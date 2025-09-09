import React from 'react';
import { Link } from 'react-router-dom';
import { sanitizeUrl } from '../utils/security';

/**
 * Composant Link sécurisé qui valide les URLs avant navigation
 */
export const SecureLink = ({ 
  to, 
  children, 
  className, 
  onClick,
  replace = false,
  target,
  ...props 
}) => {
  // Validation et nettoyage de l'URL
  const handleClick = (e) => {
    // Valider l'URL
    const sanitizedUrl = sanitizeUrl(to);
    
    // Si l'URL a été modifiée pour des raisons de sécurité
    if (sanitizedUrl !== to) {
      console.warn(`🔒 URL sécurisée: ${to} -> ${sanitizedUrl}`);
    }
    
    // Si l'URL est complètement bloquée (redirigée vers /)
    if (sanitizedUrl === '/' && to !== '/') {
      e.preventDefault();
      console.error('🚨 Navigation bloquée vers URL dangereuse:', to);
      return false;
    }
    
    // Vérifier les liens externes
    if (target === '_blank' && !to.startsWith('/') && !to.startsWith('#')) {
      // Pour les liens externes, ajouter les attributs de sécurité
      const link = e.currentTarget;
      link.rel = 'noopener noreferrer';
    }
    
    // Appeler le onClick personnalisé si fourni
    if (onClick) {
      onClick(e);
    }
  };
  
  // Déterminer si c'est un lien externe
  const isExternal = to && (to.startsWith('http') || to.startsWith('//'));
  
  if (isExternal) {
    // Pour les liens externes, utiliser une balise a avec sécurité renforcée
    return (
      <a
        href={sanitizeUrl(to)}
        className={className}
        onClick={handleClick}
        target={target || '_blank'}
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }
  
  // Pour les liens internes, utiliser React Router Link
  return (
    <Link
      to={sanitizeUrl(to)}
      className={className}
      onClick={handleClick}
      replace={replace}
      {...props}
    >
      {children}
    </Link>
  );
};

/**
 * Hook pour une navigation sécurisée programmatique
 */
export const useSecureNavigation = () => {
  const navigate = React.useCallback((to, options = {}) => {
    const sanitizedUrl = sanitizeUrl(to);
    
    if (sanitizedUrl !== to) {
      console.warn(`🔒 Navigation sécurisée: ${to} -> ${sanitizedUrl}`);
    }
    
    if (sanitizedUrl === '/' && to !== '/') {
      console.error('🚨 Navigation bloquée vers URL dangereuse:', to);
      return;
    }
    
    // Utiliser l'historique du navigateur de manière sécurisée
    if (options.replace) {
      window.history.replaceState(null, '', sanitizedUrl);
    } else {
      window.history.pushState(null, '', sanitizedUrl);
    }
    
    // Déclencher l'événement de changement d'URL pour React Router
    window.dispatchEvent(new PopStateEvent('popstate'));
  }, []);
  
  return navigate;
};

/**
 * Composant pour afficher des liens de manière sécurisée
 */
export const SecureExternalLink = ({ href, children, className, ...props }) => {
  const handleClick = (e) => {
    // Validation de l'URL externe
    if (!href || (!href.startsWith('https://') && !href.startsWith('http://'))) {
      e.preventDefault();
      console.error('🚨 Lien externe non sécurisé bloqué:', href);
      return;
    }
    
    // Vérifier les domaines autorisés (whitelist)
    const allowedDomains = [
      'github.com',
      'docs.anthropic.com',
      'supabase.com',
      'docker.com',
      'ollama.com',
      'n8n.io',
      'qdrant.tech',
      'neo4j.com',
      'langfuse.com'
    ];
    
    try {
      const url = new URL(href);
      const isAllowed = allowedDomains.some(domain => 
        url.hostname === domain || url.hostname.endsWith('.' + domain)
      );
      
      if (!isAllowed) {
        const userConfirmed = window.confirm(
          `Vous êtes sur le point de quitter le site vers: ${url.hostname}\n\nContinuer ?`
        );
        
        if (!userConfirmed) {
          e.preventDefault();
          return;
        }
      }
    } catch (error) {
      e.preventDefault();
      console.error('🚨 URL externe invalide:', href);
      return;
    }
  };
  
  return (
    <a
      href={href}
      className={className}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
      {/* Indicateur visuel pour les liens externes */}
      <span className="inline-block ml-1 text-xs opacity-60" title="Lien externe">
        ↗
      </span>
    </a>
  );
};