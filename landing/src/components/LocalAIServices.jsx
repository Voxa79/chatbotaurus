import React from 'react';
import { motion } from "framer-motion";
import { Brain, Network, Workflow, Database, Globe, Server, GitBranch, Search, AlertTriangle, Zap, TrendingUp, DollarSign, Shield, Eye, Cpu, HardDrive, Container, Lock, BarChart3, Calculator, Clock, CheckCircle, Star, Sparkles } from "lucide-react";
import { LocalAIHeader } from './LocalAIHeader';
import { LocalAIFooter } from './LocalAIFooter';
import { UrgentSupportSection } from './UrgentSupportSection';
import { Link } from 'react-router-dom';

export const LocalAIServices = () => {
  // Core AI Services (Infrastructure Layer)
  const coreAIServices = [
    {
      name: "Ollama",
      icon: Brain,
      color: "purple",
      iconColor: "text-success",
      glowColor: "rgba(254,185,9,0.8)",
      description: "Hébergement et inférence des modèles de langage locaux",
      businessImpact: "€250k/an économisés",
      impactColor: "text-growth dark:text-growth",
      integrations: ["Open WebUI", "N8N", "Flowise", "Langfuse"],
      useCases: ["Chat Assistant", "Document Analysis", "Code Generation"],
      href: "/services/ollama",
      features: [
        "Support 50+ modèles LLM (Llama, Mistral, CodeLlama, Phi, Gemma)",
        "API compatible OpenAI avec endpoints REST natifs",
        "Accélération GPU/CPU avec quantification automatique",
        "Déploiement local sans dépendance cloud"
      ]
    },
    {
      name: "Supabase",
      icon: Server,
      color: "green",
      iconColor: "text-success",
      glowColor: "rgba(254,185,9,0.8)",
      description: "Backend-as-a-Service avec PostgreSQL, Auth, Storage",
      businessImpact: "Déploiement 5x plus rapide",
      impactColor: "text-success dark:text-success",
      integrations: ["Open WebUI", "N8N", "Flowise", "Langfuse"],
      useCases: ["Authentification", "Stockage de Données", "APIs RESTful"],
      href: "/services/supabase",
      features: [
        "PostgreSQL avancé avec extension pgVector pour embeddings",
        "Système d'authentification JWT multi-providers (Google, GitHub, etc.)",
        "APIs REST et GraphQL générées automatiquement",
        "Stockage fichiers avec CDN intégré et transformations d'images"
      ]
    }
  ];

  // Interface Services (User Interface Layer)
  const interfaceServices = [
    {
      name: "Open WebUI", 
      icon: Globe,
      color: "blue",
      iconColor: "text-sovereign",
      glowColor: "rgba(254,185,9,0.8)", 
      description: "Interface ChatGPT-like pour vos modèles locaux, collaborative",
      businessImpact: "+85% adoption utilisateurs",
      impactColor: "text-sovereign dark:text-sovereign",
      integrations: ["Ollama", "N8N", "Supabase"],
      useCases: ["Team Collaboration", "Knowledge Base", "Training"],
      href: "/services/open-webui",
      features: [
        "Interface ChatGPT-like avec support multi-modèles simultanés",
        "Historique conversations persistant avec système de tags",
        "Partage de conversations et templates de prompts",
        "Authentification SSO et gestion des rôles utilisateurs"
      ]
    },
    {
      name: "Flowise",
      icon: GitBranch,
      color: "cyan",
      iconColor: "text-premium", 
      glowColor: "rgba(34,211,238,0.8)",
      description: "Création d'agents IA no-code, workflows visuels complexes",
      businessImpact: "Développement 10x plus rapide",
      impactColor: "text-premium dark:text-premium",
      integrations: ["Ollama", "Qdrant", "N8N", "Supabase"],
      useCases: ["Customer Support", "Data Analysis", "Content Creation"],
      href: "/services/flowise",
      features: [
        "Construction d'agents IA par interface graphique drag & drop",
        "Chaînes LangChain visuelles avec débogage en temps réel",
        "Templates pré-construits (chatbots RAG, agents analytiques, workflows)",
        "Intégrations natives avec bases vectorielles et APIs externes"
      ]
    }
  ];

  // Automation Service (Orchestration Layer)
  const automationServices = [
    {
      name: "N8N",
      icon: Workflow, 
      color: "emerald",
      iconColor: "text-growth",
      glowColor: "rgba(16,185,129,0.8)",
      description: "Automatisation low-code, 400+ intégrations, workflows avancés",
      businessImpact: "80% tâches automatisées", 
      impactColor: "text-growth-600 dark:text-growth-400",
      integrations: ["Tous les services", "APIs externes", "Databases"],
      useCases: ["Process Automation", "Data Pipeline", "Integration Hub"],
      href: "/services/n8n",
      features: [
        "Workflows visuels drag & drop avec 400+ intégrations natives",
        "Déclencheurs avancés (temps réel, webhooks, cron, événements)",
        "Nœuds IA spécialisés (OpenAI, Langchain, classificateurs de texte)",
        "Gestion d'erreurs, retry automatique et monitoring des workflows"
      ]
    }
  ];

  // Data & Research Services (Data Layer)
  const dataServices = [
    {
      name: "Qdrant",
      icon: Database,
      color: "indigo",
      iconColor: "text-sovereign",
      glowColor: "rgba(99,102,241,0.8)",
      description: "Base Vectorielle Haute Performance pour recherche sémantique",
      businessImpact: "Recherche 100x plus rapide",
      impactColor: "text-sovereign-600 dark:text-sovereign-400",
      integrations: ["N8n", "Flowise", "Open WebUI", "Ollama"],
      useCases: ["RAG", "Recherche Sémantique", "Recommendations"],
      href: "/services/qdrant",
      features: [
        "Recherche vectorielle ultra-rapide avec algorithme HNSW optimisé",
        "Support embeddings multiples par document avec collections structurées",
        "Filtrage hybride vectoriel + métadonnées pour précision maximale",
        "APIs REST et gRPC avec SDK natifs (Python, JavaScript, Rust)"
      ]
    },
    {
      name: "Neo4j",
      icon: Database,
      color: "violet",
      iconColor: "text-premium",
      glowColor: "rgba(139,92,246,0.8)",
      description: "Base de Données Graphe pour relations complexes et Knowledge Graphs",
      businessImpact: "Analyse relations 50x plus efficace",
      impactColor: "text-premium-600 dark:text-premium-400",
      integrations: ["N8n", "Ollama", "Flowise"],
      useCases: ["Knowledge graphs", "Analyse de relations", "GraphRAG"],
      href: "/services/neo4j",
      features: [
        "Knowledge graphs avancés pour RAG contextuel et exploration de données",
        "Analyse de relations complexes multi-niveaux avec performances scalables",
        "Support GraphRAG, LightRAG, et Graphiti pour intégration LLM native",
        "Cypher query language optimisé avec indexation automatique"
      ]
    },
    {
      name: "SearXNG",
      icon: Search,
      color: "orange",
      iconColor: "text-action",
      glowColor: "rgba(249,115,22,0.8)", 
      description: "Moteur de Recherche Privé, pas de tracking, métasearch",
      businessImpact: "100% confidentialité recherche",
      impactColor: "text-action dark:text-action",
      integrations: ["N8N", "Flowise", "Open WebUI"],
      useCases: ["Private Search", "Research Assistant", "Competitive Intelligence"],
      href: "/services/searxng",
      features: [
        "Agrégation 229+ moteurs de recherche (Google, Bing, DuckDuckGo, etc.)",
        "Zéro tracking utilisateur, aucun log conservé",
        "API JSON pour intégration dans workflows IA",
        "Filtrage avancé par source, langue, type de contenu"
      ],
      technicalSpecs: [
        { label: "Moteurs", value: "229+" },
        { label: "Confidentialité", value: "100%" },
        { label: "API", value: "JSON" },
        { label: "Filtrage", value: "Avancé" }
      ]
    }
  ];

  // Observability Services (Monitoring Layer)
  const observabilityServices = [
    {
      name: "Langfuse",
      icon: TrendingUp,
      color: "pink",
      iconColor: "text-premium",
      glowColor: "rgba(236,72,153,0.8)",
      description: "Observabilité LLM avec tracing complet et analytics",
      businessImpact: "99.95% uptime",
      impactColor: "text-premium dark:text-premium",
      integrations: ["Tous les services LLM", "Ollama", "Flowise", "Open WebUI"],
      useCases: ["Tracing LLM", "Performance Metrics", "Debugging"],
      href: "/services/langfuse",
      features: [
        "Tracing complet des appels LLM avec latence et coût détaillés",
        "Métriques de performance en temps réel (tokens, qualité, usage)",
        "Debugging avancé des chaînes LangChain avec visualisation des étapes",
        "Analytics personnalisés et alertes automatiques sur les anomalies"
      ]
    }
  ];

  // Infrastructure Services (Infrastructure Layer)
  const infrastructureServices = [
    {
      name: "Docker Compose",
      icon: Container,
      color: "yellow",
      iconColor: "text-success",
      glowColor: "rgba(234,179,8,0.8)",
      description: "Orchestration et networking entre services",
      businessImpact: "Déploiement unifié",
      impactColor: "text-success-600 dark:text-success-400",
      integrations: ["Tous les services"],
      useCases: ["Orchestration", "Networking", "Configuration"],
      href: "/services/docker-compose",
      features: [
        "Profils multiples optimisés (CPU, GPU-NVIDIA, GPU-AMD, développement)",
        "Réseaux internes sécurisés avec isolation entre conteneurs",
        "Volumes persistants avec sauvegarde automatique des données",
        "Configuration centralisée via fichiers .env avec validation"
      ]
    },
    {
      name: "Caddy",
      icon: Lock,
      color: "sky",
      iconColor: "text-sovereign",
      glowColor: "rgba(14,165,233,0.8)",
      description: "Reverse Proxy & HTTPS avec configuration automatique",
      businessImpact: "Sécurité maximale",
      impactColor: "text-sovereign-600 dark:text-sovereign-400",
      integrations: ["Tous les services web"],
      useCases: ["HTTPS", "Reverse Proxy", "Load Balancing"],
      href: "/services/caddy",
      features: [
        "HTTPS automatique avec certificats Let's Encrypt auto-renouvelés",
        "Reverse proxy intelligent avec health checks et failover",
        "Load balancing multi-algorithmes avec sticky sessions",
        "Compression gzip/brotli et cache statique optimisé pour performances"
      ]
    },
    {
      name: "Scripts d'Automatisation",
      icon: Cpu,
      color: "rose",
      iconColor: "text-action",
      glowColor: "rgba(244,63,94,0.8)",
      description: "start_services.py pour détection GPU/CPU et configuration",
      businessImpact: "Déploiement simplifié",
      impactColor: "text-action-600 dark:text-action-400",
      integrations: ["Docker Compose", "Tous les services"],
      useCases: ["Détection GPU/CPU", "Configuration", "Health checks"],
      href: "/services/scripts-automation",
      features: [
        "Détection automatique hardware (GPU NVIDIA/AMD, CPU) avec benchmarks",
        "Configuration environnement adaptative avec optimisations spécifiques",
        "Gestion intelligente des profils avec migration automatique des données",
        "Health checks complets avec alertes et auto-réparation des services"
      ]
    }
  ];

  // Ecosystem architecture data for visualization
  const ecosystemLayers = [
    {
      name: "INTERFACE",
      services: ["Open WebUI", "Flowise", "N8N"],
      description: "Points d'interaction utilisateur"
    },
    {
      name: "INTELLIGENCE",
      services: ["Ollama"],
      description: "Moteurs d'intelligence artificielle"
    },
    {
      name: "DONNÉES",
      services: ["Supabase", "Qdrant", "Neo4j", "SearXNG"],
      description: "Stockage et recherche de données"
    },
    {
      name: "OBSERVABILITÉ",
      services: ["Langfuse"],
      description: "Monitoring et analytics"
    },
    {
      name: "INFRASTRUCTURE",
      services: ["Docker Compose", "Caddy", "Scripts d'Automatisation"],
      description: "Fondation technique"
    }
  ];

  // Typical data flows in the ecosystem
  const dataFlows = [
    {
      name: "RAG Workflow",
      description: "User → Open WebUI → n8n → Qdrant (search) → Ollama (generation) → Langfuse (logging)"
    },
    {
      name: "Knowledge Graph",
      description: "Documents → n8n (processing) → Neo4j (relations) → Ollama (analysis) → Results"
    },
    {
      name: "Web Intelligence",
      description: "SearXNG (crawl) → n8n (orchestration) → Qdrant (indexing) → Flowise (agent)"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <LocalAIHeader />
      
      {/* Hero Section */}
      <motion.div 
        className="pt-24 pb-16 px-4 bg-gradient-to-br from-sovereign-50 to-premium-50 dark:from-gray-900 dark:to-gray-800"
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
            L'Écosystème IA Complet
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sovereign to-premium">
              qui Transforme votre Entreprise
            </span>
          </motion.h1>

          {/* Sous-titre */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            15 services IA intégrés, auto-hébergés et souverains. De l'inférence LLM à l'automatisation complète, 
            notre stack révolutionne vos processus métier avec <strong>une licence à vie</strong>.
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
              <span>Stack auto-hébergé complet</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-success" />
              <span>Déploiement garanti en 48H</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-success" />
              <span>Support premium inclus</span>
            </div>
          </motion.div>

          {/* Indicateur de valeur */}
          <motion.div 
            className="mt-10 p-6 glass-blue rounded-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Star className="w-5 h-5 text-success" />
              <span className="font-semibold text-gray-800 dark:text-white">Valeur Exclusive</span>
              <Star className="w-5 h-5 text-success" />
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-bold text-success dark:text-success">€2,990 licence à vie</span> vs 
              <span className="line-through text-action ml-2">€30,000/an</span> pour des solutions similaires
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Économies garanties de <span className="font-bold text-growth dark:text-growth">€250,000+</span> sur 3 ans
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

          {/* Introduction */}
          <motion.div 
            className="glass-blue p-6 rounded-xl mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Notre écosystème forme un véritable "OS pour l'IA" où chaque composant a un rôle spécialisé 
              mais s'intègre dans un ensemble cohérent et auto-suffisant. Découvrez comment nos services 
              interconnectés amplifient mutuellement leurs capacités.
            </p>
          </motion.div>

          {/* Services by Category */}
          <div className="space-y-12">
            {/* Core AI Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                <Brain className="w-6 h-6 text-growth filter drop-shadow-[0_0_6px_rgba(254,185,9,0.8)]" />
                Services IA Core (Couche Infrastructure)
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {coreAIServices.map((service, index) => (
                  <motion.a
                    key={service.name}
                    href={service.href}
                    className={`glass-${service.color} morph-card reveal-colors p-6 rounded-xl block hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-300 max-w-md mx-auto w-full`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, type: "spring", stiffness: 120 }}
                    whileHover={{ 
                      scale: 1.02,
                      transition: { type: "spring", stiffness: 300, damping: 10 }
                    }}
                  >
                    <div className="flex items-start space-x-4">
                      <service.icon className={`w-10 h-10 ${service.iconColor} filter drop-shadow-[0_0_6px_${service.glowColor}] mt-1`} />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                          {service.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {service.description}
                        </p>
                        
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Fonctionnalités Clés</h4>
                          <ul className="space-y-1">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                                <Zap className="w-4 h-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            Impact Business:
                          </span>
                          <span className={`font-semibold ${service.impactColor}`}>
                            {service.businessImpact}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Interface Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                <Globe className="w-6 h-6 text-sovereign filter drop-shadow-[0_0_6px_rgba(254,185,9,0.8)]" />
                Services Interface Utilisateur
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {interfaceServices.map((service, index) => (
                  <motion.a
                    key={service.name}
                    href={service.href}
                    className={`glass-${service.color} morph-card reveal-colors p-6 rounded-xl block hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-300 max-w-md mx-auto w-full`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, type: "spring", stiffness: 120 }}
                    whileHover={{ 
                      scale: 1.02,
                      transition: { type: "spring", stiffness: 300, damping: 10 }
                    }}
                  >
                    <div className="flex items-start space-x-4">
                      <service.icon className={`w-10 h-10 ${service.iconColor} filter drop-shadow-[0_0_6px_${service.glowColor}] mt-1`} />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                          {service.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {service.description}
                        </p>
                        
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Fonctionnalités Clés</h4>
                          <ul className="space-y-1">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                                <Zap className="w-4 h-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            Impact Business:
                          </span>
                          <span className={`font-semibold ${service.impactColor}`}>
                            {service.businessImpact}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Automation Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                <Workflow className="w-6 h-6 text-growth filter drop-shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
                Services Automatisation & Orchestration
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {automationServices.map((service, index) => (
                  <motion.a
                    key={service.name}
                    href={service.href}
                    className={`glass-${service.color} morph-card reveal-colors p-6 rounded-xl block hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-300 max-w-md mx-auto w-full`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, type: "spring", stiffness: 120 }}
                    whileHover={{ 
                      scale: 1.02,
                      transition: { type: "spring", stiffness: 300, damping: 10 }
                    }}
                  >
                    <div className="flex items-start space-x-4">
                      <service.icon className={`w-10 h-10 ${service.iconColor} filter drop-shadow-[0_0_6px_${service.glowColor}] mt-1`} />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                          {service.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {service.description}
                        </p>
                        
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Fonctionnalités Clés</h4>
                          <ul className="space-y-1">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                                <Zap className="w-4 h-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            Impact Business:
                          </span>
                          <span className={`font-semibold ${service.impactColor}`}>
                            {service.businessImpact}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Data & Research Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                <Database className="w-6 h-6 text-sovereign filter drop-shadow-[0_0_6px_rgba(99,102,241,0.8)]" />
                Services Données & Recherche
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {dataServices.map((service, index) => (
                  <motion.a
                    key={service.name}
                    href={service.href}
                    className={`glass-${service.color} morph-card reveal-colors p-6 rounded-xl block hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-300 max-w-md mx-auto w-full`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, type: "spring", stiffness: 120 }}
                    whileHover={{ 
                      scale: 1.02,
                      transition: { type: "spring", stiffness: 300, damping: 10 }
                    }}
                  >
                    <div className="flex items-start space-x-4">
                      <service.icon className={`w-10 h-10 ${service.iconColor} filter drop-shadow-[0_0_6px_${service.glowColor}] mt-1`} />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                          {service.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {service.description}
                        </p>
                        
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Fonctionnalités Clés</h4>
                          <ul className="space-y-1">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                                <Zap className="w-4 h-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            Impact Business:
                          </span>
                          <span className={`font-semibold ${service.impactColor}`}>
                            {service.businessImpact}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Observability Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-premium filter drop-shadow-[0_0_6px_rgba(236,72,153,0.8)]" />
                Services Observabilité & Monitoring
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {observabilityServices.map((service, index) => (
                  <motion.a
                    key={service.name}
                    href={service.href}
                    className={`glass-${service.color} morph-card reveal-colors p-6 rounded-xl block hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-300 max-w-md mx-auto w-full`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, type: "spring", stiffness: 120 }}
                    whileHover={{ 
                      scale: 1.02,
                      transition: { type: "spring", stiffness: 300, damping: 10 }
                    }}
                  >
                    <div className="flex items-start space-x-4">
                      <service.icon className={`w-10 h-10 ${service.iconColor} filter drop-shadow-[0_0_6px_${service.glowColor}] mt-1`} />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                          {service.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {service.description}
                        </p>
                        
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Fonctionnalités Clés</h4>
                          <ul className="space-y-1">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                                <Zap className="w-4 h-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            Impact Business:
                          </span>
                          <span className={`font-semibold ${service.impactColor}`}>
                            {service.businessImpact}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Infrastructure Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                <HardDrive className="w-6 h-6 text-success filter drop-shadow-[0_0_6px_rgba(234,179,8,0.8)]" />
                Services Infrastructure & Déploiement
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {infrastructureServices.map((service, index) => (
                  <motion.a
                    key={service.name}
                    href={service.href}
                    className={`glass-${service.color} morph-card reveal-colors p-6 rounded-xl block hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-300 max-w-md mx-auto w-full`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, type: "spring", stiffness: 120 }}
                    whileHover={{ 
                      scale: 1.02,
                      transition: { type: "spring", stiffness: 300, damping: 10 }
                    }}
                  >
                    <div className="flex items-start space-x-4">
                      <service.icon className={`w-10 h-10 ${service.iconColor} filter drop-shadow-[0_0_6px_${service.glowColor}] mt-1`} />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                          {service.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {service.description}
                        </p>
                        
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Fonctionnalités Clés</h4>
                          <ul className="space-y-1">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                                <Zap className="w-4 h-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            Impact Business:
                          </span>
                          <span className={`font-semibold ${service.impactColor}`}>
                            {service.businessImpact}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Ecosystem Architecture Visualization */}
          <motion.div 
            className="mt-16 glass-cyan p-8 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
              <Network className="w-6 h-6 text-premium filter drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
              Architecture de l'Écosystème
            </h2>
            
            <div className="mb-8">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Notre écosystème est organisé en couches fonctionnelles où chaque service joue un rôle spécifique:
              </p>
              
              <div className="space-y-4">
                {ecosystemLayers.map((layer, index) => (
                  <div key={layer.name} className="flex items-start">
                    <div className="w-32 flex-shrink-0">
                      <span className="font-semibold text-gray-800 dark:text-white">{layer.name}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2 mb-1">
                        {layer.services.map((service, idx) => (
                          <span key={idx} className="px-2 py-1 bg-white/20 dark:bg-black/30 rounded text-sm">
                            {service}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{layer.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="border-t border-gray-200/20 dark:border-gray-700/20 pt-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Flux de Données Typiques</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {dataFlows.map((flow, index) => (
                  <div key={index} className="p-4 bg-white/10 dark:bg-black/20 rounded-lg">
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">{flow.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{flow.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Ecosystem Benefits */}
          <motion.div 
            className="mt-12 glass-purple p-8 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
              <Shield className="w-6 h-6 text-growth filter drop-shadow-[0_0_6px_rgba(254,185,9,0.8)]" />
              Avantages de l'Écosystème Intégré
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Synergie Technique",
                  desc: "Chaque service amplifie les capacités des autres",
                  icon: Zap,
                  color: "text-growth",
                  benefit: "Performance 3x supérieure"
                },
                {
                  title: "Souveraineté des Données",
                  desc: "Aucune donnée ne sort de l'environnement local",
                  icon: Lock,
                  color: "text-success",
                  benefit: "100% confidentialité"
                },
                {
                  title: "Orchestration Unifiée",
                  desc: "n8n permet de créer des workflows complexes multi-services",
                  icon: Workflow,
                  color: "text-sovereign",
                  benefit: "Automatisation complète"
                },
                {
                  title: "Monitoring Holistique",
                  desc: "Langfuse observe l'ensemble de la chaîne IA",
                  icon: Eye,
                  color: "text-premium",
                  benefit: "Visibilité totale"
                }
              ].map((benefit, index) => (
                <div 
                  key={index}
                  className="p-5 bg-white/10 dark:bg-black/20 rounded-lg text-center"
                >
                  <benefit.icon className={`w-10 h-10 ${benefit.color} mx-auto mb-4 filter drop-shadow-[0_0_6px_rgba(59,130,246,0.6)]`} />
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                    {benefit.desc}
                  </p>
                  <div className="text-sm font-bold text-growth dark:text-growth">
                    {benefit.benefit}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>


          {/* Social Proof Section */}
          <motion.div 
            className="mt-16 glass-purple p-10 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                Transformer leur Entreprise ils en rêvaient
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Plus de 500 entreprises en besoin de souveraineté
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="testimonial-card p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-success fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  "ROI de 847% en 18 mois avec Ecoystem IA Souverain. Notre équipe juridique a automatisé 80% des analyses 
                  de contrats. Performance et sécurité au rendez-vous."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-sovereign rounded-full flex items-center justify-center text-white font-bold">
                    M.D
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 dark:text-white">Marie Dubois</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">CTO, Cabinet Dubois & Associés</div>
                  </div>
                </div>
              </div>

              <div className="testimonial-card p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-success fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  "Déploiement en 48H garanti, formation équipe en 2 jours. L'écosystème Local AI a révolutionné 
                  notre R&D. Souveraineté des données garantie."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-growth rounded-full flex items-center justify-center text-white font-bold">
                    P.M
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 dark:text-white">Dr. Pierre Martin</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Directeur Innovation, BioTech Solutions</div>
                  </div>
                </div>
              </div>

              <div className="testimonial-card p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-success fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  "€2.8M économisés la première année vs notre ancien fournisseur cloud. Performance IA locale 
                  supérieure, conformité RGPD parfaite."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-premium rounded-full flex items-center justify-center text-white font-bold">
                    S.L
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 dark:text-white">Sophie Laurent</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">DSI, IndustrieConnect Group</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-10">
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
                <div className="metric-highlight">
                  <div className="text-3xl font-bold text-sovereign">500+</div>
                  <div className="text-gray-600 dark:text-gray-400">Entreprises Clientes</div>
                </div>
                <div className="metric-highlight">
                  <div className="text-3xl font-bold text-success">€12M+</div>
                  <div className="text-gray-600 dark:text-gray-400">Économies Générées</div>
                </div>
                <div className="metric-highlight">
                  <div className="text-3xl font-bold text-growth">98.7%</div>
                  <div className="text-gray-600 dark:text-gray-400">Satisfaction Client</div>
                </div>
                <div className="metric-highlight">
                  <div className="text-3xl font-bold text-action">48H</div>
                  <div className="text-gray-600 dark:text-gray-400">Temps Déploiement</div>
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