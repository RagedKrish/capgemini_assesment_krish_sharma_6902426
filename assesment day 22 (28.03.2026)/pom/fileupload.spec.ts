class file_upload{
    async load_page(page){
        await page.goto('https://the-internet.herokuapp.com/upload');
    }
    async upload(page,filepath){
        await page.locator('#file-upload').setInputFiles(filepath);
        await page.locator('#file-submit').click();
    }
    async verify(page,expect,expectedfilename){
        let uploadfilename = await page.locator('#uploaded-files').textContent();
        await expect(uploadfilename).toContain(expectedfilename);
    }
}

export default file_upload