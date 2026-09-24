import test, { expect } from "@playwright/test";


test('Handling Tabs And Windows', async({context}) => {
    let page = await context.newPage();
    await page.goto('https://qaplayground.com/practice/tabs-windows');

    //1, take handle of popup - dont use await
    //2. action which triggers new page
    //3. wait for stored handle which will return newPage store that in new variable
    //4. use variable to perform actions on new page
    
    let newtab = page.waitForEvent('popup');
    await page.getByTestId('tw-tab-a').click();
    let newPage = await newtab;
    // let newPage = await context.waitForEvent('page');
    await newPage.getByTestId('hero-start-practicing').click();
});

test('Handling Windows', async({page}) => {
    await page.goto('https://qaplayground.com/practice/tabs-windows');

    //Way 1- Use context.waitForEvent('page')
    //way 2 - use page.waitforEvent('popup')
    //1, take handle of popup - dont use await
    //2. action which triggers new page
    //3. wait for stored handle which will return newPage store that in new variable
    //4. use variable to perform actions on new page
    
    let newtab = page.waitForEvent('popup');
    await page.getByTestId('tw-popup-btn').click();
    let newWindow = await newtab;
    await newWindow.getByTitle('Feedback').click();
});

test('pause ', async({page}) => {
    await page.goto('https://qaplayground.com');
    await page.pause();

});

