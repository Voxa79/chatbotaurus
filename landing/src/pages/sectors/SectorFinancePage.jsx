import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { Building, Zap, Shield, TrendingUp, FileText, Users, Lock, BarChart3 } from "lucide-react";
import { LocalAIHeader } from '../../components/LocalAIHeader';
import { LocalAIFooter } from '../../components/LocalAIFooter';
import { UrgentSupportSection } from '../../components/UrgentSupportSection';

export const SectorFinancePage = () => {
  const features = [
    {
      icon: FileText,
      title: "Analyse documentaire RGPD-compliant",
      description: "Traitement sécurisé des documents sensibles avec conformité réglementaire."
    },
    {
      icon: Zap,
      title: "Automatisation des processus réglementaires",
      description: "Automatisation des tâches répétitives liées aux régulations financières."
    },
    {
      icon: BarChart3,
      title: "Reporting ACPR automatisé",
      description: "Génération automatique de rapports réglementaires pour l'ACPR."
    },
    {
      icon: Shield,
      title: "Gestion des risques en temps réel",
      description: "Surveillance continue des risques financiers avec alertes automatiques."
    }
  ];

  const useCases = [
    {
      icon: FileText,
      title: "Analyse de contrats financiers",
      description: "Extraction automatisée d'informations clés dans les contrats financiers."
    },
    {
      icon: BarChart3,
      title: "Reporting réglementaire",
      description: "Automatisation des rapports pour l'ACPR et autres autorités."
    },
    {
      icon: Shield,
      title: "Conformité réglementaire",
      description: "Surveillance continue de la conformité aux régulations en vigueur."
    },
    {
      icon: TrendingUp,
      title: "Gestion des risques",
      description: "Évaluation et surveillance des risques financiers en temps réel."
    }
  ];

  const technicalSpecs = [
    { label: "Clients Cibles", value: "500-5000 employés" },
    { label: "ROI Moyen", value: "285%" },
    { label: "Break-even", value: "8 mois" },
    { label: "Conformité", value: "RGPD" },
    { label: "Sécurité", value: "Niveau 3" },
    { label: "Épargne Annuelle", value: "€500k+" }
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
              <Building className="w-10 h-10 text-success filter drop-shadow-[0_0_8px_rgba(254,185,9,0.8)]" />
              Finance & Banque
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Solutions d'intelligence artificielle souveraine pour le secteur financier et bancaire, 
              avec une conformité RGPD maximale et une automatisation des processus réglementaires.
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
                Intégrations
              </h2>
              
              <div className="space-y-4">
                <div className="p-4 bg-white/10 dark:bg-black/20 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-800 dark:text-white">
                      Ollama
                    </h3>
                    <div className="px-2 py-1 bg-growth/20 text-success dark:text-success text-xs rounded">
                      Connecté
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Modèles LLM pour l'analyse de documents financiers.
                  </p>
                </div>
                
                <div className="p-4 bg-white/10 dark:bg-black/20 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-800 dark:text-white">
                      Qdrant
                    </h3>
                    <div className="px-2 py-1 bg-growth/20 text-success dark:text-success text-xs rounded">
                      Connecté
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Base vectorielle pour la recherche sémantique dans les documents.
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
                    Automatisation des workflows réglementaires.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gradient-to-r from-premium/20 to-sovereign/20 rounded-lg border border-premium/30">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                  Déploiement Auto-hébergé
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Déployez la solution sur votre infrastructure avec Docker.
                </p>
                <Link to="/documentation" className="px-4 py-2 bg-gradient-to-r from-premium to-sovereign text-white rounded-lg text-sm font-medium hover:from-premium-600 hover:to-sovereign-600 transition-all text-center">
                  Documentation
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
              Prêt à transformer votre secteur financier ?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Intégrez notre solution IA souveraine pour une conformité maximale et une automatisation des processus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/demo" className="px-6 py-3 bg-gradient-to-r from-premium to-sovereign text-white rounded-lg font-semibold hover:from-premium-600 hover:to-sovereign-600 transition-all shadow-lg text-center">
                Déployer la Solution
              </Link>
              <Link to="/documentation" className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-all border border-gray-300 dark:border-gray-600 text-center">
                Documentation
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Section Support Urgente */}
      <UrgentSupportSection />
      
      <LocalAIFooter />
    </div>
  );
};