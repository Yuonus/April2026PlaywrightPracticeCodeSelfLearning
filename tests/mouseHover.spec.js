
const { test, expect } = require('@playwright/test');

test('Mouse Hover', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/');
    const desktops = page.locator("//a[text()='Desktops']");
    const mac = page.locator("//a[text()='Mac (1)']");

    // Mouse Hover using hover()
    await desktops.hover();
    await page.waitForTimeout(1500);
    await mac.hover();
    // Optional assertion (bonus)
    await expect(mac).toBeVisible();
    await page.waitForTimeout(1500);


});