import {test} from '@playwright/test';

test('Iframe Test', async({page}) => {
    // await page.goto('https://deepakrao64.github.io/SB/');
    // await page.getByText('Open practice lab').click();
    // await page.getByText('Frame practice').scrollIntoViewIfNeeded();
    // let iframeElement = await page.frameLocator('//iframe[@data-testid="practice-frame"]');
    // await iframeElement.getByTestId('login-username').nth(1).fill('Deepak@yahoo.com');
    await page.goto('https://qaplayground.com/practice/iframes');
    let iframeElement = await page.frameLocator('[title="Basic Iframe"]');
    await iframeElement.getByPlaceholder('Enter your name').fill('HAHds');
})