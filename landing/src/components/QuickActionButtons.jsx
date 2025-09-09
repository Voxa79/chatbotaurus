import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MessageSquare, Phone, Video, FileText, Users } from 'lucide-react';

/**
 * Composant réutilisable pour afficher des boutons d'action rapide
 * Peut être utilisé dans les CTA sections des pages
 */
export const QuickActionButtons = ({ 
  showDemo = true, 
  showContact = true, 
  showDocumentation = true,
  showSupport = false,
  variant = 'default',
  orientation = 'horizontal'
}) => {
  const buttons = [];

  if (showDemo) {
    buttons.push({
      key: 'demo',
      to: '/demo',
      icon: Video,
      label: 'Demander une Démo',
      className: 'px-6 py-3 bg-gradient-to-r from-sovereign to-sovereign text-white rounded-lg font-semibold hover:from-sovereign-600 hover:to-sovereign-600 transition-all shadow-lg text-center flex items-center gap-2'
    });
  }

  if (showContact) {
    buttons.push({
      key: 'contact',
      to: '/contact',
      icon: MessageSquare,
      label: 'Nous Contacter',
      className: 'px-6 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-all border border-gray-300 dark:border-gray-600 text-center flex items-center gap-2'
    });
  }

  if (showDocumentation) {
    buttons.push({
      key: 'documentation',
      to: '/documentation',
      icon: FileText,
      label: 'Documentation',
      className: 'px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all text-center flex items-center gap-2'
    });
  }

  if (showSupport) {
    buttons.push({
      key: 'support',
      onClick: () => { if (typeof window.activateConvocore === 'function') { window.activateConvocore(); } },
      icon: Users,
      label: 'Support 24/7',
      className: 'px-6 py-3 bg-gradient-to-r from-growth to-growth text-white rounded-lg font-semibold hover:from-growth-600 hover:to-growth-600 transition-all shadow-lg text-center flex items-center gap-2'
    });
  }

  const containerClass = orientation === 'vertical' 
    ? 'flex flex-col gap-4' 
    : 'flex flex-col sm:flex-row gap-4 justify-center';

  return (
    <div className={containerClass}>
      {buttons.map((button) => {
        const IconComponent = button.icon;
        
        if (button.onClick) {
          return (
            <button
              key={button.key}
              onClick={button.onClick}
              className={button.className}
            >
              <IconComponent className="w-4 h-4" />
              {button.label}
            </button>
          );
        }

        return (
          <Link
            key={button.key}
            to={button.to}
            className={button.className}
          >
            <IconComponent className="w-4 h-4" />
            {button.label}
          </Link>
        );
      })}
    </div>
  );
};

/**
 * Variantes prédéfinies pour différents contextes
 */

// Pour les pages de services
export const ServiceActionButtons = () => (
  <QuickActionButtons 
    showDemo={true} 
    showContact={true} 
    showDocumentation={true}
    showSupport={false}
  />
);

// Pour les pages sectorielles
export const SectorActionButtons = () => (
  <QuickActionButtons 
    showDemo={true} 
    showContact={true} 
    showDocumentation={false}
    showSupport={false}
  />
);

// Pour les pages de cas d'usage
export const UsecaseActionButtons = () => (
  <QuickActionButtons 
    showDemo={true} 
    showContact={true} 
    showDocumentation={true}
    showSupport={false}
  />
);

// Pour les sections d'urgence ou support
export const SupportActionButtons = () => (
  <QuickActionButtons 
    showDemo={false} 
    showContact={true} 
    showDocumentation={false}
    showSupport={true}
  />
);

// Version compacte pour les sidebars ou footers
export const CompactActionButtons = () => (
  <QuickActionButtons 
    showDemo={true} 
    showContact={true} 
    showDocumentation={false}
    showSupport={false}
    orientation="vertical"
  />
);