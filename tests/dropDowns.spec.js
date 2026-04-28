
const { test, expect } = require('@playwright/test');

test('Handling dropdowns in playwright', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    // await page.waitForTimeout(3000);

    // // await page.locator('#country').selectOption({ label: 'Japan' });
    // await page.locator('#country').selectOption('Japan');
    // await page.waitForTimeout(3000);

    // await page.locator('#country').selectOption({ index: 1 });
    // await page.waitForTimeout(3000);

    // await page.locator('#country').selectOption({ value: 'uk' });
    // await page.waitForTimeout(3000);

    // Assertion Part
    const dropDownOptionsLocator = await page.locator('#country option');
    // You MUST await the method to get the actual array of strings
    const options = await dropDownOptionsLocator.allTextContents();
    console.log('Text of the dropdown options are:', options);

    /*
    const options = await dropDownOptionsLocator.allTextContents(); 
    console.log('Text of the dropdown options are:', options);
    The above line will print the result like:
        '\n        United States\n      ',
        '\n        Canada\n      ',
    If you just want to see the countries name then bring this change
    const cleanOptions = dropDownOptions.map(option => option.trim());
    console.log('Text of the dropdown options are:', cleanOptions);
    */

    // Getting count of the options
    const count = await dropDownOptionsLocator.count();
    console.log('Number of options found:', count);
    await expect(dropDownOptionsLocator).toHaveCount(10);

    /*
        --> We can also capture the count of the dropdown options using the $$() method.
        --> The $$() method return an array and we can apply the length property on it to capture its size.
    */

    const optionsCount = await page.$$('#country option');
    console.log('Number of dropdown child options are:', optionsCount.length);
    await expect(optionsCount.length).toBe(10);

    // Checking presence of values in a dropdown
    // First Approach
    await expect(page.locator('#country')).toContainText('Japan');

    // 2nd Approach: Caputuring all the content first using the textContent() method and then verifying a specific element
    const content = await page.locator('#country').textContent();
    await expect(content.includes('India')).toBeTruthy();

    // Third Approach: Checking presence of value in the dropdown --- using the enhanced for loop
    // First print all the options and then verify a specific value
    const optionsCount1 = await page.$$('#country option');
    let status = false;
    for (const optionsCount of optionsCount1) {
        const text = (await optionsCount.textContent()).trim();
        console.log(text);
        // Asserting
        if (text.includes('Japan')) {
            status = true;
            break;
        }
    }
    expect(status).toBeTruthy();

    // Selecting France from the list
    const selectingASingleOption = await page.$$('#country option');
    for (const selectOption of selectingASingleOption) {
        let value = (await selectOption.textContent()).trim();
        // Selecting a single value
        if (value.includes('France')) {
            await page.locator('#country').selectOption({ label: value });
            break;
        }
    }
    await page.waitForTimeout(3000);
    

});




