import React from 'react';
import { motion } from "framer-motion";
import { Container, Zap, Shield, Cpu, Database, Globe, Network, Server } from "lucide-react";
import { LocalAIHeader } from '../components/LocalAIHeader';
import { LocalAIFooter } from '../components/LocalAIFooter';
import { UrgentSupportSection } from '../components/UrgentSupportSection';

export const ServiceDockerComposePage = () => {
  const features = [
    {
      icon: Container,
      title: "Orchestration",
      description: "Gestion unifiée de tous les services de l'écosystème avec des profils prédéfinis."
    },
    {
      icon: Network,
      title: "Réseaux Sécurisés",
      description: "Mise en place de réseaux internes entre conteneurs pour une communication sécurisée."
    },
    {
      icon: Shield,
      title: "Persistance des Données",
      description: "Volumes partagés pour conserver les données même après redémarrage."
    },
    {
      icon: Cpu,
      title: "Configuration Centralisée",
      description: "Gestion centralisée de l'environnement via des fichiers .env."
    }
  ];

  const useCases = [
    {
      icon: Server,
      title: "Déploiement Unifié",
      description: "Déploiement de l'ensemble de l'écosystème avec une seule commande."
    },
    {
      icon: Globe,
      title: "Environnements Multiples",
      description: "Gestion de différents environnements (dev, test, prod) avec des profils."
    },
    {
      icon: Database,
      title: "Scaling",
      description: "Montée en charge facile des services selon les besoins."
    },
    {
      icon: Zap,
      title: "Maintenance Simplifiée",
      description: "Mises à jour et gestion des services centralisées."
    }
  ];

  const technicalSpecs = [
    { label: "Orchestration", value: "Docker" },
    { label: "Réseaux", value: "Sécurisés" },
    { label: "Volumes", value: "Persistants" },
    { label: "Configuration", value: "Centralisée" },
    { label: "Profils", value: "Multiples" },
    { label: "Haute Dispo", value: "Swarm" }
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
              <Container className="w-10 h-10 text-success filter drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" />
              Docker Compose - Orchestration
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Outil d'orchestration pour déployer et gérer l'ensemble des services de votre écosystème IA 
              de manière unifiée et cohérente.
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
                <div className="w-12 h-12 text-success mb-4 filter drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]">
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
                  <div className="text-2xl font-bold text-success mb-1">
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
                <Server className="w-6 h-6 text-success" />
                Cas d'Usage
              </h2>
              
              <div className="space-y-6">
                {useCases.map((useCase, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-2 bg-success/10 rounded-lg mt-1">
                      {React.createElement(useCase.icon, { className: "w-5 h-5 text-success" })}
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
                      Scripts d'Automatisation
                    </h3>
                    <div className="px-2 py-1 bg-growth/20 text-success dark:text-success text-xs rounded">
                      Connecté
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                     Gérez le reverse proxy et HTTPS pour tous vos services.
                  </p>
                </div>
                
                <div className="p-4 bg-white/10 dark:bg-black/20 rounded-lg">
                  
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Déployez Docker Compose sur votre infrastructure.
            </p>

                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Gérez le reverse proxy et HTTPS pour tous vos services.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gradient-to-r from-success/20 to-amber-500/20 rounded-lg border border-success/30">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                  Déploiement Auto-hébergé
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Déployez Docker Compose sur votre infrastructure.
                </p>
                <a href="http://localhost:3030/contact" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-success to-amber-500 text-white rounded-lg text-sm font-medium hover:from-success-600 hover:to-amber-600 transition-all text-center">
                  Déployez Docker
                </a>
              </div>
            </motion.div>
          </div>

          {/* CTA Section */}
        </div>
      </motion.div>
      
      {/* Section Support Urgente - OBLIGATOIRE sur toutes les pages */}
      <UrgentSupportSection />
      
      <LocalAIFooter />
    </div>
  );
};