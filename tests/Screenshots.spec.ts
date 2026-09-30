import {test, expect} from '@playwright/test';
import path from 'node:path';

test('DownLoad Test', async({page}) => {

    //Screenshot of element
    //Screenshot of viewport
    //Screenshot of full page

    await page.goto('https://deepakrao64.github.io/SB/');
    //Screenshot of element
    await page.getByRole('button', {name:'Open practice lab'}).click();
    
    await page.getByRole('button', {name:'Download sample file'}).scrollIntoViewIfNeeded();

    //Screenshot of viewport
    await page.screenshot({path:'tests/Screenshots/viewPort.png'});

    //Screenshot of full page
    await page.screenshot({path:'tests/Screenshots/fullPage.png', fullPage:true});
    await expect( page.getByRole('button', {name:'Download sample file'})).toBeHidden();




    // await page.getByRole('button', {name:'Download sample file'}).scrollIntoViewIfNeeded();
});