import React from 'react';
import { motion } from "framer-motion";
import { Brain, Shield, Zap, Network, Calculator, Play, Building, Scale, Factory, Lock, Wallet, Users, TrendingUp, Package, BookOpen, Settings, Heart, GraduationCap, ShoppingBag, Briefcase, ArrowRight, CheckCircle, Clock, MessageCircle, FileText, Phone, Award, Star, Timer } from "lucide-react";
import { LocalAIHeader } from './LocalAIHeader';
import { LocalAIFooter } from './LocalAIFooter';
import { UrgentSupportSection } from './UrgentSupportSection';
import { Link } from 'react-router-dom';
// Écosystème IA Complet
export const LocalAIHomepage = () => {

  // Écosystème des services
  const ecosystemServices = [
    { name: "Ollama", icon: Brain, desc: "LLMs Locaux", color: "blue" },
    { name: "Open WebUI", icon: Play, desc: "Interface Chat", color: "green" },
    { name: "N8N", icon: Network, desc: "Automation", color: "purple" },
    { name: "Supabase", icon: Shield, desc: "Base de données", color: "cyan" },
    { name: "Qdrant", icon: Zap, desc: "Vector Store", color: "orange" },
    { name: "Neo4j", icon: Network, desc: "Graph DB", color: "red" }
  ];

  // Secteurs d'activité
  const sectors = [
    { name: "Finance & Banque", icon: Building, path: "/solutions/finance", color: "blue", desc: "Conformité ACPR, analyse risque" },
    { name: "Legal & Conseil", icon: Scale, path: "/solutions/legal", color: "purple", desc: "Confidentialité totale, research juridique" },
    { name: "Manufacturing", icon: Factory, path: "/solutions/manufacturing", color: "orange", desc: "Maintenance prédictive, optimisation" },
    { name: "Support Client 24/7", icon: MessageCircle, path: "/solutions/support-client", color: "red", desc: "Assistance intelligente, satisfaction client" },
    { name: "Analyse Documentaire", icon: FileText, path: "/solutions/document-analysis", color: "green", desc: "Extraction insights, traitement masse" },
    { name: "Commerce", icon: ShoppingBag, path: "/solutions/retail", color: "cyan", desc: "Personnalisation, analyse comportement" },
    { name: "Secteur Public", icon: Briefcase, path: "/solutions/public", color: "yellow", desc: "Souveraineté numérique, transparence" }
  ];

  // Approches de déploiement
  const approaches = [
    {
      name: "Done For You",
      icon: Package,
      path: "/expertise/dfy",
      color: "blue",
      desc: "Clé en main, 4-8 semaines",
      features: ["Équipe dédiée", "Support 3 mois", "ROI 300-500%"]
    },
    {
      name: "Done With You",
      icon: Users,
      path: "/expertise/dwy",
      color: "purple",
      desc: "Collaboration, formation incluse",
      features: ["Formation 20-40h", "Support 2 mois", "ROI 200-350%"]
    },
    {
      name: "Do It Yourself",
      icon: BookOpen,
      path: "/expertise/diy",
      color: "green",
      desc: "Ressources complètes, autonomie",
      features: ["Accès 24/7", "Documentation", "ROI 150-250%"]
    }
  ];

  // Mapping des couleurs vives vers notre palette Tournesol Souverain
  const colorMapping = {
    blue: { glass: 'glass-blue', text: 'text-blue-500', palette: 'sovereign', rgba: 'rgba(254,185,9,0.8)' },
    green: { glass: 'glass-green', text: 'text-green-500', palette: 'growth', rgba: 'rgba(99,141,19,0.8)' },
    purple: { glass: 'glass-purple', text: 'text-purple-500', palette: 'premium', rgba: 'rgba(10,50,38,0.8)' },
    orange: { glass: 'glass-orange', text: 'text-orange-500', palette: 'action', rgba: 'rgba(240,105,5,0.8)' },
    red: { glass: 'glass-red', text: 'text-red-500', palette: 'action', rgba: 'rgba(240,105,5,0.8)' },
    cyan: { glass: 'glass-cyan', text: 'text-cyan-500', palette: 'success', rgba: 'rgba(254,185,9,0.8)' },
    yellow: { glass: 'glass-yellow', text: 'text-yellow-500', palette: 'success', rgba: 'rgba(254,185,9,0.8)' }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-custom-dark dark:to-custom-darker">
      <LocalAIHeader />
      
      <motion.section 
        className="min-h-screen pt-20 pb-16 px-4"
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Header */}
          <div className="text-center mb-16">
            <motion.div 
              className="mb-6 relative"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
            >
              <div className="inline-block relative">
                {/* HUD Background avec effet holographique */}
                <div className="absolute inset-0 rounded-xl blur-sm opacity-50 animate-pulse bg-gradient-to-r from-success/20 to-growth/20"></div>
                <div className="relative px-8 py-3 rounded-xl border border-success/40 backdrop-blur-md shadow-lg shadow-success/20">
                  <div className="flex items-center space-x-3">
                    <motion.div 
                      className="w-2 h-2 rounded-full bg-success"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    ></motion.div>
                    <span className="text-success dark:text-success text-sm font-bold tracking-wide filter drop-shadow-[0_0_8px_rgba(254,185,9,0.8)]">
                      STATUS: ✅ AI ACT READY • IA SOUVERAINE • FRUGALE IA • IA DURABLE
                    </span>
                    <motion.div 
                      className="w-2 h-2 rounded-full bg-success"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ repeat: Infinity, duration: 1.5, delay: 0.7 }}
                    ></motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="relative mb-8">
              {/* Background Grid effet cockpit */}
              <div className="absolute inset-0 bg-grid-pattern opacity-10 animate-pulse"></div>
              
              <motion.div
                className="p-8 rounded-2xl relative overflow-hidden border border-sovereign/30 backdrop-blur-xl shadow-xl shadow-sovereign/20"
                initial={{ opacity: 0, scale: 0.9, rotateX: -15 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                transition={{ duration: 1, type: "spring", stiffness: 100 }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 400 }
                }}
              >
                {/* Particles animées en arrière-plan */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-sovereign rounded-full opacity-60"
                      animate={{
                        x: [Math.random() * 400, Math.random() * 400],
                        y: [Math.random() * 200, Math.random() * 200],
                        opacity: [0.6, 0.1, 0.6],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 3 + Math.random() * 2,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>

                {/* Ligne de déploiement avec effet néon */}
                <motion.div
                  className="text-center mb-4 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, type: "spring" }}
                >
                  <span className="inline-flex items-center px-6 py-2 glass-orange morph-card rounded-full text-action dark:text-action font-bold text-lg">
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                      className="mr-2"
                    >⚡</motion.span>
                    DÉPLOIEMENT 48H GARANTI
                  </span>
                </motion.div>

                {/* Titre principal avec effet holographique */}
                <motion.h1 
                  className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white relative z-10"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <div className="mb-2">Votre Écosystème d'</div>
                  <motion.div
                    className="relative inline-block"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sovereign via-action to-success filter drop-shadow-[0_0_25px_rgba(3,78,100,0.9)] animate-gradient-x relative z-10">
                      IA Souveraine
                    </span>
                    {/* Effet néon pulsant autour du texte */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-sovereign/20 via-action/20 to-success/20 blur-xl"
                      animate={{ opacity: [0.3, 0.7, 0.3] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    ></motion.div>
                  </motion.div>
                </motion.h1>

                {/* Ligne de scan en bas */}
                <motion.div 
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-sovereign via-action to-success"
                  animate={{ width: ["0%", "100%", "0%"] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                ></motion.div>
              </motion.div>
            </div>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 dark:text-custom-gray-400 max-w-4xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <strong className="text-action">Écosystème IA Conforme AI Act UE/RGPD - Licence à Vie</strong><br/>
              Déployez 15+ services IA en 48H. <strong className="text-success">Contrôle total de vos données + ROI 285%.</strong>
            </motion.p>
            
            {/* Graphique de Comparaison Visuel */}
            <motion.div 
              className="max-w-6xl mx-auto mb-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <div className="glass-sovereign rounded-2xl p-8 border border-sovereign/40 backdrop-blur-md shadow-lg shadow-sovereign/20">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    📊 Notre Solution vs Marché Traditionnel
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Comparaison claire des avantages concurrentiels
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Solutions Traditionnelles (Problèmes) */}
                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <div className="text-center mb-4">
                      <div className="inline-block px-4 py-2 bg-action/10 border border-action/30 rounded-full">
                        <span className="text-action dark:text-action font-bold">❌ Solutions Cloud US</span>
                      </div>
                    </div>

                    {/* Barres de comparaison négatives */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Coûts annuels</span>
                        <div className="flex-1 mx-4 bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                          <motion.div 
                            className="h-3 bg-gradient-to-r from-action to-action rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "90%" }}
                            transition={{ delay: 1.2, duration: 1 }}
                          />
                        </div>
                        <span className="text-sm font-bold text-action">€35,900</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Temps déploiement</span>
                        <div className="flex-1 mx-4 bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                          <motion.div 
                            className="h-3 bg-gradient-to-r from-action to-action rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "75%" }}
                            transition={{ delay: 1.4, duration: 1 }}
                          />
                        </div>
                        <span className="text-sm font-bold text-action">6+ mois</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Dépendance US</span>
                        <div className="flex-1 mx-4 bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                          <motion.div 
                            className="h-3 bg-gradient-to-r from-action to-action rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ delay: 1.6, duration: 1 }}
                          />
                        </div>
                        <span className="text-sm font-bold text-action">100%</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Complexité</span>
                        <div className="flex-1 mx-4 bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                          <motion.div 
                            className="h-3 bg-gradient-to-r from-action to-action rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "85%" }}
                            transition={{ delay: 1.8, duration: 1 }}
                          />
                        </div>
                        <span className="text-sm font-bold text-action">Très haute</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Notre Solution (Avantages) */}
                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                  >
                    <div className="text-center mb-4">
                      <div className="inline-block px-4 py-2 bg-success/10 border border-success/30 rounded-full">
                        <span className="text-success font-bold">✅ Notre Écosystème IA Conforme</span>
                      </div>
                    </div>

                    {/* Barres de comparaison positives */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Coût à vie</span>
                        <div className="flex-1 mx-4 bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                          <motion.div 
                            className="h-3 bg-gradient-to-r from-success to-growth rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "30%" }}
                            transition={{ delay: 1.3, duration: 1 }}
                          />
                        </div>
                        <span className="text-sm font-bold text-success">€10,770</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Déploiement</span>
                        <div className="flex-1 mx-4 bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                          <motion.div 
                            className="h-3 bg-gradient-to-r from-success to-growth rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "15%" }}
                            transition={{ delay: 1.5, duration: 1 }}
                          />
                        </div>
                        <span className="text-sm font-bold text-success">48H</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Souveraineté</span>
                        <div className="flex-1 mx-4 bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                          <motion.div 
                            className="h-3 bg-gradient-to-r from-success to-growth rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ delay: 1.7, duration: 1 }}
                          />
                        </div>
                        <span className="text-sm font-bold text-success">100% EU</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Simplicité</span>
                        <div className="flex-1 mx-4 bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                          <motion.div 
                            className="h-3 bg-gradient-to-r from-success to-growth rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "95%" }}
                            transition={{ delay: 1.9, duration: 1 }}
                          />
                        </div>
                        <span className="text-sm font-bold text-success">Clé en main</span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Résumé des économies */}
                <motion.div
                  className="mt-8 text-center glass-success p-6 rounded-xl border border-success/40"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.1 }}
                >
                  <div className="text-2xl font-bold text-success mb-2">
                    💰 Économies Réelles : €25,130 dès la première année
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Soit 70% d'économies + souveraineté européenne garantie
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            {/* CTAs Hiérarchisés */}
            <motion.div 
              className="flex flex-col lg:flex-row justify-center items-center gap-6 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.3, duration: 0.8 }}
            >
              {/* CTA Principal - Calcul ROI avec effet glass premium */}
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5, type: "spring", stiffness: 120 }}
              >
                {/* Glow effect animé */}
                <div className="absolute -inset-1 bg-gradient-to-r from-sovereign via-action to-sovereign rounded-xl blur opacity-40 group-hover:opacity-80 transition duration-500 animate-pulse"></div>
                
                {/* Glass container principal */}
                <div className="relative glass-sovereign px-10 py-5 rounded-xl border border-sovereign/50 backdrop-blur-xl shadow-xl shadow-sovereign/30 overflow-hidden group-hover:border-sovereign/70 transition-all duration-300">
                  
                  <Link to="/roi-calculator" className="flex items-center justify-center text-white text-xl font-bold relative z-10 filter drop-shadow-[0_0_8px_rgba(3,78,100,0.8)]">
                    <div className="mr-3">
                      <Calculator className="w-6 h-6" />
                    </div>
                    Calculer Mes Économies
                  </Link>
                  
                  {/* Particle effects */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-sovereign rounded-full"
                        animate={{
                          x: [Math.random() * 300, Math.random() * 300],
                          y: [Math.random() * 60, Math.random() * 60],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 2 + Math.random() * 2,
                          delay: Math.random() * 2,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
              
              {/* CTA Secondaire - Démo avec effet glass subtil */}
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.7, type: "spring", stiffness: 120 }}
              >
                <div className="relative glass-success px-8 py-4 rounded-xl border border-success/40 backdrop-blur-lg shadow-lg shadow-success/20 overflow-hidden group-hover:border-success/60 transition-all duration-300">
                  {/* Subtle pulse effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-success/10 to-success/10 opacity-0 group-hover:opacity-100"
                    animate={{ opacity: [0, 0.3, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  ></motion.div>
                  
                  <Link to="/demo" className="flex items-center justify-center text-success text-lg font-semibold relative z-10 group-hover:text-white transition-colors duration-300">
                    <motion.div
                      whileHover={{ rotate: 15 }}
                      transition={{ duration: 0.3 }}
                      className="mr-2"
                    >
                      <Play className="w-5 h-5" />
                    </motion.div>
                    Voir Ma Démo Personnalisée
                  </Link>
                  
                  {/* Border glow effect */}
                  <motion.div 
                    className="absolute inset-0 border-2 border-transparent rounded-xl opacity-0 group-hover:opacity-100 group-hover:border-success/50"
                    animate={{ 
                      borderRadius: ["12px", "16px", "12px"],
                    }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  ></motion.div>
                </div>
              </motion.div>

              {/* CTA Support 24/7 avec bordure orange */}
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.9, type: "spring", stiffness: 120 }}
              >
                <div className="relative glass-action px-8 py-4 rounded-xl border border-action/40 backdrop-blur-lg shadow-lg shadow-action/20 overflow-hidden group-hover:border-action/60 transition-all duration-300">
                  {/* Subtle pulse effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-action/10 to-action/10 opacity-0 group-hover:opacity-100"
                    animate={{ opacity: [0, 0.3, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  ></motion.div>
                  
                  <button
                    onClick={() => { if (typeof window.activateConvocore === 'function') { window.activateConvocore(); } }}
                    className="flex items-center justify-center text-action text-lg font-semibold relative z-10 group-hover:text-white transition-colors duration-300"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 2,
                        ease: "easeInOut" 
                      }}
                      className="mr-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                    </motion.div>
                    Support 24/7
                    
                    {/* Status indicator discret */}
                    <motion.div
                      className="ml-2 w-1.5 h-1.5 bg-growth rounded-full"
                      animate={{ opacity: [1, 0.4, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    ></motion.div>
                  </button>
                  
                  {/* Border glow effect */}
                  <motion.div 
                    className="absolute inset-0 border-2 border-transparent rounded-xl opacity-0 group-hover:opacity-100 group-hover:border-action/50"
                    animate={{ 
                      borderRadius: ["12px", "16px", "12px"],
                    }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  ></motion.div>
                </div>
              </motion.div>
            </motion.div>

          </div>

          {/* Écosystème IA - Section overview */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center justify-center">
                <Network className="w-8 h-8 text-sovereign mr-3 filter drop-shadow-[0_0_8px_rgba(3,78,100,0.8)]" />
                Écosystème IA Complet
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Services intégrés pour une plateforme IA complète, autonome et scalable.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
              {ecosystemServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  className={`${colorMapping[service.color].glass} morph-card reveal-colors p-4 rounded-lg text-center hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-300`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: index * 0.1, 
                    type: "spring", 
                    stiffness: 120 
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 300, damping: 10 }
                  }}
                >
                  <service.icon className={`w-8 h-8 text-[${colorMapping[service.color].palette}] mx-auto mb-2 filter drop-shadow-[0_0_6px_${colorMapping[service.color].rgba}]`} />
                  <h4 className="font-semibold text-gray-800 dark:text-white text-sm">{service.name}</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{service.desc}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center">
              <Link to="/ecosystem" className="px-6 py-3 btn-sovereign text-white rounded-lg font-semibold inline-flex items-center">
                Explorer l'Écosystème Complet
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>

          {/* Secteurs d'Activité */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center justify-center">
                <Building className="w-8 h-8 text-growth mr-3 filter drop-shadow-[0_0_8px_rgba(254,185,9,0.8)]" />
                Solutions par Secteur & Cas d'usages
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                IA adaptée aux spécificités et contraintes de votre industrie
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {sectors.slice(0, 5).map((sector, index) => (
                <motion.div
                  key={sector.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: 0.1 * index,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.03,
                    transition: { type: "spring", stiffness: 400, damping: 15 }
                  }}
                >
                  <Link to={sector.path} className={`${colorMapping[sector.color].glass} morph-card p-6 rounded-xl block hover:shadow-2xl transition-all duration-500 group`}>
                    <sector.icon className={`w-10 h-10 text-[${colorMapping[sector.color].palette}] mb-4 filter drop-shadow-[0_0_8px_${colorMapping[sector.color].rgba}] group-hover:drop-shadow-[0_0_16px_${colorMapping[sector.color].rgba}] transition-all duration-300`} />
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{sector.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{sector.desc}</p>
                    <div className="mt-4 flex items-center text-sovereign font-medium group-hover:text-success transition-colors">
                      Découvrir
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Link to="/solutions">
                <motion.button 
                  className="px-8 py-4 btn-action-critical text-white rounded-lg font-semibold shadow-lg flex items-center gap-2 mx-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explorer les Secteurs et Cas d'usages Complet
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Approches de Déploiement */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center justify-center">
                <Settings className="w-8 h-8 text-success mr-3 filter drop-shadow-[0_0_8px_rgba(254,185,9,0.8)]" />
                Choisissez Votre Approche
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Trois modalités d'accompagnement selon vos besoins et ressources
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {approaches.map((approach, index) => (
                <motion.div
                  key={approach.name}
                  initial={{ opacity: 0, y: 30, rotateX: -15 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ 
                    delay: 0.15 * index,
                    type: "spring",
                    stiffness: 80,
                    damping: 12
                  }}
                  whileHover={{ 
                    y: -8,
                    rotateX: 5,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                  style={{ perspective: 1000 }}
                >
                  <Link to={approach.path} className={`${colorMapping[approach.color].glass} morph-card reveal-colors p-8 rounded-xl block hover:shadow-2xl transition-all duration-500 h-full group relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br from-white via-transparent to-transparent"></div>
                    <approach.icon className={`w-12 h-12 text-[${colorMapping[approach.color].palette}] mb-4 filter drop-shadow-[0_0_8px_${colorMapping[approach.color].rgba}] group-hover:drop-shadow-[0_0_20px_${colorMapping[approach.color].rgba}] transition-all duration-500 group-hover:scale-110 relative z-10`} />
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 relative z-10">{approach.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 relative z-10">{approach.desc}</p>
                    <div className="space-y-2 mb-6 relative z-10">
                      {approach.features.map((feature, i) => (
                        <motion.div 
                          key={i} 
                          className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 * index + 0.1 * i }}
                        >
                          <CheckCircle className="w-4 h-4 text-success mr-2 filter drop-shadow-[0_0_4px_rgba(254,185,9,0.6)]" />
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                    <div className="flex items-center text-sovereign font-medium group-hover:text-success transition-colors relative z-10">
                      En savoir plus
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* SECTION VALEUR EXCLUSIVE - Inspirée de la page ecosystem */}
          <motion.div 
            className="mt-16 mb-12 p-8 glass-blue morph-card reveal-colors rounded-xl max-w-4xl mx-auto relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
            whileHover={{ 
              scale: 1.02,
              transition: { type: "spring", stiffness: 300, damping: 15 }
            }}
          >
            <div className="absolute inset-0 opacity-0 hover:opacity-5 transition-opacity duration-1000 bg-gradient-to-br from-sovereign via-transparent to-success"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center space-x-2 mb-6">
                <Star className="w-6 h-6 text-success filter drop-shadow-[0_0_8px_rgba(254,185,9,0.8)]" />
                <span className="font-bold text-gray-800 dark:text-white text-xl">Valeur Exclusive : Écosystème IA Complet</span>
                <Star className="w-6 h-6 text-success filter drop-shadow-[0_0_8px_rgba(254,185,9,0.8)]" />
              </div>
              
              <div className="text-center mb-6">
                <p className="text-gray-700 dark:text-gray-300 text-lg">
                  <span className="font-bold text-success dark:text-success text-2xl filter drop-shadow-[0_0_8px_rgba(254,185,9,0.6)]">€3,870 licence à vie</span>
                  <span className="mx-3 text-gray-500">vs</span>
                  <span className="line-through text-action text-xl">€30,000/an</span> solutions cloud traditionnelles
                </p>
                <motion.p 
                  className="text-sm text-gray-600 dark:text-gray-400 mt-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  Économies garanties de <span className="font-bold text-success dark:text-success filter drop-shadow-[0_0_6px_rgba(99,141,19,0.8)]">€270,000+</span> sur 10 ans
                </motion.p>
              </div>

              <div className="text-center">
                <motion.p 
                  className="text-gray-600 dark:text-gray-400 italic max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  "Notre écosystème forme un véritable OS pour l'IA où chaque composant s'intègre 
                  dans un ensemble cohérent et auto-suffisant."
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* NOUVELLE SECTION - TÉMOIGNAGES CLIENTS */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="text-center mb-10 relative">
              {/* Titre avec effet holographique */}
              <motion.h2 
                className="text-4xl font-bold text-gray-800 dark:text-white mb-6 flex items-center justify-center relative"
                animate={{ 
                  textShadow: [
                    "0 0 15px rgba(254,185,9,0.3)", 
                    "0 0 30px rgba(254,185,9,0.8)", 
                    "0 0 15px rgba(254,185,9,0.3)"
                  ] 
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity }
                  }}
                >
                  <Star className="w-10 h-10 text-success mr-4 filter drop-shadow-[0_0_20px_rgba(254,185,9,1)]" />
                </motion.div>
                
                Ce Que Disent Nos Clients
                
              </motion.h2>

              {/* Sous-titre avec effet counter */}
              <motion.div className="relative">
                <motion.p 
                  className="text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-semibold"
                  animate={{
                    textShadow: [
                      "0 0 8px rgba(99,141,19,0.3)",
                      "0 0 16px rgba(99,141,19,0.6)",
                      "0 0 8px rgba(99,141,19,0.3)"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <span className="text-growth">+500</span> entreprises nous font confiance pour leur transformation IA
                </motion.p>

                {/* Ligne de scan sous le sous-titre */}
                <motion.div 
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-success to-transparent"
                  animate={{ width: ["0%", "80%", "0%"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                ></motion.div>
              </motion.div>

              {/* Particules flottantes autour du titre */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-success rounded-full opacity-40"
                    animate={{
                      x: [Math.random() * 800, Math.random() * 800],
                      y: [Math.random() * 200, Math.random() * 200],
                      scale: [0.5, 1.5, 0.5],
                      opacity: [0.2, 0.8, 0.2]
                    }}
                    transition={{
                      duration: 6 + Math.random() * 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {/* Témoignage 1 - Finance */}
              <div className="glass-sovereign morph-card reveal-colors p-6">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-sovereign rounded-full flex items-center justify-center text-white font-bold mr-4">
                    <span className="text-lg">BP</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-800 dark:text-white text-lg">Banque</div>
                    <div className="text-sm text-sovereign dark:text-sovereign font-medium">Direction Conformité</div>
                  </div>
                </div>

                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-success fill-current" />
                  ))}
                </div>

                <div className="mb-4">
                  <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed italic font-medium">
                    "48h pour déployer un écosystème IA conforme ACPR. Contrôle total de nos données garanti. <span className="text-success font-bold">ROI de 285%</span> en 8 mois."
                  </p>
                </div>
                
                <div className="glass-success p-3 rounded-lg border border-success/30 backdrop-blur-sm">
                  <div className="text-sm text-success font-bold flex items-center">
                    <span>💰</span>
                    <span className="ml-2">Économies : 68% sur vos coûts IA annuels</span>
                  </div>
                </div>
              </div>

              {/* Témoignage 2 - Energie */}
              <div className="glass-growth morph-card reveal-colors p-6">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-growth rounded-full flex items-center justify-center text-white font-bold mr-4">
                    <span className="text-lg">TE</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-800 dark:text-white text-lg">Energies</div>
                    <div className="text-sm text-action dark:text-action font-medium">Direction Innovation</div>
                  </div>
                </div>

                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-success fill-current" />
                  ))}
                </div>

                <div className="mb-4">
                  <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed italic font-medium">
                    "Maintenance prédictive sur <span className="text-action font-bold">200+ sites</span> industriels. <span className="text-growth font-bold">40% de réduction</span> des pannes non planifiées. Performance exceptionnelle."
                  </p>
                </div>
                
                <div className="glass-success p-3 rounded-lg border border-success/30 backdrop-blur-sm">
                  <div className="text-sm text-success font-bold flex items-center">
                    <span>💰</span>
                    <span className="ml-2">Économies : 72% sur vos coûts de maintenance</span>
                  </div>
                </div>
              </div>

              {/* Témoignage 3 - Santé */}
              <div className="glass-premium morph-card reveal-colors p-6">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-premium rounded-full flex items-center justify-center text-white font-bold mr-4">
                    <span className="text-lg">SF</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-800 dark:text-white text-lg">Santé
                      
                    </div>
                    <div className="text-sm text-success dark:text-success font-medium">Recherche Clinique</div>
                  </div>
                </div>

                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-success fill-current" />
                  ))}
                </div>

                <div className="mb-4">
                  <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed italic font-medium">
                    "Analyse de <span className="text-premium font-bold">millions de documents</span> médicaux en conformité RGPD. Résultats <span className="text-success font-bold">10x plus rapides</span> avec un contrôle total de nos données."
                  </p>
                </div>
                
                <div className="glass-success p-3 rounded-lg border border-success/30 backdrop-blur-sm">
                  <div className="text-sm text-success font-bold flex items-center">
                    <span>💰</span>
                    <span className="ml-2">Économies : 65% coûts traitement vs APIs externes</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Section OFFRE DE LANCEMENT EXCLUSIVE transparente */}
            <motion.div
              className="relative overflow-hidden group"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 100, damping: 15 }}
            >
              {/* Particules subtiles glass */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-0.5 h-0.5 bg-white/30 rounded-full"
                    animate={{
                      x: [Math.random() * 800, Math.random() * 800],
                      y: [Math.random() * 200, Math.random() * 200],
                      opacity: [0.1, 0.4, 0.1]
                    }}
                    transition={{
                      duration: 8 + Math.random() * 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>

              {/* HUD Frame subtil */}
              <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-action/30"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-action/30"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-action/30"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-action/30"></div>

              <div className="relative z-10 p-8">
                {/* Badge urgent avec glass dominant et néon d'accentuation */}
                <div className="text-center mb-8">
                  <motion.div 
                    className="inline-block relative mb-6"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="px-8 py-4 rounded-full border border-action/40 backdrop-blur-xl relative overflow-hidden shadow-lg shadow-action/20">
                      <span className="text-white text-xl font-bold relative z-10">
                        🔥 OFFRE DE LANCEMENT LIMITÉE - 
                        <motion.span 
                          className="text-success font-black"
                          animate={{
                            textShadow: [
                              "0 0 0px rgba(254,185,9,0)",
                              "0 0 15px rgba(254,185,9,0.8)",
                              "0 0 0px rgba(254,185,9,0)"
                            ]
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          99 PLACES SEULEMENT
                        </motion.span>
                      </span>

                      {/* Effet glass reflet */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-transparent"></div>
                    </div>
                  </motion.div>

                  <h3 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
                    🚀 PACKS IA COMPLETS - 
                    <motion.span 
                      className="text-action"
                      animate={{
                        textShadow: [
                          "0 0 0px rgba(240,105,5,0)",
                          "0 0 20px rgba(240,105,5,0.6)",
                          "0 0 0px rgba(240,105,5,0)"
                        ]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      70% DE RÉDUCTION
                    </motion.span>
                  </h3>

                  <div className="text-xl text-gray-600 dark:text-gray-400">
                    <span className="text-action font-bold">FINANCEMENT PARTICIPATIF</span>
                    <span className="mx-2">•</span>
                    <span>Mises à jour </span>
                    <span className="text-success font-bold">GRATUITES 2 ans</span>
                    <span className="mx-2">•</span>
                    <span className="text-growth font-bold">Support prioritaire inclus</span>
                  </div>
                </div>
              </div>

              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Pack Starter */}
                <div className="text-center p-6 glass-sovereign rounded-lg border border-sovereign/40 backdrop-blur-md shadow-lg shadow-sovereign/20 hover:border-sovereign/60 transition-all">
                  <div className="mb-4">
                    <div className="text-4xl font-black text-sovereign dark:text-sovereign mb-1">€3,870 HT</div>
                    <div className="text-lg line-through text-action opacity-75">€12,900 HT</div>
                    <div className="text-sm font-bold text-success glass-success border border-success/40 backdrop-blur-sm px-2 py-1 rounded">-70% OFFRE LANCEMENT</div>
                  </div>
                  <div className="text-lg font-bold text-gray-800 dark:text-white mb-2">Pack Starter</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    • Ollama (LLMs en local)<br/>
                    • n8n (Automatisation)<br/>
                    • Supabase (Base de données)<br/>
                    • Caddy (Reverse proxy)<br/>
                    • SearXNG (Recherche privée)
                  </div>
                  <div className="border-t pt-4 mt-4">
                    <div className="text-sm font-semibold text-sovereign dark:text-sovereign mb-2">Conditions de paiement</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      • Paiement intégral : €3,870 HT<br/>
                      • Inclus : Formation + Support 90J
                    </div>
                  </div>
                </div>
                
                {/* Pack Business - POPULAIRE */}
                <div className="relative text-center p-6 glass-growth rounded-lg border-2 border-growth/50 backdrop-blur-md shadow-xl shadow-growth/30 hover:border-growth/70 transition-all transform scale-105">
          
                  <div className="mb-4 mt-3">
                    <div className="text-4xl font-black text-success dark:text-success mb-1">€5,670 HT</div>
                    <div className="text-lg line-through text-action opacity-75">€18,900 HT</div>
                    <div className="text-sm font-bold text-success glass-success border border-success/40 backdrop-blur-sm px-2 py-1 rounded">-70% OFFRE LANCEMENT</div>
                  </div>
                  <div className="text-lg font-bold text-gray-800 dark:text-white mb-2">Pack Business</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    • Tout du Pack Starter<br/>
                    • + Open WebUI (Interface utilisateur)<br/>
                    • + Intégration n8n avancée<br/>
                    • + Configuration personnalisée<br/>
                    • + Formation équipe incluse
                  </div>
                  <div className="border-t border-growth-200 pt-4 mt-4">
                    <div className="text-sm font-semibold text-success dark:text-success mb-2">Conditions de paiement</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      • Paiement intégral : €5,670 HT<br/>
                      • Inclus : Formation Avancée + Support 6 mois
                    </div>
                  </div>
                </div>
                
                {/* Pack Enterprise */}
                <div className="text-center p-6 glass-premium rounded-lg border border-premium/40 backdrop-blur-md shadow-lg shadow-premium/20 hover:border-premium/60 transition-all">
                  <div className="mb-4">
                    <div className="text-4xl font-black text-growth dark:text-growth mb-1">€10,770 HT</div>
                    <div className="text-lg line-through text-action opacity-75">€35,900 HT</div>
                    <div className="text-sm font-bold text-growth glass-growth border border-growth/40 backdrop-blur-sm px-2 py-1 rounded">-70% OFFRE LANCEMENT</div>
                  </div>
                  <div className="text-lg font-bold text-gray-800 dark:text-white mb-2">Pack Enterprise</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    • Stack complet (10 services)<br/>
                    • Ollama + Open WebUI + n8n<br/>
                    • Supabase + Qdrant + Flowise<br/>
                    • Neo4j + SearXNG + Caddy + Langfuse<br/>
                    • Architecture sur-mesure + Formation
                  </div>
                  <div className="border-t pt-4 mt-4">
                    <div className="text-sm font-semibold text-growth dark:text-growth mb-2">Conditions de paiement</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      • Paiement intégral : €10,770 HT<br/>
                      • Inclus : Architecture personnalisée + Support 1 an
                    </div>
                  </div>
                </div>
              </div>
              
            </motion.div>
          </motion.div>

          {/* Pourquoi Local AI - Section valeur ajoutée */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center justify-center">
                <Shield className="w-8 h-8 text-sovereign mr-3 filter drop-shadow-[0_0_8px_rgba(3,78,100,0.8)]" />
                Vos Défis IA Résolus en 360°
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                L'écosystème IA qui répond à toutes vos préoccupations : conformité, performance, contrôle des coûts et sécurité des données
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                className="glass-blue p-6 rounded-xl text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Shield className="w-12 h-12 text-sovereign mx-auto mb-4 filter drop-shadow-[0_0_8px_rgba(254,185,9,0.8)]" />
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">100% Souverain</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Vos données restent sur votre infrastructure européenne. Conformité RGPD et AI Act native.
                </p>
              </motion.div>

              <motion.div
                className="glass-green p-6 rounded-xl text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <Zap className="w-12 h-12 text-success mx-auto mb-4 filter drop-shadow-[0_0_8px_rgba(254,185,9,0.8)]" />
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">Déploiement Rapide</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  48 heures pour avoir votre IA opérationnelle vs 6+ mois pour les solutions traditionnelles.
                </p>
              </motion.div>

              <motion.div
                className="glass-purple p-6 rounded-xl text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <TrendingUp className="w-12 h-12 text-growth mx-auto mb-4 filter drop-shadow-[0_0_8px_rgba(254,185,9,0.8)]" />
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">ROI Prouvé</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  165% à 285% de ROI selon les secteurs. Économies immédiates sur les coûts cloud.
                </p>
              </motion.div>

              <motion.div
                className="glass-orange p-6 rounded-xl text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                <Network className="w-12 h-12 text-action mx-auto mb-4 filter drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">Écosystème Complet</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  15+ services intégrés et harmonisés. Une seule plateforme pour tous vos besoins IA.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* ROI Calculator CTA */}
          <motion.div
            className="glass-green p-8 rounded-xl text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Calculator className="w-16 h-16 text-success mx-auto mb-4 filter drop-shadow-[0_0_12px_rgba(254,185,9,0.8)]" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Calculez Votre ROI en 2 Minutes
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Découvrez les économies potentielles et le retour sur investissement pour votre secteur d'activité
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/roi-calculator" className="px-8 py-4 bg-gradient-to-r from-growth to-sovereign text-white rounded-lg font-semibold hover:from-growth-600 hover:to-sovereign-600 transition-all shadow-lg inline-flex items-center justify-center">
                <Calculator className="w-5 h-5 mr-2" />
                Calculer Mon ROI
              </Link>
              <Link to="/demo" className="px-8 py-4 glass border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white rounded-lg font-semibold hover:border-growth transition-all inline-flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Voir la Démo
              </Link>
            </div>
          </motion.div>

          {/* CTA Final - Passer à l'action */}
          <motion.div
            className="glass-blue p-8 rounded-xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Transformez Votre Entreprise avec un Écosystème IA Conforme
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              Déployez une intelligence artificielle performante et conforme en 48 heures. 
              Contactez-nous pour une consultation personnalisée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-sovereign to-premium text-white rounded-lg font-semibold hover:from-sovereign-600 hover:to-premium-600 transition-all shadow-lg inline-flex items-center justify-center">
                Commencer Maintenant
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/expertise" className="px-8 py-4 glass border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white rounded-lg font-semibold hover:border-sovereign transition-all inline-flex items-center justify-center">
                Découvrir Notre Expertise
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-success mr-2" />
                Consultation gratuite
              </div>
              <div className="flex items-center justify-center">
                <Clock className="w-4 h-4 text-sovereign mr-2" />
                Réponse sous 1h
              </div>
              <div className="flex items-center justify-center">
                <Lock className="w-4 h-4 text-growth mr-2" />
                Confidentialité garantie
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
      
      
      
      {/* Section Support Urgente */}
      <UrgentSupportSection />
      
      <LocalAIFooter />
    </div>
  );
};