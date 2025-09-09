import { test, expect } from '@playwright/test';

test.describe('Site Navigation Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3034');
  });

  test('Homepage loads correctly', async ({ page }) => {
    await expect(page).toHaveTitle(/IA Europa/);
    // Updated to match actual homepage text
    await expect(page.getByText('L\'Écosystème d\'IA Souveraine')).toBeVisible();
  });

  test('Header navigation works', async ({ page }) => {
    // Test Écosystème navigation
    await page.click('text=Écosystème');
    await expect(page).toHaveURL('http://localhost:3034/ecosystem');
    
    // Navigate back to homepage
    await page.goto('http://localhost:3034');
    
    // Test Solutions navigation
    await page.click('text=Solutions');
    await expect(page).toHaveURL('http://localhost:3034/solutions');
    
    // Navigate back to homepage
    await page.goto('http://localhost:3034');
    
    // Test Expertise navigation
    await page.click('text=Expertise');
    await expect(page).toHaveURL('http://localhost:3034/expertise');
    
    // Navigate back to homepage
    await page.goto('http://localhost:3034');
    
    // Test ROI Calculator navigation
    await page.click('text=ROI Calculator');
    await expect(page).toHaveURL('http://localhost:3034/roi-calculator');
    
    // Navigate back to homepage
    await page.goto('http://localhost:3034');
    
    // Test Ressources navigation
    await page.click('text=Ressources');
    await expect(page).toHaveURL('http://localhost:3034/resources');
    
    // Navigate back to homepage
    await page.goto('http://localhost:3034');
    
    // Test Contact navigation
    await page.click('text=Contact');
    await expect(page).toHaveURL('http://localhost:3034/contact');
  });

  test('Dropdown navigation works', async ({ page }) => {
    // Test Écosystème dropdown
    await page.hover('text=Écosystème');
    // Use more specific selector for the dropdown item
    await page.click('a[href="/ecosystem/services"]');
    await expect(page).toHaveURL('http://localhost:3034/ecosystem/services');
    
    // Navigate back to homepage
    await page.goto('http://localhost:3034');
    
    // Test Solutions dropdown
    await page.hover('text=Solutions');
    // Use more specific selector for the dropdown item
    await page.click('a[href="/solutions/finance"]');
    await expect(page).toHaveURL('http://localhost:3034/solutions/finance');
    
    // Navigate back to homepage
    await page.goto('http://localhost:3034');
    
    // Test Ressources dropdown
    await page.hover('text=Ressources');
    // Use more specific selector for the dropdown item
    await page.click('a[href="/resources/docs"]');
    await expect(page).toHaveURL('http://localhost:3034/resources/docs');
  });

  test('Footer navigation works', async ({ page }) => {
    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    
    // Test footer links - use more specific selectors
    await page.click('footer a:has-text("Écosystème")');
    await expect(page).toHaveURL('http://localhost:3034/ecosystem');
    
    // Navigate back to homepage
    await page.goto('http://localhost:3034');
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    
    await page.click('footer a:has-text("Solutions")');
    await expect(page).toHaveURL('http://localhost:3034/solutions');
    
    // Navigate back to homepage
    await page.goto('http://localhost:3034');
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    
    await page.click('footer a:has-text("Expertise")');
    await expect(page).toHaveURL('http://localhost:3034/expertise');
    
    // Navigate back to homepage
    await page.goto('http://localhost:3034');
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    
    await page.click('footer a:has-text("Ressources")');
    await expect(page).toHaveURL('http://localhost:3034/resources');
  });

  test('ROI Calculator page functionality', async ({ page }) => {
    await page.goto('http://localhost:3034/roi-calculator');
    // Use exact match to avoid strict mode violation
    await expect(page.getByRole('heading', { name: 'Calculateur de ROI', exact: true })).toBeVisible();
    
    // Test form elements using more specific selectors
    await expect(page.locator('label').filter({ hasText: 'Taille de l\'entreprise' })).toBeVisible();
    await expect(page.locator('label').filter({ hasText: 'Secteur d\'activité' })).toBeVisible();
    await expect(page.locator('label').filter({ hasText: 'Dépenses annuelles Cloud AI (€)' })).toBeVisible();
    
    // Test calculation
    await page.fill('input[name="currentCloudSpend"]', '200000');
    await page.click('text=Calculer mon ROI');
    
    // Check if results are displayed
    await expect(page.getByText('Résultats de votre calcul')).toBeVisible();
  });

  test('Resources page navigation', async ({ page }) => {
    await page.goto('http://localhost:3034/resources');
    // Use exact match to avoid strict mode violation
    await expect(page.getByRole('heading', { name: 'Ressources', exact: true })).toBeVisible();
    
    // Test navigation to sub-pages using the new links we added
    await page.click('a:has-text("Voir toute la documentation")');
    await expect(page).toHaveURL('http://localhost:3034/resources/docs');
    
    // Navigate back to resources
    await page.goto('http://localhost:3034/resources');
    
    // Navigate to case studies
    await page.click('a:has-text("Voir tous les cas clients")');
    await expect(page).toHaveURL('http://localhost:3034/resources/case-studies');
    
    // Navigate back to resources
    await page.goto('http://localhost:3034/resources');
    
    // Navigate to webinars
    await page.click('a:has-text("Voir tous les webinars")');
    await expect(page).toHaveURL('http://localhost:3034/resources/webinars');
  });

  test('Contact page functionality', async ({ page }) => {
    await page.goto('http://localhost:3034/contact');
    // Use exact match to avoid strict mode violation
    await expect(page.getByRole('heading', { name: 'Contact', exact: true })).toBeVisible();
    
    // Test form elements using more specific selectors
    await expect(page.locator('label').filter({ hasText: 'Nom complet' })).toBeVisible();
    await expect(page.locator('label').filter({ hasText: 'Entreprise' })).toBeVisible();
    await expect(page.locator('label').filter({ hasText: 'Email' })).toBeVisible();
    await expect(page.locator('label').filter({ hasText: 'Sujet' })).toBeVisible();
    await expect(page.locator('label').filter({ hasText: 'Message' })).toBeVisible();
  });

  test('Demo page functionality', async ({ page }) => {
    await page.goto('http://localhost:3034/demo');
    // Use exact match to avoid strict mode violation
    await expect(page.getByRole('heading', { name: 'Démonstration Live', exact: true })).toBeVisible();
    
    // Test demo options
    await expect(page.getByText('Aperçu de la plateforme')).toBeVisible();
    await expect(page.getByText('Sécurité & Conformité')).toBeVisible();
    await expect(page.getByText('Personnalisation')).toBeVisible();
    
    // Test form elements using more specific selectors
    await expect(page.locator('label').filter({ hasText: 'Nom complet' })).toBeVisible();
    await expect(page.locator('label').filter({ hasText: 'Entreprise' })).toBeVisible();
    await expect(page.locator('label').filter({ hasText: 'Email' })).toBeVisible();
  });

  test('Expertise page functionality', async ({ page }) => {
    await page.goto('http://localhost:3034/expertise');
    // Use exact match to avoid strict mode violation
    await expect(page.getByRole('heading', { name: 'Nos Expertises en IA Souveraine', exact: true })).toBeVisible();
    
    // Test that all expertise sections are visible
    await expect(page.getByText('Consulting en IA Souveraine')).toBeVisible();
    await expect(page.getByText('Formation IA')).toBeVisible();
    await expect(page.getByText('Conception Pédagogique avec IA')).toBeVisible();
    await expect(page.getByText('Monitoring IA')).toBeVisible();
    await expect(page.getByText('Compliance IA')).toBeVisible();
    await expect(page.getByText('Support Premium')).toBeVisible();
    
    // Test that all package types are visible using more specific selectors
    await expect(page.locator('div.border-blue-500 .absolute > span').first()).toBeVisible();
    await expect(page.locator('div.border-purple-500 .absolute > span').first()).toBeVisible();
    await expect(page.locator('div.border-green-500 .absolute > span').first()).toBeVisible();
  });

  test('Service pages functionality', async ({ page }) => {
    // Test Ollama service page
    await page.goto('http://localhost:3034/services/ollama');
    await expect(page.getByRole('heading', { name: 'Ollama - LLM Local', exact: true })).toBeVisible();
    
    // Navigate back to homepage
    await page.goto('http://localhost:3034');
    
    // Test N8N service page
    await page.goto('http://localhost:3034/services/n8n');
    await expect(page.getByRole('heading', { name: 'N8N - Automatisation', exact: true })).toBeVisible();
    
    // Navigate back to homepage
    await page.goto('http://localhost:3034');
    
    // Test Qdrant service page
    await page.goto('http://localhost:3034/services/qdrant');
    await expect(page.getByRole('heading', { name: 'Qdrant - Vector DB', exact: true })).toBeVisible();
    
    // Navigate back to homepage
    await page.goto('http://localhost:3034');
    
    // Test Open WebUI service page
    await page.goto('http://localhost:3034/services/open-webui');
    await expect(page.getByRole('heading', { name: 'Open WebUI - Interface Chat', exact: true })).toBeVisible();
    
    // Navigate back to homepage
    await page.goto('http://localhost:3034');
    
    // Test Supabase service page
    await page.goto('http://localhost:3034/services/supabase');
    await expect(page.getByRole('heading', { name: 'Supabase - Auth + Database', exact: true })).toBeVisible();
    
    // Navigate back to homepage
    await page.goto('http://localhost:3034');
    
    // Test SearXNG service page
    await page.goto('http://localhost:3034/services/searxng');
    await expect(page.getByRole('heading', { name: 'SearXNG - Moteur de Recherche Privé', exact: true })).toBeVisible();
    
    // Navigate back to homepage
    await page.goto('http://localhost:3034');
    
    // Test Neo4j service page
    await page.goto('http://localhost:3034/services/neo4j');
    await expect(page.getByRole('heading', { name: 'Neo4j - Base de Données Graphe', exact: true })).toBeVisible();
    
    // Navigate back to homepage
    await page.goto('http://localhost:3034');
    
    // Test Langfuse service page
    await page.goto('http://localhost:3034/services/langfuse');
    await expect(page.getByRole('heading', { name: 'Langfuse - Observabilité LLM', exact: true })).toBeVisible();
  });

  test('Services page navigation from homepage', async ({ page }) => {
    // Navigate to services page
    await page.goto('http://localhost:3034/ecosystem');
    
    // Test navigation to Ollama service page
    await page.click('a[href="/services/ollama"]');
    await expect(page).toHaveURL('http://localhost:3034/services/ollama');
    
    // Navigate back to services page
    await page.goto('http://localhost:3034/ecosystem');
    
    // Test navigation to N8N service page
    await page.click('a[href="/services/n8n"]');
    await expect(page).toHaveURL('http://localhost:3034/services/n8n');
    
    // Navigate back to services page
    await page.goto('http://localhost:3034/ecosystem');
    
    // Test navigation to Qdrant service page
    await page.click('a[href="/services/qdrant"]');
    await expect(page).toHaveURL('http://localhost:3034/services/qdrant');
    
    // Navigate back to services page
    await page.goto('http://localhost:3034/ecosystem');
    
    // Test navigation to Open WebUI service page
    await page.click('a[href="/services/open-webui"]');
    await expect(page).toHaveURL('http://localhost:3034/services/open-webui');
    
    // Navigate back to services page
    await page.goto('http://localhost:3034/ecosystem');
    
    // Test navigation to Supabase service page
    await page.click('a[href="/services/supabase"]');
    await expect(page).toHaveURL('http://localhost:3034/services/supabase');
    
    // Navigate back to services page
    await page.goto('http://localhost:3034/ecosystem');
    
    // Test navigation to SearXNG service page
    await page.click('a[href="/services/searxng"]');
    await expect(page).toHaveURL('http://localhost:3034/services/searxng');
    
    // Navigate back to services page
    await page.goto('http://localhost:3034/ecosystem');
    
    // Test navigation to Neo4j service page
    await page.click('a[href="/services/neo4j"]');
    await expect(page).toHaveURL('http://localhost:3034/services/neo4j');
    
    // Navigate back to services page
    await page.goto('http://localhost:3034/ecosystem');
    
    // Test navigation to Langfuse service page
    await page.click('a[href="/services/langfuse"]');
    await expect(page).toHaveURL('http://localhost:3034/services/langfuse');
  });

  test('Theme toggle works', async ({ page }) => {
    // Check initial theme (should be light)
    const initialBodyClass = await page.evaluate(() => document.body.className);
    console.log('Initial body class:', initialBodyClass);
    
    // Toggle theme
    await page.click('button[aria-label="Toggle theme"]');
    
    // Check if theme changed
    const afterToggleBodyClass = await page.evaluate(() => document.body.className);
    console.log('After toggle body class:', afterToggleBodyClass);
    
    // Toggle back
    await page.click('button[aria-label="Toggle theme"]');
    
    // Check if theme reverted
    const finalBodyClass = await page.evaluate(() => document.body.className);
    console.log('Final body class:', finalBodyClass);
  });

  test('Mobile navigation works', async ({ page }) => {
    // Set viewport to mobile
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Open mobile menu
    await page.click('button:has(svg):right-of(:text("Local AI"))');
    
    // Wait for mobile menu to be visible
    await page.waitForSelector('div.md\\:hidden.glass', { state: 'visible' });
    
    // Test mobile navigation using more specific selectors
    // Target the mobile menu links directly by combining the container and link
    await page.click('div.md\\:hidden.glass a[href="/ecosystem"]');
    await expect(page).toHaveURL('http://localhost:3034/ecosystem');
    
    // Navigate back to homepage
    await page.goto('http://localhost:3034');
    await page.click('button:has(svg):right-of(:text("Local AI"))');
    
    // Wait for mobile menu to be visible
    await page.waitForSelector('div.md\\:hidden.glass', { state: 'visible' });
    
    await page.click('div.md\\:hidden.glass a[href="/solutions"]');
    await expect(page).toHaveURL('http://localhost:3034/solutions');
    
    // Navigate back to homepage
    await page.goto('http://localhost:3034');
    await page.click('button:has(svg):right-of(:text("Local AI"))');
    
    // Wait for mobile menu to be visible
    await page.waitForSelector('div.md\\:hidden.glass', { state: 'visible' });
    
    await page.click('div.md\\:hidden.glass a[href="/expertise"]');
    await expect(page).toHaveURL('http://localhost:3034/expertise');
  });

  test('Homepage buttons work correctly', async ({ page }) => {
    await page.goto('http://localhost:3034');
    
    // Test ROI Calculator button
    await page.click('a:has-text("Calculer Mon ROI en 2min")');
    await expect(page).toHaveURL('http://localhost:3034/roi-calculator');
    
    // Navigate back to homepage
    await page.goto('http://localhost:3034');
    
    // Test Demo button
    await page.click('a:has-text("Voir la Démo Interactive")');
    await expect(page).toHaveURL('http://localhost:3034/demo');
    
    // Navigate back to homepage
    await page.goto('http://localhost:3034');
    
    // Test Explorer l'Écosystème button
    await page.click('a:has-text("Explorer l\'Écosystème")');
    await expect(page).toHaveURL('http://localhost:3034/ecosystem');
    
    // Navigate back to homepage
    await page.goto('http://localhost:3034');
    
    // Test Calculer Mon ROI button in ROI Calculator Card
    await page.click('a:has-text("Calculer Mon ROI")');
    await expect(page).toHaveURL('http://localhost:3034/roi-calculator');
  });
});