
const { test, expect } = require('@playwright/test');

test('Handling Auto Suggestion dropdown', async ({ page }) => {
    await page.goto('https://www.redbus.in/');
    await page.locator("//input[@id='srcinput']").fill('Delhi');
    // await page.waitForTimeout(4000);
    // we can use more smart way for waiting the autosuggstion dropdown values using playwright waitForSelector() method
    await page.waitForSelector("//div[contains(@class,'searchCategory_')]//div[contains(@class,'listItem_')]//div[@role='heading']");
    const fromCityOptions = await page.$$("//div[contains(@class,'searchCategory_')]//div[contains(@class,'listItem_')]//div[@role='heading']");

    for (let i = 0; i < fromCityOptions.length; i++) {
        const elements = await fromCityOptions[i];
        const text = await elements.textContent();
        console.log('Option:', text.trim());

        // Selecting a specific option/value
        if (text.includes('Mumbai')) {
            await elements.click();
            break; // Optional but recommended
        }
    }

    // Verificaion
    await expect(page.locator("//input[@id='srcinput']")).toHaveValue(/Mumbai/);
    await page.waitForTimeout(4000);

});

//   Capturing the values fromt the dropdown --> //div[contains(@class,'searchCategory_')]//div[contains(@class,'listItem_')]//div[@role='heading'] 
