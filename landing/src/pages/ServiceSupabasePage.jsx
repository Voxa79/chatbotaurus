import React from 'react';
import { motion } from "framer-motion";
import { Database, Shield, Users, Zap, Globe, Cpu, GitBranch, Server } from "lucide-react";
import { LocalAIHeader } from '../components/LocalAIHeader';
import { LocalAIFooter } from '../components/LocalAIFooter';
import { UrgentSupportSection } from '../components/UrgentSupportSection';

export const ServiceSupabasePage = () => {
  const features = [
    {
      icon: Database,
      title: "Auth + Database",
      description: "Solution complète d'authentification et de base de données en un seul service."
    },
    {
      icon: Shield,
      title: "Sécurité Entreprise",
      description: "Authentification SSO, RBAC et chiffrement de bout en bout."
    },
    {
      icon: Users,
      title: "Gestion des Utilisateurs",
      description: "Système complet de gestion des utilisateurs et des permissions."
    },
    {
      icon: Zap,
      title: "Haute Performance",
      description: "Base de données PostgreSQL optimisée pour des requêtes rapides."
    }
  ];

  const useCases = [
    {
      icon: Users,
      title: "Authentification",
      description: "Gestion complète des utilisateurs et des sessions."
    },
    {
      icon: Database,
      title: "Stockage de Données",
      description: "Stockage et requêtes de données structurées."
    },
    {
      icon: Globe,
      title: "APIs RESTful",
      description: "Endpoints REST générés automatiquement pour vos tables."
    },
    {
      icon: Server,
      title: "Temps Réel",
      description: "Souscriptions en temps réel aux changements de données."
    }
  ];

  const technicalSpecs = [
    { label: "Base de Données", value: "PostgreSQL" },
    { label: "Authentification", value: "SSO" },
    { label: "API", value: "REST/GraphQL" },
    { label: "Stockage", value: "Objets" },
    { label: "Licence", value: "Apache 2.0" },
    { label: "Déploiement", value: "Docker" }
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
              <Database className="w-10 h-10 text-success filter drop-shadow-[0_0_8px_rgba(254,185,9,0.8)]" />
              Supabase - Auth + Database
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Plateforme open-source de backend qui fournit une base de données PostgreSQL, 
              l'authentification et les APIs REST/GraphQL automatiques.
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
                <Users className="w-6 h-6 text-success" />
                Cas d'Usage
              </h2>
              
              <div className="space-y-6">
                {useCases.map((useCase, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-2 bg-growth/10 rounded-lg mt-1">
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
                    Authentification et stockage des conversations.
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
                    Connexion aux APIs REST/GraphQL de Supabase.
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
                    Stockage des configurations et des données des agents.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gradient-to-r from-growth/20 to-growth/20 rounded-lg border border-growth/30">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                  Déploiement Auto-hébergé
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Déployez Supabase sur votre infrastructure avec Docker.
                </p>
                <a href="http://localhost:3030/documentation" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-growth to-growth text-white rounded-lg text-sm font-medium hover:from-growth-600 hover:to-growth-600 transition-all text-center">
                  Documentation
                </a>
              </div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            className="glass-green rounded-xl p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Prêt à gérer vos données et authentification ?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Intégrez Supabase à votre écosystème IA pour une solution backend complète.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="http://localhost:3030/roi-calculator" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gradient-to-r from-growth to-growth text-white rounded-lg font-semibold hover:from-growth-600 hover:to-growth-600 transition-all shadow-lg text-center">
                Estimer votre ROI
              </a>
              <div className="text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2"></p>
              </div>
              <a href="http://localhost:3030/contact" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-all border border-gray-300 dark:border-gray-600 text-center">
                Déployer Supabase
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