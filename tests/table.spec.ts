import {test} from '@playwright/test';

test('Validate Table', async({page}) => {

    await page.goto('https://qaplayground.com/practice/data-table');
    let table = await page.getByRole('table', {name:'Books data table'});
    console.log('******************************************************************');

    let tableHeaders  = await table.getByRole('columnheader').allInnerTexts();
    console.log(tableHeaders);

    console.log('******************************************************************');

    let rows = await table.getByRole('row').allInnerTexts();
    console.log(rows);

    console.log('******************************************************************');
    let rowText = await table.getByRole('row').nth(1).allInnerTexts();
    console.log(rowText);

    console.log('******************************************************************');
    let rowText2 = await table.getByRole('row').filter({hasText:'The Pragmatic Programmer'}).allInnerTexts();
    console.log(rowText2);

    console.log('******************************************************************');
    let selectedRow = await table.getByRole('row').filter({hasText:'The Pragmatic Programmer'});
    let allColumnData = await selectedRow.getByRole('cell').allInnerTexts();
    console.log(allColumnData);
    console.log('******************************************************************');

    let cellValue = await selectedRow.getByRole('cell').nth(3).innerText();
    console.log(cellValue);

    console.log('******************************************************************');

    await selectedRow.getByRole('cell').nth(6).getByRole('button', {name:'Edit'}).click();






});