import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, User, Building, MessageSquare, Send, Star, Shield, Zap, Award, CheckCircle, TrendingUp, Euro, Target, Calendar, Users } from "lucide-react";
import { LocalAIHeader } from '../components/LocalAIHeader';
import { LocalAIFooter } from '../components/LocalAIFooter';
import { UrgentSupportSection } from '../components/UrgentSupportSection';
import { Link } from 'react-router-dom';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    sector: '',
    companySize: '',
    budget: '',
    timeline: '',
    priority: '',
    preferredContact: '',
    currentChallenge: '',
    specificGoals: ''
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
    const selectedSubject = subjectOptions.find(opt => opt.value === formData.subject);
    const sector = formData.sector || 'votre secteur';
    const timeline = formData.timeline || 'votre timeline';
    const priority = formData.priority || 'priorité normale';
    
    const personalizedMessage = `Merci ${formData.name} ! 

Nous avons bien reçu votre demande concernant : "${selectedSubject?.label || 'votre demande'}" pour ${formData.company}.

🎯 Secteur : ${sector}
📅 Timeline : ${timeline}
⚡ Priorité : ${priority}

📧 Prochaines étapes :
• Accusé de réception par email dans les 5 minutes
• Prise de contact par notre expert spécialisé sous 4h ouvrées
• Proposition d'un rendez-vous selon vos disponibilités

Contact prioritaire : ${formData.preferredContact || 'Email'}

En attendant, consultez notre documentation : http://localhost:3033/documentation`;
    
    alert(personalizedMessage);
    
    // In a real application, you would send this data to your backend with priority routing
    console.log('Contact request submitted:', {
      ...formData,
      priority: formData.priority || 'Normal',
      submittedAt: new Date().toISOString(),
      expectedResponseTime: formData.priority === 'Très urgent' ? '1 hour' : '4 hours'
    });
    
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      sector: '',
      companySize: '',
      budget: '',
      timeline: '',
      priority: '',
      preferredContact: '',
      currentChallenge: '',
      specificGoals: ''
    });
  };


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

  const priorities = [
    'Très urgent',
    'Urgent',
    'Normal',
    'Faible priorité'
  ];

  const contactMethods = [
    'Email',
    'Téléphone',
    'Visioconférence',
    'Rendez-vous physique'
  ];

  const subjectOptions = [
    {
      value: 'demo',
      label: 'Démonstration personnalisée',
      description: 'Voir IA Souveraine en action pour mon secteur'
    },
    {
      value: 'roi-analysis',
      label: 'Analyse ROI & Business Case',
      description: 'Calculer le retour sur investissement'
    },
    {
      value: 'deployment',
      label: 'Accompagnement déploiement',
      description: 'Aide à la mise en œuvre technique'
    },
    {
      value: 'compliance',
      label: 'Audit conformité & sécurité',
      description: 'RGPD, AI Act, ISO 27001, SOC2'
    },
    {
      value: 'integration',
      label: 'Intégration & APIs',
      description: 'Connecter Local AI à mes systèmes'
    },
    {
      value: 'training',
      label: 'Formation & accompagnement',
      description: 'Former mes équipes à l\'IA'
    },
    {
      value: 'technical',
      label: 'Support technique',
      description: 'Aide sur un problème technique'
    },
    {
      value: 'partnership',
      label: 'Partenariat commercial',
      description: 'Devenir partenaire ou revendeur'
    },
    {
      value: 'investment',
      label: 'Investissement & financement',
      description: 'Opportunités d\'investissement'
    },
    {
      value: 'other',
      label: 'Autre demande',
      description: 'Besoin spécifique non listé'
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Prioritaire",
      content: "priority@local-ai.fr",
      description: "Réponse immédiate < 1h",
      urgent: true
    },
    {
      icon: Mail,
      title: "Email Standard",
      content: "contact@local-ai.fr",
      description: "Réponse sous 4h ouvrées"
    },
    {
      icon: Phone,
      title: "Ligne Directe Urgences",
      content: "+33 1 23 45 67 90",
      description: "7j/7 - 24h/24",
      urgent: true
    },
    {
      icon: Phone,
      title: "Standard Commercial",
      content: "+33 1 23 45 67 89",
      description: "Lun-Ven 9h-19h"
    },
    {
      icon: MapPin,
      title: "Adresse Principale",
      content: "156 Rue de Charonne",
      description: "75011 Paris, France"
    },
    {
      icon: Clock,
      title: "SLA Garanti",
      content: "99.9%",
      description: "Temps de réponse contracté"
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
          {/* HERO SECTION OPTIMISÉ CONTACT */}
          <div className="text-center mb-16">
            <div className="mb-6">
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6 leading-tight">
              <span className="block mb-2 text-2xl md:text-3xl font-medium text-premium dark:text-premium">
                🚀 Parlons de Votre Projet IA
              </span>
              Transformation
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sovereign via-sovereign to-premium">
                {" "}Garantie
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto mb-8 leading-relaxed">
              🎯 <strong className="text-action">ENGAGEMENT UNIQUE :</strong> Votre projet IA déployé avec succès ou
              <strong className="text-premium"> REMBOURSÉ INTÉGRALEMENT</strong>. Audit gratuit 
              <strong className="text-sovereign"> €2,500</strong> + expert dédié +
              <strong className="text-success"> réponse &lt; 1H</strong> = Votre réussite garantie !
            </p>

            {/* Statistiques contact/réussite */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                { label: "Projets Réussis", value: "1,847", icon: CheckCircle, color: "text-success" },
                { label: "Temps Réponse Moy.", value: "< 47min", icon: Clock, color: "text-premium" },
                { label: "Taux Satisfaction", value: "99.2%", icon: Star, color: "text-success" },
                { label: "Audits Gratuits", value: "€2,500", icon: Euro, color: "text-success" }
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

           {/* CTAs Hero contact */}
            <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
              <div className="relative">
                <div className="absolute -top-2 -right-2 bg-growth text-white text-xs font-bold px-2 py-1 rounded-full">
                  GRATUIT
                </div>
                <div className="px-8 py-4 bg-gradient-to-r from-sovereign to-sovereign text-white text-lg font-bold rounded-xl shadow-lg hover:from-sovereign-600 hover:to-sovereign-600 transition-all cursor-pointer">
                  <Phone className="w-5 h-5 inline mr-2" />
                  🎯 RÉSERVER MON AUDIT GRATUIT
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
                  className="px-8 py-4 border-2 border-sovereign text-premium dark:text-premium text-lg font-bold rounded-xl hover:bg-sovereign-50 dark:hover:bg-sovereign-900/20 transition-all flex items-center justify-center"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  💬 EXPERT EN DIRECT MAINTENANT
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="glass rounded-xl p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                  Informations de contact
                </h2>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className={`flex items-start space-x-4 p-3 rounded-lg transition-all ${
                      info.urgent 
                        ? 'bg-action-50 dark:bg-action-900/20 border border-action-200 dark:border-action-800' 
                        : 'hover:bg-white/20 dark:hover:bg-black/20'
                    }`}>
                      <div className={`p-2 rounded-lg ${
                        info.urgent 
                          ? 'bg-action/10' 
                          : 'bg-sovereign/10'
                      }`}>
                        <info.icon className={`w-6 h-6 ${
                          info.urgent 
                            ? 'text-action' 
                            : 'text-premium'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-gray-800 dark:text-white">
                            {info.title}
                          </h3>
                          {info.urgent && (
                            <span className="px-2 py-1 bg-action text-white text-xs rounded-full">
                              URGENT
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 font-mono">
                          {info.content}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-500">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  ))}
                  
                  {/* Indicateur de priorité dynamique */}
                  {(formData.priority === 'Très urgent' || formData.priority === 'Urgent') && (
                    <div className="p-4 bg-gradient-to-r from-action/20 to-action/20 border border-action-300 dark:border-action-700 rounded-lg">
                      <p className="text-action-700 dark:text-action-300 font-medium text-sm">
                        ⚡ Avec votre niveau de priorité, utilisez les contacts "URGENT" ci-dessus pour une réponse immédiate.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Section dynamique selon les sélections */}
              {(formData.subject || formData.sector || formData.priority) && (
                <div className="glass rounded-xl p-6 mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                    Informations contextuelles
                  </h2>
                  
                  <div className="space-y-3">
                    {formData.priority === 'Très urgent' && (
                      <div className="p-3 bg-action-50 dark:bg-action-900/20 border border-action-200 dark:border-action-800 rounded-lg">
                        <p className="text-action-700 dark:text-action-300 text-sm font-medium">
                          ⚡ Priorité maximale - Réponse sous 1h ouvrée
                        </p>
                      </div>
                    )}
                    
                    {formData.priority === 'Urgent' && (
                      <div className="p-3 bg-action-50 dark:bg-action-900/20 border border-action-200 dark:border-action-800 rounded-lg">
                        <p className="text-action dark:text-action text-sm font-medium">
                          🟡 Priorité élevée - Réponse sous 2h ouvrées
                        </p>
                      </div>
                    )}
                    
                    {formData.subject === 'demo' && (
                      <div className="p-3 bg-sovereign-50 dark:bg-sovereign-900/20 border border-sovereign-200 dark:border-sovereign-800 rounded-lg">
                        <p className="text-sovereign-700 dark:text-sovereign-300 text-sm">
                          📺 Une démonstration personnalisée sera préparée pour votre secteur.
                        </p>
                      </div>
                    )}
                    
                    {formData.subject === 'compliance' && (
                      <div className="p-3 bg-growth-50 dark:bg-growth-900/20 border border-growth-200 dark:border-growth-800 rounded-lg">
                        <p className="text-growth-700 dark:text-growth-300 text-sm">
                          🔒 Notre expert conformité RGPD/AI Act vous contactera directement.
                        </p>
                      </div>
                    )}
                    
                    {formData.subject === 'technical' && (
                      <div className="p-3 bg-premium-50 dark:bg-premium-900/20 border border-premium-200 dark:border-premium-800 rounded-lg">
                        <p className="text-premium-700 dark:text-premium-300 text-sm">
                          🔧 Notre équipe technique vous apportera une assistance spécialisée.
                        </p>
                      </div>
                    )}
                    
                    {formData.sector && ['Finance & Banque', 'Santé & Pharmaceutique', 'Secteur Public'].includes(formData.sector) && (
                      <div className="p-3 bg-success-50 dark:bg-success-900/20 border border-success-200 dark:border-success-800 rounded-lg">
                        <p className="text-success-700 dark:text-success-300 text-sm">
                          🏦 Secteur réglementé - Notre expert conformité sera associé à votre demande.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              <div className="glass rounded-xl p-6">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  Nos bureaux
                </h2>
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                  <MapPin className="w-12 h-12 text-gray-400" />
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Paris (Siège) • Lyon • Marseille • Bordeaux
                </p>
                
                {/* Liens d'action rapide */}
                <div className="space-y-2">
                  <Link
                    to="/demo"
                    className="block w-full text-center px-4 py-2 bg-sovereign/10 text-premium dark:text-premium rounded-lg hover:bg-sovereign/20 transition-all text-sm font-medium"
                  >
                    📺 Planifier une démo
                  </Link>
                  <Link
                    to="/documentation"
                    className="block w-full text-center px-4 py-2 bg-gray-500/10 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-500/20 transition-all text-sm font-medium"
                  >
                    📚 Consulter la documentation
                  </Link>
                  <button
                    onClick={() => { if (typeof window.activateConvocore === 'function') { window.activateConvocore(); } }}
                    className="block w-full text-center px-4 py-2 bg-growth/10 text-success dark:text-success rounded-lg hover:bg-growth/20 transition-all text-sm font-medium"
                  >
                    💬 Chat IA 24/7
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="glass rounded-xl p-8">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                  Envoyez-nous un message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        className="w-full p-3 rounded-lg bg-white/50 dark:bg-black/20 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
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
                        className="w-full p-3 rounded-lg bg-white/50 dark:bg-black/20 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
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
                        className="w-full p-3 rounded-lg bg-white/50 dark:bg-black/20 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
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
                        className="w-full p-3 rounded-lg bg-white/50 dark:bg-black/20 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        placeholder="+33 1 23 45 67 89"
                      />
                    </div>
                  </div>
                  
                  {/* Secteur d'activité et Taille entreprise */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 mb-2">
                        Secteur d'activité *
                      </label>
                      <select
                        name="sector"
                        value={formData.sector}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 rounded-lg bg-white/50 dark:bg-black/20 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      >
                        <option value="">Sélectionnez votre secteur</option>
                        {sectors.map((sector, index) => (
                          <option key={index} value={sector}>{sector}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 mb-2">
                        Taille de l'entreprise
                      </label>
                      <select
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-lg bg-white/50 dark:bg-black/20 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      >
                        <option value="">Taille entreprise</option>
                        {companySizes.map((size, index) => (
                          <option key={index} value={size}>{size}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Sujet avec descriptions */}
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-2">
                      Sujet de votre demande *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 rounded-lg bg-white/50 dark:bg-black/20 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    >
                      <option value="">Sélectionnez votre besoin</option>
                      {subjectOptions.map((option, index) => (
                        <option key={index} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    {formData.subject && (
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {subjectOptions.find(opt => opt.value === formData.subject)?.description}
                      </p>
                    )}
                  </div>

                  {/* Budget et Timeline */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 mb-2">
                        Budget indicatif
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-lg bg-white/50 dark:bg-black/20 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      >
                        <option value="">Budget indicatif</option>
                        {budgetRanges.map((budget, index) => (
                          <option key={index} value={budget}>{budget}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 mb-2">
                        Timeline du projet
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-lg bg-white/50 dark:bg-black/20 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      >
                        <option value="">Sélectionnez votre timeline</option>
                        {timelines.map((timeline, index) => (
                          <option key={index} value={timeline}>{timeline}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Priorité et Mode de contact préféré */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 mb-2">
                        Priorité de la demande
                      </label>
                      <select
                        name="priority"
                        value={formData.priority}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-lg bg-white/50 dark:bg-black/20 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      >
                        <option value="">Niveau de priorité</option>
                        {priorities.map((priority, index) => (
                          <option key={index} value={priority}>{priority}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 mb-2">
                        Mode de contact préféré
                      </label>
                      <select
                        name="preferredContact"
                        value={formData.preferredContact}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-lg bg-white/50 dark:bg-black/20 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      >
                        <option value="">Comment préférez-vous être contacté ?</option>
                        {contactMethods.map((method, index) => (
                          <option key={index} value={method}>{method}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Défi actuel */}
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-2">
                      Principal défi ou problème actuel
                    </label>
                    <textarea
                      name="currentChallenge"
                      value={formData.currentChallenge}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full p-3 rounded-lg bg-white/50 dark:bg-black/20 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
                      placeholder="Quel est votre principal défi business ou technique que l'IA pourrait résoudre ?"
                    />
                  </div>

                  {/* Objectifs spécifiques */}
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-2">
                      Objectifs spécifiques
                    </label>
                    <textarea
                      name="specificGoals"
                      value={formData.specificGoals}
                      onChange={handleInputChange}
                      rows={2}
                      className="w-full p-3 rounded-lg bg-white/50 dark:bg-black/20 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
                      placeholder="Quels résultats concrets attendez-vous ? (gain de temps, réduction des coûts, amélioration qualité...)"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full p-3 rounded-lg bg-white/50 dark:bg-black/20 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder="Décrivez votre projet ou votre question..."
                    ></textarea>
                  </div>
                  
                  {/* Section urgence avant soumission */}
                  <div className="mb-6 p-4 bg-gradient-to-r from-action-50 to-action-50 dark:from-action-900/20 dark:to-action-900/20 border border-action-200 dark:border-action-800 rounded-lg">
                    <div className="text-center mb-4">
                      <h3 className="text-lg font-bold text-action dark:text-action">
                        ⏰ RÉPONSE GARANTIE SOUS 1 HEURE
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <div className="font-bold text-premium dark:text-premium mb-1">⚡ 0-1H</div>
                        <div className="text-gray-600 dark:text-gray-400">Confirmation réception + Expert assigné</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-sovereign dark:text-sovereign mb-1">📞 1-4H</div>
                        <div className="text-gray-600 dark:text-gray-400">Audit gratuit personnalisé €2,500</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-success dark:text-success mb-1">🎯 4-24H</div>
                        <div className="text-gray-600 dark:text-gray-400">Proposition commerciale détaillée</div>
                      </div>
                    </div>
                    <div className="text-center mt-4 p-2 bg-action-100 dark:bg-action-900/30 rounded">
                      <span className="text-action-700 dark:text-action-300 text-sm font-medium">
                        🚨 Plus que 39 créneaux expert cette semaine • Priorité aux demandes complètes
                      </span>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <button
                      type="submit"
                      className="px-12 py-4 bg-gradient-to-r from-sovereign to-sovereign text-white rounded-xl font-bold text-lg hover:from-sovereign-600 hover:to-sovereign-600 transition-all shadow-xl flex items-center gap-3 mx-auto relative"
                    >
                      <div className="absolute -top-2 -right-2 bg-growth text-white text-xs font-bold px-2 py-1 rounded-full">
                        GRATUIT
                      </div>
                      <Send className="w-6 h-6" />
                      🚀 LANCER MON PROJET IA
                      <div className="text-sm font-normal opacity-90 absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                        Audit €2,500 • Réponse &lt; 1H • Expert dédié
                      </div>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* SECTION FINALE URGENCE ET GARANTIES CONTACT */}
          <div className="mt-16">
            <div className="bg-gradient-to-r from-sovereign-50 to-sovereign-50 dark:from-sovereign-900/20 dark:to-sovereign-900/20 border border-sovereign-200 dark:border-sovereign-800 rounded-xl p-8 relative overflow-hidden">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                  🎯 POURQUOI CHOISIR ECOSYSTEM AI MAINTENANT ?
                </h2>
                <p className="text-lg text-sovereign-700 dark:text-sovereign-300 max-w-3xl mx-auto">
                  <strong>ENGAGEMENT TOTAL :</strong> Votre succès IA garanti ou remboursement intégral
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Nos Garanties */}
                <div className="bg-white/50 dark:bg-black/20 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <Shield className="w-6 h-6 text-success mr-3" />
                    Nos Garanties Uniques
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-success mr-2" />
                      <strong>Succès projet garanti ou remboursement 100%</strong>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-success mr-2" />
                      <strong>Audit gratuit €2,500 sans engagement</strong>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-success mr-2" />
                      <strong>Réponse expert &lt; 1H garantie contractuelle</strong>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-success mr-2" />
                      <strong>Support 24/7 pendant toute la durée projet</strong>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-success mr-2" />
                      <strong>Conformité RGPD/AI Act certifiée</strong>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-action-50 to-action-50 dark:from-action-900/30 dark:to-action-900/30 rounded-lg p-6 border-2 border-action">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <Zap className="w-6 h-6 text-action mr-3" />
                    Urgence Réelle
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                    <li className="flex items-center">
                      <Target className="w-4 h-4 text-action mr-2" />
                      <strong>Plus que 39 créneaux expert cette semaine</strong>
                    </li>
                    <li className="flex items-center">
                      <Target className="w-4 h-4 text-action mr-2" />
                      <strong>41 licences à vie restantes seulement</strong>
                    </li>
                    <li className="flex items-center">
                      <Target className="w-4 h-4 text-action mr-2" />
                      <strong>Offre audit gratuit expire 31 décembre</strong>
                    </li>
                    <li className="flex items-center">
                      <Target className="w-4 h-4 text-action mr-2" />
                      <strong>Vos concurrents s'équipent maintenant</strong>
                    </li>
                    <li className="flex items-center">
                      <Target className="w-4 h-4 text-action mr-2" />
                      <strong>Retard = désavantage concurrentiel permanent</strong>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Dernières conversions */}
              <div className="bg-growth-50 dark:bg-growth-900/20 border border-growth-200 dark:border-growth-800 rounded-lg p-6 mb-8">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-growth-700 dark:text-growth-300">
                    ✅ Dernières Conversions (Temps Réel)
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-success mb-1">23</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Projets signés aujourd'hui</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-sovereign mb-1">156</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Audits gratuits cette semaine</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-success mb-1">€4.2M</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">CA généré ce mois</div>
                  </div>
                  <div className="text-center border border-action/30 rounded p-2">
                    <div className="text-2xl font-bold text-action mb-1">39</div>
                    <div className="text-sm text-action dark:text-action font-medium">Places restantes</div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
                  <button
                    onClick={() => { 
                      if (typeof window.activateConvocore === 'function') { 
                        window.activateConvocore(); 
                      } else if (window.VG && typeof window.VG.open === 'function') {
                        window.VG.open();
                      }
                    }}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-sovereign to-sovereign text-white font-bold text-lg rounded-lg hover:from-sovereign-600 hover:to-sovereign-600 transition-all shadow-xl"
                  >
                    <MessageSquare className="w-6 h-6 mr-2" />
                    💬 EXPERT DISPONIBLE MAINTENANT
                  </button>
                  <Link
                    to="/roi-calculator"
                    className="inline-flex items-center px-8 py-4 border-2 border-sovereign text-premium dark:text-premium font-bold text-lg rounded-lg hover:bg-sovereign-50 dark:hover:bg-sovereign-900/20 transition-all"
                  >
                    <TrendingUp className="w-6 h-6 mr-2" />
                    💰 CALCULER MON ROI AVANT
                  </Link>
                </div>
                <p className="text-sm text-action dark:text-action font-medium">
                  ⏰ Plus que quelques heures : Tarif licence à vie expire définitivement à minuit
                </p>
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