class amazon_career{
    async load_site(page,url){
        await page.goto(url);
    }
    async open_career(page){
        await page.locator('//a[@href="https://amazon.jobs"]').click();
    }
    async student_opportunity(page){
        await page.locator('//a[@href="/content/en/career-programs/university"]').click();
    }
    async university_roles(page){
        await page.locator('//div[text()="Find open university roles"]').click();
    }
    async select_country(page,country){
        await page.locator(`(//ul[@class="filter-values-module_root__sRIqR"])[1]//div[@class="filter-value-module_label__Pet6N css-gb1y2i" and text()="${country}"]`).click();
    }
    async select_state(page,state){
        await page.locator(`(//ul[@class="filter-values-module_root__sRIqR"])[2]//div[@class="filter-value-module_label__Pet6N css-gb1y2i" and text()="${state}"]`).click();
    }
    async select_city(page,city){
        await page.locator(`(//ul[@class="filter-values-module_root__sRIqR"])[3]//div[@class="filter-value-module_label__Pet6N css-gb1y2i" and text()="${city}"]`).click();
    }
    async select_employment_type(page,type){
        await page.locator(`(//ul[@class="filter-values-module_root__sRIqR"])[4]//div[@class="filter-value-module_label__Pet6N css-gb1y2i" and text()="${type}"]`).click();
    }
    async select_category(page,category){
        await page.locator(`(//ul[@class="filter-values-module_root__sRIqR"])[5]//div[@class="filter-value-module_label__Pet6N css-gb1y2i" and text()="${category}"]`).click();
    }
    async select_career_area(page,area){
        await page.locator(`(//ul[@class="filter-values-module_root__sRIqR"])[6]//div[@class="filter-value-module_label__Pet6N css-gb1y2i" and text()="${area}"]`).click();
    }
    async select_team(page,team){
        await page.locator(`(//ul[@class="filter-values-module_root__sRIqR"])[7]//div[@class="filter-value-module_label__Pet6N css-gb1y2i" and text()="${team}"]`).click();
    }
    async select_role_type(page,role){
        await page.locator(`(//ul[@class="filter-values-module_root__sRIqR"])[8]//div[@class="filter-value-module_label__Pet6N css-gb1y2i" and text()="${role}"]`).click();
    }
    async select_job(page,s_no){
        await page.locator(`(//div[@class="job-card-module_root__QYXVA"])[${s_no}]/div[1]`).click();
    }
    async apply_job(page){
        await page.locator('//a[@id="apply-button"]').click();
    }
    async screenshot(page,num){
        await page.screenshot({path:`screenshot/task1_${num}.png`});
    }
}

export default amazon_career