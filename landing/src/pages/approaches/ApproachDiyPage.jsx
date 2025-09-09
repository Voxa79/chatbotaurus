import React from 'react';
import { motion } from "framer-motion";
import { BookOpen, CheckCircle, Zap, Shield, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';
import { LocalAIHeader } from '../../components/LocalAIHeader';
import { LocalAIFooter } from '../../components/LocalAIFooter';
import { UrgentSupportSection } from '../../components/UrgentSupportSection';

export const ApproachDiyPage = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Ressources Complètes",
      description: "Accès à notre bibliothèque de documentation, templates et outils."
    },
    {
      icon: Zap,
      title: "Déploiement Rapide",
      description: "Commencez immédiatement avec nos outils pré-configurés et prêts à l'emploi."
    },
    {
      icon: Shield,
      title: "Conformité Intégrée",
      description: "Bénéficiez de solutions pré-conçues respectant les normes RGPD et AI Act."
    },
    {
      icon: TrendingUp,
      title: "Évolutivité",
      description: "Adaptez les solutions à vos besoins spécifiques à tout moment."
    }
  ];

  const resources = [
    {
      icon: BookOpen,
      title: "Documentation Technique",
      description: "Guides complets de mise en œuvre, bonnes pratiques et dépannage."
    },
    {
      icon: CheckCircle,
      title: "Templates & Modèles",
      description: "Modèles pré-conçus pour accélérer votre développement."
    },
    {
      icon: Zap,
      title: "Outils de Développement",
      description: "Scripts, utilitaires et outils pour faciliter votre travail."
    },
    {
      icon: Shield,
      title: "Checklists de Conformité",
      description: "Listes de vérification pour garantir la conformité de vos solutions."
    }
  ];

  const technicalSpecs = [
    { label: "Accès Immédiat", value: "24h/24" },
    { label: "Mises à Jour", value: "Quotidiennes" },
    { label: "Support Communautaire", value: "Inclus" },
    { label: "Formation Autonome", value: "10h" },
    { label: "ROI Attendu", value: "150-250%" },
    { label: "Tarification", value: "Sur mesure" }
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
              <BookOpen className="w-10 h-10 text-success filter drop-shadow-[0_0_8px_rgba(254,185,9,0.8)]" />
              Do It Yourself (DIY)
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Autonomie complète : nous vous fournissons les outils et ressources pour réaliser le projet vous-même.
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
              Spécifications de l'Approche
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

          {/* Resources */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <motion.div
              className="glass rounded-xl p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-success" />
                Ressources Incluses
              </h2>
              
              <div className="space-y-6">
                {resources.map((resource, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-2 bg-growth/10 rounded-lg mt-1">
                      {React.createElement(resource.icon, { className: "w-5 h-5 text-success" })}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white">
                        {resource.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {resource.description}
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
                Avantages DIY
              </h2>
              
              <div className="space-y-4">
                <div className="p-4 bg-white/10 dark:bg-black/20 rounded-lg">
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                    Indépendance Totale
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Prenez en main votre projet sans dépendance externe.
                  </p>
                </div>
                
                <div className="p-4 bg-white/10 dark:bg-black/20 rounded-lg">
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                    Coût Réduit
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Solution la plus économique pour les équipes techniques autonomes.
                  </p>
                </div>
                
                <div className="p-4 bg-white/10 dark:bg-black/20 rounded-lg">
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                    Flexibilité Maximale
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Adaptez les solutions à vos besoins spécifiques sans contrainte.
                  </p>
                </div>
                
                <div className="p-4 bg-white/10 dark:bg-black/20 rounded-lg">
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                    Apprentissage Actif
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Développez vos compétences techniques en réalisant le projet.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gradient-to-r from-growth/20 to-growth/20 rounded-lg border border-growth/30">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                  Accès à la Plateforme
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Accédez immédiatement à notre plateforme de ressources DIY.
                </p>
                <Link to="/contact" className="px-4 py-2 bg-gradient-to-r from-growth to-growth text-white rounded-lg text-sm font-medium hover:from-growth-600 hover:to-growth-600 transition-all text-center inline-block">
                  Accéder aux Ressources
                </Link>
              </div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            className="glass-green rounded-xl p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Prêt à prendre en main votre projet ?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Accédez immédiatement à notre plateforme de ressources et commencez votre projet dès aujourd'hui.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-6 py-3 bg-gradient-to-r from-growth to-growth text-white rounded-lg font-semibold hover:from-growth-600 hover:to-growth-600 transition-all shadow-lg text-center">
                Accéder à la Plateforme
              </Link>
              <Link to="/contact" className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-all border border-gray-300 dark:border-gray-600 text-center">
                Demander la documentation
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