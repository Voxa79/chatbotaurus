import { test, expect } from '@playwright/test';

test.describe('Conversion-Optimized Pages Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3034');
  });

  test.describe('Homepage Tests', () => {
    test('Homepage loads and displays key elements', async ({ page }) => {
      // Check hero section
      await expect(page.getByRole('heading', { name: /Révolutionnez votre entreprise/i })).toBeVisible();
      
      // Check pricing section 
      await expect(page.locator('text=€2,990')).toBeVisible();
      await expect(page.locator('text=€15,990')).toBeVisible();
      
      // Check testimonials section
      await expect(page.locator('text=Director of Technology')).toBeVisible();
      
      // Check CTA buttons work
      const demoButton = page.locator('a[href="/demo"]').first();
      await expect(demoButton).toBeVisible();
      await demoButton.click();
      await expect(page).toHaveURL('http://localhost:3034/demo');
      await page.goBack();
      
      const roiButton = page.locator('a[href="/roi-calculator"]').first();
      await expect(roiButton).toBeVisible();
      await roiButton.click();
      await expect(page).toHaveURL('http://localhost:3034/roi-calculator');
      await page.goBack();
    });

    test('Service cards navigation works', async ({ page }) => {
      // Test service card links
      await page.click('a[href="/services/ollama"]');
      await expect(page).toHaveURL('http://localhost:3034/services/ollama');
      await page.goBack();

      await page.click('a[href="/services/open-webui"]');
      await expect(page).toHaveURL('http://localhost:3034/services/open-webui');
      await page.goBack();

      await page.click('a[href="/services/n8n"]');
      await expect(page).toHaveURL('http://localhost:3034/services/n8n');
      await page.goBack();
    });
  });

  test.describe('Ecosystem Page Tests', () => {
    test('Ecosystem page displays optimized content', async ({ page }) => {
      await page.goto('http://localhost:3034/ecosystem');
      
      // Check hero section
      await expect(page.getByRole('heading', { name: /L'écosystème IA le plus avancé d'Europe/i })).toBeVisible();
      
      // Check pricing section
      await expect(page.locator('text=€2,990')).toBeVisible();
      await expect(page.locator('text=€15,990')).toBeVisible();
      
      // Check service cards display properly
      await expect(page.locator('text=Support 50+ modèles LLM')).toBeVisible();
      await expect(page.locator('text=API compatible OpenAI')).toBeVisible();
      
      // Check testimonials section
      await expect(page.locator('text=CTO chez Renault')).toBeVisible();
      
      // Test service card links
      await page.click('a[href="/services/ollama"]');
      await expect(page).toHaveURL('http://localhost:3034/services/ollama');
      await page.goBack();
    });
  });

  test.describe('Solutions Page Tests', () => {
    test('Solutions page displays sector-specific content', async ({ page }) => {
      await page.goto('http://localhost:3034/solutions');
      
      // Check hero section
      await expect(page.getByRole('heading', { name: /Solutions IA par Secteur/i })).toBeVisible();
      
      // Check pricing section
      await expect(page.locator('text=€2,990')).toBeVisible();
      
      // Check sector solutions
      await expect(page.locator('text=Finance & Banque')).toBeVisible();
      await expect(page.locator('text=Santé & Pharmaceutique')).toBeVisible();
      await expect(page.locator('text=Industrie & Manufacturing')).toBeVisible();
      
      // Check testimonials
      await expect(page.locator('text=Head of Innovation')).toBeVisible();
    });
  });

  test.describe('Expertise Page Tests', () => {
    test('Expertise page displays all expertises and approaches', async ({ page }) => {
      await page.goto('http://localhost:3034/expertise');
      
      // Check hero section
      await expect(page.getByRole('heading', { name: /9 Expertises IA × 3 Approches/i })).toBeVisible();
      
      // Check all 9 expertises are visible
      await expect(page.locator('text=LLM & Génération de Texte')).toBeVisible();
      await expect(page.locator('text=Vision par Ordinateur')).toBeVisible();
      await expect(page.locator('text=Traitement du Langage')).toBeVisible();
      await expect(page.locator('text=Systèmes de Recommandation')).toBeVisible();
      await expect(page.locator('text=Analyse Prédictive')).toBeVisible();
      await expect(page.locator('text=Automatisation Intelligente')).toBeVisible();
      await expect(page.locator('text=Recherche Sémantique')).toBeVisible();
      await expect(page.locator('text=IA Conversationnelle')).toBeVisible();
      await expect(page.locator('text=Optimisation & ML Ops')).toBeVisible();
      
      // Check three approaches (DFY, DWY, DIY)
      await expect(page.locator('text=Done-For-You')).toBeVisible();
      await expect(page.locator('text=Done-With-You')).toBeVisible();
      await expect(page.locator('text=Do-It-Yourself')).toBeVisible();
      
      // Check revolutionary pricing section
      await expect(page.locator('text=€2,990')).toBeVisible();
      await expect(page.locator('text=€15,990')).toBeVisible();
      
      // Check expert testimonials
      await expect(page.locator('text=Chief Data Scientist')).toBeVisible();
    });
  });

  test.describe('Resources Page Tests', () => {
    test('Resources page displays premium content', async ({ page }) => {
      await page.goto('http://localhost:3034/resources');
      
      // Check hero section
      await expect(page.getByRole('heading', { name: /Plus grand centre de ressources IA d'Europe/i })).toBeVisible();
      
      // Check premium access section
      await expect(page.locator('text=€47,500')).toBeVisible();
      await expect(page.locator('text=INCLUS GRATUITEMENT')).toBeVisible();
      
      // Check resource categories
      await expect(page.locator('text=Guides d\'Implémentation')).toBeVisible();
      await expect(page.locator('text=Templates & Scripts')).toBeVisible();
      await expect(page.locator('text=Cas d\'Usage Sectoriels')).toBeVisible();
      
      // Check comparison section
      await expect(page.locator('text=Ressources Gratuites Limitées')).toBeVisible();
      await expect(page.locator('text=Centre Complet Premium')).toBeVisible();
    });
  });

  test.describe('Contact Page Tests', () => {
    test('Contact page displays transformation guarantee', async ({ page }) => {
      await page.goto('http://localhost:3034/contact');
      
      // Check hero section
      await expect(page.getByRole('heading', { name: /Transformation Garantie/i })).toBeVisible();
      
      // Check contact form exists and is functional
      await expect(page.locator('input[type="text"]')).toBeVisible();
      await expect(page.locator('input[type="email"]')).toBeVisible();
      await expect(page.locator('textarea')).toBeVisible();
      await expect(page.locator('button[type="submit"]')).toBeVisible();
      
      // Test form submission (basic validation)
      await page.fill('input[type="text"]', 'Test User');
      await page.fill('input[type="email"]', 'test@example.com');
      await page.fill('textarea', 'Test message for form validation');
      
      // Check real-time testimonials
      await expect(page.locator('text=ont obtenu leurs premiers ROI')).toBeVisible();
      
      // Check timeline guarantees
      await expect(page.locator('text=&lt; 30 jours')).toBeVisible();
      await expect(page.locator('text=&lt; 90 jours')).toBeVisible();
    });
  });

  test.describe('Demo Page Tests', () => {
    test('Demo page displays premium demo proposition', async ({ page }) => {
      await page.goto('http://localhost:3034/demo');
      
      // Check hero section with conversion rate
      await expect(page.getByRole('heading', { name: /Démonstrations Premium/i })).toBeVisible();
      await expect(page.locator('text=94,2% de taux de conversion')).toBeVisible();
      
      // Check unique value proposition
      await expect(page.locator('text=démonstrations avec vos vraies données client')).toBeVisible();
      await expect(page.locator('text=ROI calculé en temps réel')).toBeVisible();
      
      // Check comparison section
      await expect(page.locator('text=Démonstrations Classiques')).toBeVisible();
      await expect(page.locator('text=Démonstrations Premium Local AI')).toBeVisible();
      
      // Check demo types
      await expect(page.locator('text=Démo Express')).toBeVisible();
      await expect(page.locator('text=Démo Approfondie')).toBeVisible();
      await expect(page.locator('text=Démo Sur-Mesure')).toBeVisible();
    });
  });

  test.describe('ROI Calculator Page Tests', () => {
    test('ROI Calculator displays exclusivity messaging', async ({ page }) => {
      await page.goto('http://localhost:3034/roi-calculator');
      
      // Check hero section
      await expect(page.getByRole('heading', { name: /Calculateur ROI Exclusif/i })).toBeVisible();
      
      // Check urgency section
      await expect(page.locator('text=modèle de licence à vie se termine')).toBeVisible();
      await expect(page.locator('text=€2,990')).toBeVisible();
      
      // Check precision testimonials
      await expect(page.locator('text=précision des calculs ROI')).toBeVisible();
      
      // Check calculator form elements
      await expect(page.locator('input')).toBeVisible();
      await expect(page.locator('select')).toBeVisible();
    });
  });

  test.describe('CONVOCORE Widget Tests', () => {
    test('CONVOCORE widget is present on all pages', async ({ page }) => {
      const pages = [
        '/',
        '/ecosystem',
        '/solutions',
        '/expertise',
        '/resources',
        '/contact',
        '/demo',
        '/roi-calculator'
      ];

      for (const pagePath of pages) {
        await page.goto(`http://localhost:3034${pagePath}`);
        
        // Check if CONVOCORE widget script is loaded
        const convoScript = page.locator('script[src*="convocore"]');
        await expect(convoScript).toBeAttached();
      }
    });
  });

  test.describe('Responsive Design Tests', () => {
    test('All pages are responsive on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      
      const pages = [
        { path: '/', title: 'Révolutionnez votre entreprise' },
        { path: '/ecosystem', title: 'L\'écosystème IA le plus avancé d\'Europe' },
        { path: '/solutions', title: 'Solutions IA par Secteur' },
        { path: '/expertise', title: '9 Expertises IA × 3 Approches' },
        { path: '/resources', title: 'Plus grand centre de ressources IA d\'Europe' },
        { path: '/contact', title: 'Transformation Garantie' },
        { path: '/demo', title: 'Démonstrations Premium' },
        { path: '/roi-calculator', title: 'Calculateur ROI Exclusif' }
      ];

      for (const pageInfo of pages) {
        await page.goto(`http://localhost:3034${pageInfo.path}`);
        
        // Check page loads and main content is visible
        await expect(page.getByRole('heading', { name: new RegExp(pageInfo.title, 'i') })).toBeVisible();
        
        // Check pricing is visible on mobile
        await expect(page.locator('text=€2,990')).toBeVisible();
      }
    });

    test('All pages are responsive on tablet', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 });
      
      const pages = ['/', '/ecosystem', '/solutions', '/expertise', '/resources', '/contact', '/demo', '/roi-calculator'];

      for (const pagePath of pages) {
        await page.goto(`http://localhost:3034${pagePath}`);
        
        // Check main navigation is visible
        await expect(page.locator('header')).toBeVisible();
        
        // Check pricing sections are properly displayed
        await expect(page.locator('text=€2,990')).toBeVisible();
      }
    });
  });

  test.describe('CTA Button Tests', () => {
    test('All CTA buttons are functional across pages', async ({ page }) => {
      // Test homepage CTAs
      await page.goto('http://localhost:3034');
      
      // Test "Calculer mon ROI" buttons
      const roiButtons = page.locator('a[href="/roi-calculator"]');
      const roiButtonCount = await roiButtons.count();
      for (let i = 0; i < roiButtonCount; i++) {
        const button = roiButtons.nth(i);
        if (await button.isVisible()) {
          await button.click();
          await expect(page).toHaveURL('http://localhost:3034/roi-calculator');
          await page.goBack();
        }
      }
      
      // Test "Réserver ma démo" buttons
      const demoButtons = page.locator('a[href="/demo"]');
      const demoButtonCount = await demoButtons.count();
      for (let i = 0; i < demoButtonCount; i++) {
        const button = demoButtons.nth(i);
        if (await button.isVisible()) {
          await button.click();
          await expect(page).toHaveURL('http://localhost:3034/demo');
          await page.goBack();
        }
      }
      
      // Test "Contact" buttons
      const contactButtons = page.locator('a[href="/contact"]');
      const contactButtonCount = await contactButtons.count();
      for (let i = 0; i < contactButtonCount; i++) {
        const button = contactButtons.nth(i);
        if (await button.isVisible()) {
          await button.click();
          await expect(page).toHaveURL('http://localhost:3034/contact');
          await page.goBack();
        }
      }
    });
  });

  test.describe('Performance and Loading Tests', () => {
    test('All pages load within reasonable time', async ({ page }) => {
      const pages = ['/', '/ecosystem', '/solutions', '/expertise', '/resources', '/contact', '/demo', '/roi-calculator'];

      for (const pagePath of pages) {
        const startTime = Date.now();
        await page.goto(`http://localhost:3034${pagePath}`);
        
        // Wait for the main content to be visible
        await expect(page.locator('main')).toBeVisible();
        
        const loadTime = Date.now() - startTime;
        expect(loadTime).toBeLessThan(5000); // Page should load within 5 seconds
      }
    });
  });
});