/*
*************************************Locators*************************************
1. What is locators in playwright? - for fresher
-> In playwright Locators are the command used to find elements on a web page. 
-> They help playwright identify and interact with elements like buttons, links, input fields, 
and other HTML elements during automated testing.

2. What are the different types of locators in playwright? - for everyone   
-> In plywright, we have several types of locators to find elements on a web page.
1. getByRole - Locates elements based on their ARIA role, such as buttons, links, or headings.
2. getByLabel - Locates form elements based on their associated label text.
3. getByPlaceholder - Locates input fields based on their placeholder text.
4. getByText - Locates elements based on their visible text content.
5. getByTestId - Locates elements using a custom data-testid attribute, often used for testing purposes.
6. getByAltText - Locates images based on their alt text.
7. getByTitle - Locates elements based on their title attribute.
8. css - Locates elements using CSS selectors, allowing for flexible and complex queries.
9. xpath - Locates elements using XPath expressions, providing a way to navigate the HTML structure.

*/

import { test } from '@playwright/test';

test('locate all controls on the test page with getByRole', async ({ page }) => {
	
	await page.goto('https://deepakrao64.github.io/SB/');

	//Role - Button
	//Name - Open practice lab
	//await page..getByRole('RoleName', { name : 'nameOfElement'});
	await page.getByRole('button', {name : 'Open practice lab'}).click();

	// Role - heading
	// Name - Practice lab
	let isHeaderDisplayed = await page.getByRole('heading', {name : 'Practice lab'}).isVisible();
	console.log(isHeaderDisplayed);

	//Role - textbox
	//Name - username
	await page.getByRole('textbox', {name:'username'}).fill('Skill Bridge');

	//Lable - Password
	await page.getByLabel('Password').fill('SB@2026');

	//placeholder attribute value - name@example.com
	await page.getByPlaceholder('name@example.com').fill('sbmarathi@gmail.com');

	//Role - combobox
	//Name - Select country
	await page.getByRole('combobox', {name:'Gender'}).selectOption('Male');

	//Role - radio
	//Name - Option 1
	await page.getByRole('radio', {name: 'Option 1'}).check();

	// Role - checkbox
	//Name -  Subscribe to newsletter
	await page.getByRole('checkbox', {name: 'Subscribe to newsletter'}).check();

	//Text - Say hello
	// await page.getByText('Say hello').click();

	//testid name - data-testid
	//data-testid - address-input
	await page.getByTestId('address-input').fill('B123 Hinjewadi, Maharashtra India');

	//alt = Sample testing lab illustration
    let isImageDisplayed = await page.getByAltText('Sample testing lab illustration').isVisible();
	console.log(isImageDisplayed);

	await page.getByTitle('Enter your occupation').fill('Farming');
	

	//CSS Selector
	/*
	Ways of using CSS selector 
	/1. Using tagName
	2. Using ID attribute
	-> #IDAttributeValue
	3. Class Name
	-> .ClassNameValue
	4. Multiple class
	-> tab-content active
	-> .tab-content.active

	5. Using attribute and attribute value
	'[data-testid="number-input"]'
	*/
	// await page.locator('#openModalBtn').click();
	// await page.locator('.tab-button').nth(2).click();
	// let isTabOpen = await page.locator('.tab-content.active').isVisible();
	// console.log(isTabOpen);
	await page.locator('[data-testid="number-input"]').fill("5");
	

});