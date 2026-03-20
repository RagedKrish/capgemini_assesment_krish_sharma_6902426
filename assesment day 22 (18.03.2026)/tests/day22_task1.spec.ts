import {test,expect} from "@playwright/test"
import file_upload from "../pom/fileupload.spec"
import fs from "fs"
import path from "path"

let file_details=JSON.parse(fs.readFileSync(path.join(__dirname,"../data/file.json")));

test('upload_task',async({page})=>{
    let upload_file=new file_upload();
    await upload_file.load_page(page);
    await Promise.all([
        page.waitForNavigation(),
        upload_file.upload(page,file_details.file_path)
    ])
    await upload_file.verify(page,expect,file_details.expected_file_name);
    await page.screenshot({path:'screenshot/task1.png'});
})
