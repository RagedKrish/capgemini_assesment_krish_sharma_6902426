import {test} from "@playwright/test"

test("icc_ranking",async({page})=>{
    await page.goto("https://www.icc-cricket.com/rankings");
    await page.locator('//button[@class="mx-2 w-1.5 h-1.5 bg-dark-background opacity-40 rounded-full transition-width delay-150 duration-500 ease-in-out"]').nth(2).click();
    let rating = await page.locator('(//section[@id="mens-batting-rankings"]/descendant::div[@class="swiper-slide max-w-[328px] lg:max-w-[450px] mr-3 lg:mr-0 last:mr-0 swiper-slide-next"]/descendant::span[@class="text-xs leading-140 font-extrabold uppercase text-blue-950"])[1]').textContent();
    console.log("Abhishek t20 rating ",rating)
    await page.screenshot({path:'screenshot/task2.png'});
})