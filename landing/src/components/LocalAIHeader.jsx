import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { Shield, Calculator, Network, BookOpen, Phone, Menu, X, Users, MessageCircle } from "lucide-react";
import logoTransparent from '../assets/logo-transparent.png';
// import { useTheme } from '../contexts/ThemeContext'; // Removed - dark mode only

export const LocalAIHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const { theme, toggleTheme } = useTheme(); // Removed - dark mode only

  const navigationItems = [
    {
      name: "Écosystème",
      href: "/ecosystem",
      children: [
        {
          name: "15 Services Intégrés", 
          href: "/ecosystem/services",
          description: "Stack complet auto-hébergé"
        },
        {
          name: "Architecture Technique",
          href: "/ecosystem/architecture", 
          description: "Déploiement et sécurité"
        }
      ]
    },
    {
      name: "Solutions",
      href: "/solutions",
      children: [
        {
          name: "Finance & Conformité",
          href: "/solutions/finance",
          description: "RGPD, ACPR, sécurité maximale"
        },
        {
          name: "Legal & Conseil", 
          href: "/solutions/legal",
          description: "RAG juridique, confidentialité"
        },
        {
          name: "Industrie Manufacturing",
          href: "/solutions/manufacturing", 
          description: "Maintenance, documentation"
        }
      ]
    },
    {
      name: "Expertise",
      href: "/expertise"
    },
    {
      name: "ROI Calculator",
      href: "/roi-calculator"
    },
    {
      name: "Ressources",
      href: "/resources",
      children: [
        {
          name: "Documentation",
          href: "/resources/docs",
          description: "Guides techniques complets"
        },
        {
          name: "Case Studies",
          href: "/resources/case-studies",
          description: "Succès clients chiffrés"
        },
        {
          name: "Webinars",
          href: "/resources/webinars",
          description: "Formations et démos"
        }
      ]
    },
    {
      name: "Contact",
      href: "/contact"
    }
  ];

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 glass backdrop-blur-md bg-gradient-to-b from-white/90 to-white/70 dark:from-custom-dark to-custom-darker border-b border-gray-200/20 dark:border-gray-800/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo avec glow effect Archon */}
          <Link to="/">
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div>
                <img 
                  src={logoTransparent} 
                  alt="Chatbotaurus Logo" 
                  className="w-8 h-8 filter drop-shadow-[0_0_12px_rgba(3,78,100,0.8)]" 
                />
              </div>
              <div className="flex flex-col">
                <motion.span 
                  className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sovereign via-action to-success animate-gradient-x"
                  whileHover={{ scale: 1.02 }}
                >
                  Chatbotaurus
                </motion.span>
                <span className="text-xs text-gray-600 dark:text-custom-gray-400">
                  
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Navigation Desktop - With dropdowns */}
          <nav className="hidden xl:flex space-x-8">
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative group"
              >
                <Link
                  to={item.href}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 dark:text-custom-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 hover:bg-white/10 dark:hover:bg-black/20"
                >
                  <span className="font-medium">{item.name}</span>
                </Link>
                
                {/* Dropdown only on desktop screens */}
                {item.children && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-64 glass-blue rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                  >
                    <div className="p-4 space-y-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="block p-2 rounded hover:bg-white/10 dark:hover:bg-black/20 transition-colors"
                        >
                          <div className="font-medium text-gray-800 dark:text-white">
                            {child.name}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-custom-gray-400">
                            {child.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden xl:flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 text-gray-700 dark:text-custom-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              <Link to="/demo">Démo Live</Link>
            </motion.div>
            
            {/* Support 24/7 Button - Triggers CONVOCORE widget */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                console.log('Support 24/7 button clicked');
                
                // Simple call to CONVOCORE activation
                if (typeof window.activateConvocore === 'function') {
                  window.activateConvocore();
                } else {
                  console.warn('activateConvocore function not available');
                  
                  // Direct call to VG API if available
                  if (window.VG && typeof window.VG.open === 'function') {
                    console.log('Calling VG.open() directly');
                    window.VG.open();
                  } else {
                    alert('Le chat support n\'est pas encore disponible. Veuillez réessayer dans quelques secondes.');
                  }
                }
              }}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-growth to-growth text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 filter drop-shadow-[0_0_12px_rgba(34,197,94,0.6)]"
              aria-label="Support 24/7"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Support 24/7</span>
            </motion.button>
            
            {/* <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-sovereign to-premium text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 filter drop-shadow-[0_0_12px_rgba(59,130,246,0.6)] cursor-pointer"
            >
              <Link to="/roi-calculator" className="block w-full h-full flex items-center justify-center">
                Calculer ROI
              </Link>
            </motion.div> */}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-2 xl:hidden">
            {/* Theme Toggle Button - Mobile - Removed (dark mode only) */}
            
            <motion.button
              className="p-2 rounded-lg text-gray-700 dark:text-custom-gray-400 hover:bg-white/10 dark:hover:bg-black/20 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Without dropdowns for tablet and mobile */}
      <motion.div
        className="xl:hidden glass border-t border-gray-200/20 dark:border-gray-800/20"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isMenuOpen ? 'auto' : 0,
          opacity: isMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-4 py-6 space-y-6">
          {navigationItems.map((item) => (
            <div key={item.name}>
              <Link
                to={item.href}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 dark:text-custom-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 hover:bg-white/10 dark:hover:bg-black/20 w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="font-medium">{item.name}</span>
              </Link>
              
              {/* Remove dropdowns for tablet and mobile - only show main navigation items */}
            </div>
          ))}
          
          <div className="pt-4 border-t border-gray-200/20 dark:border-gray-800/20">
            <div className="flex flex-col space-y-3">
              <motion.div
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 text-center text-gray-700 dark:text-custom-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors rounded-lg hover:bg-white/10 dark:hover:bg-black/20 cursor-pointer"
              >
                <Link to="/demo" className="block w-full h-full">Démo Live</Link>
              </motion.div>
              
              {/* Support 24/7 Button - Mobile */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  console.log('Support 24/7 button clicked (mobile)');
                  
                  // Simple call to CONVOCORE activation
                  if (typeof window.activateConvocore === 'function') {
                    window.activateConvocore();
                  } else if (window.VG && typeof window.VG.open === 'function') {
                    console.log('Calling VG.open() directly (mobile)');
                    window.VG.open();
                  } else {
                    alert('Le chat support n\'est pas encore disponible. Veuillez réessayer dans quelques secondes.');
                  }
                  
                  setIsMenuOpen(false); // Fermer le menu mobile après clic
                }}
                className="flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-growth to-growth text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                aria-label="Support 24/7"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Support 24/7</span>
              </motion.button>
              {/* <motion.div
                whileTap={{ scale: 0.95 }}
                className="flex-1 px-4 py-2 bg-gradient-to-r from-sovereign to-premium text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <Link to="/roi-calculator" className="block w-full h-full flex items-center justify-center">
                  Calculer ROI
                </Link>
              </motion.div> */}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
};