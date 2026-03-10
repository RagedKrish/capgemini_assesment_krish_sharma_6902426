import {test} from "@playwright/test"

test("lenskart",async({page})=>{ 
    test.slow();
    await page.goto('https://www.lenskart.com/');
    await page.locator('//a[@id="lrd9"]').hover();
    await page.locator('//a[@href="https://www.lenskart.com/stores/location/karnataka/bengaluru"]').click();
    await page.screenshot({path:"screenshot/task2.png"});
   
})