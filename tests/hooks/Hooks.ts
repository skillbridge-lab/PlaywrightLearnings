import {test} from '@playwright/test';

export function allHooks() {
    let url:string;

    test.beforeAll(async() => {
            url = 'https://deepakrao64.github.io/SB/MutualFundClient/FinVersePortal/index.html';
    });

    test.beforeEach(async({page}) => {
        await page.goto(url);
        await page.getByTestId('login-username').fill('deepak');
        await page.getByTestId('login-password').fill('Password@123');
        await page.getByTestId('login-button').click();
    });
}