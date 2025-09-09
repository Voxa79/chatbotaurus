import React from 'react';
import { motion } from "framer-motion";
import { Users, CheckCircle, BookOpen, Zap, Shield, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';
import { LocalAIHeader } from '../../components/LocalAIHeader';
import { LocalAIFooter } from '../../components/LocalAIFooter';
import { UrgentSupportSection } from '../../components/UrgentSupportSection';

export const ApproachDwyPage = () => {
  const features = [
    {
      icon: Users,
      title: "Collaboration Étroite",
      description: "Travaillez main dans la main avec nos experts pour atteindre vos objectifs."
    },
    {
      icon: BookOpen,
      title: "Formation Incluse",
      description: "Montez en compétence grâce à des sessions de formation personnalisées."
    },
    {
      icon: Zap,
      title: "Accélération du Développement",
      description: "Bénéficiez de notre expertise pour accélérer la réalisation de votre projet."
    },
    {
      icon: Shield,
      title: "Support Continu",
      description: "Accès à notre support technique pendant toute la durée du projet."
    }
  ];

  const processSteps = [
    {
      icon: BookOpen,
      title: "Évaluation & Planification",
      description: "Analyse de vos besoins et définition du plan de collaboration."
    },
    {
      icon: Users,
      title: "Formation & Accompagnement",
      description: "Sessions de formation et accompagnement personnalisé de votre équipe."
    },
    {
      icon: Zap,
      title: "Développement Collaboratif",
      description: "Travail conjoint sur le développement et l'implémentation de la solution."
    },
    {
      icon: TrendingUp,
      title: "Optimisation & Transfert",
      description: "Optimisation de la solution et transfert des connaissances."
    }
  ];

  const technicalSpecs = [
    { label: "Durée Moyenne", value: "8-12 semaines" },
    { label: "Équipe Mixte", value: "Nos experts + Votre équipe" },
    { label: "Formation Incluse", value: "20-40h" },
    { label: "Support Inclus", value: "2 mois" },
    { label: "ROI Attendu", value: "200-350%" },
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
              <Users className="w-10 h-10 text-success filter drop-shadow-[0_0_8px_rgba(254,185,9,0.8)]" />
              Done With You (DWY)
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Coopération guidée : nous travaillons avec vous pour accompagner votre équipe dans la réalisation du projet.
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

          {/* Process Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <motion.div
              className="glass rounded-xl p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                <Users className="w-6 h-6 text-success" />
                Processus de Collaboration
              </h2>
              
              <div className="space-y-6">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-2 bg-premium/10 rounded-lg mt-1">
                      {React.createElement(step.icon, { className: "w-5 h-5 text-success" })}
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
                Avantages DWY
              </h2>
              
              <div className="space-y-4">
                <div className="p-4 bg-white/10 dark:bg-black/20 rounded-lg">
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                    Montée en Compétence
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Développez les compétences de votre équipe tout en réalisant votre projet.
                  </p>
                </div>
                
                <div className="p-4 bg-white/10 dark:bg-black/20 rounded-lg">
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                    Propriété Intellectuelle
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Conservez la maîtrise complète des développements réalisés.
                  </p>
                </div>
                
                <div className="p-4 bg-white/10 dark:bg-black/20 rounded-lg">
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                    Adaptabilité
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Ajustez le projet en cours de route selon vos besoins évolutifs.
                  </p>
                </div>
                
                <div className="p-4 bg-white/10 dark:bg-black/20 rounded-lg">
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                    Relation Partenaire
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Bénéficiez d'une relation de confiance avec notre équipe d'experts.
                  </p>
                </div>
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
              Prêt à collaborer avec nos experts ?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Contactez notre équipe pour discuter de votre projet et définir un plan de collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-6 py-3 bg-gradient-to-r from-premium to-sovereign text-white rounded-lg font-semibold hover:from-premium-600 hover:to-sovereign-600 transition-all shadow-lg text-center">
                Planifier une session
              </Link>
              <Link to="/contact" className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-all border border-gray-300 dark:border-gray-600 text-center">
                Demander des informations
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