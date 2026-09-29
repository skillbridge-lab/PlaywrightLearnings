import {test, expect} from '@playwright/test';


//Types of Fixtures in Playwright
//1. Built-in Fixtures - Playwright provides built-in fixtures like page, browser, context, request, etc. These fixtures are automatically available in your test functions without any additional setup.
//2. Custom Fixtures - You can create your own custom fixtures to encapsulate specific setup or teardown logic for your tests. Custom fixtures can be defined using the test.extend() method.

test.describe('Other Wait Methods', () => {
    test('Test1', async ({ page }) => {
        await page.goto('https://qaplayground.com/practice/dynamic-waits');
        await page.getByRole('button', {name:'▶ Arm Button'}).click();
        await page.getByRole('button', {name:'▶ Arm Button'}).waitFor({state:'hidden'});
        await page.getByRole('button', {name:'Submit'}).click({timeout: 10000});
        await page.waitForLoadState('networkidle');
        await page.waitForURL('**/bpc-bau-new-inline-at-store?pageUID=1790647705808');
        await page.waitForSelector('text=Thank you for your submission!', {timeout: 10000, state:'visible'});
    });
});