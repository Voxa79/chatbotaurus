import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { Stethoscope, FileText, Shield, Brain, Database, Zap, Heart, Activity } from "lucide-react";
import { LocalAIHeader } from '../../components/LocalAIHeader';
import { LocalAIFooter } from '../../components/LocalAIFooter';
import { UrgentSupportSection } from '../../components/UrgentSupportSection';

export const UsecaseMedicalAssistantPage = () => {
  const features = [
    {
      icon: FileText,
      title: "Analyse Dossiers",
      description: "Traitement intelligent des dossiers médicaux et historiques patients."
    },
    {
      icon: Brain,
      title: "Aide Diagnostic",
      description: "Support à la décision médicale basée sur l'analyse de symptômes."
    },
    {
      icon: Heart,
      title: "Suivi Personnalisé",
      description: "Monitoring continu des patients avec alertes automatiques."
    },
    {
      icon: Shield,
      title: "Confidentialité RGPD",
      description: "Protection maximale des données de santé avec chiffrement E2E."
    }
  ];

  const useCases = [
    {
      icon: Stethoscope,
      title: "Médecine Générale",
      description: "Assistant pour consultations et suivi de patients ambulatoires."
    },
    {
      icon: Activity,
      title: "Télémédecine",
      description: "Support pour consultations à distance et monitoring remoté."
    },
    {
      icon: FileText,
      title: "Analyse d'Images",
      description: "Assistance à l'interprétation radiologique et imagerie médicale."
    },
    {
      icon: Database,
      title: "Recherche Clinique",
      description: "Analyse de cohortes et identification de patterns thérapeutiques."
    }
  ];

  const technicalSpecs = [
    { label: "Précision", value: "94%" },
    { label: "Langues", value: "12+" },
    { label: "Conformité", value: "HDS" },
    { label: "Chiffrement", value: "E2E" },
    { label: "Disponibilité", value: "99.9%" },
    { label: "RGPD", value: "✓" }
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
              <Stethoscope className="w-10 h-10 text-premium filter drop-shadow-[0_0_8px_rgba(20,184,166,0.8)]" />
              Assistant Médical IA
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Solution IA médicale souveraine pour l'aide au diagnostic, l'analyse de dossiers 
              et le suivi patient avec conformité RGPD et hébergement de données de santé.
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
                <div className="w-12 h-12 text-premium mb-4 filter drop-shadow-[0_0_8px_rgba(20,184,166,0.8)]">
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
                  <div className="text-2xl font-bold text-premium mb-1">
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
                <Stethoscope className="w-6 h-6 text-premium" />
                Cas d'Usage
              </h2>
              
              <div className="space-y-6">
                {useCases.map((useCase, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-2 bg-premium/10 rounded-lg mt-1">
                      {React.createElement(useCase.icon, { className: "w-5 h-5 text-premium" })}
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
                      Ollama Medical
                    </h3>
                    <div className="px-2 py-1 bg-premium/20 text-premium-600 dark:text-premium-400 text-xs rounded">
                      LLM Médical
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Modèles LLM spécialisés en médecine avec terminologie médicale.
                  </p>
                </div>
                
                <div className="p-4 bg-white/10 dark:bg-black/20 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-800 dark:text-white">
                      PostgreSQL HDS
                    </h3>
                    <div className="px-2 py-1 bg-premium/20 text-premium-600 dark:text-premium-400 text-xs rounded">
                      Données Santé
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Base de données certifiée pour l'hébergement de données de santé.
                  </p>
                </div>
                
                <div className="p-4 bg-white/10 dark:bg-black/20 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-800 dark:text-white">
                      DICOM Viewer
                    </h3>
                    <div className="px-2 py-1 bg-premium/20 text-premium-600 dark:text-premium-400 text-xs rounded">
                      Imagerie
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Visualiseur d'images médicales avec support DICOM natif.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gradient-to-r from-premium/20 to-sovereign/20 rounded-lg border border-premium/30">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                  Certification HDS
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Infrastructure certifiée pour hébergement de données de santé en France.
                </p>
                <Link to="/documentation" className="px-4 py-2 bg-gradient-to-r from-premium to-sovereign text-white rounded-lg text-sm font-medium hover:from-premium-600 hover:to-sovereign-600 transition-all text-center">
                  Certification ANSSI
                </Link>
              </div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            className="glass-teal rounded-xl p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Prêt à moderniser vos pratiques médicales ?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Déployez notre assistant médical IA en conformité totale avec les réglementations santé.
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
      
      {/* Section Support Urgente - OBLIGATOIRE sur toutes les pages */}
      <UrgentSupportSection />
      
      <LocalAIFooter />
    </div>
  );
};