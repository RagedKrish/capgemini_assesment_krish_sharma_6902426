import {test} from "@playwright/test"

test("icc_ranking",async({page})=>{
    await page.goto("https://www.icc-cricket.com/rankings");
    let rating = await page.locator('(//section[@id="mens-batting-rankings"]/descendant::div[@class="swiper-slide max-w-[328px] lg:max-w-[450px] mr-3 lg:mr-0 last:mr-0 swiper-slide-next"]/descendant::span[@class="text-xs leading-140 font-extrabold uppercase text-blue-950"])[2]').textContent();
    console.log("Virat Kohli odi rating ",rating)
    await page.screenshot({path:'screenshot/task2.png'});
})