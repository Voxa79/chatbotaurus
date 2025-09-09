import React from 'react';
import { motion } from "framer-motion";
import { Brain, Users, BookOpen, Eye, Shield, Headphones, Package, CheckCircle, ArrowRight, Target, Briefcase, Heart, Star, Calculator, Phone, MessageCircle, Zap, Award, Clock, Euro } from "lucide-react";
import { LocalAIHeader } from '../components/LocalAIHeader';
import { LocalAIFooter } from '../components/LocalAIFooter';
import { UrgentSupportSection } from '../components/UrgentSupportSection';
import { Link } from 'react-router-dom';

export const ExpertisePage = () => {
  const expertiseSections = [
    {
      id: "consulting",
      title: "Consulting en IA Souveraine",
      icon: Brain,
      color: "text-sovereign",
      glow: "rgba(254,185,9,0.8)",
      description: "Accompagnement stratégique pour transformer votre entreprise avec l'IA souveraine",
      packages: [
        {
          type: "Done For You (DFY)",
          title: "Accompagnement Clé en Main",
          price: "10,770€ HT",
          features: [
            "Audit complet de votre infrastructure IA actuelle",
            "Conception de l'architecture IA souveraine adaptée",
            "Implémentation et déploiement de la solution",
            "Formation de votre équipe technique",
            "Support 24/7 pendant 3 mois"
          ]
        },
        {
          type: "Done With You (DWY)",
          title: "Coaching Collaboratif",
          price: "5,670€ HT",
          features: [
            "Analyse de vos besoins et objectifs IA",
            "Accompagnement à la conception de votre solution",
            "Revues de code et bonnes pratiques",
            "Sessions de formation personnalisées",
            "Support technique pendant 2 mois"
          ]
        },
        {
          type: "Do It Yourself (DIY)",
          title: "Ressources Autonomes",
          price: "3,870€ HT",
          features: [
            "Documentation complète et guides pratiques",
            "Templates et outils de conception",
            "Accès à notre plateforme de formation",
            "Consultation mensuelle de 2h",
            "Accès à notre communauté d'experts"
          ]
        }
      ]
    },
    {
      id: "formation",
      title: "Formation IA",
      icon: Users,
      color: "text-success",
      glow: "rgba(254,185,9,0.8)",
      description: "Programmes de formation spécialisés pour maîtriser l'IA souveraine",
      packages: [
        {
          type: "Done For You (DFY)",
          title: "Formation sur Mesure",
          price: "Devis personnalisé",
          features: [
            "Évaluation des compétences de votre équipe",
            "Programme de formation 100% personnalisé",
            "Formateurs experts en IA souveraine",
            "Support post-formation pendant 6 mois",
            "Certification officielle"
          ]
        },
        {
          type: "Done With You (DWY)",
          title: "Formation Guidée",
          price: "Devis personnalisé",
          features: [
            "Formation standardisée avec adaptations",
            "Ateliers pratiques supervisés",
            "Évaluations et feedback réguliers",
            "Matériel pédagogique complet",
            "Certificat de participation"
          ]
        },
        {
          type: "Do It Yourself (DIY)",
          title: "Formation Autonome",
          price: "Devis personnalisé",
          features: [
            "Accès à la plateforme de formation",
            "Cours en ligne et tutoriels vidéo",
            "Quiz et évaluations automatiques",
            "Certificats de progression",
            "Support communautaire"
          ]
        }
      ]
    },
    {
      id: "conception",
      title: "Conception Pédagogique avec IA",
      icon: BookOpen,
      color: "text-success",
      glow: "rgba(254,185,9,0.8)",
      description: "Création de contenus pédagogiques innovants grâce à l'intelligence artificielle",
      packages: [
        {
          type: "Done For You (DFY)",
          title: "Conception Clé en Main",
          price: "Devis personnalisé",
          features: [
            "Analyse de vos objectifs pédagogiques",
            "Conception de parcours d'apprentissage IA",
            "Développement de contenus interactifs",
            "Intégration de scénarios de simulation",
            "Livraison complète du programme"
          ]
        },
        {
          type: "Done With You (DWY)",
          title: "Co-conception Assistée",
          price: "Devis personnalisé",
          features: [
            "Accompagnement à la conception pédagogique",
            "Outils IA pour la création de contenus",
            "Revues et améliorations collaboratives",
            "Templates et modèles prédéfinis",
            "Support technique pendant le projet"
          ]
        },
        {
          type: "Do It Yourself (DIY)",
          title: "Outils de Conception",
          price: "Devis personnalisé",
          features: [
            "Accès à la plateforme de conception IA",
            "Templates et modèles de contenu",
            "Bibliothèque d'éléments pédagogiques",
            "Guides de bonnes pratiques",
            "Support communautaire"
          ]
        }
      ]
    },
    {
      id: "monitoring",
      title: "Monitoring IA",
      icon: Eye,
      color: "text-premium",
      glow: "rgba(34,211,238,0.8)",
      description: "Surveillance et optimisation continue de vos systèmes d'IA",
      packages: [
        {
          type: "Done For You (DFY)",
          title: "Monitoring Complet",
          price: "Devis personnalisé",
          features: [
            "Surveillance 24/7 de vos systèmes IA",
            "Alertes en temps réel sur les performances",
            "Rapports mensuels détaillés",
            "Optimisation proactive des modèles",
            "Support technique prioritaire"
          ]
        },
        {
          type: "Done With You (DWY)",
          title: "Monitoring Assisté",
          price: "Devis personnalisé",
          features: [
            "Plateforme de monitoring personnalisée",
            "Configuration d'alertes selon vos besoins",
            "Formation à l'utilisation des outils",
            "Support technique pendant les pics",
            "Mises à jour trimestrielles"
          ]
        },
        {
          type: "Do It Yourself (DIY)",
          title: "Outils de Monitoring",
          price: "Devis personnalisé",
          features: [
            "Accès à la plateforme de monitoring",
            "Dashboards personnalisables",
            "Alertes configurables",
            "Documentation et guides d'utilisation",
            "Support standard"
          ]
        }
      ]
    },
    {
      id: "compliance",
      title: "Compliance IA",
      icon: Shield,
      color: "text-action",
      glow: "rgba(249,115,22,0.8)",
      description: "Conformité aux réglementations RGPD, AI Act et normes sectorielles",
      packages: [
        {
          type: "Done For You (DFY)",
          title: "Conformité Clé en Main",
          price: "Devis personnalisé",
          features: [
            "Audit complet de conformité IA",
            "Mise en place des processus RGPD/AI Act",
            "Documentation juridique et technique",
            "Formation à la compliance pour votre équipe",
            "Support juridique pendant 12 mois"
          ]
        },
        {
          type: "Done With You (DWY)",
          title: "Accompagnement à la Conformité",
          price: "Devis personnalisé",
          features: [
            "Guides de mise en conformité personnalisés",
            "Templates de documentation juridique",
            "Revues de conformité trimestrielles",
            "Formation à la réglementation IA",
            "Support juridique limité"
          ]
        },
        {
          type: "Do It Yourself (DIY)",
          title: "Ressources de Conformité",
          price: "Devis personnalisé",
          features: [
            "Accès à la bibliothèque de conformité",
            "Checklists et templates RGPD/AI Act",
            "Guides pratiques de mise en conformité",
            "Mises à jour réglementaires",
            "Support communautaire"
          ]
        }
      ]
    },
    {
      id: "support",
      title: "Support Premium",
      icon: Headphones,
      color: "text-premium",
      glow: "rgba(236,72,153,0.8)",
      description: "Prospection et veille IA pour rester en avance sur la concurrence",
      packages: [
        {
          type: "Done For You (DFY)",
          title: "Veille et Prospection IA",
          price: "Devis personnalisé",
          features: [
            "Veille technologique quotidienne IA",
            "Rapports de tendances mensuels",
            "Prospection de solutions innovantes",
            "Analyse concurrentielle approfondie",
            "Support prioritaire 24/7"
          ]
        },
        {
          type: "Done With You (DWY)",
          title: "Accompagnement à la Veille",
          price: "Devis personnalisé",
          features: [
            "Plateforme de veille personnalisée",
            "Alertes sur les tendances sectorielles",
            "Analyse des innovations émergentes",
            "Support technique pendant les pics",
            "Mises à jour hebdomadaires"
          ]
        },
        {
          type: "Do It Yourself (DIY)",
          title: "Outils de Veille",
          price: "Devis personnalisé",
          features: [
            "Accès à la plateforme de veille IA",
            "Alertes configurables par mots-clés",
            "Rapports automatisés",
            "Bibliothèque de ressources",
            "Support standard"
          ]
        }
      ]
    },
    {
      id: "marketing-digital",
      title: "Marketing Digital IA",
      icon: Target,
      color: "text-success",
      glow: "rgba(254,185,9,0.8)",
      description: "Solutions IA pour marketing personnalisé, automation et optimisation conversions",
      packages: [
        {
          type: "Done For You (DFY)",
          title: "Marketing IA Clé en Main",
          price: "Devis personnalisé",
          features: [
            "Segmentation client automatisée par IA",
            "Générateur de contenu adaptatif multicanal",
            "Attribution marketing et ROI tracking",
            "Chatbots conversationnels avancés",
            "Dashboards performance temps réel"
          ]
        },
        {
          type: "Done With You (DWY)",
          title: "Accompagnement Marketing IA",
          price: "Devis personnalisé",
          features: [
            "Audit de votre stack marketing actuel",
            "Formation aux outils d'IA marketing",
            "Optimisation campagnes existantes",
            "Mise en place A/B tests automatisés",
            "Support stratégique mensuel"
          ]
        },
        {
          type: "Do It Yourself (DIY)",
          title: "Plateforme Marketing IA",
          price: "Devis personnalisé",
          features: [
            "Templates campagnes IA prêts à l'emploi",
            "Outils de personnalisation en libre-service",
            "Formation en ligne marketing automation",
            "Bibliothèque de prompts marketing",
            "Support communautaire"
          ]
        }
      ]
    },
    {
      id: "gestion-projet",
      title: "Gestion de Projet IA",
      icon: Briefcase,
      color: "text-action", 
      glow: "rgba(249,115,22,0.8)",
      description: "Optimisation des projets IA avec méthodes agiles et outils collaboratifs intelligents",
      packages: [
        {
          type: "Done For You (DFY)",
          title: "PMO IA Complet",
          price: "Devis personnalisé",
          features: [
            "Setup complet PMO IA (outils + processus)",
            "Formation équipes aux méthodes agiles IA", 
            "Templates projets IA sectoriels",
            "Dashboards de pilotage temps réel",
            "Accompagnement Chef de Projet dédié"
          ]
        },
        {
          type: "Done With You (DWY)",
          title: "Coaching PMO IA",
          price: "Devis personnalisé",
          features: [
            "Audit de vos processus projet actuels",
            "Personnalisation méthodologies agiles IA",
            "Formations certifiantes Scrum/Kanban IA",
            "Revues de projets trimestrielles",
            "Mentoring des chefs de projet"
          ]
        },
        {
          type: "Do It Yourself (DIY)",
          title: "Toolkit Gestion Projet IA",
          price: "Devis personnalisé", 
          features: [
            "Templates Jira/Asana pour projets IA",
            "Frameworks d'estimation projets IA",
            "Checklists de validation par phase",
            "Bibliothèque de bonnes pratiques",
            "Communauté de Project Managers IA"
          ]
        }
      ]
    },
    {
      id: "bien-etre-numerique",
      title: "Bien Être Numérique IA",
      icon: Heart,
      color: "text-success",
      glow: "rgba(254,185,9,0.8)",
      description: "Solutions IA éthiques pour le bien-être des utilisateurs et l'équilibre vie-travail",
      packages: [
        {
          type: "Done For You (DFY)",
          title: "Écosystème Bien-être IA",
          price: "Devis personnalisé",
          features: [
            "Audit complet bien-être numérique équipes",
            "Déploiement outils IA de wellness au travail",
            "Monitoring burn-out et stress par IA",
            "Programmes personnalisés équilibre vie-pro",
            "Support psychologique assisté par IA"
          ]
        },
        {
          type: "Done With You (DWY)",
          title: "Programme Bien-être IA",
          price: "Devis personnalisé",
          features: [
            "Co-création programme bien-être personnalisé",
            "Formation managers aux signaux IA wellness",
            "Outils de mesure engagement/satisfaction",
            "Workshops bien-être numérique",
            "Coaching équipes RH mensuel"
          ]
        },
        {
          type: "Do It Yourself (DIY)",
          title: "Boîte à Outils Bien-être IA",
          price: "Devis personnalisé",
          features: [
            "Applications mobile bien-être personnalisées",
            "Chatbots de support psychologique 24/7",
            "Dashboards bien-être individuels/collectifs",
            "Bibliothèque contenus wellness IA",
            "Communauté bien-être numérique"
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-custom-dark dark:to-custom-darker">
      <LocalAIHeader />
      
      <div className="min-h-screen pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* HERO SECTION OPTIMISÉ POUR CONVERSION */}
          <div className="text-center mb-16">
            <div className="mb-6">
              <span className="inline-block px-6 py-2 bg-gradient-to-r from-premium/10 to-sovereign/10 border border-premium/30 rounded-full text-success dark:text-success text-sm font-medium">
                ✅ 9 Expertises Clé • 3 Approches Flexibles • ROI Garanti
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6 leading-tight">
              <span className="block mb-2 text-2xl md:text-3xl font-medium text-success dark:text-success">
                💼 Expertise IA de Classe Mondiale
              </span>
              Votre Succès IA
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-premium via-sovereign to-sovereign filter drop-shadow-[0_0_12px_rgba(254,185,9,0.8)]">
                {" "}Garanti
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto mb-8 leading-relaxed">
              🚀 <strong className="text-success">RÉVOLUTIONNAIRE :</strong> Choisissez votre niveau d'accompagnement avec notre modèle
              <strong className="text-success"> DFY • DWY • DIY</strong> et
              <strong className="text-sovereign"> 9 expertises spécialisées</strong> pour une transformation IA
              <strong className="text-action"> 3x plus rapide que la concurrence</strong>
            </p>

            {/* Statistiques d'expertise */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                { label: "Projets IA", value: "1,200+", icon: Brain, color: "text-success" },
                { label: "Clients Satisfaits", value: "400+", icon: Users, color: "text-sovereign" },
                { label: "ROI Moyen", value: "285%", icon: Calculator, color: "text-success" },
                { label: "Délai Déploiement", value: "< 6 sem", icon: Clock, color: "text-action" }
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

            {/* Preuves sociales hero */}
            <div 
              className="bg-gradient-to-r from-growth-50 to-sovereign-50 dark:from-growth-900/20 dark:to-sovereign-900/20 border border-growth-200 dark:border-growth-800 rounded-xl p-6 mb-8"
            >
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <Award className="w-5 h-5 text-success mr-2" />
                  <span className="text-growth-700 dark:text-growth-300 font-semibold">
                    🏆 CERTIFICATION EXCLUSIVE : Seul partenaire IA certifié CNIL + AI Act en France
                  </span>
                  <Award className="w-5 h-5 text-success ml-2" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-success dark:text-success text-lg">98.5%</div>
                    <div className="text-gray-600 dark:text-gray-400">Taux de Réussite Projets</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-sovereign dark:text-sovereign text-lg">6 sem</div>
                    <div className="text-gray-600 dark:text-gray-400">Délai Moyen Déploiement</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-success dark:text-success text-lg">24/7</div>
                    <div className="text-gray-600 dark:text-gray-400">Support Expert Dédié</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Support 24/7 Button intégré */}
            <div
              className="text-center mb-8"
            >
            </div>
          </div>

          {/* Package Types Explanation */}
          <div
            className="glass rounded-xl p-6 mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
              Nos Approches d'Accompagnement
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to="/expertise/dfy" className="glass-blue p-6 rounded-lg block hover:scale-105 transition-transform">
                <div className="flex items-center mb-4">
                  <Package className="w-8 h-8 text-sovereign mr-3" />
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">Done For You (DFY)</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Solution clé en main : nous réalisons l'ensemble du projet pour vous, de la conception à la livraison.
                </p>
                <div className="mt-4 text-sovereign font-semibold flex items-center">
                  En savoir plus
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>
              
              <Link to="/expertise/dwy" className="glass-purple p-6 rounded-lg block hover:scale-105 transition-transform">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-success mr-3" />
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">Done With You (DWY)</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Coopération guidée : nous travaillons avec vous pour accompagner votre équipe dans la réalisation du projet.
                </p>
                <div className="mt-4 text-success font-semibold flex items-center">
                  En savoir plus
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>
              
              <Link to="/expertise/diy" className="glass-green p-6 rounded-lg block hover:scale-105 transition-transform">
                <div className="flex items-center mb-4">
                  <BookOpen className="w-8 h-8 text-success mr-3" />
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">Do It Yourself (DIY)</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Autonomie complète : nous vous fournissons les outils et ressources pour réaliser le projet vous-même.
                </p>
                <div className="mt-4 text-success font-semibold flex items-center">
                  En savoir plus
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>
            </div>
          </div>

          {/* SECTION FORMULES D'ACCOMPAGNEMENT */}
          <div
            className="mb-16"
          >
            <div className="glass rounded-xl p-8 relative overflow-hidden">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                  🎯 RÉVOLUTIONNAIRE : Accompagnement Expertise Flexible !
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                  <strong className="text-action">FINI LES CONTRATS RIGIDES !</strong> Choisissez le niveau d'accompagnement adapté à vos besoins
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Package DFY */}
                <div className="text-center p-6 bg-gradient-to-br from-sovereign-50 to-sovereign-50 dark:from-sovereign-900/20 dark:to-sovereign-900/20 rounded-lg border-2 border-sovereign hover:border-sovereign-600 transition-all transform hover:scale-105">
                  <div className="mb-4">
                    <div className="text-3xl font-black text-sovereign dark:text-sovereign mb-1">Sur Mesure</div>
                    <div className="text-sm font-bold text-sovereign bg-sovereign-100 dark:bg-sovereign-900/30 px-2 py-1 rounded">ACCOMPAGNEMENT DFY</div>
                  </div>
                  <div className="text-lg font-bold text-gray-800 dark:text-white mb-2">Done For You</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    • Experts dédiés à votre projet<br/>
                    • Livraison clé en main garantie<br/>
                    • Support post-projet 6 mois<br/>
                    • Garantie résultats contractuelle
                  </div>
                  <div className="border-t pt-4 mt-4">
                    <div className="text-2xl font-bold text-success">Complet</div>
                    <div className="text-xs text-gray-500">Formation • Documentation • Maintenance</div>
                  </div>
                </div>

                {/* Package DWY - POPULAIRE */}
                <div className="relative text-center p-6 bg-gradient-to-br from-premium-50 to-action-50 dark:from-premium-900/20 dark:to-action-900/20 rounded-lg border-2 border-premium hover:border-premium-600 transition-all transform scale-105">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-premium to-action text-white px-6 py-1 rounded-full text-sm font-bold ">
                    🏆 RECOMMANDÉ
                  </div>
                  <div className="mb-4 mt-3">
                    <div className="text-3xl font-black text-success dark:text-success mb-1">Sur Mesure</div>
                    <div className="text-sm font-bold text-success bg-premium-100 dark:bg-premium-900/30 px-2 py-1 rounded">ACCOMPAGNEMENT DWY</div>
                  </div>
                  <div className="text-lg font-bold text-gray-800 dark:text-white mb-2">Done With You</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    • Coaching expert personnalisé<br/>
                    • Co-développement avec vos équipes<br/>
                    • Formation continue incluse<br/>
                    • Support technique 4 mois
                  </div>
                  <div className="border-t border-premium-200 pt-4 mt-4">
                    <div className="text-2xl font-bold text-success">Best Value</div>
                    <div className="text-xs text-gray-500">ROI optimal • Montée compétences • Autonomie</div>
                  </div>
                </div>

                {/* Package DIY */}
                <div className="text-center p-6 bg-gradient-to-br from-growth-50 to-growth-50 dark:from-growth-900/20 dark:to-growth-900/20 rounded-lg border-2 border-growth hover:border-growth-600 transition-all transform hover:scale-105">
                  <div className="mb-4">
                    <div className="text-3xl font-black text-success dark:text-success mb-1">Sur Mesure</div>
                    <div className="text-sm font-bold text-success bg-growth-100 dark:bg-growth-900/30 px-2 py-1 rounded">OUTILS DIY</div>
                  </div>
                  <div className="text-lg font-bold text-gray-800 dark:text-white mb-2">Do It Yourself</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    • Accès plateforme expertise 24/7<br/>
                    • Templates & outils prêts à l'emploi<br/>
                    • Documentation complète<br/>
                    • Support communautaire
                  </div>
                  <div className="border-t pt-4 mt-4">
                    <div className="text-2xl font-bold text-success">Autonome</div>
                    <div className="text-xs text-gray-500">Parfait pour équipes techniques expérimentées</div>
                  </div>
                </div>
              </div>

              {/* Avantages modèle expertise à vie */}
              <div className="p-6 bg-gradient-to-r from-success-50 to-action-50 dark:from-success-900/20 dark:to-action-900/20 border border-success-200 dark:border-success-800 rounded-lg mb-6">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-action dark:text-action">
                    💡 POURQUOI L'EXPERTISE À VIE CHANGE TOUT ?
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="text-center p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                    <div className="font-bold text-success dark:text-success mb-2">💰 ÉCONOMIES MASSIVES</div>
                    <div className="text-gray-600 dark:text-gray-400">
                      <strong>DWY: Jusqu'à 70% d'économies</strong> vs consulting traditionnel<br/>
                      <strong>DFY: Solution clé en main</strong> avec accompagnement complet
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                    <div className="font-bold text-success dark:text-success mb-2">🎯 EXPERTISE PERMANENTE</div>
                    <div className="text-gray-600 dark:text-gray-400">
                      <strong>Accès aux nouveautés IA</strong> à vie<br/>
                      <strong>Évolutions technologiques</strong> incluses
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                    <div className="font-bold text-sovereign dark:text-sovereign mb-2">🚀 ROI IMMÉDIAT</div>
                    <div className="text-gray-600 dark:text-gray-400">
                      <strong>Rentabilité dès le 3e mois</strong><br/>
                      <strong>ROI mesurable</strong> dès les premiers mois
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-premium to-sovereign text-white font-bold text-lg rounded-lg hover:from-premium-600 hover:to-sovereign-600 transition-all shadow-xl hover:scale-105"
                  >
                    <Phone className="w-6 h-6 mr-2" />
                    🎯 AUDIT EXPERTISE GRATUIT
                  </Link>
                  <Link
                    to="/roi-calculator"
                    className="inline-flex items-center px-8 py-4 border-2 border-premium text-success dark:text-success font-bold text-lg rounded-lg hover:bg-premium-50 dark:hover:bg-premium-900/20 transition-all hover:scale-105"
                  >
                    <Calculator className="w-6 h-6 mr-2" />
                    💰 CALCULER MES ÉCONOMIES
                  </Link>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                  ⚡ Évaluation personnalisée en 15 min • Proposition sur mesure • Démarrage immédiat possible
                </p>
              </div>
            </div>
          </div>

          {/* TÉMOIGNAGES CLIENTS PAR EXPERTISE */}
          <div
            className="mb-16"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center justify-center">
                <Star className="w-8 h-8 text-success mr-3 filter drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" />
                Témoignages Clients par Expertise recherchés<s></s>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Découvrez comment nos 9 expertises transforment concrètement les entreprises
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Témoignage Consulting IA */}
              <div
                className="bg-gradient-to-br from-sovereign-50 to-sovereign-50 dark:from-sovereign-900/20 dark:to-sovereign-900/20 border border-sovereign-200 dark:border-sovereign-800 p-6 rounded-xl"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-sovereign rounded-full flex items-center justify-center text-white font-bold mr-4">
                    SG
                  </div>
                  <div>
                    <div className="font-bold text-gray-800 dark:text-white">Société Générale</div>
                    <div className="text-sm text-sovereign dark:text-sovereign">DFY • Consulting IA Souveraine</div>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-success-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  "Transformation IA complète en 8 semaines avec conformité ACPR garantie. L'équipe a livré clé en main notre architecture IA souveraine. ROI de 320% en 6 mois."
                </p>
                <div className="text-xs text-success dark:text-success font-semibold">
                  💰 Économies substantielles vs solutions cloud • Conformité 100%
                </div>
              </div>

              {/* Témoignage Formation IA */}
              <div
                className="bg-gradient-to-br from-premium-50 to-action-50 dark:from-premium-900/20 dark:to-action-900/20 border border-premium-200 dark:border-premium-800 p-6 rounded-xl"
                          >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-premium rounded-full flex items-center justify-center text-white font-bold mr-4">
                    AR
                  </div>
                  <div>
                    <div className="font-bold text-gray-800 dark:text-white">Airbus</div>
                    <div className="text-sm text-success dark:text-success">DWY • Formation IA Métier</div>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-success-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  "Formation de 150 ingénieurs avec programme DWY personnalisé. Montée en compétences IA exceptionnelle. 95% de satisfaction et certification officielle."
                </p>
                <div className="text-xs text-success dark:text-success font-semibold">
                  🎓 150 ingénieurs formés • 95% satisfaction • Certification acquise
                </div>
              </div>

              {/* Témoignage Compliance IA */}
              <div
                className="bg-gradient-to-br from-action-50 to-action-50 dark:from-action-900/20 dark:to-action-900/20 border border-action-200 dark:border-action-800 p-6 rounded-xl"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-action rounded-full flex items-center justify-center text-white font-bold mr-4">
                    MF
                  </div>
                  <div>
                    <div className="font-bold text-gray-800 dark:text-white">Ministère Finances</div>
                    <div className="text-sm text-action dark:text-action">DFY • Compliance AI Act</div>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-success-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  "Mise en conformité AI Act complète avec accompagnement juridique spécialisé. Documentation exhaustive livrée. Audit CNIL réussi avec mention."
                </p>
                <div className="text-xs text-success dark:text-success font-semibold">
                  🛡️ Conformité AI Act + RGPD • Audit CNIL réussi • 0 non-conformité
                </div>
              </div>
            </div>
          </div>

          {/* Expertise Sections */}
          <div className="space-y-16">
            {expertiseSections.map((section, index) => (
              <div
                key={section.id}
                className="glass rounded-xl overflow-hidden"
              >
                <div className={`p-8 bg-gradient-to-r ${section.color.replace('text-', 'from-').replace('-500', '-500/20')} to-transparent`}>
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${section.color} filter drop-shadow-[0_0_8px_${section.glow}]`}>
                      {React.createElement(section.icon, { className: "w-full h-full" })}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white ml-4">
                      {section.title}
                    </h2>
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
                    {section.description}
                  </p>
                </div>
                
                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {section.packages.map((packageItem, packageIndex) => (
                      <div 
                        key={packageItem.type} 
                        className={`glass rounded-xl p-6 relative overflow-hidden ${
                          packageIndex === 0 ? 'border-2 border-sovereign' : 
                          packageIndex === 1 ? 'border-2 border-premium' : 'border-2 border-growth'
                        }`}
                      >
                        <div className="absolute top-0 right-0 bg-gradient-to-r from-sovereign to-premium text-white px-4 py-1 rounded-bl-lg">
                          <span className="text-sm font-bold">{packageItem.type}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                          {packageItem.title}
                        </h3>
                        
                        <div className="text-xl font-bold text-sovereign dark:text-sovereign mb-6">
                          Devis personnalisé
                        </div>
                        
                        <ul className="space-y-3 mb-6">
                          {packageItem.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-success mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <Link 
                          to="/contact" 
                          className={`block w-full py-3 rounded-lg font-semibold transition-all text-center border-2 hover:scale-105 ${
                            packageIndex === 0 ? 'border-sovereign text-sovereign dark:text-sovereign hover:bg-sovereign-50 dark:hover:bg-sovereign-900/20' : 
                            packageIndex === 1 ? 'border-premium text-success dark:text-success hover:bg-premium-50 dark:hover:bg-premium-900/20' : 
                            'border-growth text-success dark:text-success hover:bg-growth-50 dark:hover:bg-growth-900/20'
                          }`}
                        >
                          En savoir plus
                          <ArrowRight className="w-4 h-4 ml-2 inline" />
                        </Link>

                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
          </div>
      {/* Section Support Urgente */}
      <UrgentSupportSection />
      
      <LocalAIFooter />
    </div>
  );
};