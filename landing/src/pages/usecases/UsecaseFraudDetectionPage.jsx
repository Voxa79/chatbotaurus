import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { Shield, AlertTriangle, TrendingUp, Brain, Database, Zap, Eye, Lock } from "lucide-react";
import { LocalAIHeader } from '../../components/LocalAIHeader';
import { LocalAIFooter } from '../../components/LocalAIFooter';
import { UrgentSupportSection } from '../../components/UrgentSupportSection';

export const UsecaseFraudDetectionPage = () => {
  const features = [
    {
      icon: Shield,
      title: "Détection Temps Réel",
      description: "Analyse instantanée des transactions suspectes avec alertes automatiques."
    },
    {
      icon: AlertTriangle,
      title: "Analyse Comportementale",
      description: "Identification des patterns anormaux basée sur l'historique utilisateur."
    },
    {
      icon: TrendingUp,
      title: "Scoring Dynamique",
      description: "Attribution de scores de risque adaptatifs selon les contextes."
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Modèles auto-apprenants qui s'améliorent avec chaque détection."
    }
  ];

  const useCases = [
    {
      icon: Shield,
      title: "Transactions Bancaires",
      description: "Surveillance des virements et paiements suspects en temps réel."
    },
    {
      icon: Eye,
      title: "E-commerce",
      description: "Protection contre les fraudes aux cartes de crédit et comptes clients."
    },
    {
      icon: Lock,
      title: "Assurances",
      description: "Détection de fausses déclarations et sinistres frauduleux."
    },
    {
      icon: Database,
      title: "Conformité Réglementaire",
      description: "Respect automatique des normes anti-blanchiment et KYC."
    }
  ];

  const technicalSpecs = [
    { label: "Détection", value: "< 100ms" },
    { label: "Précision", value: "99.2%" },
    { label: "Faux Positifs", value: "< 0.5%" },
    { label: "Transactions/s", value: "10K+" },
    { label: "Modèles ML", value: "15+" },
    { label: "Conformité", value: "RGPD" }
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
              <Shield className="w-10 h-10 text-action filter drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
              Détection de Fraude & Conformité
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Solution IA avancée de détection de fraude en temps réel avec analyse comportementale 
              et conformité réglementaire automatique pour protéger vos transactions et données.
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
                <div className="w-12 h-12 text-action mb-4 filter drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]">
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
                <Shield className="w-6 h-6 text-action" />
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
                Stack Technique
              </h2>
              
              <div className="space-y-4">
                <div className="p-4 bg-white/10 dark:bg-black/20 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-800 dark:text-white">
                      Ollama
                    </h3>
                    <div className="px-2 py-1 bg-action/20 text-action dark:text-action text-xs rounded">
                      LLM Local
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Modèles LLM pour l'analyse comportementale et détection d'anomalies.
                  </p>
                </div>
                
                <div className="p-4 bg-white/10 dark:bg-black/20 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-800 dark:text-white">
                      Qdrant
                    </h3>
                    <div className="px-2 py-1 bg-action/20 text-action dark:text-action text-xs rounded">
                      Vector DB
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Base vectorielle pour la recherche de patterns de fraude similaires.
                  </p>
                </div>
                
                <div className="p-4 bg-white/10 dark:bg-black/20 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-800 dark:text-white">
                      PostgreSQL
                    </h3>
                    <div className="px-2 py-1 bg-action/20 text-action dark:text-action text-xs rounded">
                      Base Données
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Stockage des transactions et historiques pour analyse temporelle.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gradient-to-r from-action/20 to-action/20 rounded-lg border border-action/30">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                  Déploiement Sécurisé
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Infrastructure souveraine avec chiffrement bout en bout et conformité RGPD.
                </p>
                <Link to="/documentation" className="px-4 py-2 bg-gradient-to-r from-action to-action text-white rounded-lg text-sm font-medium hover:from-action-600 hover:to-action-600 transition-all text-center">
                  Guide Déploiement
                </Link>
              </div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            className="glass-red rounded-xl p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Prêt à sécuriser vos transactions ?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Déployez notre solution IA de détection de fraude pour protéger votre organisation et vos clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/demo" className="px-6 py-3 bg-gradient-to-r from-action to-action text-white rounded-lg font-semibold hover:from-action-600 hover:to-action-600 transition-all shadow-lg text-center">
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