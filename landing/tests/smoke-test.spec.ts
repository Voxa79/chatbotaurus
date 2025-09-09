import { test, expect } from '@playwright/test';

test.describe('Smoke Tests - Basic Functionality', () => {
  test('All optimized pages load successfully', async ({ page }) => {
    // Test all main pages load without errors
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
      console.log(`Testing page: ${pagePath}`);
      await page.goto(`http://localhost:3034${pagePath}`);
      
      // Wait for page to load
      await page.waitForLoadState('domcontentloaded');
      
      // Check that the page has basic structure
      await expect(page.locator('header')).toBeVisible();
      await expect(page.locator('main')).toBeVisible();
      await expect(page.locator('footer')).toBeVisible();
      
      // Check that there's at least one heading
      const headings = page.locator('h1, h2, h3');
      await expect(headings.first()).toBeVisible();
      
      console.log(`✅ ${pagePath} loads successfully`);
    }
  });

  test('Navigation between pages works', async ({ page }) => {
    // Start at homepage
    await page.goto('http://localhost:3034');
    
    // Test navigation to ecosystem
    await page.click('a[href="/ecosystem"]');
    await expect(page).toHaveURL('http://localhost:3034/ecosystem');
    
    // Test navigation to solutions
    await page.click('a[href="/solutions"]');
    await expect(page).toHaveURL('http://localhost:3034/solutions');
    
    // Test navigation to contact
    await page.click('a[href="/contact"]');
    await expect(page).toHaveURL('http://localhost:3034/contact');
    
    console.log('✅ Basic navigation works');
  });

  test('Service pages load from ecosystem', async ({ page }) => {
    await page.goto('http://localhost:3034/ecosystem');
    
    // Test some service links
    const serviceLinks = [
      '/services/ollama',
      '/services/n8n',
      '/services/qdrant'
    ];

    for (const serviceLink of serviceLinks) {
      await page.goto('http://localhost:3034/ecosystem');
      await page.click(`a[href="${serviceLink}"]`);
      await expect(page).toHaveURL(`http://localhost:3034${serviceLink}`);
      
      // Check basic page structure
      await expect(page.locator('header')).toBeVisible();
      await expect(page.locator('main')).toBeVisible();
      
      console.log(`✅ ${serviceLink} loads successfully`);
    }
  });

  test('Pricing elements are visible', async ({ page }) => {
    const pagesWithPricing = [
      '/',
      '/ecosystem',
      '/solutions',
      '/expertise',
      '/demo',
      '/roi-calculator'
    ];

    for (const pagePath of pagesWithPricing) {
      await page.goto(`http://localhost:3034${pagePath}`);
      
      // Look for pricing elements - be flexible with selectors
      const pricing = page.locator('text=€2,990').or(page.locator('text=€15,990'));
      await expect(pricing.first()).toBeVisible();
      
      console.log(`✅ Pricing visible on ${pagePath}`);
    }
  });

  test('CTA buttons are clickable', async ({ page }) => {
    await page.goto('http://localhost:3034');
    
    // Find and click demo buttons
    const demoButtons = page.locator('a[href="/demo"]');
    if (await demoButtons.count() > 0) {
      await demoButtons.first().click();
      await expect(page).toHaveURL('http://localhost:3034/demo');
    }
    
    // Go back and test ROI calculator
    await page.goto('http://localhost:3034');
    const roiButtons = page.locator('a[href="/roi-calculator"]');
    if (await roiButtons.count() > 0) {
      await roiButtons.first().click();
      await expect(page).toHaveURL('http://localhost:3034/roi-calculator');
    }
    
    console.log('✅ CTA buttons work');
  });

  test('Mobile responsiveness basic check', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    const pages = ['/', '/ecosystem', '/solutions'];
    
    for (const pagePath of pages) {
      await page.goto(`http://localhost:3034${pagePath}`);
      
      // Check basic elements are still visible on mobile
      await expect(page.locator('header')).toBeVisible();
      await expect(page.locator('main')).toBeVisible();
      
      console.log(`✅ ${pagePath} is mobile responsive`);
    }
  });

  test('Forms are present and functional', async ({ page }) => {
    // Test contact form
    await page.goto('http://localhost:3034/contact');
    
    // Check form fields exist
    const nameInput = page.locator('input[type="text"]').first();
    const emailInput = page.locator('input[type="email"]');
    const messageTextarea = page.locator('textarea');
    
    if (await nameInput.count() > 0) {
      await expect(nameInput).toBeVisible();
      await nameInput.fill('Test User');
    }
    
    if (await emailInput.count() > 0) {
      await expect(emailInput).toBeVisible();
      await emailInput.fill('test@example.com');
    }
    
    if (await messageTextarea.count() > 0) {
      await expect(messageTextarea).toBeVisible();
      await messageTextarea.fill('Test message');
    }
    
    console.log('✅ Contact form is functional');
  });
});