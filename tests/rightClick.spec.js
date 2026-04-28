
const { test, expect } = require('@playwright/test');

test('Right-click', async ({ page }) => {
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');
    const rightClick = page.locator("//span[text()='right click me']");
    await rightClick.click({ button: 'right' });
    // Locate Delete option
    const deleteOption = page.locator("//span[text()='Delete']");

    // Assert it is visible
    await expect(deleteOption).toBeVisible();
    await page.waitForTimeout(2000);
        // Get text and print it
    const text = await deleteOption.textContent();
    console.log('Menu option:', text);
});