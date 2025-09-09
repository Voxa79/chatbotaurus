import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { Wrench, AlertTriangle, TrendingDown, Zap, Database, Activity, Settings, BarChart } from "lucide-react";
import { LocalAIHeader } from '../../components/LocalAIHeader';
import { LocalAIFooter } from '../../components/LocalAIFooter';
import { UrgentSupportSection } from '../../components/UrgentSupportSection';

export const UsecasePredictiveMaintenancePage = () => {
  const features = [
    {
      icon: AlertTriangle,
      title: "Détection Précoce",
      description: "Identification des défaillances avant qu'elles ne causent des arrêts."
    },
    {
      icon: TrendingDown,
      title: "Réduction Coûts",
      description: "Diminution des coûts de maintenance grâce à la planification optimisée."
    },
    {
      icon: Activity,
      title: "Monitoring Temps Réel",
      description: "Surveillance continue des équipements avec alertes instantanées."
    },
    {
      icon: BarChart,
      title: "Analytics Prédictive",
      description: "Analyse des tendances et prédiction de la durée de vie équipements."
    }
  ];

  const useCases = [
    {
      icon: Settings,
      title: "Équipements Industriels",
      description: "Maintenance prédictive des machines de production et robots."
    },
    {
      icon: Zap,
      title: "Infrastructure IT",
      description: "Surveillance des serveurs, datacenters et équipements réseau."
    },
    {
      icon: Activity,
      title: "Véhicules & Flottes",
      description: "Optimisation maintenance des flottes de véhicules et équipements."
    },
    {
      icon: Database,
      title: "Systèmes Critiques",
      description: "Monitoring des systèmes essentiels avec tolérance zéro panne."
    }
  ];

  const technicalSpecs = [
    { label: "Prédiction", value: "7-30j" },
    { label: "Précision", value: "93%" },
    { label: "Réduction Pannes", value: "65%" },
    { label: "ROI", value: "300%" },
    { label: "Capteurs", value: "IoT" },
    { label: "Alerts", value: "Temps Réel" }
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
              <Wrench className="w-10 h-10 text-action filter drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
              Maintenance Prédictive IA
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Solution IA complète pour la maintenance prédictive avec monitoring IoT, 
              analyse des défaillances et optimisation des interventions de maintenance.
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
                <div className="w-12 h-12 text-action mb-4 filter drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]">
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
                <Wrench className="w-6 h-6 text-action" />
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
                      InfluxDB
                    </h3>
                    <div className="px-2 py-1 bg-action/20 text-action dark:text-action text-xs rounded">
                      Time Series
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Base de données temporelle pour les métriques IoT et capteurs.
                  </p>
                </div>
                
                <div className="p-4 bg-white/10 dark:bg-black/20 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-800 dark:text-white">
                      Ollama
                    </h3>
                    <div className="px-2 py-1 bg-action/20 text-action dark:text-action text-xs rounded">
                      ML Models
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Modèles de machine learning pour analyse prédictive des défaillances.
                  </p>
                </div>
                
                <div className="p-4 bg-white/10 dark:bg-black/20 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-800 dark:text-white">
                      Grafana
                    </h3>
                    <div className="px-2 py-1 bg-action/20 text-action dark:text-action text-xs rounded">
                      Monitoring
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Tableaux de bord temps réel et alertes pour équipes maintenance.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gradient-to-r from-action/20 to-action/20 rounded-lg border border-action/30">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                  Intégration SCADA/MES
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Connexion native avec vos systèmes industriels existants.
                </p>
                <Link to="/documentation" className="px-4 py-2 bg-gradient-to-r from-action to-action text-white rounded-lg text-sm font-medium hover:from-action-600 hover:to-action-600 transition-all text-center">
                  Protocoles Supportés
                </Link>
              </div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            className="glass-orange rounded-xl p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Prêt à optimiser votre maintenance ?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Réduisez vos coûts de maintenance et améliorez la disponibilité de vos équipements.
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