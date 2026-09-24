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


//Page - first tab cha control

//tab1 - second tab control
//tab3 - third tab control
test('handling Multiple Windows ', async({page}) => {
    await page.goto('https://qaplayground.com/practice/tabs-windows');
    let newtab1 = page.waitForEvent('popup');
    await page.getByTestId('tw-tab-a').click();
    let tab1 = await newtab1;
    console.log(await tab1.title());

    await page.bringToFront();

    let newtab2 = page.waitForEvent('popup');
    await page.getByTestId('tw-tab-b').click();
    let tab2 = await newtab2;
    console.log(await tab2.title());

    let newtab3 = page.waitForEvent('popup');
    await page.getByTestId('tw-tab-c').click();
    let tab3 = await newtab3;
    console.log(await tab3.title());
    
    await tab2.bringToFront();
});

test('handling Multiple Windows 2', async({context}) => {
    let page = await context.newPage();
    await page.goto('https://qaplayground.com/practice/tabs-windows');
    await page.getByTestId('tw-tab-a').click();
    await context.waitForEvent('page');
    await page.getByTestId('tw-tab-b').click();
    await context.waitForEvent('page');
    await page.getByTestId('tw-tab-c').click();
    await context.waitForEvent('page');
    let pages = await context.pages();   // pages = [page1, page2, page3, page4]
    for(let newPage of pages) {
        if(await newPage.title() === "How to Handle Links in Selenium and Playwright") {
            expect(await newPage?.getByTestId('page-header').isVisible()).toBeTruthy();
        }
    } 


   
});

