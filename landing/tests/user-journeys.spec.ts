import { test, expect } from '@playwright/test';

test.describe('User Journey Tests - Complete Conversion Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3034');
  });

  test.describe('Complete User Journey - Homepage to Demo', () => {
    test('User journey: Homepage → Learn about services → Book demo', async ({ page }) => {
      // Start at homepage
      await expect(page.getByRole('heading', { name: /Révolutionnez votre entreprise/i })).toBeVisible();
      
      // User reads about pricing
      await expect(page.locator('text=€2,990')).toBeVisible();
      await expect(page.locator('text=€15,990')).toBeVisible();
      
      // User clicks to learn more about ecosystem
      await page.click('a[href="/ecosystem"]');
      await expect(page).toHaveURL('http://localhost:3034/ecosystem');
      
      // User explores a specific service
      await page.click('a[href="/services/ollama"]');
      await expect(page).toHaveURL('http://localhost:3034/services/ollama');
      await expect(page.getByRole('heading', { name: 'Ollama - LLM Local' })).toBeVisible();
      
      // User goes back and decides to book a demo
      await page.goBack();
      await page.click('a[href="/demo"]');
      await expect(page).toHaveURL('http://localhost:3034/demo');
      
      // User sees the premium demo proposition
      await expect(page.locator('text=94,2% de taux de conversion')).toBeVisible();
      await expect(page.locator('text=démonstrations avec vos vraies données client')).toBeVisible();
    });
  });

  test.describe('Complete User Journey - ROI Calculator Flow', () => {
    test('User journey: Homepage → ROI Calculator → Contact', async ({ page }) => {
      // Start at homepage, user sees ROI promise
      await expect(page.locator('text=€2,990')).toBeVisible();
      
      // User clicks ROI calculator
      await page.click('a[href="/roi-calculator"]');
      await expect(page).toHaveURL('http://localhost:3034/roi-calculator');
      
      // User sees exclusivity messaging
      await expect(page.getByRole('heading', { name: /Calculateur ROI Exclusif/i })).toBeVisible();
      await expect(page.locator('text=modèle de licence à vie se termine')).toBeVisible();
      
      // User decides to contact
      await page.click('a[href="/contact"]');
      await expect(page).toHaveURL('http://localhost:3034/contact');
      
      // User sees transformation guarantee
      await expect(page.getByRole('heading', { name: /Transformation Garantie/i })).toBeVisible();
      await expect(page.locator('text=&lt; 30 jours')).toBeVisible();
    });
  });

  test.describe('Complete User Journey - Solutions Exploration', () => {
    test('User journey: Solutions → Expertise → Resources → Contact', async ({ page }) => {
      // User goes to solutions page
      await page.click('a[href="/solutions"]');
      await expect(page).toHaveURL('http://localhost:3034/solutions');
      
      // User explores sector-specific solutions
      await expect(page.locator('text=Finance & Banque')).toBeVisible();
      await expect(page.locator('text=Santé & Pharmaceutique')).toBeVisible();
      
      // User wants to learn more about expertise
      await page.click('a[href="/expertise"]');
      await expect(page).toHaveURL('http://localhost:3034/expertise');
      
      // User sees all 9 expertises
      await expect(page.locator('text=LLM & Génération de Texte')).toBeVisible();
      await expect(page.locator('text=Vision par Ordinateur')).toBeVisible();
      
      // User checks resources
      await page.click('a[href="/resources"]');
      await expect(page).toHaveURL('http://localhost:3034/resources');
      
      // User sees premium value
      await expect(page.locator('text=€47,500')).toBeVisible();
      await expect(page.locator('text=INCLUS GRATUITEMENT')).toBeVisible();
      
      // User decides to contact
      await page.click('a[href="/contact"]');
      await expect(page).toHaveURL('http://localhost:3034/contact');
      
      // User fills contact form
      await page.fill('input[type="text"]', 'John Doe');
      await page.fill('input[type="email"]', 'john.doe@company.com');
      await page.fill('textarea', 'Interested in implementing AI solutions for our finance sector company.');
    });
  });

  test.describe('Conversion Elements Validation', () => {
    test('All testimonials and social proof elements are visible', async ({ page }) => {
      const pages = [
        { path: '/', testimonials: ['Director of Technology', 'CTO'] },
        { path: '/ecosystem', testimonials: ['CTO chez Renault', 'Lead Developer'] },
        { path: '/solutions', testimonials: ['Head of Innovation', 'Chief Data Officer'] },
        { path: '/expertise', testimonials: ['Chief Data Scientist', 'AI Research Director'] },
        { path: '/resources', testimonials: ['Innovation Manager', 'Technical Director'] },
        { path: '/contact', testimonials: ['ont obtenu leurs premiers ROI'] },
        { path: '/demo', testimonials: ['taux de conversion', '94,2%'] },
        { path: '/roi-calculator', testimonials: ['précision des calculs ROI'] }
      ];

      for (const pageInfo of pages) {
        await page.goto(`http://localhost:3034${pageInfo.path}`);
        
        for (const testimonial of pageInfo.testimonials) {
          await expect(page.locator(`text=${testimonial}`)).toBeVisible();
        }
      }
    });

    test('All pricing elements are consistent across pages', async ({ page }) => {
      const pages = ['/', '/ecosystem', '/solutions', '/expertise', '/resources', '/demo', '/roi-calculator'];
      
      for (const pagePath of pages) {
        await page.goto(`http://localhost:3034${pagePath}`);
        
        // Check lifetime pricing is visible
        await expect(page.locator('text=€2,990')).toBeVisible();
        
        // Most pages should also have the premium price
        if (pagePath !== '/contact') {
          await expect(page.locator('text=€15,990')).toBeVisible();
        }
      }
    });

    test('All urgency elements are present', async ({ page }) => {
      const urgencyPages = [
        { path: '/resources', urgency: 'Accès limité' },
        { path: '/roi-calculator', urgency: 'modèle de licence à vie se termine' },
        { path: '/contact', urgency: '&lt; 30 jours' },
        { path: '/demo', urgency: '94,2% de taux de conversion' }
      ];

      for (const pageInfo of urgencyPages) {
        await page.goto(`http://localhost:3034${pageInfo.path}`);
        await expect(page.locator(`text=${pageInfo.urgency}`)).toBeVisible();
      }
    });
  });

  test.describe('Navigation Flow Tests', () => {
    test('Header navigation works from any page', async ({ page }) => {
      const startPages = ['/ecosystem', '/solutions', '/expertise', '/resources', '/contact', '/demo', '/roi-calculator'];
      
      for (const startPage of startPages) {
        await page.goto(`http://localhost:3034${startPage}`);
        
        // Test navigation to homepage
        await page.click('a[href="/"]');
        await expect(page).toHaveURL('http://localhost:3034/');
        
        // Navigate back to test other pages
        await page.goto(`http://localhost:3034${startPage}`);
        
        // Test navigation to ecosystem
        await page.click('header a[href="/ecosystem"]');
        await expect(page).toHaveURL('http://localhost:3034/ecosystem');
        
        // Test navigation to contact
        await page.goto(`http://localhost:3034${startPage}`);
        await page.click('header a[href="/contact"]');
        await expect(page).toHaveURL('http://localhost:3034/contact');
      }
    });

    test('Footer navigation works from any page', async ({ page }) => {
      const testPages = ['/ecosystem', '/solutions', '/expertise'];
      
      for (const testPage of testPages) {
        await page.goto(`http://localhost:3034${testPage}`);
        
        // Scroll to footer
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        
        // Test footer links
        await page.click('footer a[href="/services/ollama"]');
        await expect(page).toHaveURL('http://localhost:3034/services/ollama');
        
        // Go back and test another footer link
        await page.goto(`http://localhost:3034${testPage}`);
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await page.click('footer a[href="/contact"]');
        await expect(page).toHaveURL('http://localhost:3034/contact');
      }
    });
  });

  test.describe('Form and Interactive Elements', () => {
    test('Contact form validation and submission', async ({ page }) => {
      await page.goto('http://localhost:3034/contact');
      
      // Test empty form submission
      await page.click('button[type="submit"]');
      
      // Fill form with valid data
      await page.fill('input[type="text"]', 'Jane Smith');
      await page.fill('input[type="email"]', 'jane.smith@enterprise.com');
      await page.fill('textarea', 'We are interested in implementing Local AI solutions for our 500-person company in the automotive sector.');
      
      // Check form is properly filled
      await expect(page.locator('input[type="text"]')).toHaveValue('Jane Smith');
      await expect(page.locator('input[type="email"]')).toHaveValue('jane.smith@enterprise.com');
      await expect(page.locator('textarea')).toHaveValue('We are interested in implementing Local AI solutions for our 500-person company in the automotive sector.');
    });

    test('ROI Calculator interactive elements', async ({ page }) => {
      await page.goto('http://localhost:3034/roi-calculator');
      
      // Check calculator form elements are present
      await expect(page.locator('input')).toBeVisible();
      await expect(page.locator('select')).toBeVisible();
      
      // Test filling calculator fields
      const inputs = await page.locator('input').all();
      if (inputs.length > 0) {
        await inputs[0].fill('100');
      }
      
      const selects = await page.locator('select').all();
      if (selects.length > 0) {
        await selects[0].selectOption({ index: 1 });
      }
    });
  });

  test.describe('Cross-Device Journey Tests', () => {
    test('Mobile user journey works correctly', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      
      // Mobile user starts at homepage
      await page.goto('http://localhost:3034');
      await expect(page.getByRole('heading', { name: /Révolutionnez votre entreprise/i })).toBeVisible();
      
      // User opens mobile menu
      await page.click('button:has(svg):right-of(:text("Local AI"))');
      await page.waitForSelector('div.md\\:hidden.glass', { state: 'visible' });
      
      // User navigates to solutions
      await page.click('div.md\\:hidden.glass a[href="/solutions"]');
      await expect(page).toHaveURL('http://localhost:3034/solutions');
      
      // User sees pricing on mobile
      await expect(page.locator('text=€2,990')).toBeVisible();
      
      // User clicks CTA on mobile
      await page.click('a[href="/contact"]');
      await expect(page).toHaveURL('http://localhost:3034/contact');
      
      // User fills mobile form
      await page.fill('input[type="text"]', 'Mobile User');
      await page.fill('input[type="email"]', 'mobile@user.com');
      await page.fill('textarea', 'Contacted via mobile device');
    });
  });

  test.describe('Service Integration Tests', () => {
    test('All service pages load correctly from ecosystem', async ({ page }) => {
      await page.goto('http://localhost:3034/ecosystem');
      
      const services = [
        { href: '/services/ollama', title: 'Ollama - LLM Local' },
        { href: '/services/n8n', title: 'N8N - Automatisation' },
        { href: '/services/qdrant', title: 'Qdrant - Vector DB' },
        { href: '/services/open-webui', title: 'Open WebUI - Interface Chat' },
        { href: '/services/supabase', title: 'Supabase - Auth + Database' },
        { href: '/services/searxng', title: 'SearXNG - Moteur de Recherche Privé' },
        { href: '/services/neo4j', title: 'Neo4j - Base de Données Graphe' },
        { href: '/services/langfuse', title: 'Langfuse - Observabilité LLM' }
      ];

      for (const service of services) {
        await page.goto('http://localhost:3034/ecosystem');
        await page.click(`a[href="${service.href}"]`);
        await expect(page).toHaveURL(`http://localhost:3034${service.href}`);
        await expect(page.getByRole('heading', { name: service.title })).toBeVisible();
      }
    });
  });

  test.describe('Performance and Accessibility', () => {
    test('All pages have proper headings structure', async ({ page }) => {
      const pages = ['/', '/ecosystem', '/solutions', '/expertise', '/resources', '/contact', '/demo', '/roi-calculator'];
      
      for (const pagePath of pages) {
        await page.goto(`http://localhost:3034${pagePath}`);
        
        // Check that each page has at least one H1
        const h1Count = await page.locator('h1').count();
        expect(h1Count).toBeGreaterThan(0);
        
        // Check that page has structured headings
        const headingsCount = await page.locator('h1, h2, h3, h4, h5, h6').count();
        expect(headingsCount).toBeGreaterThan(1);
      }
    });

    test('All CTA buttons are accessible and clickable', async ({ page }) => {
      const pages = ['/', '/ecosystem', '/solutions', '/expertise', '/resources', '/demo', '/roi-calculator'];
      
      for (const pagePath of pages) {
        await page.goto(`http://localhost:3034${pagePath}`);
        
        // Find all CTA buttons/links
        const ctaLinks = await page.locator('a[href="/demo"], a[href="/contact"], a[href="/roi-calculator"], button[type="submit"]').all();
        
        for (const cta of ctaLinks) {
          if (await cta.isVisible()) {
            await expect(cta).toBeEnabled();
            // Check that CTA has accessible text or aria-label
            const text = await cta.textContent();
            const ariaLabel = await cta.getAttribute('aria-label');
            expect(text || ariaLabel).toBeTruthy();
          }
        }
      }
    });
  });
});