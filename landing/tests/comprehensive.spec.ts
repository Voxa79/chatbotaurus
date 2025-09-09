import { test, expect } from '@playwright/test';

test.describe('Site Responsiveness and Navigation Tests', () => {
  // Test desktop viewport
  test.describe('Desktop Viewport', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
      await page.goto('http://localhost:3034');
    });

    test('Header navigation works correctly', async ({ page }) => {
      // Test main navigation links
      await page.click('header a[href="/ecosystem"]');
      await expect(page).toHaveURL('http://localhost:3034/ecosystem');
      await page.goto('http://localhost:3034');

      await page.click('header a[href="/solutions"]');
      await expect(page).toHaveURL('http://localhost:3034/solutions');
      await page.goto('http://localhost:3034');

      await page.click('header a[href="/expertise"]');
      await expect(page).toHaveURL('http://localhost:3034/expertise');
      await page.goto('http://localhost:3034');

      await page.click('header a[href="/roi-calculator"]');
      await expect(page).toHaveURL('http://localhost:3034/roi-calculator');
      await page.goto('http://localhost:3034');

      await page.click('header a[href="/resources"]');
      await expect(page).toHaveURL('http://localhost:3034/resources');
      await page.goto('http://localhost:3034');

      await page.click('header a[href="/contact"]');
      await expect(page).toHaveURL('http://localhost:3034/contact');
    });

    test('Dropdown navigation works', async ({ page }) => {
      // Test Écosystème dropdown
      await page.hover('header a[href="/ecosystem"]');
      await page.click('a[href="/ecosystem/services"]');
      await expect(page).toHaveURL('http://localhost:3034/ecosystem/services');
      await page.goto('http://localhost:3034');

      // Test Solutions dropdown
      await page.hover('header a[href="/solutions"]');
      await page.click('a[href="/solutions/finance"]');
      await expect(page).toHaveURL('http://localhost:3034/solutions/finance');
      await page.goto('http://localhost:3034');

      // Test Ressources dropdown
      await page.hover('header a[href="/resources"]');
      await page.click('a[href="/resources/docs"]');
      await expect(page).toHaveURL('http://localhost:3034/resources/docs');
    });

    test('Footer navigation works correctly', async ({ page }) => {
      // Scroll to footer
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

      // Test footer navigation links
      await page.click('footer a[href="/ecosystem"]');
      await expect(page).toHaveURL('http://localhost:3034/ecosystem');
      await page.goto('http://localhost:3034');
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

      await page.click('footer a[href="/solutions"]');
      await expect(page).toHaveURL('http://localhost:3034/solutions');
      await page.goto('http://localhost:3034');
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

      await page.click('footer a[href="/expertise"]');
      await expect(page).toHaveURL('http://localhost:3034/expertise');
      await page.goto('http://localhost:3034');
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

      await page.click('footer a[href="/resources"]');
      await expect(page).toHaveURL('http://localhost:3034/resources');
      await page.goto('http://localhost:3034');
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

      // Test service links in footer
      await page.click('footer a[href="/services/ollama"]');
      await expect(page).toHaveURL('http://localhost:3034/services/ollama');
      await page.goto('http://localhost:3034');
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

      await page.click('footer a[href="/services/n8n"]');
      await expect(page).toHaveURL('http://localhost:3034/services/n8n');
      await page.goto('http://localhost:3034');
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

      await page.click('footer a[href="/services/qdrant"]');
      await expect(page).toHaveURL('http://localhost:3034/services/qdrant');
      await page.goto('http://localhost:3034');
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

      await page.click('footer a[href="/services/open-webui"]');
      await expect(page).toHaveURL('http://localhost:3034/services/open-webui');
      await page.goto('http://localhost:3034');
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

      await page.click('footer a[href="/services/supabase"]');
      await expect(page).toHaveURL('http://localhost:3034/services/supabase');
      await page.goto('http://localhost:3034');
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

      await page.click('footer a[href="/services/searxng"]');
      await expect(page).toHaveURL('http://localhost:3034/services/searxng');
      await page.goto('http://localhost:3034');
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

      await page.click('footer a[href="/services/neo4j"]');
      await expect(page).toHaveURL('http://localhost:3034/services/neo4j');
      await page.goto('http://localhost:3034');
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

      await page.click('footer a[href="/services/langfuse"]');
      await expect(page).toHaveURL('http://localhost:3034/services/langfuse');
    });

    test('Homepage buttons and links work', async ({ page }) => {
      // Test primary buttons on homepage
      await page.click('a[href="/roi-calculator"]');
      await expect(page).toHaveURL('http://localhost:3034/roi-calculator');
      await page.goto('http://localhost:3034');

      await page.click('a[href="/demo"]');
      await expect(page).toHaveURL('http://localhost:3034/demo');
      await page.goto('http://localhost:3034');

      await page.click('a[href="/contact"]');
      await expect(page).toHaveURL('http://localhost:3034/contact');
      await page.goto('http://localhost:3034');

      // Test service card links
      await page.click('a[href="/services/ollama"]');
      await expect(page).toHaveURL('http://localhost:3034/services/ollama');
      await page.goto('http://localhost:3034');

      await page.click('a[href="/services/open-webui"]');
      await expect(page).toHaveURL('http://localhost:3034/services/open-webui');
      await page.goto('http://localhost:3034');

      await page.click('a[href="/services/n8n"]');
      await expect(page).toHaveURL('http://localhost:3034/services/n8n');
      await page.goto('http://localhost:3034');

      await page.click('a[href="/services/searxng"]');
      await expect(page).toHaveURL('http://localhost:3034/services/searxng');
      await page.goto('http://localhost:3034');

      // Test infrastructure service links
      await page.click('a[href="/services/supabase"]');
      await expect(page).toHaveURL('http://localhost:3034/services/supabase');
      await page.goto('http://localhost:3034');

      await page.click('a[href="/services/qdrant"]');
      await expect(page).toHaveURL('http://localhost:3034/services/qdrant');
      await page.goto('http://localhost:3034');

      await page.click('a[href="/services/neo4j"]');
      await expect(page).toHaveURL('http://localhost:3034/services/neo4j');
      await page.goto('http://localhost:3034');

      await page.click('a[href="/services/langfuse"]');
      await expect(page).toHaveURL('http://localhost:3034/services/langfuse');
    });

    test('Resources page navigation works', async ({ page }) => {
      await page.goto('http://localhost:3034/resources');

      // Test navigation to sub-pages
      await page.click('a[href="/resources/docs"]');
      await expect(page).toHaveURL('http://localhost:3034/resources/docs');
      await page.goto('http://localhost:3034/resources');

      await page.click('a[href="/resources/case-studies"]');
      await expect(page).toHaveURL('http://localhost:3034/resources/case-studies');
      await page.goto('http://localhost:3034/resources');

      await page.click('a[href="/resources/webinars"]');
      await expect(page).toHaveURL('http://localhost:3034/resources/webinars');
    });

    test('Expertise page displays correctly', async ({ page }) => {
      await page.goto('http://localhost:3034/expertise');

      // Test that all package types are visible
      await expect(page.locator('div.border-blue-500 .absolute > span').first()).toBeVisible();
      await expect(page.locator('div.border-purple-500 .absolute > span').first()).toBeVisible();
      await expect(page.locator('div.border-green-500 .absolute > span').first()).toBeVisible();
    });

    test('All service pages load correctly', async ({ page }) => {
      // Test Ollama service page
      await page.goto('http://localhost:3034/services/ollama');
      await expect(page.getByRole('heading', { name: 'Ollama - LLM Local', exact: true })).toBeVisible();

      // Test N8N service page
      await page.goto('http://localhost:3034/services/n8n');
      await expect(page.getByRole('heading', { name: 'N8N - Automatisation', exact: true })).toBeVisible();

      // Test Qdrant service page
      await page.goto('http://localhost:3034/services/qdrant');
      await expect(page.getByRole('heading', { name: 'Qdrant - Vector DB', exact: true })).toBeVisible();

      // Test Open WebUI service page
      await page.goto('http://localhost:3034/services/open-webui');
      await expect(page.getByRole('heading', { name: 'Open WebUI - Interface Chat', exact: true })).toBeVisible();

      // Test Supabase service page
      await page.goto('http://localhost:3034/services/supabase');
      await expect(page.getByRole('heading', { name: 'Supabase - Auth + Database', exact: true })).toBeVisible();

      // Test SearXNG service page
      await page.goto('http://localhost:3034/services/searxng');
      await expect(page.getByRole('heading', { name: 'SearXNG - Moteur de Recherche Privé', exact: true })).toBeVisible();

      // Test Neo4j service page
      await page.goto('http://localhost:3034/services/neo4j');
      await expect(page.getByRole('heading', { name: 'Neo4j - Base de Données Graphe', exact: true })).toBeVisible();

      // Test Langfuse service page
      await page.goto('http://localhost:3034/services/langfuse');
      await expect(page.getByRole('heading', { name: 'Langfuse - Observabilité LLM', exact: true })).toBeVisible();
    });
  });

  // Test tablet viewport
  test.describe('Tablet Viewport', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 });
      await page.goto('http://localhost:3034');
    });

    test('Tablet navigation works correctly', async ({ page }) => {
      // Test main navigation links
      await page.click('header a[href="/ecosystem"]');
      await expect(page).toHaveURL('http://localhost:3034/ecosystem');
      await page.goto('http://localhost:3034');

      await page.click('header a[href="/solutions"]');
      await expect(page).toHaveURL('http://localhost:3034/solutions');
      await page.goto('http://localhost:3034');

      await page.click('header a[href="/expertise"]');
      await expect(page).toHaveURL('http://localhost:3034/expertise');
      await page.goto('http://localhost:3034');

      await page.click('header a[href="/roi-calculator"]');
      await expect(page).toHaveURL('http://localhost:3034/roi-calculator');
      await page.goto('http://localhost:3034');

      await page.click('header a[href="/resources"]');
      await expect(page).toHaveURL('http://localhost:3034/resources');
      await page.goto('http://localhost:3034');

      await page.click('header a[href="/contact"]');
      await expect(page).toHaveURL('http://localhost:3034/contact');
    });

    test('Footer navigation works on tablet', async ({ page }) => {
      // Scroll to footer
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

      // Test footer navigation links
      await page.click('footer a[href="/ecosystem"]');
      await expect(page).toHaveURL('http://localhost:3034/ecosystem');
      await page.goto('http://localhost:3034');
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

      await page.click('footer a[href="/solutions"]');
      await expect(page).toHaveURL('http://localhost:3034/solutions');
      await page.goto('http://localhost:3034');
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

      await page.click('footer a[href="/expertise"]');
      await expect(page).toHaveURL('http://localhost:3034/expertise');
      await page.goto('http://localhost:3034');
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

      await page.click('footer a[href="/resources"]');
      await expect(page).toHaveURL('http://localhost:3034/resources');
    });
  });

  // Test mobile viewport
  test.describe('Mobile Viewport', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('http://localhost:3034');
    });

    test('Mobile menu opens and navigates correctly', async ({ page }) => {
      // Open mobile menu
      await page.click('button:has(svg):right-of(:text("Local AI"))');
      await page.waitForSelector('div.md\\:hidden.glass', { state: 'visible' });

      // Test mobile navigation
      await page.click('div.md\\:hidden.glass a[href="/ecosystem"]');
      await expect(page).toHaveURL('http://localhost:3034/ecosystem');
      await page.goto('http://localhost:3034');

      // Open mobile menu again
      await page.click('button:has(svg):right-of(:text("Local AI"))');
      await page.waitForSelector('div.md\\:hidden.glass', { state: 'visible' });

      await page.click('div.md\\:hidden.glass a[href="/solutions"]');
      await expect(page).toHaveURL('http://localhost:3034/solutions');
      await page.goto('http://localhost:3034');

      // Open mobile menu again
      await page.click('button:has(svg):right-of(:text("Local AI"))');
      await page.waitForSelector('div.md\\:hidden.glass', { state: 'visible' });

      await page.click('div.md\\:hidden.glass a[href="/expertise"]');
      await expect(page).toHaveURL('http://localhost:3034/expertise');
      await page.goto('http://localhost:3034');

      // Open mobile menu again
      await page.click('button:has(svg):right-of(:text("Local AI"))');
      await page.waitForSelector('div.md\\:hidden.glass', { state: 'visible' });

      await page.click('div.md\\:hidden.glass a[href="/roi-calculator"]');
      await expect(page).toHaveURL('http://localhost:3034/roi-calculator');
      await page.goto('http://localhost:3034');

      // Open mobile menu again
      await page.click('button:has(svg):right-of(:text("Local AI"))');
      await page.waitForSelector('div.md\\:hidden.glass', { state: 'visible' });

      await page.click('div.md\\:hidden.glass a[href="/resources"]');
      await expect(page).toHaveURL('http://localhost:3034/resources');
      await page.goto('http://localhost:3034');

      // Open mobile menu again
      await page.click('button:has(svg):right-of(:text("Local AI"))');
      await page.waitForSelector('div.md\\:hidden.glass', { state: 'visible' });

      await page.click('div.md\\:hidden.glass a[href="/contact"]');
      await expect(page).toHaveURL('http://localhost:3034/contact');
    });

    test('Mobile footer navigation works', async ({ page }) => {
      // Scroll to footer
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

      // Test footer navigation links
      await page.click('footer a[href="/ecosystem"]');
      await expect(page).toHaveURL('http://localhost:3034/ecosystem');
      await page.goto('http://localhost:3034');
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

      await page.click('footer a[href="/solutions"]');
      await expect(page).toHaveURL('http://localhost:3034/solutions');
      await page.goto('http://localhost:3034');
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

      await page.click('footer a[href="/expertise"]');
      await expect(page).toHaveURL('http://localhost:3034/expertise');
      await page.goto('http://localhost:3034');
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

      await page.click('footer a[href="/resources"]');
      await expect(page).toHaveURL('http://localhost:3034/resources');
    });
  });
});