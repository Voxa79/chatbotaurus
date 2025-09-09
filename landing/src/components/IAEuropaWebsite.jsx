import React, { useState, useEffect, useRef } from 'react';
import { 
  Server, 
  Shield, 
  Zap, 
  Database, 
  Users, 
  BookOpen, 
  Package, 
  Cpu, 
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Menu,
  X,
  Play,
  Download,
  Settings,
  Eye,
  Lock,
  Building
} from 'lucide-react';

const IAEuropaWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(0);
  const [activeTab, setActiveTab] = useState('products');
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Server className="w-8 h-8" />,
      title: "Stack IA Local Complet",
      description: "Ollama, n8n, Open WebUI, Supabase, Neo4j - Tout votre écosystème IA en une solution",
      features: ["GPU/CPU Support", "Auto-scaling", "Monitoring"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Conformité RGPD Native",
      description: "Architecture data-local garantissant la conformité européenne by design",
      features: ["Data locality", "Privacy controls", "Audit trails"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Déploiement Rapide",
      description: "De zéro à productif en 15 minutes avec notre système de déploiement automatisé",
      features: ["Docker Compose", "Auto-setup", "Zero-config"]
    }
  ];

  const businessPackages = [
    {
      name: "Starter Souverain",
      price: "299€",
      period: "/mois",
      description: "Pour PME découvrant l'IA",
      features: [
        "Stack IA local complet",
        "Support RGPD intégré",
        "Formation 8h incluse",
        "Support email",
        "Communauté Discord"
      ],
      highlight: false,
      color: "blue"
    },
    {
      name: "Business Souverain",
      price: "899€",
      period: "/mois",
      description: "Pour entreprises ambitieuses",
      features: [
        "Tout du Starter",
        "Consultation stratégique 20h",
        "Support prioritaire 24/7",
        "Formations équipes illimitées",
        "API entreprise",
        "Déploiement multi-sites"
      ],
      highlight: true,
      color: "purple"
    },
    {
      name: "Enterprise Souverain",
      price: "Sur devis",
      period: "",
      description: "Solutions sur mesure",
      features: [
        "Architecture personnalisée",
        "Support dédié CTO",
        "SLA garantis",
        "Intégrations sur mesure",
        "Audit sécurité",
        "Formation direction"
      ],
      highlight: false,
      color: "green"
    }
  ];

  const ToggleSwitch = ({ checked, onChange, color = 'blue', label }) => (
    <div 
      className={`toggle-switch toggle-${color} ${checked ? 'toggle-checked' : ''}`}
      onClick={() => onChange(!checked)}
      role="switch"
      aria-checked={checked}
      aria-label={label}
      tabIndex={0}
    >
      <div className="toggle-thumb">
        <div className="toggle-icon">
          {checked ? <CheckCircle className="w-5 h-5" /> : <X className="w-5 h-5" />}
        </div>
      </div>
    </div>
  );

  const ServiceCard = ({ service, index, isActive }) => (
    <div 
      className={`card-3d bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 cursor-pointer transition-all duration-300 ${
        isActive ? 'border-sovereign/50 shadow-2xl shadow-blue-500/20' : 'hover:border-slate-600/50'
      }`}
      onClick={() => setSelectedService(index)}
    >
      <div className="card-reflection"></div>
      <div className="card-neon-line bg-gradient-to-r from-sovereign to-premium"></div>
      <div className="card-3d-content">
        <div className="text-sovereign mb-4 card-3d-layer-1">
          {service.icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-3 card-3d-layer-2">
          {service.title}
        </h3>
        <p className="text-slate-300 mb-4 card-3d-layer-2">
          {service.description}
        </p>
        <div className="space-y-2 card-3d-layer-3">
          {service.features.map((feature, idx) => (
            <div key={idx} className="flex items-center text-sm text-slate-400">
              <CheckCircle className="w-4 h-4 text-success mr-2" />
              {feature}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const PricingCard = ({ pkg, index }) => (
    <div 
      className={`card-3d relative bg-slate-900/50 backdrop-blur-sm border rounded-xl p-8 transition-all duration-300 ${
        pkg.highlight 
          ? 'border-premium/50 shadow-2xl shadow-purple-500/20 card-3d-layer-2' 
          : 'border-slate-700/50 hover:border-slate-600/50'
      }`}
    >
      <div className="card-reflection"></div>
      {pkg.highlight && (
        <div className="card-neon-line card-neon-line-pulse bg-gradient-to-r from-premium to-action"></div>
      )}
      
      <div className="card-3d-content">
        {pkg.highlight && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span className="bg-gradient-to-r from-premium to-action text-white px-4 py-2 rounded-full text-sm font-bold">
              Le Plus Populaire
            </span>
          </div>
        )}
        
        <div className="text-center mb-6 card-3d-layer-1">
          <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
          <div className="text-4xl font-bold text-white mb-2">
            {pkg.price}
            <span className="text-lg text-slate-400">{pkg.period}</span>
          </div>
          <p className="text-slate-300">{pkg.description}</p>
        </div>

        <div className="space-y-4 mb-8 card-3d-layer-2">
          {pkg.features.map((feature, idx) => (
            <div key={idx} className="flex items-center text-slate-300">
              <CheckCircle className="w-5 h-5 text-success mr-3 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <button 
          className={`w-full py-3 px-6 rounded-lg font-bold transition-all duration-300 card-3d-layer-3 ${
            pkg.highlight
              ? 'bg-gradient-to-r from-premium to-action text-white hover:from-premium-600 hover:to-action-600 luminous-button-glow'
              : 'bg-slate-700 text-white hover:bg-slate-600'
          }`}
        >
          Commencer Maintenant
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-800">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-sovereign to-premium-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">IA</span>
              </div>
              <span className="text-2xl font-bold">Souveraine</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="hover:text-sovereign transition-colors">Services</a>
              <a href="#solutions" className="hover:text-sovereign transition-colors">Solutions</a>
              <a href="#pricing" className="hover:text-sovereign transition-colors">Tarifs</a>
              <a href="#formation" className="hover:text-sovereign transition-colors">Formation</a>
              <a href="#about" className="hover:text-sovereign transition-colors">À propos</a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button className="px-4 py-2 text-slate-300 hover:text-white transition-colors">
                Connexion
              </button>
              <button className="px-6 py-2 bg-gradient-to-r from-sovereign to-premium-600 rounded-lg font-semibold hover:from-sovereign-600 hover:to-premium-700 transition-all">
                Démo Gratuite
              </button>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button className="px-4 py-2 text-slate-300 hover:text-white transition-colors">
                Connexion
              </button>
              <button className="px-6 py-2 bg-gradient-to-r from-sovereign to-premium-600 rounded-lg font-semibold hover:from-sovereign-600 hover:to-premium-700 transition-all">
                Démo Gratuite
              </button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.1),transparent)]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur border border-slate-700 rounded-full px-4 py-2 mb-8">
              <Shield className="w-4 h-4 text-success" />
              <span className="text-sm text-slate-300">Conforme RGPD & AI Act UE</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-sovereign-100 to-premium-200 bg-clip-text text-transparent">
              L'IA Souveraine
              <br />
              <span className="text-sovereign">Européenne</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Transformez votre entreprise avec un écosystème IA complet, local et conforme aux réglementations européennes. 
              <strong className="text-sovereign"> De 0 à productif en 15 minutes.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="px-8 py-4 bg-gradient-to-r from-sovereign to-premium-600 rounded-xl font-bold text-lg hover:from-sovereign-600 hover:to-premium-700 transition-all luminous-button-glow flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Démo Interactive
              </button>
              <button className="px-8 py-4 border-2 border-slate-600 rounded-xl font-bold text-lg hover:border-sovereign transition-all flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" />
                Stack Gratuit
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="card-3d bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-sovereign">15min</div>
                <div className="text-sm text-slate-400">Setup Complet</div>
              </div>
              <div className="card-3d bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-success">100%</div>
                <div className="text-sm text-slate-400">RGPD Compliant</div>
              </div>
              <div className="card-3d bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-success">8+</div>
                <div className="text-sm text-slate-400">Services IA</div>
              </div>
              <div className="card-3d bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-success-400">24/7</div>
                <div className="text-sm text-slate-400">Support Expert</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Écosystème IA <span className="text-sovereign">Tout-en-Un</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Ne subissez plus les contraintes réglementaires. Transformez-les en avantage concurrentiel avec notre stack IA européenne.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <ServiceCard 
                key={index} 
                service={service} 
                index={index} 
                isActive={selectedService === index}
              />
            ))}
          </div>

          {/* Tech Stack Showcase */}
          <div className="bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Stack Technique Inclus</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { name: "Ollama", desc: "LLMs Locaux" },
                { name: "n8n", desc: "Workflows IA" },
                { name: "Open WebUI", desc: "Interface Chat" },
                { name: "Supabase", desc: "Database + Auth" },
                { name: "Neo4j", desc: "Knowledge Graph" },
                { name: "Qdrant", desc: "Vector Store" },
                { name: "SearXNG", desc: "Search Engine" },
                { name: "Langfuse", desc: "Observabilité" }
              ].map((tech, idx) => (
                <div key={idx} className="card-3d bg-slate-700/30 rounded-lg p-4 hover:bg-slate-700/50 transition-all">
                  <div className="font-bold text-white">{tech.name}</div>
                  <div className="text-sm text-slate-400">{tech.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Model Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Business Model <span className="text-success">360°</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Monétisez l'IA européenne avec notre écosystème complet de produits, services et formations.
            </p>
          </div>

          {/* Business Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-xl p-2 flex space-x-2">
              {[
                { id: 'products', label: 'Produits', icon: <Package className="w-4 h-4" /> },
                { id: 'services', label: 'Services', icon: <Settings className="w-4 h-4" /> },
                { id: 'formation', label: 'Formation', icon: <BookOpen className="w-4 h-4" /> },
                { id: 'consulting', label: 'Conseil', icon: <Users className="w-4 h-4" /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-sovereign to-premium-600 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Business Content */}
          <div className="max-w-4xl mx-auto">
            {activeTab === 'products' && (
              <div className="grid md:grid-cols-2 gap-8">
                <div className="card-3d bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-sovereign">Stack IA Packagé</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Solution Docker Compose complète</li>
                    <li>• Configurations optimisées GPU/CPU</li>
                    <li>• Templates de workflows pré-configurés</li>
                    <li>• Scripts d'automatisation</li>
                  </ul>
                  <div className="mt-4 text-2xl font-bold text-white">299€-899€/mois</div>
                </div>
                
                <div className="card-3d bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-success">Modules Spécialisés</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Module RGPD Compliance</li>
                    <li>• Extensions sectorielles</li>
                    <li>• Connecteurs métiers</li>
                    <li>• Tableaux de bord executives</li>
                  </ul>
                  <div className="mt-4 text-2xl font-bold text-white">99€-299€/module</div>
                </div>
              </div>
            )}

            {activeTab === 'services' && (
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "Déploiement Clé en Main", price: "1.999€", desc: "Setup complet en 1 jour" },
                  { title: "Migration & Intégration", price: "Sur devis", desc: "Migration de votre existant" },
                  { title: "Support Premium 24/7", price: "299€/mois", desc: "Support technique dédié" }
                ].map((service, idx) => (
                  <div key={idx} className="card-3d bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-xl p-6 text-center">
                    <h4 className="font-bold text-lg mb-2">{service.title}</h4>
                    <p className="text-slate-400 mb-4">{service.desc}</p>
                    <div className="text-xl font-bold text-sovereign">{service.price}</div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'formation' && (
              <div className="grid md:grid-cols-2 gap-8">
                <div className="card-3d bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-success">Formations Entreprises</h3>
                  <ul className="space-y-2 text-slate-300 mb-4">
                    <li>• IA & Réglementation Européenne (8h)</li>
                    <li>• Maîtrise des Workflows n8n (16h)</li>
                    <li>• Architecture IA Locale (12h)</li>
                    <li>• Gouvernance Data & RGPD (8h)</li>
                  </ul>
                  <div className="text-2xl font-bold text-white">1.999€/session</div>
                </div>
                
                <div className="card-3d bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-success-400">Certifications</h3>
                  <ul className="space-y-2 text-slate-300 mb-4">
                    <li>• Architecte IA Souveraine (niveau 1-3)</li>
                    <li>• Spécialiste RGPD + IA</li>
                    <li>• Expert Déploiement Local</li>
                    <li>• Formateur Agréé</li>
                  </ul>
                  <div className="text-2xl font-bold text-white">599€-1.499€/cert</div>
                </div>
              </div>
            )}

            {activeTab === 'consulting' && (
              <div className="text-center">
                <div className="card-3d bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-xl p-8 max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold mb-4 text-sovereign">Conseil Stratégique IA</h3>
                  <p className="text-slate-300 mb-6">
                    Accompagnement C-Level pour définir votre stratégie IA européenne et transformer les contraintes réglementaires en avantages concurrentiels.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-sm text-slate-400">Audit IA</div>
                      <div className="font-bold text-white">5.000€</div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-400">Stratégie 6 mois</div>
                      <div className="font-bold text-white">25.000€</div>
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-sovereign to-premium-600 px-6 py-3 rounded-lg font-bold">
                    Consultation Gratuite
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Tarifs <span className="text-sovereign">Transparents</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choisissez la formule adaptée à votre maturité IA. Tous nos plans incluent la conformité RGPD native.
            </p>
            
            <div className="flex items-center justify-center mt-8 space-x-4">
              <span className="text-slate-400">Mensuel</span>
              <ToggleSwitch checked={false} onChange={() => {}} color="purple" />
              <span className="text-white">Annuel</span>
              <span className="bg-growth/20 text-success px-2 py-1 rounded-full text-xs">-20%</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {businessPackages.map((pkg, index) => (
              <PricingCard key={index} pkg={pkg} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-400 mb-4">
              Toutes les formules incluent : Support RGPD, Hébergement EU, Source code, Formation de base
            </p>
            <button className="text-sovereign hover:text-sovereign-300 underline">
              Comparer toutes les fonctionnalités
            </button>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-sovereign-600 to-premium-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à Révolutionner votre IA ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Rejoignez les entreprises européennes qui ont choisi la souveraineté technologique. 
            Démo personnalisée en 30 minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="px-8 py-4 bg-white text-sovereign rounded-xl font-bold text-lg hover:bg-gray-100 transition-all">
              Démo Personnalisée
            </button>
            <button className="px-8 py-4 border-2 border-white/30 rounded-xl font-bold text-lg hover:border-white/50 transition-all">
              Télécharger le Guide
            </button>
          </div>
          
          <div className="flex items-center justify-center space-x-8 text-sm opacity-80">
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2" />
              <span>100% RGPD</span>
            </div>
            <div className="flex items-center">
              <Lock className="w-4 h-4 mr-2" />
              <span>Données en Europe</span>
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-2" />
              <span>Support Premium</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-sovereign to-premium-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">IA</span>
                </div>
                <span className="text-2xl font-bold">Souveraine</span>
              </div>
              <p className="text-slate-400 mb-4">
                L'écosystème IA souverain pour l'Europe. Conforme, local, performant.
              </p>
              <div className="flex space-x-4">
                {/* Social links can be added here */}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Solutions</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Stack IA Local</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Conformité RGPD</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Migration Cloud</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Support Enterprise</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Ressources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Formations</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Communauté</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-slate-400">contact@ia-europa.eu</li>
                <li className="text-slate-400">+33 1 00 00 00 00</li>
                <li className="text-slate-400">Paris, France</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 IA Souveraine. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Mentions légales</a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Confidentialité</a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">RGPD</a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        /* Card tilt and 3D effects */
        .card-3d {
          transform-style: preserve-3d;
          transform: perspective(1000px);
        }
        .card-3d-content {
          transform: translateZ(20px);
        }
        .card-3d-layer-1 {
          transform: translateZ(10px);
        }
        .card-3d-layer-2 {
          transform: translateZ(20px);
        }
        .card-3d-layer-3 {
          transform: translateZ(30px);
        }
        /* Card reflection effect */
        .card-reflection {
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0) 70%);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 10;
          border-radius: inherit;
        }
        /* Card neon line */
        .card-neon-line {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          transition: all 0.3s ease;
          transform: translateZ(40px);
        }
        .card-neon-line-pulse {
          animation: neon-pulse 2s infinite ease-in-out;
        }
        @keyframes neon-pulse {
          0%, 100% { opacity: 0.7; filter: brightness(1); }
          50% { opacity: 1; filter: brightness(1.3); }
        }
        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1) translateY(-30%);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05) translateY(-30%);
          }
        }
        .luminous-button-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        .toggle-switch {
          position: relative;
          width: 84px;
          height: 44px;
          background: rgba(0, 0, 0, 0.1);
          border-radius: 44px;
          padding: 4px;
          border: 1px solid transparent;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .toggle-switch:focus-visible {
          outline: none;
          box-shadow: 0 0 0 2px rgba(var(--accent-color-rgb), 0.5);
        }
        .toggle-thumb {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: transparent;
          border: 2px solid rgba(var(--accent-color-rgb), 0.5);
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .toggle-icon {
          color: rgba(var(--accent-color-rgb), 0.7);
          width: 20px;
          height: 20px;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          filter: drop-shadow(0 0 0 rgba(var(--accent-color-rgb), 0));
        }
        .toggle-checked .toggle-thumb {
          transform: translateX(40px);
        }
        .toggle-checked .toggle-icon {
          color: rgba(var(--accent-color-rgb), 1);
          filter: drop-shadow(0 0 5px rgba(var(--accent-color-rgb), 0.7));
        }
        /* Glow animations */
        @keyframes toggleGlow {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.3); }
        }
        /* Color variants */
        .toggle-purple {
          --accent-color-rgb: 168, 85, 247;
        }
        .toggle-purple.toggle-checked {
          background: rgba(168, 85, 247, 0.2);
          border-color: rgba(168, 85, 247, 0.5);
          box-shadow: 0 0 18px rgba(168, 85, 247, 0.5);
          animation: toggleGlow 2s ease-in-out infinite;
        }
        .toggle-purple .toggle-thumb {
          box-shadow: 0 0 10px rgba(168, 85, 247, 0.3);
        }
        .toggle-purple.toggle-checked .toggle-thumb {
          box-shadow: 0 0 20px rgba(168, 85, 247, 0.7);
        }
        .toggle-blue {
          --accent-color-rgb: 59, 130, 246;
        }
        .toggle-blue.toggle-checked {
          background: rgba(59, 130, 246, 0.2);
          border-color: rgba(59, 130, 246, 0.5);
          box-shadow: 0 0 18px rgba(59, 130, 246, 0.5);
          animation: toggleGlow 2s ease-in-out infinite;
        }
        .toggle-blue .toggle-thumb {
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.3);
        }
        .toggle-blue.toggle-checked .toggle-thumb {
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.7);
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default IAEuropaWebsite;