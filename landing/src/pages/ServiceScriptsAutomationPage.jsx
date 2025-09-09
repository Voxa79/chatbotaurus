import React from 'react';
import { motion } from "framer-motion";
import { Cpu, Zap, Shield, Database, Globe, Server, HardDrive } from "lucide-react";
import { LocalAIHeader } from '../components/LocalAIHeader';
import { LocalAIFooter } from '../components/LocalAIFooter';
import { UrgentSupportSection } from '../components/UrgentSupportSection';

export const ServiceScriptsAutomationPage = () => {
  const features = [
    {
      icon: Cpu,
      title: "Détection GPU/CPU",
      description: "Détection automatique du matériel pour une configuration adaptative."
    },
    {
      icon: Zap,
      title: "Configuration Adaptative",
      description: "Adaptation de l'environnement selon les capacités du système."
    },
    {
      icon: Shield,
      title: "Gestion des Profils",
      description: "Gestion intelligente des profils Docker Compose (cpu, gpu-nvidia, gpu-amd)."
    },
    {
      icon: HardDrive,
      title: "Health Checks",
      description: "Vérifications automatiques de l'état des services."
    }
  ];

  const useCases = [
    {
      icon: Server,
      title: "Déploiement Simplifié",
      description: "Déploiement de l'écosystème avec une seule commande."
    },
    {
      icon: Globe,
      title: "Configuration Dynamique",
      description: "Adaptation automatique aux ressources disponibles."
    },
    {
      icon: Database,
      title: "Maintenance Automatisée",
      description: "Mises à jour et vérifications automatisées."
    },
    {
      icon: Cpu,
      title: "Optimisation Ressources",
      description: "Utilisation optimale des ressources système."
    }
  ];

  const technicalSpecs = [
    { label: "Détection", value: "Auto GPU/CPU" },
    { label: "Configuration", value: "Adaptative" },
    { label: "Profils", value: "Gérés" },
    { label: "Health Checks", value: "Automatiques" },
    { label: "Langage", value: "Python" },
    { label: "Haute Dispo", value: "Script" }
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
              <Cpu className="w-10 h-10 text-action filter drop-shadow-[0_0_8px_rgba(244,63,94,0.8)]" />
              Scripts d'Automatisation
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Scripts d'automatisation pour la détection du matériel, la configuration adaptative 
              et la gestion des profils Docker Compose.
            </motion.p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="glass rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="w-12 h-12 text-action mb-4 filter drop-shadow-[0_0_8px_rgba(244,63,94,0.8)]">
                  {React.createElement(feature.icon, { className: "w-full h-full" })}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Technical Specifications */}
          <motion.div
            className="glass rounded-xl p-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
              Spécifications Techniques
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {technicalSpecs.map((spec, index) => (
                <div 
                  key={index} 
                  className="text-center p-4 bg-white/10 dark:bg-black/20 rounded-lg"
                >
                  <div className="text-2xl font-bold text-action mb-1">
                    {spec.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {spec.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Use Cases */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <motion.div
              className="glass rounded-xl p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                <Server className="w-6 h-6 text-action" />
                Cas d'Usage
              </h2>
              
              <div className="space-y-6">
                {useCases.map((useCase, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-2 bg-action/10 rounded-lg mt-1">
                      {React.createElement(useCase.icon, { className: "w-5 h-5 text-action" })}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white">
                        {useCase.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {useCase.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="glass rounded-xl p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Intégrations
              </h2>
              
              <div className="space-y-4">
                <div className="p-4 bg-white/10 dark:bg-black/20 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-800 dark:text-white">
                      Docker Compose
                    </h3>
                    <div className="px-2 py-1 bg-growth/20 text-success dark:text-success text-xs rounded">
                      Connecté
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Gérez les profils Docker Compose selon le matériel détecté.
                  </p>
                </div>
                
                <div className="p-4 bg-white/10 dark:bg-black/20 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-800 dark:text-white">
                      Caddy
                    </h3>
                    <div className="px-2 py-1 bg-growth/20 text-success dark:text-success text-xs rounded">
                      Connecté
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Configurez automatiquement Caddy selon l'environnement.
                  </p>
                </div>
                
                <div className="p-4 bg-white/10 dark:bg-black/20 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-800 dark:text-white">
                      Tous les Services
                    </h3>
                    <div className="px-2 py-1 bg-growth/20 text-success dark:text-success text-xs rounded">
                      Connecté
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Adaptez la configuration de tous les services selon les ressources.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gradient-to-r from-action/20 to-action/20 rounded-lg border border-action/30">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                  Déploiement Auto-hébergé
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Exécutez les scripts d'automatisation sur votre infrastructure.
                </p>
                <a href="http://localhost:3030/documentation" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-action to-action text-white rounded-lg text-sm font-medium hover:from-action-600 hover:to-action-600 transition-all text-center">
                  Documentation
                </a>
              </div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            className="glass-rose rounded-xl p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Prêt à automatiser votre déploiement ?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Intégrez les scripts d'automatisation à votre écosystème IA pour un déploiement simplifié.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="http://localhost:3030/contact" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gradient-to-r from-action to-action text-white rounded-lg font-semibold hover:from-action-600 hover:to-action-600 transition-all shadow-lg text-center">
                Intégrer vos scripts
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Section Support Urgente - OBLIGATOIRE sur toutes les pages */}
      <UrgentSupportSection />
      
      <LocalAIFooter />
    </div>
  );
};