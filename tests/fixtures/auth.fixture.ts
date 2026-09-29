import { test as base, type Page } from '@playwright/test';

export const test = base.extend<{}, { dashBoardPage: Page }>({
  dashBoardPage: [async ({ browser }, use) => {
    //Test Setup - Create a new context and page for the test
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://deepakrao64.github.io/SB/MutualFundClient/FinVersePortal/index.html');
    await page.getByTestId('login-username').fill('deepak');
    await page.getByTestId('login-password').fill('Password@123');
    await page.getByTestId('login-button').click();

    await use(page);

    //Test Teardown - Close the context after the test is done
    await context.close();
  }, { scope: 'worker' }],

  // Scope of fixture - worker - once per worker,  -> before all
  // test - once per test -> before each
});