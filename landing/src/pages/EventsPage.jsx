import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users, Filter, Search, ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from 'react-router-dom';
import { LocalAIHeader } from '../components/LocalAIHeader';
import { LocalAIFooter } from '../components/LocalAIFooter';
import { UrgentSupportSection } from '../components/UrgentSupportSection';

export const EventsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const allEvents = [
    // Événements à venir
    {
      id: 1,
      title: "Workshop: Déploiement LocalAI en Enterprise",
      description: "Formation pratique complète sur le déploiement d'une stack LocalAI pour entreprise avec cas d'usage réels.",
      date: "2025-09-15",
      time: "09:00 - 17:00",
      location: "Paris - La Défense",
      type: "Workshop",
      category: "formation",
      attendees: 25,
      status: "upcoming",
      price: "Gratuit",
      tags: ["Enterprise", "Déploiement", "Hands-on"]
    },
    {
      id: 2,
      title: "Webinaire: IA Souveraine et Conformité RGPD",
      description: "Comment garantir la conformité RGPD avec vos solutions d'IA souveraine. REX clients et bonnes pratiques.",
      date: "2025-09-22",
      time: "14:00 - 15:30",
      location: "En ligne",
      type: "Webinaire",
      category: "compliance",
      attendees: 150,
      status: "upcoming",
      price: "Gratuit",
      tags: ["RGPD", "Conformité", "Juridique"]
    },
    {
      id: 3,
      title: "Conférence: L'avenir de l'IA en France",
      description: "Table ronde avec des experts sur les enjeux de souveraineté numérique et l'avenir de l'IA française.",
      date: "2025-10-05",
      time: "10:00 - 18:00",
      location: "Lyon - Part-Dieu",
      type: "Conférence",
      category: "innovation",
      attendees: 300,
      status: "upcoming",
      price: "149€",
      tags: ["Souveraineté", "Innovation", "Stratégie"]
    },
    {
      id: 4,
      title: "Masterclass: RAG Avancé avec Qdrant + Ollama",
      description: "Techniques avancées de RAG pour optimiser vos applications d'IA avec Qdrant et Ollama.",
      date: "2025-10-12",
      time: "09:30 - 12:30",
      location: "En ligne",
      type: "Masterclass",
      category: "technique",
      attendees: 50,
      status: "upcoming",
      price: "99€",
      tags: ["RAG", "Qdrant", "Technique"]
    },
    {
      id: 5,
      title: "Hackathon: IA pour la Santé",
      description: "48h pour développer des solutions IA souveraines dans le domaine médical. Prix de 10K€ à gagner.",
      date: "2025-10-18",
      time: "09:00 - Dimanche 18:00",
      location: "Toulouse - ENSEEIHT",
      type: "Hackathon",
      category: "competition",
      attendees: 100,
      status: "upcoming",
      price: "Gratuit",
      tags: ["Santé", "Développement", "Prix"]
    },
    {
      id: 6,
      title: "Formation: DevOps pour l'IA Souveraine",
      description: "Automatisation du déploiement et monitoring d'applications IA souveraines en production.",
      date: "2025-11-08",
      time: "09:00 - 17:00",
      location: "Bordeaux - Technopark",
      type: "Formation",
      category: "devops",
      attendees: 30,
      status: "upcoming",
      price: "299€",
      tags: ["DevOps", "Production", "Monitoring"]
    },
    // Événements passés
    {
      id: 7,
      title: "Workshop: Introduction à LocalAI Stack",
      description: "Premier contact avec l'écosystème LocalAI. Installation et premiers pas.",
      date: "2025-08-15",
      time: "14:00 - 18:00",
      location: "Paris - Station F",
      type: "Workshop",
      category: "formation",
      attendees: 40,
      status: "past",
      price: "Gratuit",
      tags: ["Débutant", "Installation"]
    },
    {
      id: 8,
      title: "Webinaire: ROI des Solutions IA Souveraines",
      description: "Calcul du ROI et justification business des projets d'IA souveraine en entreprise.",
      date: "2025-08-01",
      time: "11:00 - 12:00",
      location: "En ligne",
      type: "Webinaire",
      category: "business",
      attendees: 200,
      status: "past",
      price: "Gratuit",
      tags: ["ROI", "Business Case"]
    }
  ];

  const filterOptions = [
    { value: 'all', label: 'Tous les événements' },
    { value: 'upcoming', label: 'À venir' },
    { value: 'past', label: 'Passés' },
    { value: 'formation', label: 'Formations' },
    { value: 'technique', label: 'Techniques' },
    { value: 'business', label: 'Business' }
  ];

  const filteredEvents = allEvents.filter(event => {
    const matchesFilter = selectedFilter === 'all' || 
                         event.status === selectedFilter || 
                         event.category === selectedFilter;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleRegister = (eventId) => {
    // Logique d'inscription à implémenter
    console.log(`Inscription à l'événement ${eventId}`);
  };

  const handleRequestResources = () => {
    // Logique pour demander des ressources personnalisées
    console.log('Demande de ressources personnalisées');
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
          <div className="flex items-center gap-4 mb-8">
            <Link 
              to="/resources" 
              className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Retour aux ressources
            </Link>
          </div>

          <div className="text-center mb-12">
            <motion.h1 
              className="text-4xl font-bold text-gray-800 dark:text-white mb-4 flex items-center justify-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Calendar className="w-10 h-10 text-success filter drop-shadow-[0_0_8px_rgba(254,185,9,0.8)]" />
              Tous les Événements
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Formations, workshops, conférences et hackathons autour de l'IA souveraine
            </motion.p>
          </div>

          {/* Filtres et Recherche */}
          <motion.div
            className="glass p-6 rounded-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <Filter className="w-5 h-5" />
                <span className="font-medium">Filtrer :</span>
                <select 
                  value={selectedFilter} 
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="ml-2 px-3 py-2 bg-white/50 dark:bg-black/20 border border-gray-300 dark:border-gray-700 rounded-lg"
                >
                  {filterOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="flex items-center gap-2 flex-1 max-w-md">
                <Search className="w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Rechercher un événement..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 px-3 py-2 bg-white/50 dark:bg-black/20 border border-gray-300 dark:border-gray-700 rounded-lg"
                />
              </div>
            </div>
            
            <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              {filteredEvents.length} événement{filteredEvents.length > 1 ? 's' : ''} trouvé{filteredEvents.length > 1 ? 's' : ''}
            </div>
          </motion.div>

          {/* Liste des Événements */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                className={`glass p-6 rounded-xl ${event.status === 'past' ? 'opacity-75' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: event.status === 'past' ? 0.75 : 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-1 text-xs rounded font-medium ${
                        event.type === 'Workshop' ? 'bg-sovereign/20 text-sovereign dark:text-sovereign' :
                        event.type === 'Webinaire' ? 'bg-growth/20 text-success dark:text-success' :
                        event.type === 'Conférence' ? 'bg-premium/20 text-success dark:text-success' :
                        event.type === 'Masterclass' ? 'bg-action/20 text-action dark:text-action' :
                        event.type === 'Hackathon' ? 'bg-action/20 text-action dark:text-action' :
                        'bg-gray-500/20 text-gray-600 dark:text-gray-400'
                      }`}>
                        {event.type}
                      </span>
                      {event.status === 'past' && (
                        <span className="px-2 py-1 bg-gray-500/20 text-gray-600 dark:text-gray-400 text-xs rounded">
                          Terminé
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                      {event.title}
                    </h3>
                  </div>
                  <div className="text-right text-sm text-gray-600 dark:text-gray-400">
                    <div className="font-medium text-success dark:text-success">
                      {event.price}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                  {event.description}
                </p>
                
                <div className="space-y-2 mb-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(event.date).toLocaleDateString('fr-FR', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    {event.attendees} participants max
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {event.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-500/10 text-gray-600 dark:text-gray-400 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button 
                  onClick={() => handleRegister(event.id)}
                  disabled={event.status === 'past'}
                  className={`w-full py-2 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                    event.status === 'past' 
                      ? 'bg-gray-500/20 text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-growth to-sovereign text-white hover:from-growth-600 hover:to-sovereign-600'
                  }`}
                >
                  {event.status === 'past' ? 'Événement terminé' : 'S\'inscrire'}
                  {event.status !== 'past' && <ExternalLink className="w-4 h-4" />}
                </button>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            className="glass-green rounded-xl p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Besoin d'un événement sur mesure ?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Nous organisons des formations et workshops personnalisés pour votre équipe ou votre organisation.
            </p>
            <button 
              onClick={handleRequestResources}
              className="px-6 py-3 bg-gradient-to-r from-growth to-sovereign text-white rounded-lg font-semibold hover:from-growth-600 hover:to-sovereign-600 transition-all shadow-lg"
            >
              Demander des ressources personnalisées
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