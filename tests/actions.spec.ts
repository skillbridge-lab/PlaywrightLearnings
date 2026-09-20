import {test} from '@playwright/test';

test('Actions in playwright', async({page}) => {

    // await page.goto('https://qaplayground.com/practice');
    // await page.getByText('Input Fields').click();
    // await page.getByPlaceholder('Enter a movie name…').fill('Avengers');
    // await page.getByPlaceholder('Enter a movie name…').clear();
    // await page.getByPlaceholder('Enter a movie name…').fill('Pirates of carrebian');
    // await page.getByRole('button', {name:'Submit'}).click();

    // let arr = ['ABC', 'BCD', 'XYZ'];
    // console.log(arr[0]);
    // for(let el of arr) {
    //     console.log(el);
    // }

    // let actualText = await page.getByText('Input Fields').innerText();

    // let expectedMessage = 'Input Fields';
    // if(actualText===expectedMessage) {
    //     console.log('Test Pass')
    // } else {
    //     console.log('Test Fail')
    // }

    // await page.goto('https://qaplayground.com/practice/radio-checkbox');

    // let isBeforeChecked = await page.getByRole('checkbox', {name:'I accept the terms and conditions'}).isChecked();

    // await page.getByRole('checkbox', {name:'I accept the terms and conditions'}).check();

    // let isAFterChecked = await page.getByRole('checkbox', {name:'I accept the terms and conditions'}).isChecked();
    // let isDisabled = await page.getByRole('checkbox', {name:'I accept the terms and conditions'}).isDisabled();

    // let countOfElement = await page.getByRole('checkbox').count();

    await page.goto('https://deepakrao64.github.io/SB/');
    // await page.waitForTimeout(5000);
    // await page.mouse.down();
    //     await page.mouse.move(400, 200);
    // await page.waitForTimeout(5000);
    // await page.mouse.wheel(0, 600); // Scroll Down
    // await page.waitForTimeout(5000);
    // await page.mouse.wheel(0, -600); //Scroll Up
    // await page.waitForTimeout(5000);
    // await page.mouse.wheel(600, 0); // Right
    // await page.waitForTimeout(5000);
    // await page.mouse.wheel(-600, 0);// Left Side

    // await page.waitForTimeout(5000);
    // await page.getByText('Open practice lab').click({button:'right'});
    await page.getByText('Open practice lab').click();
    let formElement = await page.locator('//form[@id="test-form"]');
    await formElement.getByTestId('username-input').fill('ABC@Y.com')


    // await page.getByText('Double-click target').dblclick();
    // //Mouse hover
    // let isToolTipTextDisplayed = await page.getByText('This is a tooltip example.').isVisible();
    // console.log(isToolTipTextDisplayed);
    // await page.getByRole('button', {name:'Hover or focus me'}).hover();
    // let isToolTipTextDisplayed2 = await page.getByText('This is a tooltip example.').isVisible();
    // console.log(isToolTipTextDisplayed2);
    // let isDisabled2 = await page.getByRole('button', {name:'Disabled'}).isDisabled();
    // let isEnabled = await page.getByRole('button', {name:'Disabled'}).isEnabled();
    // let isEditable = await page.getByText('Username').isEditable();
    // let isHidden = await page.getByText('Username').isHidden();
    // let isVisible = await page.getByText('Username').isVisible();
    // console.log(isEditable);
    // await page.locator('input').nth(1).click();
    // await page.locator('input').first().click();
    // await page.locator('input').last().click();
    //To Peform Keyboard Actions
    // await page.getByPlaceholder('Press any key').press('Enter');

    // //To Scroll
    // await page.getByText('Username').scrollIntoViewIfNeeded();

    // //To select element text
    // await page.getByText('Click to edit this text.').selectText();

    //Select input files - single, multiple
    //Path of file
    //Absolute path
    //Relative Path  
    // Project Path + playwright.txt
    // tests\actions.spec.ts
    // await page.getByLabel('File upload').setInputFiles("Playwright.txt");

    // await page.goto('https://qaplayground.com/practice/file-upload');
    // await page.getByTestId('fu-multi-input').setInputFiles(["Playwright.txt", "package.json"]);


    // // await page.goto('https://qaplayground.com/practice/drag-drop');
    // //sourceElement.dragto(locator of target element)
    // await page.locator("//div[text()='📦 Item']").dragTo(page.locator('//div[@data-testid="dd-drop-zone"]'));

    // await page.goto('https://qaplayground.com/practice/dropdowns');
    // await page.getByLabel('Select Fruit').selectOption('Apple');

    // await page.getByLabel('Select Superheroes').selectOption(['Ant-Man', 'Aquaman']);




}) 