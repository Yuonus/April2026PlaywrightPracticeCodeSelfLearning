
const { test, expect } = require('@playwright/test')

test('Keyboard Actions -- Input Field', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/register');

    await expect(page.locator('#username')).toBeVisible();
    await page.locator('#username').fill('playwright');

    await expect(page.locator('#password')).toBeEmpty();
    await page.locator('#password').fill('Automation123$');

    await expect(page.locator('#confirmPassword')).toBeEditable();
    await expect(page.locator('#confirmPassword')).toBeEnabled();
    //Or
    await page.fill('#confirmPassword','Automation123$')
    // await page.locator('#confirmPassword').fill('Automation123$');

    // Pausing the test
    await page.waitForTimeout(5000);
    await page.locator("button[type='submit']").click();

})