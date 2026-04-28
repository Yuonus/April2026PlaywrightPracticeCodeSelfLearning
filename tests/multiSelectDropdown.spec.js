
const { test, expect } = require('@playwright/test');

test('Handling Multi-Selection dropdown', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.waitForTimeout(4000);

    await page.selectOption('#colors', ['Blue', 'Red', 'Yellow'])
    await page.waitForTimeout(4000);

    //Verifications
    // 1st Approach: Verifying options total count
    const options = page.locator('#colors option');
    console.log('Number of the colors dropdown options are:', await options.count());
    await expect(options).toHaveCount(7);

    // 2nd Approach: Check total number of options using Javascript Array $$() method
    const options1 = await page.$$('#colors option');
    // Since $$ returns an array of elements, use the length property to get the total number of options
    console.log('Number of the colors dropdown options are:', await options1.length);
    await expect(options1.length).toBe(7);

    // 3rd Approach: Checking presence of a specific option
    const optionsTexts = await page.locator('#colors').textContent();
    await expect(optionsTexts.includes('Blue')).toBeTruthy();
    // Negative path
    const optionsTexts1 = await page.locator('#colors').textContent();
    await expect(optionsTexts1.includes('Black')).toBeFalsy();

    // 4th Approach: Capture & print all dropdown options and verify using toHaveText() method
    const options4 = page.locator('#colors option');
    // Get count
    const count = await options4.count();

    let actualOptions = [];

    // Loop through each option
    for (let i = 0; i < count; i++) {
        const text = await options.nth(i).textContent();
        const trimmedText = text.trim(); // remove spaces/newlines
        console.log(trimmedText);
        actualOptions.push(trimmedText);
    }

    // Verify
    const expectedOptions = ['Red', 'Blue', 'Green', 'Yellow', 'Red', 'White', 'Green'];
    await expect(actualOptions).toEqual(expectedOptions);

});




