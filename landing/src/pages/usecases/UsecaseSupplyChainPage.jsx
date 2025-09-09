import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { Truck, TrendingUp, MapPin, Package, Database, Zap, AlertTriangle, BarChart } from "lucide-react";
import { LocalAIHeader } from '../../components/LocalAIHeader';
import { LocalAIFooter } from '../../components/LocalAIFooter';
import { UrgentSupportSection } from '../../components/UrgentSupportSection';

export const UsecaseSupplyChainPage = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Prédiction Demande",
      description: "Anticipation précise de la demande avec analyse des tendances historiques."
    },
    {
      icon: MapPin,
      title: "Optimisation Routes",
      description: "Calcul intelligent des itinéraires pour réduire coûts et délais."
    },
    {
      icon: Package,
      title: "Gestion Stocks",
      description: "Optimisation automatique des niveaux de stock et réapprovisionnement."
    },
    {
      icon: AlertTriangle,
      title: "Alertes Risques",
      description: "Détection proactive des disruptions et plans de contingence."
    }
  ];

  const useCases = [
    {
      icon: Truck,
      title: "Logistique Transport",
      description: "Optimisation des flottes de véhicules et planification des tournées."
    },
    {
      icon: Package,
      title: "Gestion Entrepôts",
      description: "Automatisation des processus de stockage et préparation commandes."
    },
    {
      icon: BarChart,
      title: "Planification Production",
      description: "Coordination optimale entre capacités de production et demande."
    },
    {
      icon: MapPin,
      title: "Réseau Distribution",
      description: "Optimisation des centres de distribution et flux de marchandises."
    }
  ];

  const technicalSpecs = [
    { label: "Précision", value: "94%" },
    { label: "Réduction Coûts", value: "25%" },
    { label: "Délai Livraison", value: "-30%" },
    { label: "Optimisation", value: "Temps Réel" },
    { label: "Intégrations", value: "ERP/WMS" },
    { label: "Analyses", value: "Prédictives" }
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
              <Truck className="w-10 h-10 text-sovereign filter drop-shadow-[0_0_8px_rgba(254,185,9,0.8)]" />
              Optimisation Supply Chain
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Solution IA complète pour l'optimisation de la chaîne d'approvisionnement avec 
              prédiction de la demande, gestion intelligente des stocks et optimisation logistique.
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
                <div className="w-12 h-12 text-sovereign mb-4 filter drop-shadow-[0_0_8px_rgba(254,185,9,0.8)]">
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
                <Truck className="w-6 h-6 text-sovereign" />
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
                      N8N
                    </h3>
                    <div className="px-2 py-1 bg-sovereign/20 text-sovereign dark:text-sovereign text-xs rounded">
                      Workflows
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Automatisation des processus logistiques et orchestration des données.
                  </p>
                </div>
                
                <div className="p-4 bg-white/10 dark:bg-black/20 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-800 dark:text-white">
                      Ollama
                    </h3>
                    <div className="px-2 py-1 bg-sovereign/20 text-sovereign dark:text-sovereign text-xs rounded">
                      IA Prédictive
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Modèles de machine learning pour prédiction demande et optimisation.
                  </p>
                </div>
                
                <div className="p-4 bg-white/10 dark:bg-black/20 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-800 dark:text-white">
                      PostgreSQL
                    </h3>
                    <div className="px-2 py-1 bg-sovereign/20 text-sovereign dark:text-sovereign text-xs rounded">
                      Données
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Stockage et analyse des données historiques de supply chain.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gradient-to-r from-sovereign/20 to-sovereign/20 rounded-lg border border-sovereign/30">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                  Intégration ERP/WMS
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Connexion native avec vos systèmes SAP, Oracle, Microsoft Dynamics.
                </p>
                <Link to="/documentation" className="px-4 py-2 bg-gradient-to-r from-sovereign to-sovereign text-white rounded-lg text-sm font-medium hover:from-sovereign-600 hover:to-sovereign-600 transition-all text-center">
                  Guide Intégration
                </Link>
              </div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            className="glass-blue rounded-xl p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Prêt à optimiser votre supply chain ?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Transformez votre chaîne d'approvisionnement avec notre solution IA pour réduire coûts et délais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/demo" className="px-6 py-3 bg-gradient-to-r from-sovereign to-sovereign text-white rounded-lg font-semibold hover:from-sovereign-600 hover:to-sovereign-600 transition-all shadow-lg text-center">
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