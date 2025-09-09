import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Play, Calendar, User, Building, Mail, Clock, Video, Users, Zap, Shield, Database, Star, CheckCircle, Phone, MessageSquare, Award, TrendingUp, Euro, Target } from "lucide-react";
import { LocalAIHeader } from '../components/LocalAIHeader';
import { LocalAIFooter } from '../components/LocalAIFooter';
import { UrgentSupportSection } from '../components/UrgentSupportSection';
import { Link } from 'react-router-dom';

export const DemoPage = () => {
  const [selectedDemo, setSelectedDemo] = useState('overview');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    sector: '',
    useCase: '',
    companySize: '',
    budget: '',
    timeline: '',
    specificNeeds: '',
    currentSolution: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create a personalized confirmation message
    const sector = formData.sector || 'votre secteur';
    const useCase = formData.useCase || 'vos besoins';
    const timeline = formData.timeline || 'votre timeline';
    const selectedDemoType = demoOptions.find(opt => opt.id === selectedDemo);
    
    const personalizedMessage = `Merci ${formData.name} ! 

Nous avons bien reçu votre demande de démonstration "${selectedDemoType?.title}" pour ${formData.company}.

🎯 Secteur : ${sector}
🔧 Cas d'usage : ${useCase}
📅 Timeline : ${timeline}

Notre équipe va étudier vos besoins et vous contacter sous 1h pour :
• Confirmer votre créneau du ${formData.date} à ${formData.time}
• Préparer une démo adaptée à vos spécificités
• Vous envoyer l'invitation de visioconférence

En attendant, vous pouvez consulter notre documentation sur /documentation`;
    
    alert(personalizedMessage);
    
    // In a real application, you would send this data to your backend
    console.log('Demo request submitted:', {
      ...formData,
      selectedDemo,
      submittedAt: new Date().toISOString()
    });
    
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      sector: '',
      useCase: '',
      companySize: '',
      budget: '',
      timeline: '',
      specificNeeds: '',
      currentSolution: ''
    });
  };

  const demoOptions = [
    {
      id: 'overview',
      title: 'Aperçu de la plateforme',
      duration: '30 min',
      description: 'Découverte complète de l\'interface et des fonctionnalités principales'
    },
    {
      id: 'security',
      title: 'Sécurité & Conformité',
      duration: '45 min',
      description: 'Approfondissement sur la sécurité, la confidentialité et la conformité RGPD'
    },
    {
      id: 'sector-specific',
      title: 'Démonstration Sectorielle',
      duration: '45 min',
      description: 'Présentation adaptée à votre secteur d\'activité avec cas d\'usage concrets'
    },
    {
      id: 'technical',
      title: 'Architecture Technique',
      duration: '60 min',
      description: 'Deep-dive technique : déploiement, intégrations, APIs et personnalisations'
    },
    {
      id: 'custom',
      title: 'Démonstration Personnalisée',
      duration: '75 min',
      description: 'Adaptation complète à vos cas d\'usage spécifiques et environnement'
    }
  ];

  const sectors = [
    'Finance & Banque',
    'Santé & Pharmaceutique',
    'Éducation & Recherche',
    'Secteur Public',
    'Juridique & Compliance',
    'Retail & E-commerce',
    'Industrie & Manufacturing',
    'Assurance',
    'Énergie & Utilities',
    'Télécommunications',
    'Transport & Logistique',
    'Autre'
  ];

  const useCases = [
    'Support Client & Chatbot',
    'Analyse Documentaire',
    'Automatisation de Processus',
    'Intelligence Stratégique',
    'Aide à la Décision',
    'Formation & E-learning',
    'Détection de Fraude',
    'Supply Chain Optimization',
    'Marketing Personnalisé',
    'Maintenance Prédictive',
    'Assistant Médical',
    'Trading Algorithmique',
    'Cybersécurité',
    'Gestion Immobilière',
    'Autre'
  ];

  const companySizes = [
    'TPE (1-9 employés)',
    'PME (10-249 employés)',
    'ETI (250-4999 employés)',
    'Grande Entreprise (5000+ employés)',
    'Administration/Organisme Public'
  ];

  const budgetRanges = [
    'Moins de 10k€',
    '10k€ - 50k€',
    '50k€ - 100k€',
    '100k€ - 500k€',
    'Plus de 500k€',
    'À définir'
  ];

  const timelines = [
    'Immédiat (< 1 mois)',
    'Court terme (1-3 mois)',
    'Moyen terme (3-6 mois)',
    'Long terme (6-12 mois)',
    'Exploratoire (> 12 mois)'
  ];

  const features = [
    {
      icon: Zap,
      title: 'Performance',
      description: 'Traitement des requêtes en moins de 2 secondes'
    },
    {
      icon: Shield,
      title: 'Sécurité',
      description: 'Conformité RGPD et chiffrement de bout en bout'
    },
    {
      icon: Database,
      title: 'Données locales',
      description: 'Vos données ne quittent jamais votre infrastructure'
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
          {/* HERO SECTION OPTIMISÉ DÉMONSTRATION */}
          <div className="text-center mb-16">
            <div className="mb-6">
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6 leading-tight">
              <span className="block mb-2 text-2xl md:text-3xl font-medium text-sovereign dark:text-sovereign">
                🚀 Démo Live Personnalisée
              </span>
              Voyez Votre ROI
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sovereign via-premium to-sovereign">
                {" "}En Direct
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto mb-8 leading-relaxed">
              🎯 <strong className="text-action">DÉMO UNIQUE :</strong> Voir Local AI en action sur
              <strong className="text-sovereign"> VOS données</strong>, calculer
              <strong className="text-success"> VOTRE ROI en direct</strong> et obtenir votre
              <strong className="text-success"> devis personnalisé</strong> en fin de session -
              <strong className="text-action"> 100% GRATUIT</strong> !
            </p>

            {/* Statistiques démo */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                { label: "Démos Réalisées", value: "2,847", icon: Play, color: "text-sovereign" },
                { label: "Taux Conversion", value: "94.2%", icon: Target, color: "text-success" },
                { label: "Durée Moyenne", value: "47 min", icon: Clock, color: "text-success" },
                { label: "ROI Moyen Calculé", value: "285%", icon: TrendingUp, color: "text-action" }
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="glass p-4 rounded-lg text-center"
                >
                  <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-2`} />
                  <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs Hero démo */}
            <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
              <div className="relative">
                <div className="absolute -top-2 -right-2 bg-growth text-white text-xs font-bold px-2 py-1 rounded-full">
                  GRATUIT
                </div>
                <div className="px-8 py-4 bg-gradient-to-r from-sovereign to-premium text-white text-lg font-bold rounded-xl shadow-lg hover:from-sovereign-600 hover:to-premium-600 transition-all cursor-pointer">
                  <Play className="w-5 h-5 inline mr-2" />
                  🎯 RÉSERVER MA DÉMO PERSONNALISÉE
                </div>
              </div>

              <div>
                <button
                  onClick={() => { 
                    if (typeof window.activateConvocore === 'function') { 
                      window.activateConvocore(); 
                    } else if (window.VG && typeof window.VG.open === 'function') {
                      window.VG.open();
                    }
                  }}
                  className="px-8 py-4 border-2 border-sovereign text-sovereign dark:text-sovereign text-lg font-bold rounded-xl hover:bg-sovereign-50 dark:hover:bg-sovereign-900/20 transition-all flex items-center justify-center"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  💬 EXPERT DÉMO EN DIRECT
                </button>
              </div>
            </div>

            {/* Garanties démo */}
            <div className="text-center p-4 bg-gradient-to-r from-success-50 to-action-50 dark:from-success-900/20 dark:to-action-900/20 border border-success-200 dark:border-success-800 rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <CheckCircle className="w-5 h-5 text-success mr-2" />
                <span className="text-success-700 dark:text-success-300 font-semibold">
                  🎁 DÉMO PREMIUM : ROI calculé + Devis personnalisé + Plan déploiement - Le tout GRATUIT
                </span>
              </div>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-1" />
                  <span>✅ Vos données confidentielles</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>⚡ 30-75 min selon vos besoins</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  <span>👥 Jusqu'à 10 participants</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Demo Options */}
            <div className="lg:col-span-1">
              <div className="glass rounded-xl p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                  Choisissez votre démo
                </h2>
                
                <div className="space-y-4">
                  {demoOptions.map((option) => (
                    <div 
                      key={option.id}
                      className={`p-4 rounded-lg cursor-pointer transition-all ${
                        selectedDemo === option.id 
                          ? 'bg-sovereign/20 border-2 border-sovereign' 
                          : 'bg-white/10 dark:bg-black/20 hover:bg-white/20 dark:hover:bg-black/30 border-2 border-transparent'
                      }`}
                      onClick={() => setSelectedDemo(option.id)}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-gray-800 dark:text-white">
                          {option.title}
                        </h3>
                        <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">
                          {option.duration}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {option.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="glass rounded-xl p-6">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                  Points clés
                </h2>
                
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="p-2 bg-sovereign/10 rounded-lg mt-1">
                        {React.createElement(feature.icon, { className: "w-5 h-5 text-sovereign" })}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 dark:text-white">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Demo Scheduling Form */}
            <div className="lg:col-span-2">
              <div className="glass rounded-xl p-8">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-sovereign" />
                  Planifier votre démonstration
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                          <User className="w-4 h-4" />
                          Nom complet
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full p-3 rounded-lg bg-white/50 dark:bg-black/20 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Votre nom"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                          <Building className="w-4 h-4" />
                          Entreprise
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          required
                          className="w-full p-3 rounded-lg bg-white/50 dark:bg-black/20 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Nom de votre entreprise"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full p-3 rounded-lg bg-white/50 dark:bg-black/20 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="votre@email.com"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 mb-2">
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full p-3 rounded-lg bg-white/50 dark:bg-black/20 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="+33 1 23 45 67 89"
                        />
                      </div>
                      
                      {/* Secteur d'activité */}
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 mb-2">
                          Secteur d'activité *
                        </label>
                        <select
                          name="sector"
                          value={formData.sector}
                          onChange={handleInputChange}
                          required
                          className="w-full p-3 rounded-lg bg-white/50 dark:bg-black/20 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Sélectionnez votre secteur</option>
                          {sectors.map((sector, index) => (
                            <option key={index} value={sector}>{sector}</option>
                          ))}
                        </select>
                      </div>

                      {/* Cas d'usage */}
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 mb-2">
                          Cas d'usage principal *
                        </label>
                        <select
                          name="useCase"
                          value={formData.useCase}
                          onChange={handleInputChange}
                          required
                          className="w-full p-3 rounded-lg bg-white/50 dark:bg-black/20 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Sélectionnez votre cas d'usage</option>
                          {useCases.map((useCase, index) => (
                            <option key={index} value={useCase}>{useCase}</option>
                          ))}
                        </select>
                      </div>

                      {/* Taille entreprise et Budget */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-700 dark:text-gray-300 mb-2">
                            Taille de l'entreprise
                          </label>
                          <select
                            name="companySize"
                            value={formData.companySize}
                            onChange={handleInputChange}
                            className="w-full p-3 rounded-lg bg-white/50 dark:bg-black/20 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="">Taille entreprise</option>
                            {companySizes.map((size, index) => (
                              <option key={index} value={size}>{size}</option>
                            ))}
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-gray-700 dark:text-gray-300 mb-2">
                            Budget indicatif
                          </label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                            className="w-full p-3 rounded-lg bg-white/50 dark:bg-black/20 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="">Budget indicatif</option>
                            {budgetRanges.map((budget, index) => (
                              <option key={index} value={budget}>{budget}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Timeline */}
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 mb-2">
                          Timeline du projet
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full p-3 rounded-lg bg-white/50 dark:bg-black/20 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Sélectionnez votre timeline</option>
                          {timelines.map((timeline, index) => (
                            <option key={index} value={timeline}>{timeline}</option>
                          ))}
                        </select>
                      </div>

                      {/* Solution actuelle */}
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 mb-2">
                          Solution actuelle (si existante)
                        </label>
                        <input
                          type="text"
                          name="currentSolution"
                          value={formData.currentSolution}
                          onChange={handleInputChange}
                          className="w-full p-3 rounded-lg bg-white/50 dark:bg-black/20 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Ex: ChatGPT, Azure OpenAI, solution interne..."
                        />
                      </div>

                      {/* Besoins spécifiques */}
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 mb-2">
                          Besoins spécifiques ou questions
                        </label>
                        <textarea
                          name="specificNeeds"
                          value={formData.specificNeeds}
                          onChange={handleInputChange}
                          rows={3}
                          className="w-full p-3 rounded-lg bg-white/50 dark:bg-black/20 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                          placeholder="Décrivez vos défis actuels, contraintes techniques, exigences de sécurité..."
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-700 dark:text-gray-300 mb-2">
                            Date préférée
                          </label>
                          <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            required
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full p-3 rounded-lg bg-white/50 dark:bg-black/20 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-gray-700 dark:text-gray-300 mb-2">
                            Heure préférée
                          </label>
                          <select
                            name="time"
                            value={formData.time}
                            onChange={handleInputChange}
                            required
                            className="w-full p-3 rounded-lg bg-white/50 dark:bg-black/20 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="">Sélectionnez</option>
                            <option value="09:00">09:00 - 10:00</option>
                            <option value="10:00">10:00 - 11:00</option>
                            <option value="11:00">11:00 - 12:00</option>
                            <option value="14:00">14:00 - 15:00</option>
                            <option value="15:00">15:00 - 16:00</option>
                            <option value="16:00">16:00 - 17:00</option>
                          </select>
                        </div>
                      </div>
                  
                    </form>
                  </div>
                  
                  <div>
                    <div className="bg-gray-200 dark:bg-gray-700 rounded-lg aspect-video flex items-center justify-center mb-6">
                      <Play className="w-16 h-16 text-gray-400" />
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-sovereign/10 rounded-lg">
                          <Video className="w-5 h-5 text-sovereign" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800 dark:text-white">
                            Format
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            Visioconférence interactive (Teams, Zoom, ou Google Meet)
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-sovereign/10 rounded-lg">
                          <Users className="w-5 h-5 text-sovereign" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800 dark:text-white">
                            Participants
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            Jusqu'à 10 personnes de votre équipe
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-sovereign/10 rounded-lg">
                          <Clock className="w-5 h-5 text-sovereign" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800 dark:text-white">
                            Durée
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            {demoOptions.find(opt => opt.id === selectedDemo)?.duration || '30 min'}
                          </p>
                        </div>
                      </div>
                      
                      {/* Dynamic demo content preview */}
                      {(formData.sector || formData.useCase || selectedDemo !== 'overview') && (
                        <div className="mt-6 p-4 bg-sovereign-50 dark:bg-sovereign-900/20 rounded-lg border border-sovereign-200 dark:border-sovereign-800">
                          <h4 className="font-semibold text-sovereign-800 dark:text-sovereign-300 mb-3">
                            Cette démo couvrira :
                          </h4>
                          <ul className="space-y-1 text-sm text-sovereign-700 dark:text-sovereign-300">
                            {selectedDemo === 'sector-specific' && formData.sector && (
                              <li>• Cas d'usage spécifiques au secteur {formData.sector}</li>
                            )}
                            {selectedDemo === 'technical' && (
                              <li>• Architecture technique détaillée et intégrations</li>
                            )}
                            {formData.useCase && (
                              <li>• Démonstration focusée sur {formData.useCase}</li>
                            )}
                            {formData.currentSolution && (
                              <li>• Comparaison avec votre solution actuelle ({formData.currentSolution})</li>
                            )}
                            {formData.companySize && (
                              <li>• Adaptation aux enjeux d'une {formData.companySize}</li>
                            )}
                            <li>• Questions/réponses personnalisées</li>
                            <li>• Prochaines étapes et planning d'implémentation</li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
      </motion.div>
      
      {/* Section Support Urgente */}
      <UrgentSupportSection />
      
      <LocalAIFooter />
    </div>
  );
};