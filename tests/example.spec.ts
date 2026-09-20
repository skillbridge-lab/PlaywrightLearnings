import { test, expect, chromium } from '@playwright/test';
/***
@Playwright - Automation tool for browser automation, developing and testing web applications. It is an open-source Node.js library that allows you to automate browsers like Chromium, Firefox, and WebKit. Playwright provides a high-level API to control browsers, enabling developers to write scripts for tasks such as web scraping, automated testing, and browser automation.

Playwright is a Node.js library that allows you to automate browsers. It provides a high-level API to control browsers like Chromium, Firefox, and WebKit. The architecture of Playwright can be broken down into several key components:

@Question Explain playwright architecture.
@Answer - 
Playwright architecture starts with the Playwright library, which provides APIs to automate browsers. 
Using a BrowserType like Chromium, Firefox, or WebKit, we launch a Browser instance. 
Inside the Browser, we create a Browser Context, which is an isolated session similar to an incognito window and maintains its own cookies and storage. 
Inside each Browser Context, we create one or more Page objects that represent browser tabs or windows. 
We interact with elements through Locator objects, and locators provide methods like click, fill, check, and hover with built-in auto-waiting 

> @Playwright Setup
  1. To install Playwright, you can use the following command in your terminal:
     npm init playwright@latest
  2. Install VS code extension - Playwright Test for VS Code
/* 

> @Test Structure
test('method name', async ({page}) => {

  //test code
});

*/

test.describe('Test Suite', ()=>{
  test.describe.configure({mode: 'parallel'});

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');   //It open the browser and enter url
  await page.waitForTimeout(10000); // Wait for 10 seconds
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);   //Validate whether page opened - title - PW
});

test('has title5', async ({ page }) => {
  await page.goto('https://playwright.dev/');   //It open the browser and enter url
  await page.waitForTimeout(10000); // Wait for 10 seconds
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);   //Validate whether page opened - title - PW
});
test('has title4', async ({ page }) => {
  await page.goto('https://playwright.dev/');   //It open the browser and enter url
  await page.waitForTimeout(10000); // Wait for 10 seconds
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);   //Validate whether page opened - title - PW
});
test('has title3', async ({ page }) => {
  await page.goto('https://playwright.dev/');   //It open the browser and enter url
  await page.waitForTimeout(10000); // Wait for 10 seconds
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);   //Validate whether page opened - title - PW
});
test('has title2', async ({ page }) => {
  await page.goto('https://playwright.dev/');   //It open the browser and enter url
  await page.waitForTimeout(10000); // Wait for 10 seconds
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);   //Validate whether page opened - title - PW
});
test('has title1', async ({ page }) => {
  await page.goto('https://playwright.dev/');   //It open the browser and enter url
  await page.waitForTimeout(10000); // Wait for 10 seconds
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);   //Validate whether page opened - title - PW
});

test('get started link', async ({ }) => {
  //What happens when we do below code - we are not using page object - so we need to create browser, context and page object explicitly
  //Browser launch with provided settings 
  // backend chrome process
  const browser = await chromium.launch({
    channel:"chrome",
    headless:false
  });

  //What happends when launching browser - it will create a default context and page object - so we can use that page object to perform actions

  // //Create isolated session
  //New profile/incognito session start - profile
  const context = await browser.newContext();

  // //Create Page - tb or window  - It will show UI
  const page = await context.newPage();
  // await page.waitForTimeout(10000); // Wait for 10 seconds

  //Enter Url
  await page.goto('https://playwright.dev/');

  await page.goto('https://www.amazon.in/');

  //navigate back to previous page
  await page.goBack();

  //navigate forward to next page
  await page.goForward();

  //Refresh the page
  await page.reload();

  // Wait for 10 seconds - 10000 milliseconds
  // await page.waitForTimeout(10000); 
//   await page.click('text=Get started'); //Click on Get Started link
//   await page.fill('input[name="q"]', 'Playwright'); //Enter text in search box
//   await page.press('input[name="q"]', 'Enter'); //Press Enter key
//   const headingText = await page.innerText('h1'); //Get the text of h1 element
// console.log('Heading Text:', headingText); //Print the heading text in console

  // await page.close();
  // await context.close();
  // await browser.close();

  // Click the get started link.
  //Action
  //Locator - 
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  //Validation
  // await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
}
);
});
