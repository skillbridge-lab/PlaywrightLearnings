import {test} from '@playwright/test';

test('test automation', async({page}) => {
    await page.goto('https://www.way2automation.com/way2auto_jquery/registration.php#load_box');
    await page.locator("//input[@name='name']").nth(0).fill('Skill'); 
    let isLabelVisible = await page.locator("//label[text()='Marital Status:']").click();
    let isPhoneIconDisplayed = await page.locator("//i[contains(@class,'fa-phone')]").isVisible();
    let isEmailDisplayed = await page.locator("//a[contains(text(), 'automation.com')]").isVisible();
    await page.locator("//label[text()=' Single']/input").click();
    await page.reload();    

    /*

    Types of Locators
    1. Absolute Xpath -> is a type of xpath where we can navigate from parent node to child node using single forward slash
                     -> Length is more than relative xpath
    2. Relative xpath -> In relative we can navigate from parent node to any child using double forward slash
    
    Xpath Axes
    1. following-siblings

      //xpathOfMainElement/following-sibling::tagname

    2. preceding-sibling
      
      //xpathOfMainElement/preceding-sibling::tagname

    3. parent
      
    //xpathOFChildElement/parent::tagname

    4. ancestor

   //xpathOFelement/ancestor::tagname (any ancestor tag)




  

    Price 29.99
    
    Ways to locate elements using xpath
        1. With Attribute
           //tagname[@attribute='value']
        
        2. With Text
           //tagname[text()='value']
           
        3. using * to locate any matching
           //*[text()='value']
           //*[@attribute='value']
        
        4. Contains attribute
           //tagname[contains(@attribute, 'partial value')]
           
        5. Contains Text
           //tagname[contains(text(), 'partialtextvalue')]    

        6. using index
         (xpathOfElements)[1]   

    
    
    */

    


})