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
    // await page.getByRole('checkbox', {name:'I accept the terms and conditions'}).check();
    // let countOfElement = await page.getByRole('checkbox').count();

    // await page.goto('https://deepakrao64.github.io/SB/');

    // await page.getByText('Open practice lab').click();
    // await page.getByText('Double-click target').dblclick();

    // await page.goto('https://qaplayground.com/practice/drag-drop');
    // //sourceElement.dragto(locator of target element)
    // await page.locator("//div[text()='📦 Item']").dragTo(page.locator('//div[@data-testid="dd-drop-zone"]'));

    await page.goto('https://qaplayground.com/practice/dropdowns');
    await page.getByLabel('Select Fruit').selectOption('Apple');

    await page.getByLabel('Select Superheroes').selectOption(['Ant-Man', 'Aquaman']);




}) 