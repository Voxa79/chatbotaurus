import React from 'react';
import { motion } from "framer-motion";
import { FileText, Download, Search, BookOpen, Code, Server, Shield, Database } from "lucide-react";
import { LocalAIHeader } from '../components/LocalAIHeader';
import { LocalAIFooter } from '../components/LocalAIFooter';
import { UrgentSupportSection } from '../components/UrgentSupportSection';

export const ResourcesDocsPage = () => {
  const documentationSections = [
    {
      title: "Guides de démarrage",
      icon: BookOpen,
      color: "text-sovereign",
      items: [
        {
          title: "Installation rapide (15 min)",
          description: "Déploiement de votre stack Local AI en un quart d'heure",
          level: "Débutant"
        },
        {
          title: "Configuration système requise",
          description: "Spécifications hardware et software minimales",
          level: "Débutant"
        },
        {
          title: "Premiers pas avec l'interface",
          description: "Navigation et fonctionnalités principales",
          level: "Débutant"
        }
      ]
    },
    {
      title: "Documentation technique",
      icon: Code,
      color: "text-success",
      items: [
        {
          title: "Architecture du système",
          description: "Composants et interactions de la stack complète",
          level: "Avancé"
        },
        {
          title: "API Reference complète",
          description: "Documentation détaillée des endpoints et méthodes",
          level: "Intermédiaire"
        },
        {
          title: "Customisation des modèles",
          description: "Adaptation des IA à vos cas d'usage spécifiques",
          level: "Avancé"
        }
      ]
    },
    {
      title: "Infrastructure",
      icon: Server,
      color: "text-premium",
      items: [
        {
          title: "Déploiement Docker Compose",
          description: "Configuration multi-conteneurs pour production",
          level: "Intermédiaire"
        },
        {
          title: "Scaling et performance",
          description: "Optimisation pour des charges élevées",
          level: "Avancé"
        },
        {
          title: "Monitoring et logs",
          description: "Suivi de l'activité et diagnostic",
          level: "Intermédiaire"
        }
      ]
    },
    {
      title: "Sécurité",
      icon: Shield,
      color: "text-success",
      items: [
        {
          title: "Conformité RGPD",
          description: "Protection des données et privacy by design",
          level: "Intermédiaire"
        },
        {
          title: "Authentification et autorisations",
          description: "Gestion des accès utilisateurs et rôles",
          level: "Intermédiaire"
        },
        {
          title: "Audit de sécurité",
          description: "Vérification et renforcement des protections",
          level: "Avancé"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <LocalAIHeader />
      
      <motion.div
        className="min-h-screen pt-24 pb-16 px-4"
        initial="hidden" 
        animate="visible"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h1 
              className="text-4xl font-bold text-gray-800 dark:text-white mb-4 flex items-center justify-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <FileText className="w-10 h-10 text-sovereign filter drop-shadow-[0_0_8px_rgba(254,185,9,0.8)]" />
              Documentation
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Guides techniques complets pour maîtriser votre écosystème Local AI
            </motion.p>
          </div>

          {/* Search Bar */}
          <motion.div
            className="glass rounded-xl p-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher dans la documentation..."
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/50 dark:bg-black/20 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </motion.div>

          {/* Documentation Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {documentationSections.map((section, index) => (
              <motion.div
                key={section.title}
                className="glass rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <div className={`p-6 bg-gradient-to-r ${section.color.replace('text-', 'from-').replace('-500', '-500/20')} to-transparent`}>
                  <div className={`w-10 h-10 ${section.color} mb-3 filter drop-shadow-[0_0_8px_rgba(254,185,9,0.8)]`}>
                    {React.createElement(section.icon, { className: "w-full h-full" })}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                    {section.title}
                  </h2>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4">
                    {section.items.map((item, itemIndex) => (
                      <div 
                        key={itemIndex} 
                        className="p-4 rounded-lg bg-white/10 dark:bg-black/20 hover:bg-white/20 dark:hover:bg-black/30 transition-colors cursor-pointer"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-800 dark:text-white">
                            {item.title}
                          </h3>
                          <Download className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                          {item.description}
                        </p>
                        <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">
                          {item.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Download All Section */}
          <motion.div
            className="glass rounded-xl p-8 mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Télécharger la documentation complète
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Accédez à l'ensemble de la documentation au format PDF pour une consultation hors ligne.
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-sovereign to-premium text-white rounded-lg font-semibold hover:from-sovereign-600 hover:to-premium-600 transition-all shadow-lg flex items-center gap-2 mx-auto">
              <Download className="w-5 h-5" />
              Télécharger tout (24.5 MB)
            </button>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Section Support Urgente */}
      <UrgentSupportSection />
      
      <LocalAIFooter />
    </div>
  );
};