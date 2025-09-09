import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { School, Zap, Shield, TrendingUp, FileText, Users, Lock, BarChart3 } from "lucide-react";
import { LocalAIHeader } from '../../components/LocalAIHeader';
import { LocalAIFooter } from '../../components/LocalAIFooter';
import { UrgentSupportSection } from '../../components/UrgentSupportSection';

export const SectorEducationPage = () => {
  const features = [
    {
      icon: FileText,
      title: "Tuteurs IA personnalisés",
      description: "Assistants d'apprentissage adaptatifs pour un enseignement personnalisé."
    },
    {
      icon: Zap,
      title: "Génération de contenus pédagogiques",
      description: "Création automatique de supports de cours, exercices et évaluations."
    },
    {
      icon: BarChart3,
      title: "Évaluation automatique des compétences",
      description: "Analyse des progrès des apprenants et recommandations personnalisées."
    },
    {
      icon: Shield,
      title: "Support multilingue pour l'international",
      description: "Traduction et adaptation des contenus pour l'enseignement international."
    }
  ];

  const useCases = [
    {
      icon: FileText,
      title: "Personnalisation de l'apprentissage",
      description: "Adaptation des contenus et parcours en fonction du niveau de chaque apprenant."
    },
    {
      icon: BarChart3,
      title: "Évaluation automatique",
      description: "Correction automatisée des devoirs et évaluations avec feedback personnalisé."
    },
    {
      icon: Shield,
      title: "Accessibilité",
      description: "Contenus adaptés pour les apprenants avec des besoins spécifiques."
    },
    {
      icon: TrendingUp,
      title: "Analyse des performances",
      description: "Suivi des performances des apprenants et identification des points de blocage."
    }
  ];

  const technicalSpecs = [
    { label: "Clients Cibles", value: "Écoles, Universités, Organismes" },
    { label: "ROI Moyen", value: "275%" },
    { label: "Break-even", value: "7 mois" },
    { label: "Conformité", value: "RGPD" },
    { label: "Accessibilité", value: "WCAG 2.1" },
    { label: "Épargne Annuelle", value: "€300k+" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <LocalAIHeader />
      
      <div
        className="min-h-screen pt-24 pb-16 px-4"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 
              className="text-4xl font-bold text-gray-800 dark:text-white mb-4 flex items-center justify-center gap-3"
            >
              <School className="w-10 h-10 text-success filter drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" />
              Éducation & Formation
            </h1>
            <p 
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            >
              Solutions d'intelligence artificielle souveraine pour le secteur de l'éducation et de la formation, 
              avec des tuteurs personnalisés et une génération automatisée de contenus pédagogiques.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass rounded-xl p-6"
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
              </div>
            ))}
          </div>

          {/* Technical Specifications */}
          <div
            className="glass rounded-xl p-8 mb-12"
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
          </div>

          {/* Use Cases */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div
              className="glass rounded-xl p-8"
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                <Users className="w-6 h-6 text-success" />
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
            </div>

            <div
              className="glass rounded-xl p-8"
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
                    Modèles LLM pour la génération de contenus pédagogiques.
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
                    Base vectorielle pour la recherche sémantique dans les documents éducatifs.
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
                    Automatisation des workflows éducatifs.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gradient-to-r from-success/20 to-amber-500/20 rounded-lg border border-success/30">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                  Déploiement Auto-hébergé
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Déployez la solution sur votre infrastructure avec Docker.
                </p>
                <Link to="/documentation" className="px-4 py-2 bg-gradient-to-r from-success to-amber-500 text-white rounded-lg text-sm font-medium hover:from-success-600 hover:to-amber-600 transition-all text-center">
                  Documentation
                </Link>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div
            className="glass-yellow rounded-xl p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Prêt à transformer l'éducation ?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Intégrez notre solution IA souveraine pour une éducation personnalisée et accessible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/demo" className="px-6 py-3 bg-gradient-to-r from-success to-amber-500 text-white rounded-lg font-semibold hover:from-success-600 hover:to-amber-600 transition-all shadow-lg text-center">
                Déployer la Solution
              </Link>
              <Link to="/documentation" className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-all border border-gray-300 dark:border-gray-600 text-center">
                Documentation
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Section Support Urgente - OBLIGATOIRE sur toutes les pages */}
      <UrgentSupportSection />
      
      <LocalAIFooter />
    </div>
  );
};