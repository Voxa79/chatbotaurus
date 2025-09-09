import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { Activity, Shield, AlertTriangle, Eye, Database, Zap, Lock, Search } from "lucide-react";
import { LocalAIHeader } from '../../components/LocalAIHeader';
import { LocalAIFooter } from '../../components/LocalAIFooter';
import { UrgentSupportSection } from '../../components/UrgentSupportSection';

export const UsecaseCybersecurityPage = () => {
  const features = [
    {
      icon: AlertTriangle,
      title: "Détection Menaces",
      description: "Identification temps réel des cyberattaques et comportements suspects."
    },
    {
      icon: Activity,
      title: "SIEM Intelligent",
      description: "Corrélation automatique des événements de sécurité avec IA."
    },
    {
      icon: Eye,
      title: "Threat Hunting",
      description: "Recherche proactive de menaces avancées dans l'infrastructure."
    },
    {
      icon: Lock,
      title: "Réponse Automatique",
      description: "Actions de mitigation automatisées selon les playbooks définis."
    }
  ];

  const useCases = [
    {
      icon: Shield,
      title: "SOC Automation",
      description: "Automatisation des opérations de centre de sécurité et triage d'alertes."
    },
    {
      icon: Search,
      title: "Forensic Analysis",
      description: "Analyse forensique automatisée des incidents de sécurité."
    },
    {
      icon: Database,
      title: "Threat Intelligence",
      description: "Agrégation et corrélation d'indicateurs de compromission."
    },
    {
      icon: Activity,
      title: "Network Monitoring",
      description: "Surveillance comportementale du trafic réseau et détection d'anomalies."
    }
  ];

  const technicalSpecs = [
    { label: "Détection", value: "< 1s" },
    { label: "Précision", value: "96%" },
    { label: "Faux Positifs", value: "< 0.1%" },
    { label: "Événements/s", value: "100K+" },
    { label: "Uptime", value: "99.99%" },
    { label: "Conformité", value: "ISO27001" }
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
              <Activity className="w-10 h-10 text-sovereign filter drop-shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
              Cybersécurité IA Avancée
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Solution de cybersécurité intelligente avec détection comportementale des menaces, 
              SIEM automatisé et réponse aux incidents pilotée par IA.
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
                <div className="w-12 h-12 text-sovereign mb-4 filter drop-shadow-[0_0_8px_rgba(99,102,241,0.8)]">
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
                  <div className="text-2xl font-bold text-sovereign mb-1">
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
                <Activity className="w-6 h-6 text-sovereign" />
                Cas d'Usage
              </h2>
              
              <div className="space-y-6">
                {useCases.map((useCase, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-2 bg-sovereign/10 rounded-lg mt-1">
                      {React.createElement(useCase.icon, { className: "w-5 h-5 text-sovereign" })}
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
                Stack Technique
              </h2>
              
              <div className="space-y-4">
                <div className="p-4 bg-white/10 dark:bg-black/20 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-800 dark:text-white">
                      Elastic SIEM
                    </h3>
                    <div className="px-2 py-1 bg-sovereign/20 text-sovereign-600 dark:text-sovereign-400 text-xs rounded">
                      Event Analysis
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Corrélation et analyse d'événements de sécurité avec machine learning.
                  </p>
                </div>
                
                <div className="p-4 bg-white/10 dark:bg-black/20 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-800 dark:text-white">
                      Suricata IDS
                    </h3>
                    <div className="px-2 py-1 bg-sovereign/20 text-sovereign-600 dark:text-sovereign-400 text-xs rounded">
                      Network Monitor
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Système de détection d'intrusion réseau avec règles personnalisées.
                  </p>
                </div>
                
                <div className="p-4 bg-white/10 dark:bg-black/20 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-800 dark:text-white">
                      TheHive/Cortex
                    </h3>
                    <div className="px-2 py-1 bg-sovereign/20 text-sovereign-600 dark:text-sovereign-400 text-xs rounded">
                      Incident Response
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Plateforme de réponse aux incidents avec automatisation des analyses.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gradient-to-r from-sovereign/20 to-premium/20 rounded-lg border border-sovereign/30">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                  Threat Intelligence
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Intégration native avec MISP, OpenCTI et feeds de renseignement.
                </p>
                <Link to="/documentation" className="px-4 py-2 bg-gradient-to-r from-sovereign to-premium text-white rounded-lg text-sm font-medium hover:from-sovereign-600 hover:to-premium-600 transition-all text-center">
                  IOC Management
                </Link>
              </div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            className="glass-indigo rounded-xl p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Prêt à renforcer votre cybersécurité ?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Protégez votre organisation avec notre solution IA de détection et réponse aux menaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/demo" className="px-6 py-3 bg-gradient-to-r from-sovereign to-premium text-white rounded-lg font-semibold hover:from-sovereign-600 hover:to-premium-600 transition-all shadow-lg text-center">
                Déployer la Solution
              </Link>
              <Link to="/documentation" className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-all border border-gray-300 dark:border-gray-600 text-center">
                Documentation
              </Link>
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