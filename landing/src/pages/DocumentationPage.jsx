import React from 'react';
import { motion } from "framer-motion";
import { Book, Code, Rocket, Settings, Database, Globe, Shield, Zap, Download, ExternalLink, FileText, Video, Users } from "lucide-react";
import { LocalAIHeader } from '../components/LocalAIHeader';
import { LocalAIFooter } from '../components/LocalAIFooter';
import { UrgentSupportSection } from '../components/UrgentSupportSection';

export const DocumentationPage = () => {
  const quickStartSteps = [
    {
      icon: Settings,
      title: "1. Configurer",
      description: "Configurez vos variables d'environnement"
    },
    {
      icon: Rocket,
      title: "2. Déployer",
      description: "Lancez avec Docker Compose"
    }
  ];

  const documentationSections = [
    {
      icon: Rocket,
      title: "Guide de Démarrage",
      description: "Installation et première configuration de votre écosystème Local AI",
      items: [
        "Prérequis système",
        "Installation Docker",
        "Configuration des variables",
        "Premier déploiement"
      ]
    },
    {
      icon: Settings,
      title: "Configuration Avancée",
      description: "Personnalisez votre stack selon vos besoins spécifiques",
      items: [
        "Profiles de déploiement",
        "Configuration GPU",
        "Variables d'environnement",
        "Sécurité et SSL"
      ]
    },
    {
      icon: Database,
      title: "Services & Intégrations",
      description: "Documentation détaillée de chaque service de l'écosystème",
      items: [
        "Ollama - LLM Local",
        "Open WebUI - Interface Chat",
        "N8N - Automatisation",
        "Supabase - Base de données"
      ]
    },
    {
      icon: Code,
      title: "API & Développement",
      description: "Intégrez Local AI dans vos applications",
      items: [
        "APIs REST disponibles",
        "Webhooks et callbacks",
        "SDKs et bibliothèques",
        "Exemples de code"
      ]
    }
  ];

  const externalResources = [
    {
      title: "Ollama",
      url: "https://ollama.com/",
      description: "Documentation officielle Ollama"
    },
    {
      title: "Open WebUI",
      url: "https://docs.openwebui.com/",
      description: "Guide utilisateur Open WebUI"
    },
    {
      title: "N8N",
      url: "https://n8n.io/",
      description: "Documentation N8N Workflows"
    },
    {
      title: "Supabase",
      url: "https://supabase.com/docs",
      description: "Documentation Supabase"
    },
    {
      title: "Docker Compose",
      url: "https://docs.docker.com/compose/",
      description: "Guide Docker Compose officiel"
    },
    {
      title: "Qdrant",
      url: "https://qdrant.tech/documentation/",
      description: "Documentation Vector Database"
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
              <Book className="w-10 h-10 text-sovereign filter drop-shadow-[0_0_8px_rgba(254,185,9,0.8)]" />
              Documentation Local AI
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Guide complet pour déployer, configurer et utiliser votre écosystème 
              d'intelligence artificielle souveraine.
            </motion.p>
          </div>

          {/* Quick Start */}
          <motion.div
            className="glass rounded-xl p-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
              <Zap className="w-6 h-6 text-sovereign" />
              Démarrage Rapide
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {quickStartSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white/10 dark:bg-black/20 rounded-lg">
                  <div className="p-2 bg-sovereign/10 rounded-lg mt-1">
                    {React.createElement(step.icon, { className: "w-5 h-5 text-sovereign" })}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

          {/* Documentation Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {documentationSections.map((section, index) => (
              <motion.div
                key={index}
                className="glass rounded-xl p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  {React.createElement(section.icon, { className: "w-6 h-6 text-sovereign" })}
                  {section.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {section.description}
                </p>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-sovereign rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <a 
                    href="/contact"
                    className="text-sovereign hover:text-sovereign font-medium text-sm flex items-center gap-1"
                  >
                    En savoir plus
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* External Resources */}
          <motion.div
            className="glass rounded-xl p-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
              <Globe className="w-6 h-6 text-sovereign" />
              Ressources Externes
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {externalResources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/10 dark:bg-black/20 rounded-lg hover:bg-white/20 dark:hover:bg-black/30 transition-all group"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-gray-800 dark:text-white group-hover:text-sovereign">
                      {resource.title}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-sovereign" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {resource.description}
                  </p>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Support Section */}
          <motion.div
            className="glass-blue rounded-xl p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Besoin d'aide ?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Notre équipe et notre communauté sont là pour vous accompagner dans votre déploiement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="px-6 py-3 bg-gradient-to-r from-sovereign to-sovereign text-white rounded-lg font-semibold hover:from-sovereign-600 hover:to-sovereign-600 transition-all shadow-lg text-center flex items-center gap-2"
              >
                <Users className="w-4 h-4" />
                Contacter l'Équipe
              </a>
              <button 
                onClick={() => { if (typeof window.activateConvocore === 'function') { window.activateConvocore(); } }}
                className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-all border border-gray-300 dark:border-gray-600 text-center flex items-center gap-2"
              >
                <Shield className="w-4 h-4" />
                Assistant IA 24/7
              </button>
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