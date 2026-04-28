
const { test, expect } = require('@playwright/test');

test('Handling Hidden Dropdowns', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Created using the codegen
    // await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    // await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    // await page.getByRole('button', { name: 'Login' }).click();
    // await page.getByRole('link', { name: 'PIM' }).click();

    await page.locator("input[name='username']").fill('Admin');
    await page.locator("input[name='password']").fill('admin123');
    await page.locator("button[type='submit']").click();
    await page.locator("//span[text()='PIM']").click();
    await page.locator("(//div[@class='oxd-select-text--after'])[3]").click();
    // Waiting for options to appear
    await page.waitForSelector("//div[@role='listbox']//div[@class='oxd-select-option']/span");

    const jobTitleOptions = await page.$$("//div[@role='listbox']//div[@class='oxd-select-option']/span");

    for (let i = 0; i < jobTitleOptions.length; i++) {
        const elements = await jobTitleOptions[i];
        const text = await elements.textContent();
        console.log('Job Title:', text.trim());

        // Selecting a specific option/value
        if (text.includes('QA Lead')) {
            await elements.click();
            break; // Optional but recommended
        }
    }
        // Verificaion
    await expect(page.locator("(//div[@class='oxd-select-wrapper'])[3]")).toHaveText('QA Lead');
    await page.waitForTimeout(4000);
    page.close();
});

