import {test,expect} from "@playwright/test"

test('justdial',async({browser})=>{
    let context=await browser.newContext({permissions:['notifications']});
    let page= await context.newPage();

    await page.goto('https://www.justdial.com');
    await page.waitForLoadState('domcontentloaded');
    let result=await page.evaluate(()=>{
        return Notification.requestPermission();
    })
    if(result=='granted'){
        console.log('popup disappear');
    }
    else{
        console.log('popup did not disappear');
    }
    await page.locator('#main-auto').fill('Restaurants');
    await page.keyboard.press('Enter');
    await page.waitForNavigation();
    await expect(await page.url()).toContain('Restaurants');
    await page.screenshot({path:'screenshot/task2.png'});
})