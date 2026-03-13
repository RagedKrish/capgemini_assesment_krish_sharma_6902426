import { test, expect } from "@playwright/test"
import path from "path";
import excel from 'exceljs'

test('Register_form', async ({ page }) => {
    let book = new excel.Workbook();
    await book.xlsx.readFile(path.join(__dirname, 'student.xlsx'));
    let sheet = await book.getWorksheet('Sheet1');
    
    for (let r = 2; r <= sheet?.actualRowCount; r++) {
        await page.goto('https://demoqa.com/automation-practice-form');
        let c = 1;
        await page.getByPlaceholder('First Name').fill(await sheet?.getRow(r).getCell(c++).toString());
        await page.getByPlaceholder('Last Name').fill(await sheet?.getRow(r).getCell(c++).toString());
        await page.getByPlaceholder('name@example.com').fill(await sheet?.getRow(r).getCell(c++).toString());
        await page.getByText(await sheet?.getRow(r).getCell(c++).toString(), { exact: true }).click();
        await page.getByPlaceholder('Mobile Number').fill(await sheet?.getRow(r).getCell(c++).toString());
        let dobCell = await sheet?.getRow(r).getCell(c++).value as Date;
        let dob = dobCell.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });

        await page.locator('#dateOfBirthInput').click();
        await page.keyboard.press('Control+A');
        await page.keyboard.type(dob);
        await page.waitForTimeout(500);
        await page.keyboard.press('Enter');
        await page.locator('#subjectsInput').fill(await sheet?.getRow(r).getCell(c++).toString());
        await page.waitForTimeout(500);
        await page.keyboard.press('Enter');
        await page.getByText(await sheet?.getRow(r).getCell(c++).toString(), { exact: true }).click();
        await page.locator('#uploadPicture').setInputFiles(await sheet?.getRow(r).getCell(c++).toString());
        await page.getByPlaceholder('Current Address').fill(await sheet?.getRow(r).getCell(c++).toString());
        await page.locator('//div[@class="css-19bb58m"]').first().click();
        await page.keyboard.type(await sheet?.getRow(r).getCell(c++).toString())
        await page.keyboard.press('Enter');
        await page.locator('//div[@class="css-19bb58m"]').last().click();
        await page.keyboard.type(await sheet?.getRow(r).getCell(c++).toString())
        await page.keyboard.press('Enter');
        await page.keyboard.press('Enter');
        await expect(page.locator('//div[@class="modal-content"]')).toBeVisible();
        await page.locator('#closeLargeModal').click();
    }
    await page.screenshot({path:'screenshot/task1.png'})
})