import {test} from "@playwright/test"
import amazon_career from "../pom/amazon_carrer.spec"
import path from "path"
import fs from "fs";

let data=JSON.parse(fs.readFileSync(path.join(__dirname,"../data_driven/amazon_career.json")))

test("amazon_career",async ({page})=>{
    let career=new amazon_career();
    await career.load_site(page,data.url);
    await career.open_career(page);
    await career.student_opportunity(page);
    await career.university_roles(page);
    await career.select_country(page,data.country);
    await career.select_state(page,data.state);
    await career.select_city(page,data.city);
    await career.select_employment_type(page,data.employment_type);
    await career.select_category(page,data.category);
    await career.select_career_area(page,data.area);
    await career.select_team(page,data.team);
    await career.select_role_type(page,data.role);
    let [newpage]=await Promise.all([
        page.waitForEvent('popup'),
        career.select_job(page,2)])
    await page.waitForTimeout(500);
    await career.screenshot(newpage,1);
    await career.apply_job(newpage);
    await page.waitForTimeout(2000);
    await career.screenshot(newpage,2);
})