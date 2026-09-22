import { expect, test } from './fixtures/auth.fixture';

const portalUrl =
  'https://deepakrao64.github.io/SB/MutualFundClient/FinVersePortal/index.html';

test('investor can sign in with the demo credentials and see their name', async ({ authenticatedPage }) => {

  await expect(authenticatedPage).toHaveURL(/dashboard\.html$/);
  await expect(authenticatedPage.locator('#profile-name')).toHaveText('deepak');
});

test('Portfolio Value Displayed In UI', async ({ authenticatedPage }) => {
  await expect(authenticatedPage.getByTestId('portfolio-value-card')).toBeVisible();
});
