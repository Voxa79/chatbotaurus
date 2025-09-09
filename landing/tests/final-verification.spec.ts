import { test, expect } from '@playwright/test';

test.describe('Final Site Verification', () => {
  test('All pages load correctly', async ({ page }) => {
    // Test homepage
    await page.goto('http://localhost:3034');
    await expect(page).toHaveTitle(/IA Europa/);
    await expect(page.getByText('L\'Écosystème d\'IA Souveraine')).toBeVisible();

    // Test main navigation pages
    const mainPages = [
      { url: '/ecosystem', heading: 'Services IA Intégrés' },
      { url: '/solutions', heading: 'Solutions Business' },
      { url: '/expertise', heading: 'Nos Expertises en IA Souveraine' },
      { url: '/roi-calculator', heading: 'Calculateur de ROI' },
      { url: '/resources', heading: 'Ressources' },
      { url: '/contact', heading: 'Contact' }
    ];

    for (const { url, heading } of mainPages) {
      await page.goto(`http://localhost:3034${url}`);
      // Use more specific selector to avoid footer conflicts
      if (heading === 'Solutions Business') {
        // Look for the heading in the main content area, not in the footer
        await expect(page.locator('div.min-h-screen h1').filter({ hasText: heading })).toBeVisible();
      } else if (heading === 'Ressources' || heading === 'Contact') {
        // Look for the main heading in the resources or contact page
        await expect(page.locator('div.min-h-screen h1').filter({ hasText: heading })).toBeVisible();
      } else {
        await expect(page.getByRole('heading', { name: heading })).toBeVisible();
      }
    }

    // Test service pages
    const servicePages = [
      { url: '/services/ollama', heading: 'Ollama - LLM Local' },
      { url: '/services/n8n', heading: 'N8N - Automatisation' },
      { url: '/services/qdrant', heading: 'Qdrant - Vector DB' },
      { url: '/services/open-webui', heading: 'Open WebUI - Interface Chat' },
      { url: '/services/supabase', heading: 'Supabase - Auth + Database' },
      { url: '/services/searxng', heading: 'SearXNG - Moteur de Recherche Privé' },
      { url: '/services/neo4j', heading: 'Neo4j - Base de Données Graphe' },
      { url: '/services/langfuse', heading: 'Langfuse - Observabilité LLM' }
    ];

    for (const { url, heading } of servicePages) {
      await page.goto(`http://localhost:3034${url}`);
      await expect(page.getByRole('heading', { name: heading })).toBeVisible();
    }

    // Test resources sub-pages
    const resourcePages = [
      { url: '/resources/docs', heading: 'Documentation' },
      { url: '/resources/case-studies', heading: 'Études de Cas' },
      { url: '/resources/webinars', heading: 'Webinars' }
    ];

    for (const { url, heading } of resourcePages) {
      await page.goto(`http://localhost:3034${url}`);
      // Use more specific selector for documentation page to avoid conflicts
      if (heading === 'Documentation' || heading === 'Webinars') {
        await expect(page.locator('div.min-h-screen h1').filter({ hasText: heading })).toBeVisible();
      } else {
        await expect(page.getByRole('heading', { name: heading })).toBeVisible();
      }
    }

    // Test other important pages
    const otherPages = [
      { url: '/demo', heading: 'Démonstration Live' }
    ];

    for (const { url, heading } of otherPages) {
      await page.goto(`http://localhost:3034${url}`);
      await expect(page.getByRole('heading', { name: heading })).toBeVisible();
    }
  });

  test('Responsive design works', async ({ page }) => {
    // Test desktop
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:3034');
    await expect(page.getByText('L\'Écosystème d\'IA Souveraine')).toBeVisible();

    // Test tablet
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('http://localhost:3034');
    await expect(page.getByText('L\'Écosystème d\'IA Souveraine')).toBeVisible();

    // Test mobile
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('http://localhost:3034');
    await expect(page.getByText('L\'Écosystème d\'IA Souveraine')).toBeVisible();
  });

  test('Navigation works correctly', async ({ page }) => {
    await page.goto('http://localhost:3034');
    
    // Test navigation to ecosystem page
    await page.click('a[href="/ecosystem"]');
    await expect(page).toHaveURL('http://localhost:3034/ecosystem');
    
    // Test navigation to a service page
    await page.click('a[href="/services/ollama"]');
    await expect(page).toHaveURL('http://localhost:3034/services/ollama');
    
    // Test navigation to solutions page
    await page.click('a[href="/solutions"]');
    await expect(page).toHaveURL('http://localhost:3034/solutions');
    
    // Test navigation to expertise page
    await page.click('a[href="/expertise"]');
    await expect(page).toHaveURL('http://localhost:3034/expertise');
  });

  test('Footer links work correctly', async ({ page }) => {
    await page.goto('http://localhost:3034');
    
    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    
    // Test footer navigation links
    await page.click('footer a[href="/ecosystem"]');
    await expect(page).toHaveURL('http://localhost:3034/ecosystem');
    
    // Go back to homepage
    await page.goto('http://localhost:3034');
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    
    // Test footer service links
    await page.click('footer a[href="/services/ollama"]');
    await expect(page).toHaveURL('http://localhost:3034/services/ollama');
  });

  test('Mobile menu works correctly', async ({ page }) => {
    // Set viewport to mobile
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('http://localhost:3034');
    
    // Open mobile menu
    await page.click('button:has(svg):right-of(:text("Local AI"))');
    
    // Wait for mobile menu to be visible
    await page.waitForSelector('div.md\\:hidden.glass', { state: 'visible' });
    
    // Test mobile navigation
    await page.click('div.md\\:hidden.glass a[href="/ecosystem"]');
    await expect(page).toHaveURL('http://localhost:3034/ecosystem');
  });
});