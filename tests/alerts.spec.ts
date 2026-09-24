import {test, chromium, expect} from '@playwright/test';


test('Handle Alerts', async() => {
    const browser = await chromium.launch({
        channel:"chrome",
        headless:false
      });

    let context = await browser.newContext();  
    let page = await context.newPage()
    
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    //element handle - we can use it to locate and store element
    //In case of element handle if dom gets refreshed the element handle still point to the previous reference
    // We might get errors related to stale element
    // But in case of locator - locator is just a logic to locate element. whenever we need that time only it locates the element
    page.on('dialog', async dialog => {
        let message = await dialog.message();
        expect(message).toBe('I am a JS prompt');
        await dialog.accept('Skill Bridge');

    })
    await page.getByRole('button', { name: 'Click for JS Prompt' }).click();
    await page.pause();
    



});