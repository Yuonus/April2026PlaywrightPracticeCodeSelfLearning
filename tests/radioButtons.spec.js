
const { test, expect } = require('@playwright/test')

test('Handling Radio Buttons', async ({ page }) => {
    await page.goto('https://testautomationcentral.com/demo/radiobuttons.html');
    await page.locator("(//input[@type='radio'])[1]").check();
    await page.waitForTimeout(2000);
    // await expect(page.locator("(//input[@type='radio'])[1]")).toBeChecked();
    // To use playwright nth() method
    await expect(page.locator("//input[@type='radio']").nth(0)).toBeChecked();
    // OR
    await expect(page.locator("(//input[@type='radio'])[1]").isChecked()).toBeTruthy()
    await expect(page.locator("(//input[@type='radio'])[2]")).not.toBeChecked();
})

