import {expect} from '@playwright/test';
import { test } from './fixtures/auth.fixture';


//Step1 - create custome fixture by extending test object
//Step2 - Add common code in custome fixture
//Step3 - Import custome fixture in test file and use it in test cases
//Step4 - pass fixture name in test case and use it in test case

test.describe('Custom Fixture Test', () => {
    test('Fixture Test', async ({dashBoardPage}) => {
        await expect(dashBoardPage.getByRole('heading', { name: 'Asset Allocation' })).toBeVisible();
        await expect(dashBoardPage.getByText('Equity').nth(1)).toBeVisible();
        await expect(dashBoardPage.getByText('Debt')).toBeVisible();
        await expect(dashBoardPage.getByText('Gold')).toBeVisible();
    });

    test('Fixture Test2', async ({dashBoardPage}) => {
        await expect(dashBoardPage.getByRole('heading', { name: 'Alerts' })).toBeVisible();
        await expect(dashBoardPage.getByTestId('notification-panel').getByText('KYC verification pending')).toBeVisible();
        await expect(dashBoardPage.getByText('💸 SIP installment due')).toBeVisible();
        await expect(dashBoardPage.getByTestId('notification-panel').getByText('Portfolio review scheduled')).toBeVisible();
    });
});