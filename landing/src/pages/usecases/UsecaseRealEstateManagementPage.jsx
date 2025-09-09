import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { Home, TrendingUp, MapPin, Calculator, Database, Zap, Users, BarChart } from "lucide-react";
import { LocalAIHeader } from '../../components/LocalAIHeader';
import { LocalAIFooter } from '../../components/LocalAIFooter';
import { UrgentSupportSection } from '../../components/UrgentSupportSection';

export const UsecaseRealEstateManagementPage = () => {
  const features = [
    {
      icon: Calculator,
      title: "Évaluation Automatique",
      description: "Estimation précise de la valeur immobilière basée sur l'analyse de marché."
    },
    {
      icon: TrendingUp,
      title: "Analyse Prédictive",
      description: "Prédiction des tendances de marché et opportunités d'investissement."
    },
    {
      icon: Users,
      title: "Matching Locataires",
      description: "Correspondance intelligente entre propriétés et profils locataires."
    },
    {
      icon: MapPin,
      title: "Géolocalisation IA",
      description: "Analyse géospatiale des quartiers et facteurs de valorisation."
    }
  ];

  const useCases = [
    {
      icon: Home,
      title: "Gestion Locative",
      description: "Automatisation complète de la gestion locative et relation locataires."
    },
    {
      icon: BarChart,
      title: "Investissement Immobilier",
      description: "Analyse de rentabilité et identification d'opportunités d'achat."
    },
    {
      icon: Calculator,
      title: "Expertise Immobilière",
      description: "Évaluations précises pour ventes, achats et expertises judiciaires."
    },
    {
      icon: MapPin,
      title: "Développement Urbain",
      description: "Planification urbaine assistée par analyse prédictive du marché."
    }
  ];

  const technicalSpecs = [
    { label: "Précision", value: "92%" },
    { label: "Sources Data", value: "500+" },
    { label: "Actualisation", value: "Temps Réel" },
    { label: "Géolocalisation", value: "GPS" },
    { label: "ML Models", value: "10+" },
    { label: "ROI Prédit", value: "±3%" }
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
              <Home className="w-10 h-10 text-growth filter drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
              Gestion Immobilière IA
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Solution IA complète pour la gestion immobilière avec évaluation automatique, 
              analyse prédictive du marché et optimisation des investissements.
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
                <div className="w-12 h-12 text-growth mb-4 filter drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]">
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
                  <div className="text-2xl font-bold text-growth mb-1">
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
                <Home className="w-6 h-6 text-growth" />
                Cas d'Usage
              </h2>
              
              <div className="space-y-6">
                {useCases.map((useCase, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-2 bg-growth/10 rounded-lg mt-1">
                      {React.createElement(useCase.icon, { className: "w-5 h-5 text-growth" })}
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
                      PostGIS
                    </h3>
                    <div className="px-2 py-1 bg-growth/20 text-growth-600 dark:text-growth-400 text-xs rounded">
                      Géospatial
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Base de données géospatiale pour analyse de localisation et cartes.
                  </p>
                </div>
                
                <div className="p-4 bg-white/10 dark:bg-black/20 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-800 dark:text-white">
                      Ollama Valuation
                    </h3>
                    <div className="px-2 py-1 bg-growth/20 text-growth-600 dark:text-growth-400 text-xs rounded">
                      ML Models
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Modèles spécialisés dans l'évaluation immobilière et analyse de marché.
                  </p>
                </div>
                
                <div className="p-4 bg-white/10 dark:bg-black/20 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-800 dark:text-white">
                      Apache Kafka
                    </h3>
                    <div className="px-2 py-1 bg-growth/20 text-growth-600 dark:text-growth-400 text-xs rounded">
                      Data Streaming
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Streaming des données de marché immobilier en temps réel.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gradient-to-r from-growth/20 to-premium/20 rounded-lg border border-growth/30">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                  APIs Immobilières
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Intégration avec MLS, DVF, cadastre et plateformes immobilières.
                </p>
                <Link to="/documentation" className="px-4 py-2 bg-gradient-to-r from-growth to-premium text-white rounded-lg text-sm font-medium hover:from-growth-600 hover:to-premium-600 transition-all text-center">
                  API Documentation
                </Link>
              </div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            className="glass-emerald rounded-xl p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Prêt à digitaliser votre immobilier ?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Optimisez votre gestion immobilière avec notre solution IA d'évaluation et analyse prédictive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/demo" className="px-6 py-3 bg-gradient-to-r from-growth to-premium text-white rounded-lg font-semibold hover:from-growth-600 hover:to-premium-600 transition-all shadow-lg text-center">
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