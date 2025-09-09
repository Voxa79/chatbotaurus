import React from 'react';
import { motion } from "framer-motion";
import { Users, Download, Building, Scale, Factory, TrendingUp, Euro, Calendar, Clock, Target, Zap } from "lucide-react";
import { LocalAIHeader } from '../components/LocalAIHeader';
import { LocalAIFooter } from '../components/LocalAIFooter';
import { UrgentSupportSection } from '../components/UrgentSupportSection';

export const ResourcesCaseStudiesPage = () => {
  const caseStudies = [
    {
      company: "BNP Paribas",
      sector: "Finance & Banque",
      icon: Building,
      color: "text-success",
      glow: "rgba(254,185,9,0.8)",
      challenge: "Réduction des coûts de conformité RGPD et automatisation des processus réglementaires",
      solution: "Déploiement de notre stack IA auto-hébergée avec RAG pour analyse documentaire et automatisation des rapports ACPR",
      results: [
        { metric: "Coûts de conformité", value: "-85%", icon: TrendingUp },
        { metric: "Temps de reporting", value: "-70%", icon: Clock },
        { metric: "Économies annuelles", value: "€500k", icon: Euro }
      ],
      testimonial: "« Local AI a transformé notre approche de la conformité. Nous avons réduit de 85% nos coûts tout en améliorant notre niveau de protection des données. »",
      author: "Directeur de la conformité",
      date: "Mars 2023"
    },
    {
      company: "Gide Loyrette Nouel",
      sector: "Legal & Conseil",
      icon: Scale,
      color: "text-premium",
      glow: "rgba(34,211,238,0.8)",
      challenge: "Amélioration de l'efficacité des recherches juridiques et confidentialité des documents clients",
      solution: "Implémentation de notre solution RAG juridique avec stockage chiffré et accès contrôlé",
      results: [
        { metric: "Temps de recherche", value: "-60%", icon: TrendingUp },
        { metric: "Précision des résultats", value: "95%", icon: Target },
        { metric: "Productivité juridique", value: "+40%", icon: Users }
      ],
      testimonial: "« La solution Local AI a révolutionné notre pratique. Nos avocats gagnent 8 heures par semaine sur la recherche documentaire. »",
      author: "Directeur du département Innovation",
      date: "Juin 2023"
    },
    {
      company: "TotalEnergies",
      sector: "Industrie Manufacturing",
      icon: Factory,
      color: "text-action",
      glow: "rgba(249,115,22,0.8)",
      challenge: "Optimisation de la maintenance prédictive et documentation technique multilingue",
      solution: "Intégration avec nos capteurs IoT et déploiement d'assistants virtuels multilingues",
      results: [
        { metric: "Downtime machines", value: "-30%", icon: TrendingUp },
        { metric: "Coûts de maintenance", value: "-25%", icon: Euro },
        { metric: "Efficacité production", value: "+15%", icon: Zap }
      ],
      testimonial: "« Local AI nous a permis de passer d'une maintenance réactive à prédictive, réduisant notre downtime de 30%. »",
      author: "Directeur de l'innovation industrielle",
      date: "Septembre 2023"
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
              <Users className="w-10 h-10 text-premium filter drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
              Études de Cas
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Découvrez comment nos clients transforment leurs organisations avec Local AI
            </motion.p>
          </div>

          {/* Case Studies */}
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                className="glass rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <div className={`p-6 bg-gradient-to-r ${study.color.replace('text-', 'from-').replace('-500', '-500/20')} to-transparent`}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex items-center mb-4 md:mb-0">
                      <div className={`w-12 h-12 ${study.color} mr-4 filter drop-shadow-[0_0_8px_${study.glow}]`}>
                        {React.createElement(study.icon, { className: "w-full h-full" })}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                          {study.company}
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300">
                          {study.sector}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <Calendar className="w-5 h-5 mr-2" />
                      {study.date}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                        Défi
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        {study.challenge}
                      </p>
                      
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                        Solution
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        {study.solution}
                      </p>
                      
                      <div className="p-4 bg-sovereign/10 rounded-lg">
                        <p className="text-sovereign-700 dark:text-sovereign-300 italic">
                          "{study.testimonial}"
                        </p>
                        <p className="text-premium dark:text-premium font-semibold mt-2">
                          — {study.author}
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                        Résultats
                      </h3>
                      
                      <div className="space-y-4">
                        {study.results.map((result, resultIndex) => (
                          <div 
                            key={resultIndex} 
                            className="p-4 rounded-lg bg-white/10 dark:bg-black/20"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-gray-600 dark:text-gray-400">
                                {result.metric}
                              </span>
                              {React.createElement(result.icon, { className: "w-5 h-5 text-premium" })}
                            </div>
                            <div className="text-2xl font-bold text-premium dark:text-premium">
                              {result.value}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <button className="w-full mt-6 py-3 bg-gradient-to-r from-sovereign to-sovereign text-white rounded-lg font-semibold hover:from-sovereign-600 hover:to-sovereign-600 transition-all flex items-center justify-center gap-2">
                        <Download className="w-5 h-5" />
                        Télécharger l'étude complète
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            className="glass rounded-xl p-8 mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Prêt à transformer votre organisation ?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Contactez notre équipe pour une étude d'impact personnalisée adaptée à votre secteur.
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-sovereign to-sovereign text-white rounded-lg font-semibold hover:from-sovereign-600 hover:to-sovereign-600 transition-all shadow-lg">
              Demander une étude personnalisée
            </button>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Section Support Urgente */}
      <UrgentSupportSection />
      
      <LocalAIFooter />
    </div>
  );
};