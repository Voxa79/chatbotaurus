import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { Target, TrendingUp, Users, MessageSquare, Database, Zap, Eye, BarChart } from "lucide-react";
import { LocalAIHeader } from '../../components/LocalAIHeader';
import { LocalAIFooter } from '../../components/LocalAIFooter';
import { UrgentSupportSection } from '../../components/UrgentSupportSection';

export const UsecaseMarketingPersonalizationPage = () => {
  const features = [
    {
      icon: Target,
      title: "Segmentation IA",
      description: "Création automatique de segments clients basée sur les comportements."
    },
    {
      icon: MessageSquare,
      title: "Contenu Personnalisé",
      description: "Génération de messages adapté à chaque profil et contexte client."
    },
    {
      icon: TrendingUp,
      title: "Optimisation Campagnes",
      description: "Ajustement temps réel des campagnes selon les performances."
    },
    {
      icon: Eye,
      title: "Analyse Prédictive",
      description: "Prédiction des comportements d'achat et préférences clients."
    }
  ];

  const useCases = [
    {
      icon: MessageSquare,
      title: "Email Marketing",
      description: "Personnalisation automatique du contenu email selon le profil client."
    },
    {
      icon: Target,
      title: "Publicité Ciblée",
      description: "Optimisation des audiences publicitaires avec scoring prédictif."
    },
    {
      icon: Users,
      title: "Recommandations Produits",
      description: "Suggestions personnalisées basées sur l'historique et préférences."
    },
    {
      icon: BarChart,
      title: "Attribution Marketing",
      description: "Mesure précise de l'impact de chaque point de contact client."
    }
  ];

  const technicalSpecs = [
    { label: "Segments", value: "Auto" },
    { label: "Temps Réel", value: "< 50ms" },
    { label: "Conversion", value: "+35%" },
    { label: "Précision", value: "89%" },
    { label: "Canaux", value: "Omni" },
    { label: "ROI", value: "+250%" }
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
              <Target className="w-10 h-10 text-success filter drop-shadow-[0_0_8px_rgba(254,185,9,0.8)]" />
              Marketing Hyper-Personnalisé
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Solution IA avancée pour la personnalisation marketing avec segmentation automatique, 
              génération de contenu adaptatif et optimisation temps réel des campagnes.
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
                <Target className="w-6 h-6 text-success" />
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
                Stack Technique
              </h2>
              
              <div className="space-y-4">
                <div className="p-4 bg-white/10 dark:bg-black/20 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-800 dark:text-white">
                      Ollama
                    </h3>
                    <div className="px-2 py-1 bg-premium/20 text-success dark:text-success text-xs rounded">
                      LLM Génératif
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Génération automatique de contenu marketing personnalisé.
                  </p>
                </div>
                
                <div className="p-4 bg-white/10 dark:bg-black/20 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-800 dark:text-white">
                      Qdrant
                    </h3>
                    <div className="px-2 py-1 bg-premium/20 text-success dark:text-success text-xs rounded">
                      Recommandations
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Recherche vectorielle pour recommandations produits similaires.
                  </p>
                </div>
                
                <div className="p-4 bg-white/10 dark:bg-black/20 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-800 dark:text-white">
                      N8N
                    </h3>
                    <div className="px-2 py-1 bg-premium/20 text-success dark:text-success text-xs rounded">
                      Automation
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Orchestration des campagnes marketing multi-canaux automatisées.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gradient-to-r from-premium/20 to-action/20 rounded-lg border border-premium/30">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                  Intégrations CRM/CDP
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Connecteurs natifs avec Salesforce, HubSpot, Adobe, Google Analytics.
                </p>
                <Link to="/documentation" className="px-4 py-2 bg-gradient-to-r from-premium to-action text-white rounded-lg text-sm font-medium hover:from-premium-600 hover:to-action-600 transition-all text-center">
                  API Documentation
                </Link>
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
              Prêt à révolutionner votre marketing ?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Augmentez vos conversions avec notre solution IA de personnalisation marketing avancée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/demo" className="px-6 py-3 bg-gradient-to-r from-premium to-action text-white rounded-lg font-semibold hover:from-premium-600 hover:to-action-600 transition-all shadow-lg text-center">
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