import {test, expect} from '@playwright/test';

test('DownLoad Test', async({page}) => {
    await page.goto('https://deepakrao64.github.io/SB/');
    await page.getByRole('button', {name:'Open practice lab'}).click();

    //Take handle of download
    let downloadEvent = page.waitForEvent('download');
    //Trigger download
    await page.getByRole('button', {name:'Download sample file'}).click();
    //wait for download event
    let download = await downloadEvent;
    console.log(await download.path());
    //Save it in expected directory
    let timeStamp = new Date().toString().replace(/[:+.-]/g, "").substring(0, 22).replaceAll(' ', '');
    console.log(timeStamp)
    await download.saveAs('downloads/SampleFile' + timeStamp + '.txt');
});