// Import the base test, Browser fixture type, and Page type.
import { test as base, Browser, Page } from '@playwright/test';

// Store the dashboard address to open after restoring the saved session.
const dashboardUrl =
  'https://deepakrao64.github.io/SB/MutualFundClient/FinVersePortal/dashboard.html';

// Describe the custom fixtures that this file adds to Playwright tests.
type AuthFixtures = {
  // Provide a page that has already been authenticated as an Investor.
  authenticatedPage: Page;
};

// Extend Playwright's base test with the custom fixtures declared above.
export const test = base.extend<AuthFixtures>({
  // Create a new isolated, already-authenticated page for each requesting test.
  authenticatedPage: async ({ browser }: { browser: Browser }, use) => {
    // Restore the session created once by global setup.
    const context = await browser.newContext({ storageState: 'playwright/.auth/investor.json' });
    // Open a clean page using the restored authentication state.
    const page = await context.newPage();
    // Navigate directly to the protected dashboard; no login actions are repeated.
    await page.goto(dashboardUrl);
    // Hand the authenticated page to the test that requested this fixture.
    await use(page);
    // Dispose of the test's isolated context after it completes.
    await context.close();
  },
});

// Re-export Playwright's assertion library so tests can import it from this fixture module.
export { expect } from '@playwright/test';
