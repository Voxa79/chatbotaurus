import React from 'react';
import { motion } from "framer-motion";
import { Package, CheckCircle, Users, Zap, Shield, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';
import { LocalAIHeader } from '../../components/LocalAIHeader';
import { LocalAIFooter } from '../../components/LocalAIFooter';
import { UrgentSupportSection } from '../../components/UrgentSupportSection';

export const ApproachDfyPage = () => {
  const features = [
    {
      icon: Zap,
      title: "Implémentation Rapide",
      description: "Déploiement de la solution en un temps record avec notre équipe d'experts."
    },
    {
      icon: Shield,
      title: "Conformité Garantie",
      description: "Respect des normes RGPD, AI Act et autres réglementations sectorielles."
    },
    {
      icon: TrendingUp,
      title: "ROI Immédiat",
      description: "Bénéficiez des gains de productivité dès le lancement du projet."
    },
    {
      icon: CheckCircle,
      title: "Livraison Clé en Main",
      description: "Solution complète et fonctionnelle livrée selon vos spécifications."
    }
  ];

  const processSteps = [
    {
      icon: Users,
      title: "Audit & Analyse",
      description: "Évaluation approfondie de vos besoins et de votre infrastructure actuelle."
    },
    {
      icon: Zap,
      title: "Conception & Planification",
      description: "Définition de l'architecture et du planning de réalisation."
    },
    {
      icon: Package,
      title: "Développement & Intégration",
      description: "Implémentation et intégration de la solution dans votre environnement."
    },
    {
      icon: TrendingUp,
      title: "Déploiement & Optimisation",
      description: "Mise en production et optimisation continue de la solution."
    }
  ];

  const technicalSpecs = [
    { label: "Durée Moyenne", value: "4-8 semaines" },
    { label: "Équipe Dédiée", value: "3-5 experts" },
    { label: "Support Inclus", value: "3 mois" },
    { label: "Livraison", value: "Clé en main" },
    { label: "ROI Attendu", value: "300-500%" },
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
              <Package className="w-10 h-10 text-sovereign filter drop-shadow-[0_0_8px_rgba(254,185,9,0.8)]" />
              Done For You (DFY)
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Solution clé en main : nous réalisons l'ensemble du projet pour vous, de la conception à la livraison.
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
              Spécifications de l'Approche
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

          {/* Process Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <motion.div
              className="glass rounded-xl p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                <Package className="w-6 h-6 text-sovereign" />
                Processus de Réalisation
              </h2>
              
              <div className="space-y-6">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-2 bg-sovereign/10 rounded-lg mt-1">
                      {React.createElement(step.icon, { className: "w-5 h-5 text-sovereign" })}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {step.description}
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
                Avantages DFY
              </h2>
              
              <div className="space-y-4">
                <div className="p-4 bg-white/10 dark:bg-black/20 rounded-lg">
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                    Gain de Temps
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Économisez des mois de développement en confiant le projet à nos experts.
                  </p>
                </div>
                
                <div className="p-4 bg-white/10 dark:bg-black/20 rounded-lg">
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                    Expertise Garantie
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Bénéficiez de l'expertise de notre équipe certifiée en IA souveraine.
                  </p>
                </div>
                
                <div className="p-4 bg-white/10 dark:bg-black/20 rounded-lg">
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                    Zéro Stress
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Concentrez-vous sur votre cœur de métier pendant que nous gérons le projet.
                  </p>
                </div>
                
                <div className="p-4 bg-white/10 dark:bg-black/20 rounded-lg">
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                    Résultats Garantis
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Livraison d'une solution fonctionnelle avec des indicateurs de performance clairs.
                  </p>
                </div>
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
              Prêt à confier votre projet en toute sérénité ?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Contactez notre équipe pour discuter de votre projet et obtenir une estimation personnalisée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-6 py-3 bg-gradient-to-r from-sovereign to-sovereign text-white rounded-lg font-semibold hover:from-sovereign-600 hover:to-sovereign-600 transition-all shadow-lg text-center">
                Demander un devis
              </Link>
              <Link to="/contact" className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-all border border-gray-300 dark:border-gray-600 text-center">
                Planifier un appel
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