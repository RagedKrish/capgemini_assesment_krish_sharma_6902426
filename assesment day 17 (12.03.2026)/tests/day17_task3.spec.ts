import {test,expect} from "@playwright/test"

test('handle_dialogs',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    page.once('dialog',async dialog=>{
        console.log(dialog.message());
        await dialog.accept();
    })
    await page.locator('//button[@onclick="jsAlert()"]').click();
    await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
    page.once('dialog',async dialog=>{
        console.log(dialog.message());
        await dialog.dismiss();
    })
    await page.locator('//button[@onclick="jsConfirm()"]').click();
    await expect(page.locator('#result')).toHaveText('You clicked: Cancel');
    page.once('dialog',async dialog=>{
        console.log(dialog.message());
        await dialog.accept('Playwright Testing');
    })
    await page.locator('//button[@onclick="jsPrompt()"]').click();
    await expect(page.locator('#result')).toHaveText('You entered: Playwright Testing');

    await page.screenshot({path:'screenshot/task3.png'});
})