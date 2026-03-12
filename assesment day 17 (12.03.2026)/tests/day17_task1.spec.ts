import {test,expect} from "@playwright/test"

test('amazon_new_tab',async({page})=>{
    await page.goto('https://www.amazon.in/');
    await page.locator('#twotabsearchtextbox').fill('Samsung Mobile');
    await page.keyboard.press('Enter');
    let [newpage]=await Promise.all([page.waitForEvent('popup'),
        page.locator('//div[@class="a-section a-spacing-small a-spacing-top-small"]/div/a').first().click()]);
    await newpage.waitForLoadState();
    console.log(await newpage.locator('#title').textContent());
    await expect(newpage.locator('#title')).toBeVisible();
    await newpage.close();
    await page.screenshot({path:'screenshot/task1.png'})
})