// Import Chromium so authentication can be completed once before the test suite starts.
import { chromium } from '@playwright/test';

// Keep the login page address in one place.
const portalUrl =
  'https://deepakrao64.github.io/SB/MutualFundClient/FinVersePortal/index.html';

// Define the one-time suite setup function used by playwright.config.ts.
export default async function globalSetup() {
  // Launch a browser solely to establish the Investor session.
  const browser = await chromium.launch();
  // Create an isolated context for the authentication flow.
  const context = await browser.newContext();
  // Open a page within that context.
  const page = await context.newPage();

  // Sign in once using the Investor demo account.
  await page.goto(portalUrl);
  await page.getByTestId('login-username').fill('deepak');
  await page.getByTestId('login-password').fill('Password@123');
  await page.getByTestId('login-role').selectOption('Investor');
  await page.getByTestId('login-button').click();
  await page.waitForURL(/dashboard\.html$/);

  // Persist local storage and cookies for all authenticated tests to reuse.
  await context.storageState({ path: 'playwright/.auth/investor.json' });
  // Release the one-time authentication browser.
  await browser.close();
}
