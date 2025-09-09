import React from 'react';
import { motion } from "framer-motion";
import { Building, Scale, Factory, LayoutTemplate, Briefcase, TrendingUp, Calculator, Zap, Heart, Landmark, School, ShoppingCart, Headphones, FileText, Workflow, Eye, Brain, GraduationCap, Shield, Truck, Target, Wrench, Stethoscope, TrendingDown, Activity, Home, CheckCircle, Star, Clock, Sparkles } from "lucide-react";
import { LocalAIHeader } from './LocalAIHeader';
import { LocalAIFooter } from './LocalAIFooter';
import { UrgentSupportSection } from './UrgentSupportSection';
import { Link } from 'react-router-dom';

export const LocalAISolutions = () => {
  const financeSolution = {
    title: "Finance & Banque",
    icon: Building,
    accentColor: "purple",
    businessValue: "€500k+ conformité économisée",
    metrics: [
      {"Clients Cibles": "500-5000 employés"},
      {"ROI Moyen": "285%"},
      {"Break-even": "8 mois"}
    ],
    features: [
      "Analyse documentaire RGPD-compliant",
      "Automatisation des processus réglementaires",
      "Reporting ACPR automatisé",
      "Gestion des risques en temps réel"
    ]
  };

  const legalSolution = {
    title: "Legal & Conseil",
    icon: Scale,
    accentColor: "cyan",
    businessValue: "+60% rapidité recherche",
    metrics: [
      {"Clients Cibles": "50-500 employés"}, 
      {"Confidentialité": "100%"},
      {"Précision RAG": "95%"}
    ],
    features: [
      "RAG juridique sur documents confidentiels",
      "Analyse de contrats automatisée",
      "Veille juridique personnalisée",
      "Génération de clauses légales"
    ]
  };

  const manufacturingSolution = {
    title: "Industrie Manufacturing",
    icon: Factory,
    accentColor: "orange",
    businessValue: "-30% downtime machines",
    metrics: [
      {"Clients Cibles": "1000+ employés"},
      {"Maintenance": "Prédictive"}, 
      {"Documentation": "Multilingue"}
    ],
    features: [
      "Maintenance prédictive via IoT",
      "Documentation technique multilingue",
      "Assistants virtuels pour opérateurs",
      "Optimisation des processus de production"
    ]
  };

  const insuranceSolution = {
    title: "Assurance & Actuariat",
    icon: Shield,
    accentColor: "indigo",
    businessValue: "Révolution IA du secteur",
    metrics: [
      {"Clients Cibles": "Assureurs, Mutuelles, Courtiers"},
      {"Conformité": "Solvabilité II"},
      {"Fraude Réduite": "-85%"}
    ],
    features: [
      "Souscription intelligente automatisée",
      "Détection fraude comportementale",
      "Modélisation catastrophes naturelles", 
      "Indemnisation digitalisée rapide"
    ]
  };

  const healthcareSolution = {
    title: "Santé & Pharmaceutique",
    icon: Heart,
    accentColor: "red",
    businessValue: "+40% efficacité recherche",
    metrics: [
      {"Clients Cibles": "100-10000 employés"},
      {"Conformité": "HIPAA/HDS"},
      {"Précision RAG": "98%"}
    ],
    features: [
      "Recherche clinique confidentielle",
      "Assistants virtuels pour médecins",
      "Analyse de données patients (anonymisées)",
      "Automatisation des processus réglementaires"
    ]
  };

  const publicSectorSolution = {
    title: "Secteur Public & Administrations",
    icon: Landmark,
    accentColor: "blue",
    businessValue: "-50% temps traitement",
    metrics: [
      {"Clients Cibles": "Toutes administrations"},
      {"Conformité": "RGPD/EIDAS"},
      {"Sécurité": "Niveau 3"}
    ],
    features: [
      "Services numériques souverains",
      "Traitement automatisé des demandes",
      "Assistants pour agents publics",
      "Archivage sécurisé à long terme"
    ]
  };

  const educationSolution = {
    title: "Éducation & Formation",
    icon: School,
    accentColor: "yellow",
    businessValue: "+60% personnalisation apprentissage",
    metrics: [
      {"Clients Cibles": "Écoles, Universités, Organismes"},
      {"Conformité": "RGPD"},
      {"Accessibilité": "WCAG 2.1"}
    ],
    features: [
      "Tuteurs IA personnalisés",
      "Génération de contenus pédagogiques",
      "Évaluation automatique des compétences",
      "Support multilingue pour l'international"
    ]
  };

  const retailSolution = {
    title: "Retail & E-commerce",
    icon: ShoppingCart,
    accentColor: "pink",
    businessValue: "+35% conversion ventes",
    metrics: [
      {"Clients Cibles": "Tous formats retail"},
      {"Personnalisation": "Temps réel"},
      {"Analytics": "Prédictif"}
    ],
    features: [
      "Recommandations produits IA",
      "Chatbots vente assistée",
      "Analyse comportementale clients",
      "Optimisation des stocks prédictive"
    ]
  };

  const sectorROIComparison = [
    {
      name: "Finance",
      icon: Building,
      color: "text-growth",
      glowColor: "rgba(254,185,9,0.8)",
      breakEven: "8 mois",
      roi3Years: "285%",
      savings: "€500k/an"
    },
    {
      name: "Legal",
      icon: Scale,
      color: "text-premium",
      glowColor: "rgba(34,211,238,0.8)",
      breakEven: "6 mois",
      roi3Years: "320%",
      savings: "€300k/an"
    },
    {
      name: "Industry",
      icon: Factory,
      color: "text-action",
      glowColor: "rgba(249,115,22,0.8)",
      breakEven: "12 mois",
      roi3Years: "220%",
      savings: "€800k/an"
    },
    {
      name: "Santé",
      icon: Heart,
      color: "text-action",
      glowColor: "rgba(239,68,68,0.8)",
      breakEven: "9 mois",
      roi3Years: "250%",
      savings: "€400k/an"
    },
    {
      name: "Public",
      icon: Landmark,
      color: "text-sovereign",
      glowColor: "rgba(254,185,9,0.8)",
      breakEven: "10 mois",
      roi3Years: "200%",
      savings: "€350k/an"
    },
    {
      name: "Éducation",
      icon: School,
      color: "text-success",
      glowColor: "rgba(234,179,8,0.8)",
      breakEven: "7 mois",
      roi3Years: "275%",
      savings: "€300k/an"
    },
    {
      name: "Retail",
      icon: ShoppingCart,
      color: "text-premium",
      glowColor: "rgba(236,72,153,0.8)",
      breakEven: "6 mois",
      roi3Years: "300%",
      savings: "€600k/an"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <LocalAIHeader />
      
      {/* Hero Section */}
      <motion.div 
        className="pt-24 pb-16 px-4 bg-gradient-to-br from-growth-50 to-sovereign-50 dark:from-gray-900 dark:to-gray-800"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto text-center">

          {/* Titre principal */}
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Solutions IA Métier
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-growth to-sovereign">
              pour Chaque Industrie
            </span>
          </motion.h1>

          {/* Sous-titre */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            8 secteurs d'activité, 15+ cas d'usage prêts à déployer. Des workflows IA 
            spécialisés qui transforment vos processus métier avec un <strong>ROI prouvé de 275%</strong>.
          </motion.p>

          {/* Points de valeur rapides */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 mb-10 text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-success" />
              <span>Solutions clé en main par secteur</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-success" />
              <span>Workflows pré-configurés et testés</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-success" />
              <span>Break-even garanti en 6-12 mois</span>
            </div>
          </motion.div>

          {/* Indicateur de valeur */}
          <motion.div 
            className="mt-10 p-6 glass-green rounded-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Star className="w-5 h-5 text-success" />
              <span className="font-semibold text-gray-800 dark:text-white">Success Story</span>
              <Star className="w-5 h-5 text-success" />
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-bold text-success dark:text-success">Cabinet Juridique:</span> 
              ROI de <span className="font-bold text-growth dark:text-growth">320%</span> en 18 mois
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              60% de temps économisé sur l'analyse documentaire + automatisation complète des processus
            </p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="pb-16 px-4"
        initial="hidden" 
        animate="visible"
      >
        <div className="max-w-7xl mx-auto">

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Colonne Gauche: Secteurs */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Link to="/solutions/finance" className="block">
                  <div className="glass-purple p-6 rounded-xl relative overflow-hidden hover:scale-[1.02] transition-transform cursor-pointer">
                    <div className="flex items-center space-x-3 mb-4">
                      <Building className="w-8 h-8 text-growth filter drop-shadow-[0_0_8px_rgba(254,185,9,0.8)]" />
                      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                        Finance & Banque
                      </h2>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Conformité maximale, automatisation des processus réglementaires
                    </p>
                    
                    <div className="space-y-3">
                      {financeSolution.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Zap className="w-4 h-4 text-growth" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 p-3 bg-premium/10 rounded-lg">
                      <div className="text-sm text-gray-600 dark:text-gray-400">Impact Business:</div>
                      <div className="font-bold text-growth dark:text-growth">
                        {financeSolution.businessValue}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link to="/solutions/legal" className="block">
                  <div className="glass-cyan p-6 rounded-xl relative overflow-hidden hover:scale-[1.02] transition-transform cursor-pointer">
                    <div className="flex items-center space-x-3 mb-4">
                      <Scale className="w-8 h-8 text-premium filter drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                        Legal & Conseil
                      </h2>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Recherche juridique confidentielle, analyse de contrats automatisée
                    </p>
                    
                    <div className="space-y-3">
                      {legalSolution.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Zap className="w-4 h-4 text-premium" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 p-3 bg-sovereign/10 rounded-lg">
                      <div className="text-sm text-gray-600 dark:text-gray-400">Impact Business:</div>
                      <div className="font-bold text-premium dark:text-premium">
                        {legalSolution.businessValue}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                <Link to="/solutions/healthcare" className="block">
                  <div className="glass-red p-6 rounded-xl relative overflow-hidden hover:scale-[1.02] transition-transform cursor-pointer">
                    <div className="flex items-center space-x-3 mb-4">
                      <Heart className="w-8 h-8 text-action filter drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                        Santé & Pharmaceutique
                      </h2>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Recherche confidentielle, assistants pour professionnels de santé
                    </p>
                    
                    <div className="space-y-3">
                      {healthcareSolution.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Zap className="w-4 h-4 text-action" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 p-3 bg-action/10 rounded-lg">
                      <div className="text-sm text-gray-600 dark:text-gray-400">Impact Business:</div>
                      <div className="font-bold text-action dark:text-action">
                        {healthcareSolution.businessValue}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                <Link to="/solutions/public" className="block">
                  <div className="glass-blue p-6 rounded-xl relative overflow-hidden hover:scale-[1.02] transition-transform cursor-pointer">
                    <div className="flex items-center space-x-3 mb-4">
                      <Landmark className="w-8 h-8 text-sovereign filter drop-shadow-[0_0_8px_rgba(254,185,9,0.8)]" />
                      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                        Secteur Public & Administrations
                      </h2>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Services numériques souverains, automatisation des processus
                    </p>
                    
                    <div className="space-y-3">
                      {publicSectorSolution.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Zap className="w-4 h-4 text-sovereign" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 p-3 bg-sovereign/10 rounded-lg">
                      <div className="text-sm text-gray-600 dark:text-gray-400">Impact Business:</div>
                      <div className="font-bold text-sovereign dark:text-sovereign">
                        {publicSectorSolution.businessValue}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
            
            {/* Colonne Droite: Industry + Templates + New sectors */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link to="/solutions/insurance" className="block">
                  <div className="glass-indigo p-6 rounded-xl relative overflow-hidden hover:scale-[1.02] transition-transform cursor-pointer">
                    <div className="flex items-center space-x-3 mb-4">
                      <Shield className="w-8 h-8 text-sovereign filter drop-shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                        Assurance & Actuariat
                      </h2>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Révolution IA pour assurance: souscription, fraude, actuariat
                    </p>
                    
                    <div className="space-y-3">
                      {insuranceSolution.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Zap className="w-4 h-4 text-sovereign" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 p-3 bg-sovereign/10 rounded-lg">
                      <div className="text-sm text-gray-600 dark:text-gray-400">Impact Business:</div>
                      <div className="font-bold text-sovereign-600 dark:text-sovereign-400">
                        {insuranceSolution.businessValue}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link to="/solutions/manufacturing" className="block">
                  <div className="glass-orange p-6 rounded-xl relative overflow-hidden hover:scale-[1.02] transition-transform cursor-pointer">
                    <div className="flex items-center space-x-3 mb-4">
                      <Factory className="w-8 h-8 text-action filter drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
                      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                        Industrie Manufacturing
                      </h2>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Maintenance prédictive, documentation technique multilingue
                    </p>
                    
                    <div className="space-y-3">
                      {manufacturingSolution.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Zap className="w-4 h-4 text-action" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 p-3 bg-action/10 rounded-lg">
                      <div className="text-sm text-gray-600 dark:text-gray-400">Impact Business:</div>
                      <div className="font-bold text-action dark:text-action">
                        {manufacturingSolution.businessValue}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                <Link to="/solutions/education" className="block">
                  <div className="glass-yellow p-6 rounded-xl relative overflow-hidden hover:scale-[1.02] transition-transform cursor-pointer">
                    <div className="flex items-center space-x-3 mb-4">
                      <School className="w-8 h-8 text-success filter drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" />
                      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                        Éducation & Formation
                      </h2>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Apprentissage personnalisé, génération de contenus pédagogiques
                    </p>
                    
                    <div className="space-y-3">
                      {educationSolution.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Zap className="w-4 h-4 text-success" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 p-3 bg-success/10 rounded-lg">
                      <div className="text-sm text-gray-600 dark:text-gray-400">Impact Business:</div>
                      <div className="font-bold text-success-600 dark:text-success-400">
                        {educationSolution.businessValue}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
              >
                <Link to="/solutions/retail" className="block">
                  <div className="glass-pink p-6 rounded-xl relative overflow-hidden hover:scale-[1.02] transition-transform cursor-pointer">
                    <div className="flex items-center space-x-3 mb-4">
                      <ShoppingCart className="w-8 h-8 text-premium filter drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]" />
                      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                        Retail & E-commerce
                      </h2>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Recommandations IA, chatbots vente assistée
                    </p>
                    
                    <div className="space-y-3">
                      {retailSolution.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Zap className="w-4 h-4 text-premium" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 p-3 bg-action/10 rounded-lg">
                      <div className="text-sm text-gray-600 dark:text-gray-400">Impact Business:</div>
                      <div className="font-bold text-premium dark:text-premium">
                        {retailSolution.businessValue}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
          
          {/* ROI Comparison Section */}
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="glass-green p-8 rounded-xl relative overflow-hidden">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <TrendingUp className="w-6 h-6 text-success mr-3 filter drop-shadow-[0_0_8px_rgba(254,185,9,0.8)]" />
                Comparatif ROI par Secteur
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
                {sectorROIComparison.map((sector) => (
                  <div 
                    key={sector.name} 
                    className="text-center p-4 bg-white/10 dark:bg-black/20 rounded-lg"
                  >
                    <sector.icon className={`w-8 h-8 ${sector.color} mx-auto mb-2 filter drop-shadow-[0_0_8px_${sector.glowColor}]`} />
                    <h3 className="font-semibold text-gray-800 dark:text-white text-sm mb-1">{sector.name}</h3>
                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Break-even:</span>
                        <span className="font-semibold">{sector.breakEven}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">ROI 3 ans:</span>
                        <span className="font-semibold text-success dark:text-success">{sector.roi3Years}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <Link to="/contact">
                  <motion.button
                    className="px-8 py-3 bg-growth text-white rounded-lg font-semibold hover:bg-growth-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    Obtenir Étude ROI Personnalisée
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
          
          {/* Use Cases Section */}
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="glass-blue p-8 rounded-xl relative overflow-hidden">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <Brain className="w-6 h-6 text-sovereign mr-3 filter drop-shadow-[0_0_8px_rgba(254,185,9,0.8)]" />
                Cas d'Usage
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Use Case 1: Support Client Intelligent 24/7 */}
                <Link to="/solutions/support-client" className="block">
                  <div className="glass-purple p-6 rounded-xl relative overflow-hidden hover:scale-[1.02] transition-transform cursor-pointer">
                    <div className="flex items-center space-x-3 mb-4">
                      <Headphones className="w-8 h-8 text-growth filter drop-shadow-[0_0_8px_rgba(254,185,9,0.8)]" />
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                        Support Client Intelligent 24/7
                      </h3>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Stack technique :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Open WebUI + n8n + Supabase + Qdrant</div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Workflow :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Chatbot multilingue avec escalade automatique vers humains</div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Valeur client :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">-60% coûts support, +40% satisfaction client</div>
                    </div>
                    
                    <div>
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Secteurs cibles :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">E-commerce, SaaS, Télécoms</div>
                    </div>
                  </div>
                </Link>
                
                {/* Use Case 2: Analyse Documentaire & Extraction d'Insights */}
                <Link to="/solutions/document-analysis" className="block">
                  <div className="glass-cyan p-6 rounded-xl relative overflow-hidden hover:scale-[1.02] transition-transform cursor-pointer">
                    <div className="flex items-center space-x-3 mb-4">
                      <FileText className="w-8 h-8 text-premium filter drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                        Analyse Documentaire & Extraction d'Insights
                      </h3>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Stack technique :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Ollama + Neo4j + Qdrant + n8n</div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Workflow :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Ingestion massive docs → Analyse sémantique → Graphes de connaissances</div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Valeur client :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">-80% temps d'analyse, détection insights invisibles</div>
                    </div>
                    
                    <div>
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Secteurs cibles :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Legal, Finance, Recherche, Consulting</div>
                    </div>
                  </div>
                </Link>
                
                {/* Use Case 3: Workflows d'Automatisation Intelligente */}
                <Link to="/solutions/workflow-automation" className="block">
                  <div className="glass-orange p-6 rounded-xl relative overflow-hidden hover:scale-[1.02] transition-transform cursor-pointer">
                    <div className="flex items-center space-x-3 mb-4">
                      <Workflow className="w-8 h-8 text-action filter drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                        Workflows d'Automatisation Intelligente
                      </h3>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Stack technique :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">n8n + Ollama + Supabase + API externes</div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Workflow :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Déclencheurs → Prise décision IA → Actions automatiques</div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Valeur client :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">+300% productivité processus, -50% erreurs humaines</div>
                    </div>
                    
                    <div>
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Secteurs cibles :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">RH, Comptabilité, Operations, Marketing</div>
                    </div>
                  </div>
                </Link>
                
                {/* Use Case 4: Veille & Intelligence Stratégique */}
                <Link to="/solutions/strategic-intelligence" className="block">
                  <div className="glass-green p-6 rounded-xl relative overflow-hidden hover:scale-[1.02] transition-transform cursor-pointer">
                    <div className="flex items-center space-x-3 mb-4">
                      <Eye className="w-8 h-8 text-success filter drop-shadow-[0_0_8px_rgba(254,185,9,0.8)]" />
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                        Veille & Intelligence Stratégique
                      </h3>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Stack technique :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">SearXNG + n8n + Qdrant + Langfuse</div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Workflow :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Crawling web → Analyse sentiment → Alertes personnalisées</div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Valeur client :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Anticipation concurrence, détection opportunités/risques</div>
                    </div>
                    
                    <div>
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Secteurs cibles :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Direction Générale, Innovation, Marketing, Finance</div>
                    </div>
                  </div>
                </Link>
                
                {/* Use Case 5: Aide à la Décision Basée sur Données */}
                <Link to="/solutions/data-decision" className="block">
                  <div className="glass-red p-6 rounded-xl relative overflow-hidden hover:scale-[1.02] transition-transform cursor-pointer">
                    <div className="flex items-center space-x-3 mb-4">
                      <TrendingUp className="w-8 h-8 text-action filter drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                        Aide à la Décision Basée sur Données
                      </h3>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Stack technique :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Neo4j + Qdrant + Ollama + tableaux de bord Supabase</div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Workflow :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Agrégation multi-sources → Modélisation graphes → Recommandations</div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Valeur client :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">+25% qualité décisions, réduction risques business</div>
                    </div>
                    
                    <div>
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Secteurs cibles :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Finance, Santé, Industrie, Secteur Public</div>
                    </div>
                  </div>
                </Link>
                
                {/* Use Case 6: Formation & Montée en Compétences IA */}
                <Link to="/solutions/training" className="block">
                  <div className="glass-yellow p-6 rounded-xl relative overflow-hidden hover:scale-[1.02] transition-transform cursor-pointer">
                    <div className="flex items-center space-x-3 mb-4">
                      <GraduationCap className="w-8 h-8 text-success filter drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" />
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                        Formation & Montée en Compétences IA
                      </h3>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Stack technique :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Open WebUI + n8n + Supabase + modules pédagogiques</div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Workflow :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Évaluation niveau → Parcours personnalisé → Suivi progression</div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Valeur client :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">-70% coûts formation, +200% engagement apprenants</div>
                    </div>
                    
                    <div>
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Secteurs cibles :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Éducation, Corporate Training, Transformation digitale</div>
                    </div>
                  </div>
                </Link>
                
                {/* Use Case 7: Détection de Fraude & Conformité */}
                <Link to="/solutions/fraud-detection" className="block">
                  <div className="glass-red p-6 rounded-xl relative overflow-hidden hover:scale-[1.02] transition-transform cursor-pointer">
                    <div className="flex items-center space-x-3 mb-4">
                      <Shield className="w-8 h-8 text-action filter drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                        Détection de Fraude & Conformité
                      </h3>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Stack technique :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Ollama + Neo4j + Qdrant + n8n + monitoring temps réel</div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Workflow :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Analyse patterns comportementaux → Scoring risque → Alertes automatiques</div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Valeur client :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">-85% fraudes non détectées, conformité automatisée RGPD/AML</div>
                    </div>
                    
                    <div>
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Secteurs cibles :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Banque, Assurance, Fintech, E-commerce</div>
                    </div>
                  </div>
                </Link>
                
                {/* Use Case 8: Optimisation Supply Chain */}
                <Link to="/solutions/supply-chain" className="block">
                  <div className="glass-orange p-6 rounded-xl relative overflow-hidden hover:scale-[1.02] transition-transform cursor-pointer">
                    <div className="flex items-center space-x-3 mb-4">
                      <Truck className="w-8 h-8 text-action filter drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                        Optimisation Supply Chain & Prévision Demande
                      </h3>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Stack technique :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Neo4j + Ollama + n8n + APIs logistiques + Supabase</div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Workflow :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Analyse multi-variables → Modèles prédictifs → Optimisation stocks</div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Valeur client :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">-30% coûts logistiques, +95% précision prévisions</div>
                    </div>
                    
                    <div>
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Secteurs cibles :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Retail, Industrie, Distribution, Manufacturing</div>
                    </div>
                  </div>
                </Link>
                
                {/* Use Case 9: Marketing Hyper-Personnalisé */}
                <Link to="/solutions/marketing-personalization" className="block">
                  <div className="glass-purple p-6 rounded-xl relative overflow-hidden hover:scale-[1.02] transition-transform cursor-pointer">
                    <div className="flex items-center space-x-3 mb-4">
                      <Target className="w-8 h-8 text-growth filter drop-shadow-[0_0_8px_rgba(254,185,9,0.8)]" />
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                        Marketing Hyper-Personnalisé
                      </h3>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Stack technique :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Ollama + Qdrant + n8n + Supabase + intégrations CRM/MA</div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Workflow :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Profiling client → Génération contenu adapté → A/B testing</div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Valeur client :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">+150% engagement, +80% conversions, -70% temps création</div>
                    </div>
                    
                    <div>
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Secteurs cibles :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">E-commerce, Médias, Agences, SaaS B2B</div>
                    </div>
                  </div>
                </Link>
                
                {/* Use Case 10: Maintenance Prédictive IoT */}
                <Link to="/solutions/predictive-maintenance" className="block">
                  <div className="glass-cyan p-6 rounded-xl relative overflow-hidden hover:scale-[1.02] transition-transform cursor-pointer">
                    <div className="flex items-center space-x-3 mb-4">
                      <Wrench className="w-8 h-8 text-premium filter drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                        Maintenance Prédictive IoT & Industrie 4.0
                      </h3>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Stack technique :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Neo4j + Ollama + n8n + connecteurs IoT + Qdrant</div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Workflow :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Capteurs IoT → Analyse patterns → Prédiction pannes</div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Valeur client :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">-60% temps arrêt machines, -40% coûts maintenance</div>
                    </div>
                    
                    <div>
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Secteurs cibles :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Industrie, Énergie, Transport, Smart Buildings</div>
                    </div>
                  </div>
                </Link>
                
                {/* Use Case 11: Assistant Médical */}
                <Link to="/solutions/medical-assistant" className="block">
                  <div className="glass-green p-6 rounded-xl relative overflow-hidden hover:scale-[1.02] transition-transform cursor-pointer">
                    <div className="flex items-center space-x-3 mb-4">
                      <Stethoscope className="w-8 h-8 text-success filter drop-shadow-[0_0_8px_rgba(254,185,9,0.8)]" />
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                        Assistant Médical & Diagnostic Augmenté
                      </h3>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Stack technique :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Ollama (modèles médicaux) + Neo4j + Qdrant + sécurité HIPAA</div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Workflow :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Analyse symptômes → Aide diagnostic → Protocoles soins</div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Valeur client :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">+40% précision diagnostic, -50% temps consultation</div>
                    </div>
                    
                    <div>
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Secteurs cibles :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Cabinets médicaux, Cliniques, Télémédecine</div>
                    </div>
                  </div>
                </Link>
                
                {/* Use Case 12: Trading Algorithmique */}
                <Link to="/solutions/algorithmic-trading" className="block">
                  <div className="glass-yellow p-6 rounded-xl relative overflow-hidden hover:scale-[1.02] transition-transform cursor-pointer">
                    <div className="flex items-center space-x-3 mb-4">
                      <TrendingDown className="w-8 h-8 text-success filter drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" />
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                        Trading Algorithmique & Gestion Portefeuille
                      </h3>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Stack technique :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Ollama + Neo4j + n8n + APIs financières + Qdrant</div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Workflow :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Analyse marchés → Signaux trading → Exécution ordres</div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Valeur client :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">+25% performance vs benchmarks, -60% émotionnel trading</div>
                    </div>
                    
                    <div>
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Secteurs cibles :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Hedge funds, Family offices, Banques privées</div>
                    </div>
                  </div>
                </Link>
                
                {/* Use Case 13: Cybersécurité Comportementale */}
                <Link to="/solutions/cybersecurity" className="block">
                  <div className="glass-blue p-6 rounded-xl relative overflow-hidden hover:scale-[1.02] transition-transform cursor-pointer">
                    <div className="flex items-center space-x-3 mb-4">
                      <Activity className="w-8 h-8 text-sovereign filter drop-shadow-[0_0_8px_rgba(254,185,9,0.8)]" />
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                        Cybersécurité Comportementale & Threat Detection
                      </h3>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Stack technique :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Ollama + Neo4j + n8n + SIEM + Qdrant</div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Workflow :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Analyse comportements réseau → Détection anomalies → Response automatique</div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Valeur client :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">-90% temps détection threats, +200% efficacité SOC</div>
                    </div>
                    
                    <div>
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Secteurs cibles :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Entreprises, Secteur public, Cloud providers</div>
                    </div>
                  </div>
                </Link>
                
                {/* Use Case 14: Gestion Immobilière Intelligente */}
                <Link to="/solutions/real-estate-management" className="block">
                  <div className="glass-pink p-6 rounded-xl relative overflow-hidden hover:scale-[1.02] transition-transform cursor-pointer">
                    <div className="flex items-center space-x-3 mb-4">
                      <Home className="w-8 h-8 text-premium filter drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]" />
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                        Gestion Immobilière Intelligente & PropTech
                      </h3>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Stack technique :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Ollama + Neo4j + n8n + IoT + Supabase + APIs marchés</div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Workflow :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Valorisation automatique → Gestion locataires → Maintenance prédictive</div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Valeur client :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">+15% rendements, -40% coûts gestion, +60% satisfaction locataires</div>
                    </div>
                    
                    <div>
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Secteurs cibles :</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Gestionnaires patrimoine, Promoteurs, Syndics</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>


          {/* Success Stories Section */}
          <motion.div 
            className="mt-16 glass-blue p-10 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                Projection Success Stories par Secteur 
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Résultats concrets visés de nos clients dans chaque industrie
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="testimonial-card p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-success fill-current" />
                  ))}
                </div>
                <div className="flex items-center space-x-3 mb-4">
                  <Building className="w-6 h-6 text-growth" />
                  <span className="font-semibold text-growth dark:text-growth">Finance & Banque</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  "320% de ROI en 18 mois avec automatisation complète de nos processus de conformité. 
                  Analyse documentaire 10x plus rapide et zéro erreur RGPD."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-premium rounded-full flex items-center justify-center text-white font-bold">
                    A.M
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 dark:text-white">Antoine Mercier</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">DSI, Banque Régionale Européenne</div>
                  </div>
                </div>
              </div>

              <div className="testimonial-card p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-success fill-current" />
                  ))}
                </div>
                <div className="flex items-center space-x-3 mb-4">
                  <Scale className="w-6 h-6 text-premium" />
                  <span className="font-semibold text-premium dark:text-premium">Legal & Conseil</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  "Notre équipe juridique économise 60% de son temps sur l'analyse documentaire. 
                  RAG sur 100,000 documents confidentiels avec précision de 95%."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-sovereign rounded-full flex items-center justify-center text-white font-bold">
                    C.R
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 dark:text-white">Claire Rousseau</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Associée, Cabinet Rousseau & Associés</div>
                  </div>
                </div>
              </div>

              <div className="testimonial-card p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-success fill-current" />
                  ))}
                </div>
                <div className="flex items-center space-x-3 mb-4">
                  <Factory className="w-6 h-6 text-action" />
                  <span className="font-semibold text-action dark:text-action">Manufacturing</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  "Maintenance prédictive révolutionnaire : -60% de temps d'arrêt machines, 
                  documentation multilingue générée automatiquement."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-action rounded-full flex items-center justify-center text-white font-bold">
                    L.D
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 dark:text-white">Laurent Dubois</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Directeur Industrie, TechManufacturing SA</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-10">
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
                <div className="metric-highlight">
                  <div className="text-3xl font-bold text-success">8</div>
                  <div className="text-gray-600 dark:text-gray-400">Secteurs Transformés</div>
                </div>
                <div className="metric-highlight">
                  <div className="text-3xl font-bold text-sovereign">200+</div>
                  <div className="text-gray-600 dark:text-gray-400">Solutions Déployées</div>
                </div>
                <div className="metric-highlight">
                  <div className="text-3xl font-bold text-growth">275%</div>
                  <div className="text-gray-600 dark:text-gray-400">ROI Moyen Constaté</div>
                </div>
                <div className="metric-highlight">
                  <div className="text-3xl font-bold text-action">8 mois</div>
                  <div className="text-gray-600 dark:text-gray-400">Break-even Moyen</div>
                </div>
              </div>
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