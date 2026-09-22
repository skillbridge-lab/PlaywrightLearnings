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

test('Cricket Table', async({page}) => {
    // await page.goto('https://m-aws.cricbuzz.com/cricket-stats/icc-rankings/men/batting');
    // let allPointsElement = await page.locator('//div[@class="col-span-1 text-base text-right mr-1"]').all();
    
    // let additionResult = 0;

    // for(let pointElement of allPointsElement) {  
    //     let point = await pointElement.innerText(); 
    //     let pointInNumber = parseInt(point);
    //     additionResult += pointInNumber;
    // }
    // console.log("** Addition Of All Points ** : " + additionResult);


    //Find Missing Number
    let arr = [1, 2, 3, 5];    //no 4 is missing  // addition of array - 11
                                    //expected - original -> 4
                                // expected Addition result  - 15
    
    // 1 Create variable with value 0 
    let actualResult = 0; //3
    for(let no of arr) { //3
        actualResult = actualResult + no;  // 3 + 3
    }
    console.log(actualResult);

    let expectedResult = 0; //3
    for(let i = 1; i<=5; i++) { //3 3<=5 -> true
        expectedResult = expectedResult + i; // 3 + 3
    }
    console.log(expectedResult);

    let missingNumber = expectedResult - actualResult;
    console.log('Missing No From Array is :: ' +  missingNumber);




})