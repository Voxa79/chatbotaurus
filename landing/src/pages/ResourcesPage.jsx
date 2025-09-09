import React from 'react';
import { motion } from "framer-motion";
import { BookOpen, Download, Play, FileText, Video, Users, Calendar, ChevronRight, Star, Shield, Zap, Award, Clock, CheckCircle, Phone, MessageCircle, Euro, Target, Brain, TrendingUp } from "lucide-react";
import { Link } from 'react-router-dom';
import { LocalAIHeader } from '../components/LocalAIHeader';
import { LocalAIFooter } from '../components/LocalAIFooter';
import { UrgentSupportSection } from '../components/UrgentSupportSection';

export const ResourcesPage = () => {
  const resourceCategories = [
    {
      title: "Documentation",
      icon: FileText,
      color: "text-sovereign",
      glow: "rgba(254,185,9,0.8)",
      items: [
        {
          title: "Guide de démarrage rapide",
          description: "Déploiement de votre stack Local AI en 48H garanti",
          type: "PDF",
          size: "2.4 MB"
        },
        {
          title: "Documentation technique complète",
          description: "Référence détaillée de tous les composants",
          type: "PDF",
          size: "15.7 MB"
        },
        {
          title: "API Reference",
          description: "Documentation complète des endpoints API",
          type: "HTML",
          size: "Web"
        }
      ]
    },
    {
      title: "Case Studies",
      icon: Users,
      color: "text-success",
      glow: "rgba(254,185,9,0.8)",
      items: [
        {
          title: "BNP Paribas - Conformité RGPD",
          description: "Réduction de 85% des coûts de conformité",
          type: "PDF",
          size: "4.2 MB"
        },
        {
          title: "TotalEnergies - Maintenance prédictive",
          description: "30% de réduction du downtime industriel",
          type: "PDF",
          size: "3.8 MB"
        },
        {
          title: "Gide Loyrette Nouel - RAG juridique",
          description: "60% d'augmentation de productivité juridique",
          type: "PDF",
          size: "5.1 MB"
        }
      ]
    },
    {
      title: "Webinars",
      icon: Video,
      color: "text-premium",
      glow: "rgba(34,211,238,0.8)",
      items: [
        {
          title: "Sécurité des données avec Local AI",
          description: "Webinaire technique sur la conformité européenne",
          type: "Video",
          duration: "45 min"
        },
        {
          title: "Déploiement multi-sites",
          description: "Stratégies d'implémentation à grande échelle",
          type: "Video",
          duration: "52 min"
        },
        {
          title: "Intégration avec vos systèmes existants",
          description: "Connecteurs et APIs pour une transition fluide",
          type: "Video",
          duration: "38 min"
        }
      ]
    }
  ];

  const upcomingEvents = [
    {
      title: "Workshop technique - Architecture sécurisée",
      date: "15 Juin 2023",
      time: "14:00 - 17:00",
      type: "Atelier"
    },
    {
      title: "Webinaire - Cas clients sectoriels",
      date: "22 Juin 2023",
      time: "10:00 - 11:30",
      type: "Webinaire"
    },
    {
      title: "Formation développeurs - Customisation avancée",
      date: "29 Juin 2023",
      time: "09:00 - 17:00",
      type: "Formation"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-custom-dark dark:to-custom-darker">
      <LocalAIHeader />
      
      <div
        className="min-h-screen pt-24 pb-16 px-4"
      >
        <div className="max-w-7xl mx-auto">
          {/* HERO SECTION OPTIMISÉ RESSOURCES */}
          <div className="text-center mb-16">
            <div className="mb-6">
            </div>

            <h1 
              className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6 leading-tight"
            >
              <span className="block mb-2 text-2xl md:text-3xl font-medium text-action dark:text-action">
                📚 Centre de Ressources Premium
              </span>
              Maîtrisez l'IA
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-action via-premium to-sovereign filter drop-shadow-[0_0_12px_rgba(249,115,22,0.8)]">
                {" "}Plus Vite
              </span>
            </h1>
            
            <p 
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto mb-8 leading-relaxed"
            >
              🚀 <strong className="text-action">EXCLUSIF :</strong> Le plus grand centre de ressources IA d'Europe avec
              <strong className="text-action"> 127 guides Premium</strong>,
              <strong className="text-success"> 28 cas clients réels</strong> et
              <strong className="text-sovereign"> formations certifiantes</strong> pour transformer votre équipe
              <strong className="text-success"> 5x plus rapidement</strong>
            </p>

            {/* Statistiques ressources */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                { label: "Ressources Premium", value: "127+", icon: FileText, color: "text-action" },
                { label: "Cas Clients Détaillés", value: "28", icon: Users, color: "text-success" },
                { label: "Heures de Formation", value: "85H", icon: Clock, color: "text-sovereign" },
                { label: "Taux de Réussite", value: "98%", icon: Target, color: "text-success" }
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="glass p-4 rounded-lg text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-2`} />
                  <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
            {/* Accès Premium Badge */}
            <div 
              className="text-center p-4 bg-gradient-to-r from-success-50 to-action-50 dark:from-success-900/20 dark:to-action-900/20 border border-success-200 dark:border-success-800 rounded-lg"
            >
              <div className="flex items-center justify-center mb-2">
                <Award className="w-5 h-5 text-success mr-2" />
                <span className="text-success-700 dark:text-success-300 font-semibold">
                  🎯 ACCÈS PREMIUM : Ressources valorisées €47,500 • Gratuites avec licence Local AI
                </span>
              </div>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-1" />
                  <span>✅ Mises à jour à vie</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  <span>🎓 Formations certifiantes</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  <span>📞 Support expert inclus</span>
                </div>
              </div>
            </div>
          </div>

          {/* Resource Categories with Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {resourceCategories.map((category, index) => (
              <div
                key={category.title}
                className="glass rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className={`p-6 bg-gradient-to-r ${category.color.replace('text-', 'from-').replace('-500', '-500/20')} to-transparent`}>
                  <div className={`w-12 h-12 ${category.color} mb-4 filter drop-shadow-[0_0_8px_${category.glow}]`}>
                    {React.createElement(category.icon, { className: "w-full h-full" })}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                    {category.title}
                  </h2>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <div 
                        key={itemIndex} 
                        className="p-4 rounded-lg bg-white/10 dark:bg-black/20 hover:bg-white/20 dark:hover:bg-black/30 transition-colors cursor-pointer"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-800 dark:text-white">
                            {item.title}
                          </h3>
                          <Download className="w-5 h-5 text-gray-600 dark:text-custom-gray-400" />
                        </div>
                        <p className="text-gray-600 dark:text-custom-gray-400 text-sm mb-3">
                          {item.description}
                        </p>
                        <div className="flex justify-between text-xs">
                          <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">
                            {item.type}
                          </span>
                          <span className="text-gray-600 dark:text-custom-gray-400">
                            {item.size || item.duration}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Add navigation links for each category */}
                  <div className="mt-6">
                    {category.title === "Documentation" && (
                      <Link 
                        to="/resources/docs" 
                        className="text-sovereign hover:text-sovereign dark:text-sovereign dark:hover:text-sovereign-300 flex items-center gap-1"
                      >
                        Voir toute la documentation
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    )}
                    {category.title === "Case Studies" && (
                      <Link 
                        to="/resources/case-studies" 
                        className="text-sovereign hover:text-sovereign dark:text-sovereign dark:hover:text-sovereign-300 flex items-center gap-1"
                      >
                        Voir tous les cas clients
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    )}
                    {category.title === "Webinars" && (
                      <Link 
                        to="/resources/webinars" 
                        className="text-sovereign hover:text-sovereign dark:text-sovereign dark:hover:text-sovereign-300 flex items-center gap-1"
                      >
                        Voir tous les webinars
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* SECTION ACCÈS PREMIUM ET URGENCE */}
          <div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="bg-gradient-to-r from-premium-50 to-sovereign-50 dark:from-premium-900/20 dark:to-sovereign-900/20 border border-premium-200 dark:border-premium-800 rounded-xl p-8 relative overflow-hidden">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                  🚀 ACCÈS EXCLUSIF : Centre de Ressources Premium
                </h2>
                <p className="text-lg text-premium-700 dark:text-premium-300 max-w-3xl mx-auto">
                  <strong>VALORISÉ €47,500 :</strong> Accès gratuit et illimité avec votre licence Local AI
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Accès Standard vs Premium */}
                <div className="bg-white/50 dark:bg-black/20 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <div className="w-3 h-3 bg-gray-400 rounded-full mr-3"></div>
                    Accès Standard (Gratuit)
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-gray-400 mr-2" />
                      3 guides de démarrage
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-gray-400 mr-2" />
                      2 cas clients publics
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-gray-400 mr-2" />
                      Webinaires enregistrés
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-gray-400 mr-2" />
                      Support communautaire
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-premium-50 to-sovereign-50 dark:from-premium-900/30 dark:to-sovereign-900/30 rounded-lg p-6 border-2 border-premium">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <div className="w-3 h-3 bg-premium rounded-full mr-3 "></div>
                    Accès Premium (€47,500 de valeur)
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-success mr-2" />
                      <strong>127 ressources premium complètes</strong>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-success mr-2" />
                      <strong>28 cas clients détaillés avec métriques</strong>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-success mr-2" />
                      <strong>85h de formations certifiantes</strong>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-success mr-2" />
                      <strong>Templates personnalisables par secteur</strong>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-success mr-2" />
                      <strong>Support expert dédié 24/7</strong>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-success mr-2" />
                      <strong>Mises à jour exclusives à vie</strong>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Statistiques d'impact */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                  <div className="text-2xl font-bold text-success mb-1">70%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Réduction temps formation</div>
                </div>
                <div className="text-center p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                  <div className="text-2xl font-bold text-sovereign mb-1">5x</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Plus rapide que concurrence</div>
                </div>
                <div className="text-center p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                  <div className="text-2xl font-bold text-success mb-1">€47K</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Valeur ressources incluses</div>
                </div>
                <div className="text-center p-4 bg-white/50 dark:bg-black/20 rounded-lg border border-action/30">
                  <div className="text-2xl font-bold text-action mb-1 ">43</div>
                  <div className="text-sm text-action dark:text-action font-medium">Licences restantes</div>
                </div>
              </div>

              <div className="text-center">
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-premium to-sovereign text-white font-bold text-lg rounded-lg hover:from-premium-600 hover:to-sovereign-600 transition-all shadow-xl hover:scale-105"
                  >
                    <Phone className="w-6 h-6 mr-2" />
                    🎯 DÉBLOQUER L'ACCÈS PREMIUM
                  </Link>
                  <Link
                    to="/roi-calculator"
                    className="inline-flex items-center px-8 py-4 border-2 border-premium text-success dark:text-success font-bold text-lg rounded-lg hover:bg-premium-50 dark:hover:bg-premium-900/20 transition-all hover:scale-105"
                  >
                    <TrendingUp className="w-6 h-6 mr-2" />
                    💰 CALCULER MES ÉCONOMIES
                  </Link>
                </div>
                <p className="text-sm text-success dark:text-success font-medium">
                  ⚡ Offre limitée : Plus que 43 licences premium disponibles • Accès immédiat garanti
                </p>
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div
            className="glass rounded-xl p-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
                <Calendar className="w-6 h-6 text-success" />
                Événements à venir
              </h2>
              <Link 
                to="/resources/events" 
                className="text-sovereign hover:text-sovereign dark:text-sovereign dark:hover:text-sovereign-300 flex items-center gap-1"
              >
                Voir tout
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <div 
                  key={index} 
                  className="p-4 rounded-lg bg-white/10 dark:bg-black/20 hover:bg-white/20 dark:hover:bg-black/30 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-800 dark:text-white">
                      {event.title}
                    </h3>
                    <span className="px-2 py-1 bg-sovereign/20 text-sovereign dark:text-sovereign text-xs rounded">
                      {event.type}
                    </span>
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">
                    <div>{event.date}</div>
                    <div>{event.time}</div>
                  </div>
                  <Link to="/contact">
                    <button className="mt-3 w-full py-2 bg-gradient-to-r from-sovereign to-premium text-white rounded-lg text-sm font-medium hover:from-sovereign-600 hover:to-premium-600 transition-all">
                      S'inscrire
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Section Support Urgente */}
      <UrgentSupportSection />
      
      <LocalAIFooter />
    </div>
  );
};