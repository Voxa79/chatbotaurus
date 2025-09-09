import React from 'react';
import { motion } from "framer-motion";
import { LocalAIHeader } from '../components/LocalAIHeader';
import { LocalAIFooter } from '../components/LocalAIFooter';
import { UrgentSupportSection } from '../components/UrgentSupportSection';

/**
 * Template de base pour toutes les nouvelles pages du site
 * Ce template inclut automatiquement la section UrgentSupportSection
 * 
 * Utilisation:
 * 1. Copier ce fichier
 * 2. Renommer selon la nouvelle page (ex: NewFeaturePage.jsx)
 * 3. Modifier le nom de l'export
 * 4. Ajouter le contenu spécifique de la page entre LocalAIHeader et UrgentSupportSection
 */
export const PageTemplate = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-custom-dark dark:to-custom-darker">
      <LocalAIHeader />
      
      {/* Section Hero */}
      <motion.section
        className="pt-20 pb-16 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Titre de la Page
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Description de la page qui explique son contenu et ses objectifs.
          </motion.p>
        </div>
      </motion.section>

      {/* Section Contenu Principal */}
      <motion.section
        className="py-16 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Ajouter le contenu spécifique de la page ici */}
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p>Contenu de la page à développer...</p>
          </div>
        </div>
      </motion.section>

      {/* Section Support Urgente - OBLIGATOIRE sur toutes les pages */}
      <UrgentSupportSection />
      
      <LocalAIFooter />
    </div>
  );
};