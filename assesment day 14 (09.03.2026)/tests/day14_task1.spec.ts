import {test,expect} from "@playwright/test"

test("qspider_login",async ({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
    await expect(page.locator('//div[@class="scenarios_1 "]')).toBeAttached();
    await expect(page.locator('//div[@class="scenarios_1 "]')).toBeVisible();
    console.log(await expect(page.locator('//div[@class="scenarios_1 "]')).toContainText("Scenarios"));
    await page.getByRole('textbox',{name:'name'}).fill('Krish',{timeout:20000});
    await page.getByRole('textbox',{name:'email'}).fill('krish18sharma21@gmail.com');
    await page.getByRole('textbox',{name:'password'}).fill('12345678');
    await page.getByRole('button',{name:'Register'}).click();
    await page.screenshot({path:"screenshot/task1.png"});
})