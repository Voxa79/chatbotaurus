import React from 'react';
import { motion } from "framer-motion";
import { Brain, Zap, Shield, Cpu, Database, Globe, GitBranch, Server } from "lucide-react";
import { LocalAIHeader } from '../components/LocalAIHeader';
import { LocalAIFooter } from '../components/LocalAIFooter';
import { UrgentSupportSection } from '../components/UrgentSupportSection';

export const ServiceOllamaPage = () => {
  const features = [
    {
      icon: Brain,
      title: "LLM Local",
      description: "Exécution de modèles d'intelligence artificielle localement sans frais de token."
    },
    {
      icon: Zap,
      title: "Haute Performance",
      description: "Inférence rapide avec optimisation GPU/CPU pour des réponses instantanées."
    },
    {
      icon: Shield,
      title: "Confidentialité Maximale",
      description: "Vos données ne quittent jamais votre infrastructure."
    },
    {
      icon: Cpu,
      title: "Personnalisation",
      description: "Adaptez les modèles à vos cas d'usage spécifiques."
    }
  ];

  const useCases = [
    {
      icon: Globe,
      title: "Chat Assistant",
      description: "Interface conversationnelle pour l'assistance et le support."
    },
    {
      icon: Database,
      title: "Analyse Documentaire",
      description: "Extraction d'informations et synthèse de documents complexes."
    },
    {
      icon: GitBranch,
      title: "Génération de Code",
      description: "Assistance au développement avec génération de code intelligente."
    },
    {
      icon: Server,
      title: "Intégration API",
      description: "Déploiement de modèles via des endpoints RESTful."
    }
  ];

  const technicalSpecs = [
    { label: "Modèles Supportés", value: "50+" },
    { label: "Formats", value: "GGUF" },
    { label: "Accélération", value: "GPU/CPU" },
    { label: "API", value: "REST" },
    { label: "Conteneurs", value: "Docker" },
    { label: "Licence", value: "MIT" }
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
              <Brain className="w-10 h-10 text-success filter drop-shadow-[0_0_8px_rgba(254,185,9,0.8)]" />
              Ollama - LLM Local
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Plateforme d'exécution de grands modèles linguistiques localement, sans frais de token 
              et avec une confidentialité maximale.
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
                <div className="w-12 h-12 text-success mb-4 filter drop-shadow-[0_0_8px_rgba(254,185,9,0.8)]">
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
                <Globe className="w-6 h-6 text-success" />
                Cas d'Usage
              </h2>
              
              <div className="space-y-6">
                {useCases.map((useCase, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-2 bg-premium/10 rounded-lg mt-1">
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
                      Open WebUI
                    </h3>
                    <div className="px-2 py-1 bg-growth/20 text-success dark:text-success text-xs rounded">
                      Connecté
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Interface chat pour interagir avec vos modèles locaux.
                  </p>
                </div>
                
                <div className="p-4 bg-white/10 dark:bg-black/20 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-800 dark:text-white">
                      N8N
                    </h3>
                    <div className="px-2 py-1 bg-growth/20 text-success dark:text-success text-xs rounded">
                      Connecté
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Automatisation des workflows avec des modèles LLM.
                  </p>
                </div>
                
                <div className="p-4 bg-white/10 dark:bg-black/20 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-800 dark:text-white">
                      Flowise
                    </h3>
                    <div className="px-2 py-1 bg-growth/20 text-success dark:text-success text-xs rounded">
                      Connecté
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Création d'agents conversationnels avec des modèles locaux.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gradient-to-r from-premium/20 to-sovereign/20 rounded-lg border border-premium/30">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                  Déploiement Auto-hébergé
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Déployez Ollama sur votre infrastructure avec Docker.
                </p>
                <a href="https://ollama.com/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-premium to-sovereign text-white rounded-lg text-sm font-medium hover:from-premium-600 hover:to-sovereign-600 transition-all text-center">
                  Documentation
                </a>
              </div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            className="glass-purple rounded-xl p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Prêt à exécuter des LLM localement ?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Intégrez Ollama à votre écosystème IA pour une confidentialité maximale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="http://localhost:3030/roi-calculator" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gradient-to-r from-premium to-sovereign text-white rounded-lg font-semibold hover:from-premium-600 hover:to-sovereign-600 transition-all shadow-lg text-center">
                Calculer votre ROI
              </a>
              <div className="text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2"></p>
              </div>
              <a href="http://localhost:3030/contact" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-all border border-gray-300 dark:border-gray-600 text-center">
                Deployer Ollama 
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Section Support Urgente */}
      <UrgentSupportSection />
      
      <LocalAIFooter />
    </div>
  );
};