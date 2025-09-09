import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { TrendingDown, BarChart, Zap, Shield, Database, Activity, DollarSign, AlertTriangle } from "lucide-react";
import { LocalAIHeader } from '../../components/LocalAIHeader';
import { LocalAIFooter } from '../../components/LocalAIFooter';
import { UrgentSupportSection } from '../../components/UrgentSupportSection';

export const UsecaseAlgorithmicTradingPage = () => {
  const features = [
    {
      icon: BarChart,
      title: "Analyse Technique",
      description: "Analyse avancée des patterns de marché et indicateurs techniques."
    },
    {
      icon: Zap,
      title: "Trading Haute Fréquence",
      description: "Exécution ultra-rapide d'ordres avec latence microseconde."
    },
    {
      icon: AlertTriangle,
      title: "Gestion Risques",
      description: "Monitoring temps réel des positions avec stop-loss automatiques."
    },
    {
      icon: Activity,
      title: "Backtesting",
      description: "Test historique des stratégies avec validation statistique."
    }
  ];

  const useCases = [
    {
      icon: DollarSign,
      title: "Market Making",
      description: "Fourniture de liquidité automatisée sur différents marchés financiers."
    },
    {
      icon: TrendingDown,
      title: "Arbitrage",
      description: "Détection et exploitation des écarts de prix inter-marchés."
    },
    {
      icon: BarChart,
      title: "Trend Following",
      description: "Stratégies de suivi de tendance avec optimisation dynamique."
    },
    {
      icon: Shield,
      title: "Portfolio Hedging",
      description: "Protection automatique des portefeuilles contre les risques de marché."
    }
  ];

  const technicalSpecs = [
    { label: "Latence", value: "< 1ms" },
    { label: "Uptime", value: "99.99%" },
    { label: "Marchés", value: "50+" },
    { label: "Stratégies", value: "25+" },
    { label: "Backtests", value: "10+ ans" },
    { label: "Risk Mgmt", value: "Temps Réel" }
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
              <TrendingDown className="w-10 h-10 text-success filter drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" />
              Trading Algorithmique IA
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Plateforme de trading algorithmique avec IA pour l'analyse de marché, 
              exécution automatique et gestion des risques en temps réel.
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
                <TrendingDown className="w-6 h-6 text-success" />
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
                Stack Technique
              </h2>
              
              <div className="space-y-4">
                <div className="p-4 bg-white/10 dark:bg-black/20 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-800 dark:text-white">
                      QuantLib
                    </h3>
                    <div className="px-2 py-1 bg-success/20 text-success-600 dark:text-success-400 text-xs rounded">
                      Pricing Models
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Bibliothèque quantitative pour modèles de pricing et dérivés.
                  </p>
                </div>
                
                <div className="p-4 bg-white/10 dark:bg-black/20 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-800 dark:text-white">
                      TimescaleDB
                    </h3>
                    <div className="px-2 py-1 bg-success/20 text-success-600 dark:text-success-400 text-xs rounded">
                      Market Data
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Base de données optimisée pour données financières haute fréquence.
                  </p>
                </div>
                
                <div className="p-4 bg-white/10 dark:bg-black/20 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-800 dark:text-white">
                      Redis Streams
                    </h3>
                    <div className="px-2 py-1 bg-success/20 text-success-600 dark:text-success-400 text-xs rounded">
                      Real-time
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Streaming temps réel des données de marché et signaux de trading.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gradient-to-r from-success/20 to-action/20 rounded-lg border border-success/30">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                  Conformité Réglementaire
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Respect des réglementations MiFID II, EMIR et reporting automatique.
                </p>
                <Link to="/documentation" className="px-4 py-2 bg-gradient-to-r from-success to-action text-white rounded-lg text-sm font-medium hover:from-success-600 hover:to-action-600 transition-all text-center">
                  Compliance Guide
                </Link>
              </div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            className="glass-yellow rounded-xl p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Prêt à automatiser votre trading ?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Optimisez vos performances de trading avec notre plateforme IA haute fréquence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/demo" className="px-6 py-3 bg-gradient-to-r from-success to-action text-white rounded-lg font-semibold hover:from-success-600 hover:to-action-600 transition-all shadow-lg text-center">
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