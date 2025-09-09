import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { Shield, TrendingUp, AlertTriangle, Brain, Calculator, BarChart, Zap, Users, Activity, FileText } from "lucide-react";
import { LocalAIHeader } from '../../components/LocalAIHeader';
import { LocalAIFooter } from '../../components/LocalAIFooter';
import { UrgentSupportSection } from '../../components/UrgentSupportSection';

export const InsuranceSectorPage = () => {
  const features = [
    {
      icon: Calculator,
      title: "Souscription Intelligente",
      description: "Analyse automatique des risques avec pricing dynamique et scoring prédictif."
    },
    {
      icon: AlertTriangle,
      title: "Détection de Fraude",
      description: "Patterns comportementaux et réseaux suspects identifiés en temps réel."
    },
    {
      icon: BarChart,
      title: "Gestion Sinistres",
      description: "Évaluation automatique des dommages et indemnisation accélérée."
    },
    {
      icon: Brain,
      title: "Modélisation Catastrophes",
      description: "Prédiction risques climatiques et optimisation des réserves actuarielles."
    }
  ];

  const useCases = [
    {
      icon: Shield,
      title: "Conformité Solvabilité II",
      description: "Automatisation des obligations réglementaires et stress tests."
    },
    {
      icon: Users,
      title: "Expérience Client Digitale",
      description: "Parcours omnicanal avec chatbots spécialisés assurance."
    },
    {
      icon: Activity,
      title: "Actuariat Temps Réel",
      description: "Calculs actuariels dynamiques et ajustement tarifaire instantané."
    },
    {
      icon: FileText,
      title: "Documentation Automatique",
      description: "Génération automatique de rapports réglementaires et audits."
    }
  ];

  const businessDrivers = [
    { 
      title: "Réglementation Solvabilité II", 
      desc: "Obligations de modélisation des risques et stress tests automatisés"
    },
    { 
      title: "Fraude Massive", 
      desc: "2,5Md€ de fraude annuelle en France, détection IA devient critique"
    },
    { 
      title: "Personnalisation Tarifaire", 
      desc: "Concurrence féroce nécessite pricing dynamique et micro-segmentation"
    },
    { 
      title: "Sinistres Climatiques", 
      desc: "Modèles prédictifs requis pour anticiper catastrophes naturelles"
    },
    { 
      title: "Expérience Client", 
      desc: "Digitalisation parcours et automatisation indemnisations 24/7"
    }
  ];

  const technicalSpecs = [
    { label: "Réduction Fraude", value: "85%" },
    { label: "Accélération Souscription", value: "90%" },
    { label: "Précision Pricing", value: "94%" },
    { label: "Économies Opérationnelles", value: "40%" },
    { label: "Conformité", value: "100%" },
    { label: "ROI Moyen", value: "280%" }
  ];

  const revenueModel = [
    { 
      segment: "Assureurs Nationaux", 
      value: "500K-3M€",
      desc: "AXA, Allianz, Generali - Solutions complètes"
    },
    { 
      segment: "Mutuelles Régionales", 
      value: "100K-800K€", 
      desc: "Projets sectoriels spécialisés"
    },
    { 
      segment: "Courtiers/MGAs", 
      value: "50K-300K€",
      desc: "Plateformes de distribution digitales"
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
              <Shield className="w-10 h-10 text-sovereign filter drop-shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
              Assurance & Actuariat IA
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Révolution du secteur par l'IA: souscription intelligente, détection de fraude, 
              modélisation actuarielle et conformité réglementaire automatisée.
            </motion.p>
          </div>

          {/* Business Drivers */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
              Drivers Business Critiques
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {businessDrivers.map((driver, index) => (
                <div 
                  key={index} 
                  className="glass p-6 rounded-xl"
                >
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-3">
                    {driver.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {driver.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="glass rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + 0.1 * index }}
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
            transition={{ delay: 0.7 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
              Métriques de Performance
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

          {/* Use Cases & Stack */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <motion.div
              className="glass rounded-xl p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                <Shield className="w-6 h-6 text-sovereign" />
                Cas d'Usage Prioritaires
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
              transition={{ delay: 0.9 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Stack LocalAI Optimale
              </h2>
              
              <div className="space-y-4">
                <div className="p-4 bg-white/10 dark:bg-black/20 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-800 dark:text-white">
                      Neo4j
                    </h3>
                    <div className="px-2 py-1 bg-sovereign/20 text-sovereign-600 dark:text-sovereign-400 text-xs rounded">
                      Graph DB
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Graphes de fraude et réseaux de sinistres suspects.
                  </p>
                </div>
                
                <div className="p-4 bg-white/10 dark:bg-black/20 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-800 dark:text-white">
                      Ollama
                    </h3>
                    <div className="px-2 py-1 bg-sovereign/20 text-sovereign-600 dark:text-sovereign-400 text-xs rounded">
                      LLM Local
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Analyse documents sinistres et évaluation risques textuels.
                  </p>
                </div>
                
                <div className="p-4 bg-white/10 dark:bg-black/20 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-800 dark:text-white">
                      Qdrant
                    </h3>
                    <div className="px-2 py-1 bg-sovereign/20 text-sovereign-600 dark:text-sovereign-400 text-xs rounded">
                      Vector Search
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Similarité entre sinistres et détection patterns frauduleux.
                  </p>
                </div>

                <div className="p-4 bg-white/10 dark:bg-black/20 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-800 dark:text-white">
                      N8N
                    </h3>
                    <div className="px-2 py-1 bg-sovereign/20 text-sovereign-600 dark:text-sovereign-400 text-xs rounded">
                      Automation
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Workflows souscription/indemnisation automatisés.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gradient-to-r from-sovereign/20 to-premium/20 rounded-lg border border-sovereign/30">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                  Avantages Concurrentiels
                </h3>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <div>• Conformité RGPD native - données sensibles gardées localement</div>
                  <div>• Explicabilité IA - obligation justifier décisions tarifaires</div>
                  <div>• Latence critique - souscription instantanée temps réel</div>
                  <div>• Intégration legacy - APIs systèmes actuariels existants</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Revenue Model */}
          <motion.div
            className="glass rounded-xl p-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
              Revenus Potentiels par Segment
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {revenueModel.map((revenue, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-gradient-to-r from-sovereign/10 to-premium/10 rounded-lg border border-sovereign/20"
                >
                  <h3 className="font-bold text-gray-800 dark:text-white mb-2">
                    {revenue.segment}
                  </h3>
                  <div className="text-2xl font-bold text-sovereign mb-2">
                    {revenue.value}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {revenue.desc}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-gradient-to-r from-growth/20 to-sovereign/20 rounded-lg border border-growth/30">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                Timing Marché Optimal
              </h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <div>• Directive IA européenne appliquée dès 2025 pour l'assurance</div>
                <div>• Neo-assureurs (Lemonade, Next, Alan) créent pression concurrentielle</div>
                <div>• Sinistres climatiques croissants nécessitent nouveaux modèles</div>
                <div>• Inflation pousse à l'optimisation des coûts opérationnels</div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="glass-indigo rounded-xl p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Prêt à révolutionner votre assurance ?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Transformez votre secteur avec nos solutions IA souveraines: souscription, fraude, actuariat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/demo" className="px-6 py-3 bg-gradient-to-r from-sovereign to-premium text-white rounded-lg font-semibold hover:from-sovereign-600 hover:to-premium-600 transition-all shadow-lg text-center">
                Déployer la Solution
              </Link>
              <Link to="/documentation" className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-all border border-gray-300 dark:border-gray-600 text-center">
                Calculer votre ROI
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