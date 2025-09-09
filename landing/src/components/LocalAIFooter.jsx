import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { Brain, Shield, Scale, Globe, Network, Workflow, Database, Server, Building, Factory, LayoutTemplate, Briefcase, Calculator, Users, BookOpen, Search, TrendingUp, Heart, Landmark, School, ShoppingCart, Info, MessageCircle } from "lucide-react";
import logoTransparent from '../assets/logo-transparent.png';

export const LocalAIFooter = () => {
  const footerServiceLinks = [
    { name: "Ollama (LLM Local)", href: "/services/ollama", icon: Brain },
    { name: "N8N (Automation)", href: "/services/n8n", icon: Workflow },
    { name: "Qdrant (Vector DB)", href: "/services/qdrant", icon: Database },
    { name: "Open WebUI", href: "/services/open-webui", icon: Globe },
    { name: "Supabase", href: "/services/supabase", icon: Server },
    { name: "SearXNG (Search)", href: "/services/searxng", icon: Search },
    { name: "Neo4j (Graph DB)", href: "/services/neo4j", icon: Database },
    { name: "Langfuse (Observability)", href: "/services/langfuse", icon: TrendingUp }
  ];

  const footerSolutionLinks = [
    { name: "Finance & Banque", href: "/solutions/finance", icon: Building },
    { name: "Legal & Conseil", href: "/solutions/legal", icon: Scale },
    { name: "Manufacturing", href: "/solutions/manufacturing", icon: Factory },
    { name: "Santé & Pharmaceutique", href: "/solutions/healthcare", icon: Heart },
    { name: "Secteur Public", href: "/solutions/public", icon: Landmark },
    { name: "Éducation & Formation", href: "/solutions/education", icon: School },
    { name: "Retail & E-commerce", href: "/solutions/retail", icon: ShoppingCart }
  ];

  // Add navigation links for the tests
  const footerNavigationLinks = [
    { name: "Écosystème", href: "/ecosystem", icon: Network },
    { name: "Solutions", href: "/solutions", icon: Shield },
    { name: "Expertise", href: "/expertise", icon: Users },
    { name: "Ressources", href: "/resources", icon: BookOpen },
    { name: "À propos", href: "/about", icon: Info }
  ];

  return (
    <footer className="glass border-t border-gray-200/20 dark:border-gray-800/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Footer Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/">
              <div className="flex items-center space-x-3 mb-6 hover:opacity-80 transition-opacity">
                <img 
                  src={logoTransparent} 
                  alt="Chatbotaurus Logo" 
                  className="w-10 h-10 filter drop-shadow-[0_0_12px_rgba(3,78,100,0.8)]"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Chatbotaurus</h3>
                  <p className="text-sm text-gray-600 dark:text-custom-gray-400">L'IA Souveraine pour l'Entreprise</p>
                </div>
              </div>
            </Link>
            
            <p className="text-gray-600 dark:text-custom-gray-400 mb-6 max-w-md">
              Transformez vos défis d'IA en avantages concurrentiels avec notre écosystème complet 
              auto-hébergé. Sécurité maximale, conformité garantie, ROI prouvé.
            </p>
            
            {/* Business Metrics */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-4 glass-sovereign rounded-lg">
                <div className="text-2xl font-bold text-sovereign">500+</div>
                <div className="text-sm text-gray-600 dark:text-custom-gray-400">Entreprises visées</div>
              </div>
              <div className="text-center p-4 glass-success rounded-lg">
                <div className="text-2xl font-bold text-success">€12M+</div>
                <div className="text-sm text-gray-600 dark:text-custom-gray-400">Économisés</div>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800 dark:text-white">
                Restez informé des évolutions IA
              </h4>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="votre@email.com"
                  className="flex-1 px-4 py-2 bg-white/10 dark:bg-black/20 border border-gray-200 dark:border-gray-700 rounded-lg focus:border-sovereign transition-colors"
                />
                <button className="px-6 py-2 bg-sovereign text-white rounded-lg hover:bg-sovereign-600 transition-colors">
                  OK
                </button>
              </div>
            </div>
          </div>
          
          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-6 flex items-center">
              <Network className="w-5 h-5 text-growth mr-2 filter drop-shadow-[0_0_6px_rgba(254,185,9,0.8)]" />
              Services IA
            </h4>
            <ul className="space-y-3">
              {footerServiceLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-600 dark:text-custom-gray-400 hover:text-growth dark:hover:text-growth transition-colors flex items-center"
                  >
                    <link.icon className="w-4 h-4 mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Solutions Links */}
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-6 flex items-center">
              <Briefcase className="w-5 h-5 text-success mr-2 filter drop-shadow-[0_0_6px_rgba(254,185,9,0.8)]" />
              Solutions Business
            </h4>
            <ul className="space-y-3">
              {footerSolutionLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-600 dark:text-custom-gray-400 hover:text-success dark:hover:text-success transition-colors flex items-center"
                  >
                    <link.icon className="w-4 h-4 mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* CTA Button */}
            <div className="mt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-4 py-3 bg-gradient-to-r from-growth to-sovereign text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <Link to="/roi-calculator" className="flex items-center justify-center">
                  <Calculator className="w-4 h-4 inline mr-2" />
                  Calculer Mon ROI
                </Link>
              </motion.div>
            </div>
          </div>
          
          {/* Navigation Links for tests */}
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-6 flex items-center">
              <Users className="w-5 h-5 text-premium mr-2 filter drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerNavigationLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-600 dark:text-custom-gray-400 hover:text-premium dark:hover:text-premium transition-colors flex items-center"
                  >
                    {React.createElement(link.icon, { className: "w-4 h-4 mr-2" })}
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-gray-200/20 dark:border-gray-800/20 pt-8 mt-16">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-600 dark:text-custom-gray-400">
              © 2024 IA Souveraine Ecosystem. Tous droits réservés.
            </div>
            
            {/* Compliance Badges */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-success" />
                <span className="text-sm text-gray-600 dark:text-custom-gray-400">RGPD Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Scale className="w-4 h-4 text-sovereign" />
                <span className="text-sm text-gray-600 dark:text-custom-gray-400">AI Act Ready</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-growth" />
                <span className="text-sm text-gray-600 dark:text-custom-gray-400">🇪🇺 Souveraineté EU</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};