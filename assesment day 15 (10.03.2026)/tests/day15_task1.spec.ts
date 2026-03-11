import {test} from "@playwright/test"

test("Gmail",async({page})=>{
    test.slow();
    await page.goto('https://mail.google.com/');
    await page.locator('//div[@class="T-I T-I-KE L3"]').click();
    await page.keyboard.type('krish96raged@gmail.com');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.type('task1');
    await page.keyboard.press('Tab');
    await page.keyboard.insertText('Doing my task1');
    await page.locator('//div[@id=":pl"]').click();

    await page.screenshot({path:'screenshot/task1.png'});
})