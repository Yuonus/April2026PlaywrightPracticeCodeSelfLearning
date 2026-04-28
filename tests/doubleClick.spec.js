
const { test, expect } = require('@playwright/test');

test('Automating Double Click', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const copyTextBtn = page.locator("//button[text()='Copy Text']");
    await copyTextBtn.dblclick();
    const field2 = page.locator('#field2');
    const text = await field2.inputValue();
    console.log('Field 2 Text:', text);
    // Vreification
    await expect(field2).toBeVisible();
    await expect(field2).toHaveValue('Hello World!');
    await page.waitForTimeout(2000);
});