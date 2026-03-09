import { test, expect } from '@playwright/test';

test('question_2', async ({ page }) => {

  await page.goto('https://www.flipkart.com');

  const closeBtn =page.locator('//button[contains(text(),"✕")]');
  if (await closeBtn.isVisible()) {
    await closeBtn.click();
  }
  const search= page.locator('//input[@name="q"]').first();
  await search.fill('shoes');
  await search.press('Enter');
  const women=page.locator('//a[contains(text(),"Women") or contains(text(),"WOMEN") or contains(text(),"women")]');
  await expect(women.first()).toBeVisible();
  const count=await women.count();
  await expect(count).toBeGreaterThan(0);
  const firstText =await women.first().textContent();
  await expect(firstText?.toLowerCase()).toContain('women');
  await page.screenshot({path: 'screenshot/task2.png'})
  await expect(page).toHaveScreenshot('flipkart-women.png');

});