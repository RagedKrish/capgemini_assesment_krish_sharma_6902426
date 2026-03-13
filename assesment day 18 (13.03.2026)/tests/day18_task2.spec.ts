import {test,expect} from "@playwright/test"
import path from "path";

test('download_task',async({page})=>{
    await page.goto('https://demoqa.com/upload-download');
    let downloadfolder=path.join(__dirname,"../download");
    let [downloadfile]= await Promise.all([
        page.waitForEvent('download'),
        page.locator('#downloadButton').click()
    ])
    let filename=await downloadfile.suggestedFilename();
    await downloadfile.saveAs(path.join(downloadfolder,filename));
    await page.locator('#uploadFile').setInputFiles(path.join(downloadfolder,filename));
    await expect(page.locator('#uploadedFilePath')).toBeVisible();
    await expect(page.locator('#uploadedFilePath')).toContainText(filename);
    await page.screenshot({path:'screenshot/task2.png'});
})