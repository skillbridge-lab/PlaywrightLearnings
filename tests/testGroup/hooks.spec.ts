import {test} from '@playwright/test';

//Hooks are used to run a piece of code before or after a test case. 
// Hooks are used to set up preconditions and clean up after tests. 
// Hooks can be used to set up the environment, initialize variables, 
// and perform other tasks that need to be done before or after a test case.
test.describe(async()=> {
    test.beforeAll(async() => {
        console.log('Inside Before all')
    });
    test.beforeEach(async() => {
        console.log('Inside Before each')
    });

    test('Validate add to cart', async({page}) => {
        console.log('Inside Test Case');
    });

    test.afterEach(async() => {
        console.log('Inside after each')
    })
    test.afterAll(async() => {
        console.log('Inside after all')
    })


/*
Fixtures are used to set up a known state for the tests.    
Fixtures can be used to set up the environment, initialize variables,
and perform other tasks that need to be done before or after a test case.
Types of fixtures in Playwright are:
1. Built-in fixtures: These are the fixtures that are provided by Playwright.
   Example of Built-in fixures are page, browser, context, request, etc.

2. Custom fixtures: These are the fixtures that are created by the user.
   Example of custom fixtures are database connection, API client, etc.

*/    
});