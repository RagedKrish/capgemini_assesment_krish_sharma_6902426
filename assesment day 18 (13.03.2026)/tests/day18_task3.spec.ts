import {test,expect} from "@playwright/test"
import path from "path";

test('upload_task',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/upload');
    await page.locator('#file-upload').setInputFiles(path.join(__dirname,"../image/profile.png"));
    await page.locator('#file-submit').click();
    await expect(page.locator('#uploaded-files')).toBeVisible();
    await expect(page.locator('#uploaded-files')).toHaveText('profile.png')
    await page.screenshot({path:'screenshot/task3.png'});
})