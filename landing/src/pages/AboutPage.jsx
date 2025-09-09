import React from 'react';
import { motion } from "framer-motion";
import { Info, Target, Users, Shield, Zap, TrendingUp, Network, CheckCircle, Globe, Brain, Lock, Scale, Heart, ArrowRight } from "lucide-react";
import { LocalAIHeader } from '../components/LocalAIHeader';
import { LocalAIFooter } from '../components/LocalAIFooter';
import { UrgentSupportSection } from '../components/UrgentSupportSection';
import { Link } from 'react-router-dom';

export const AboutPage = () => {
  const whyLocalAI = [
    {
      icon: Shield,
      title: "Souveraineté Numérique",
      description: "Dans un contexte géopolitique tendu, garder le contrôle de vos données IA n'est plus une option mais une nécessité stratégique.",
      benefit: "100% de vos données restent sous votre contrôle total"
    },
    {
      icon: Scale,
      title: "Conformité Réglementaire",
      description: "L'EU AI Act et le RGPD imposent des contraintes strictes. Notre plateforme est conçue pour être conforme nativement.",
      benefit: "Évitez les amendes jusqu'à 4% du CA et 20M€"
    },
    {
      icon: TrendingUp,
      title: "ROI Économique",
      description: "Les coûts des APIs cloud explosent (+300% en 2 ans). Notre solution génère un ROI immédiat et mesurable.",
      benefit: "165% à 285% de ROI selon les secteurs"
    },
    {
      icon: Zap,
      title: "Rapidité de Déploiement",
      description: "Où les solutions traditionnelles prennent 6+ mois, nous déployons votre IA complète en 48 heures.",
      benefit: "48h pour une IA opérationnelle vs 6 mois concurrents"
    }
  ];

  const ourVision = [
    {
      icon: Globe,
      title: "Vision 2030",
      description: "Devenir la référence des écosystèmes IA conformes avec 10,000 entreprises ayant repris le contrôle de leurs données IA."
    },
    {
      icon: Target,
      title: "Mission",
      description: "Démocratiser l'accès à une IA de pointe tout en garantissant souveraineté, conformité et rentabilité."
    },
    {
      icon: Heart,
      title: "Valeurs",
      description: "Transparence, excellence technique, respect de la vie privée et autonomie technologique de nos clients."
    }
  ];

  const keyNumbers = [
    { value: "15+", label: "Services Intégrés", icon: Network },
    { value: "48h", label: "Déploiement", icon: Zap },
    { value: "285%", label: "ROI Maximum", icon: TrendingUp },
    { value: "7", label: "Secteurs Couverts", icon: Users },
    { value: "100%", label: "Souverain", icon: Shield },
    { value: "€12M+", label: "Économies Clients", icon: CheckCircle }
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
          <div className="text-center mb-16">
            <motion.h1 
              className="text-4xl font-bold text-gray-800 dark:text-white mb-4 flex items-center justify-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Info className="w-10 h-10 text-sovereign filter drop-shadow-[0_0_8px_rgba(254,185,9,0.8)]" />
              Pourquoi Notre Écosystème IA ?
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              L'écosystème IA qui combine contrôle des données, conformité réglementaire et performance économique pour transformer vos défis IA en avantages concurrentiels
            </motion.p>
          </div>

          {/* Chiffres Clés */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-10">
              IA Souveraine en Chiffres
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {keyNumbers.map((number, index) => (
                <motion.div
                  key={number.label}
                  className="glass-blue p-6 rounded-xl text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                >
                  <number.icon className="w-8 h-8 text-sovereign mx-auto mb-3 filter drop-shadow-[0_0_8px_rgba(254,185,9,0.8)]" />
                  <div className="text-2xl font-bold text-gray-800 dark:text-white mb-1">{number.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{number.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Pourquoi IA Souveraine */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-10">
              Pourquoi Choisir IA Souveraine ?
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {whyLocalAI.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  className="glass p-8 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.02 }}
                >
                  <reason.icon className="w-10 h-10 text-sovereign mb-4 filter drop-shadow-[0_0_8px_rgba(254,185,9,0.8)]" />
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{reason.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{reason.description}</p>
                  <div className="p-3 bg-growth/10 rounded-lg">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-success mr-2" />
                      <span className="font-semibold text-success dark:text-success">{reason.benefit}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Notre Vision */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-10">
              Notre Vision & Mission
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ourVision.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="glass-purple p-8 rounded-xl text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                >
                  <item.icon className="w-12 h-12 text-success mx-auto mb-4 filter drop-shadow-[0_0_8px_rgba(254,185,9,0.8)]" />
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Le Contexte Européen */}
          <motion.div
            className="glass-blue p-8 rounded-xl mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
              <Globe className="w-8 h-8 text-sovereign mr-3 filter drop-shadow-[0_0_8px_rgba(254,185,9,0.8)]" />
              Le Contexte Européen
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Les Défis Actuels</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-action rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    95% des entreprises EU dépendent d'IA américaines
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-action rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    €50B+ de données européennes traitées aux États-Unis/an
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-action rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Coûts IA cloud en explosion (+300% en 2 ans)
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-action rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Risques géopolitiques et de surveillance croissants
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Notre Réponse</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                    Infrastructure 100% européenne et souveraine
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                    Conformité native RGPD et AI Act
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                    Économies immédiates et ROI prouvé
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                    Indépendance technologique totale
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* L'Équipe */}
          <motion.div
            className="glass p-8 rounded-xl mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
              <Users className="w-8 h-8 text-success mr-3 filter drop-shadow-[0_0_8px_rgba(254,185,9,0.8)]" />
              Une Équipe d'Experts Européens
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Expertise Technique</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• 10+ ans d'expérience en IA et DevOps</li>
                  <li>• Contributions open-source majeures</li>
                  <li>• Expertise en architecture distribuée</li>
                  <li>• Spécialistes sécurité et compliance</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Vision Business</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Background McKinsey et grandes ESN</li>
                  <li>• Track record en transformation digitale</li>
                  <li>• Expertise secteurs régulés</li>
                  <li>• Réseau d'advisors européens</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="glass-green p-8 rounded-xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Brain className="w-16 h-16 text-success mx-auto mb-4 filter drop-shadow-[0_0_12px_rgba(254,185,9,0.8)]" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Prêt à Rejoindre la Révolution IA Européenne ?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Découvrez comment IA Souveraine peut transformer votre entreprise avec une intelligence artificielle européenne, performante et rentable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-growth to-sovereign text-white rounded-lg font-semibold hover:from-growth-600 hover:to-sovereign-600 transition-all shadow-lg inline-flex items-center justify-center">
                Nous Contacter
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/roi-calculator" className="px-8 py-4 glass border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white rounded-lg font-semibold hover:border-growth transition-all inline-flex items-center justify-center">
                Calculer Mon ROI
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