import {test, expect} from '@playwright/test';

//Trace is one of the powerful feature of playwright, which help us to debug the failures in better way
//Trace capture entire screenplay of test execution alng with dom snapshots
//Using trace viewer can check test actions at given point, we can see dom snapshot, we can pick locators
//we can see localStorage, network getCallSites, console logs
//Set trace as true -     trace: 'on',
//Trace will be generated in test results
//How to open trace file - npx playwright show-trace filePath

//Trace can be initialized in test using context like
  // await page.context().tracing.start({screenshots:true, snapshots:true});
  //  await page.context().tracing.stop({
  //  path:'fileName.zip'
  //})

//How to execute tests in parallel
//To execute perticular tests in parallel we can use test describe block and configure mode as parallel  
//We can execute all tests in parallel by using playwright config, where we can set fully parallel to true
//and we can control parallel executing using workers
test.describe('Smoke Suite', async()=>{
  test.describe.configure({
    mode:'parallel'
  });
  test('ReportTests', async({page})=> {
    await page.goto('https://deepakrao64.github.io/SB/');
    await page.getByRole('button', { name: 'Project' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('button', { name: 'Open portal' }).click();
    const page1 = await page1Promise;
    await page1.getByTestId('login-username').fill('deepak');
    await page1.getByTestId('login-password').fill('Password@123');
    await page1.getByTestId('login-button').click();
    await expect(page1.getByRole('heading', { name: 'Welcome Back, deepak' })).toBeVisible();
    await expect(page1.getByTestId('portfolio-value-card').getByText('Portfolio Value')).toBeVisible();
  });

  test('ReportTests1', async({page})=> {
    await page.goto('https://deepakrao64.github.io/SB/');
    await page.getByRole('button', { name: 'Project' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('button', { name: 'Open portal' }).click();
    const page1 = await page1Promise;
    await page1.getByTestId('login-username').fill('deepak');
    await page1.getByTestId('login-password').fill('Password@123');
    await page1.getByTestId('login-button').click();
    await expect(page1.getByRole('heading', { name: 'Welcome Back, deepak' })).toBeVisible();
    await expect(page1.getByTestId('portfolio-value-card').getByText('Portfolio Value')).toBeVisible();
  });

  test('ReportTests2', async({page})=> {
    await page.goto('https://deepakrao64.github.io/SB/');
    await page.getByRole('button', { name: 'Project' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('button', { name: 'Open portal' }).click();
    const page1 = await page1Promise;
    await page1.getByTestId('login-username').fill('deepak');
    await page1.getByTestId('login-password').fill('Password@123');
    await page1.getByTestId('login-button').click();
    await expect(page1.getByRole('heading', { name: 'Welcome Back, deepak' })).toBeVisible();
    await expect(page1.getByTestId('portfolio-value-card').getByText('Portfolio Value')).toBeVisible();
  });

});