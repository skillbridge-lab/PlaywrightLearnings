import {test, expect} from '@playwright/test';
import {allHooks} from '../tests/hooks/Hooks';

//test.describe - In playwright we can use test.describe block to create a group of tests
// Execute, common test setup, test teardown, configuration set
// Test Setup and Test Teardown

//Hooks -> Hooks are the functions used to perform test setups and test teardowns in playwright
// Types 
//1. Before All - If we wanted to run something before execution of any test
//2. After All
//3. Before Each
//4. After each

test.describe('Test Group', () => {
    allHooks();
    test('Test1', async({page}) => {
        await expect(page.getByTestId('profile-menu')).toBeVisible();
    });

    test('Test2', async({page}) => {
        await expect(page.getByTestId('user-role-badge')).toBeVisible();
    });

    test('Test3', async({page}) => {
        await expect(page.getByRole('heading', { name: 'Welcome Back, deepak' })).toBeVisible();
    });

    // test('Test4', async({page}) => {
    //     console.log('Inside Test 4');
    // });

    // test('Test5', async({page}) => {
    //     console.log('Inside Test 5');
    // });

    
    // test.afterAll(async() => {
    //     console.log('After Execution Of Any Test')
    // });
    
    // test.beforeAll(async() => {
    //     url = 'https://deepakrao64.github.io/SB/MutualFundClient/FinVersePortal/index.html';
    // });


    // test.beforeEach(async({page}) => {
    //     await page.goto(url);
    //     await page.getByTestId('login-username').fill('deepak');
    //     await page.getByTestId('login-password').fill('Password@123');
    //     await page.getByTestId('login-button').click();
    // });

    // test.afterEach(async() => {
    //     console.log('After Execution Each Test')
    // });
    
});