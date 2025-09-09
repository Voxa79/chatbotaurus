import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Clock, Headphones } from 'lucide-react';

export const UrgentSupportSection = () => {
  return (
    <motion.section
      className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-custom-darker dark:to-custom-dark"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon principale */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
        >
          <div className="p-4 bg-gradient-to-r from-growth to-growth rounded-full shadow-lg">
            <Headphones className="w-8 h-8 text-white" />
          </div>
        </motion.div>

        {/* Titre */}
        <motion.h2
          className="text-3xl font-bold text-gray-800 dark:text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          Besoin d'une réponse immédiate ?
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          Notre assistant IA Local AI est disponible 24/7 pour répondre instantanément à vos questions techniques, 
          vous guider dans l'implémentation de votre projet ou vous aider à résoudre vos problèmes.
        </motion.p>

        {/* Boutons d'action */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          {/* Bouton Support 24/7 principal */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              console.log('Urgent support button clicked');
              if (typeof window.activateConvocore === 'function') {
                window.activateConvocore();
              } else if (window.VG && typeof window.VG.open === 'function') {
                window.VG.open();
              } else {
                alert('Le chat support n\'est pas encore disponible. Veuillez réessayer dans quelques secondes.');
              }
            }}
            className="flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-growth to-growth text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 filter drop-shadow-[0_0_12px_rgba(34,197,94,0.6)]"
            aria-label="Support urgente 24/7"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Assistant IA 24/7</span>
            <Clock className="w-4 h-4" />
          </motion.button>

          {/* Informations complémentaires */}
          <motion.div
            className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div className="w-2 h-2 bg-growth rounded-full animate-pulse"></div>
            <span>IA disponible maintenant</span>
          </motion.div>
        </motion.div>

        {/* Badges de confiance */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mt-8 pt-8 border-t border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <div className="w-3 h-3 bg-sovereign rounded-full"></div>
            <span>Réponse instantanée</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <div className="w-3 h-3 bg-premium rounded-full"></div>
            <span>IA spécialisée Local AI</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <div className="w-3 h-3 bg-growth rounded-full"></div>
            <span>Toujours disponible</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};