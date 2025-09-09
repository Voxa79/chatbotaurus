import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Video, Calendar, Clock, Users, Play, Download, BookOpen, Shield, Cpu } from "lucide-react";
import { LocalAIHeader } from '../components/LocalAIHeader';
import { LocalAIFooter } from '../components/LocalAIFooter';
import { UrgentSupportSection } from '../components/UrgentSupportSection';

export const ResourcesWebinarsPage = () => {
  const [selectedWebinar, setSelectedWebinar] = useState(null);

  const webinars = [
    {
      id: 1,
      title: "Sécurité des données avec Local AI",
      description: "Découvrez notre approche unique de la sécurité et de la confidentialité des données dans un environnement IA auto-hébergé.",
      date: "15 Juin 2023",
      time: "14:00 - 15:00",
      duration: "60 min",
      presenter: "Marie Dubois, CTO Local AI",
      attendees: 124,
      category: "Sécurité",
      icon: Shield,
      color: "text-action",
      registered: false
    },
    {
      id: 2,
      title: "Déploiement multi-sites",
      description: "Stratégies d'implémentation à grande échelle pour les entreprises avec plusieurs sites géographiques.",
      date: "22 Juin 2023",
      time: "10:00 - 11:00",
      duration: "60 min",
      presenter: "Thomas Martin, Solutions Architect",
      attendees: 89,
      category: "Déploiement",
      icon: Cpu,
      color: "text-sovereign",
      registered: true
    },
    {
      id: 3,
      title: "Intégration avec vos systèmes existants",
      description: "Connecteurs et APIs pour une transition fluide vers notre écosystème IA.",
      date: "29 Juin 2023",
      time: "15:00 - 16:00",
      duration: "60 min",
      presenter: "Sophie Lambert, Integration Specialist",
      attendees: 156,
      category: "Intégration",
      icon: BookOpen,
      color: "text-success",
      registered: false
    },
    {
      id: 4,
      title: "Personnalisation avancée des modèles",
      description: "Techniques de fine-tuning et adaptation des IA à vos cas d'usage spécifiques.",
      date: "6 Juillet 2023",
      time: "14:00 - 15:30",
      duration: "90 min",
      presenter: "Alexandre Petit, AI Research Lead",
      attendees: 72,
      category: "IA/ML",
      icon: Cpu,
      color: "text-success",
      registered: false
    },
    {
      id: 5,
      title: "Conformité RGPD et réglementation européenne",
      description: "Comment notre solution garantit la conformité avec les réglementations européennes.",
      date: "13 Juillet 2023",
      time: "09:00 - 10:00",
      duration: "60 min",
      presenter: "Émilie Rousseau, Compliance Officer",
      attendees: 98,
      category: "Conformité",
      icon: Shield,
      color: "text-premium",
      registered: false
    },
    {
      id: 6,
      title: "Cas clients sectoriels",
      description: "Retours d'expérience de nos clients dans les secteurs finance, legal et industrie.",
      date: "20 Juillet 2023",
      time: "11:00 - 12:30",
      duration: "90 min",
      presenter: "Julien Moreau, Customer Success Director",
      attendees: 142,
      category: "Cas clients",
      icon: Users,
      color: "text-action",
      registered: false
    }
  ];

  const handleRegister = (webinarId) => {
    // Registration logic would go here
    alert(`Vous êtes maintenant inscrit au webinar !`);
  };

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
              <Video className="w-10 h-10 text-success filter drop-shadow-[0_0_8px_rgba(254,185,9,0.8)]" />
              Webinars
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Formations et démonstrations techniques pour maîtriser notre écosystème IA
            </motion.p>
          </div>

          {/* Upcoming Webinars */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Webinars à venir
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {webinars.filter(w => new Date(w.date.split(' ')[2], 
                ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'].indexOf(w.date.split(' ')[1]), 
                w.date.split(' ')[0]) >= new Date()).map((webinar, index) => (
                <motion.div
                  key={webinar.id}
                  className="glass rounded-xl overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className={`w-8 h-8 ${webinar.color}`}>
                        {React.createElement(webinar.icon, { className: "w-full h-full" })}
                      </div>
                      <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">
                        {webinar.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      {webinar.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      {webinar.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        {webinar.date}
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                        <Clock className="w-4 h-4 mr-2" />
                        {webinar.time} ({webinar.duration})
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                        <Users className="w-4 h-4 mr-2" />
                        {webinar.attendees} participants
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gray-700 dark:text-gray-300 text-sm mb-4">
                      <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs font-bold mr-2">
                        {webinar.presenter.split(' ').map(n => n[0]).join('')}
                      </div>
                      {webinar.presenter}
                    </div>
                    
                    <button
                      onClick={() => handleRegister(webinar.id)}
                      className={`w-full py-2 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                        webinar.registered 
                          ? 'bg-growth/20 text-success dark:text-success' 
                          : 'bg-gradient-to-r from-premium to-sovereign text-white hover:from-premium-600 hover:to-sovereign-600'
                      }`}
                    >
                      {webinar.registered ? (
                        <>
                          <Play className="w-4 h-4" />
                          Rejoindre
                        </>
                      ) : (
                        <>
                          <Calendar className="w-4 h-4" />
                          S'inscrire
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Past Webinars */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Webinars passés
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {webinars.filter(w => new Date(w.date.split(' ')[2], 
                ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'].indexOf(w.date.split(' ')[1]), 
                w.date.split(' ')[0]) < new Date()).map((webinar, index) => (
                <motion.div
                  key={webinar.id}
                  className="glass rounded-xl overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <webinar.icon className={`w-8 h-8 ${webinar.color}`} />
                      <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">
                        {webinar.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      {webinar.title}
                    </h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        {webinar.date}
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                        <Clock className="w-4 h-4 mr-2" />
                        {webinar.duration}
                      </div>
                    </div>
                    
                    <button className="w-full py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg font-medium transition-all flex items-center justify-center gap-2 hover:bg-gray-300 dark:hover:bg-gray-600">
                      <Play className="w-4 h-4" />
                      Voir l'enregistrement
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            className="glass rounded-xl p-8 mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Suggérez un sujet de webinar
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Vous avez un sujet spécifique que vous aimeriez voir abordé dans un webinar ? Faites-nous part de vos suggestions !
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-premium to-sovereign text-white rounded-lg font-semibold hover:from-premium-600 hover:to-sovereign-600 transition-all shadow-lg">
              Proposer un sujet
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