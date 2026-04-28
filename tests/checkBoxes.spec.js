
// const { test, expect } = require('@playwright/test');

// test('Handling Checkboxes', async ({ page }) => {
//     await page.goto('https://testautomationcentral.com/demo/checkboxes.html');

//     // Single Check box
//     const checkBoxOption1 = page.locator("(//label[@class='simple-checkbox-container']/input)[1]");
//     await checkBoxOption1.check();
//     await expect(checkBoxOption1).toBeChecked();
//     //Or we can also verify this way
//     await expect(page.locator("(//label[@class='simple-checkbox-container']/input)[1]").isChecked()).toBeTruthy();
//     await page.waitForTimeout(3000);
//     // Unchecking the check box
//     await checkBoxOption1.uncheck();
//     await expect(checkBoxOption1).not.toBeChecked();
//     await page.waitForTimeout(3000);

//     await expect(page.locator("(//label[@class='simple-checkbox-container']/input)[2]")).not.toBeChecked();

//     // Multiple Checkboxes --> //label[@class='simple-checkbox-container']/input --> 1 of 3
//     // First Approach
//     const multipleCheckboxesIdentifiers = [
//         "(//label[@class='simple-checkbox-container']/input)[1]",
//         "(//label[@class='simple-checkbox-container']/input)[2]",
//         "(//label[@class='simple-checkbox-container']/input)[3]"
//     ];
//     for (const locator of multipleCheckboxesIdentifiers) {
//         const checkBoxes = page.locator(locator);
//         await checkBoxes.check()

//         // Verify that the checkbox is selected
//         const isChecked = await checkBoxes.isChecked();
//         console.log(`Checkbox ${locator} selected?`, isChecked);
//         expect(isChecked).toBeTruthy(); // Assertion ensures checkbox is checked
//     }

//     await page.waitForTimeout(3000);

//     // Uncheck all checkboxes **only if they are selected**
//     for (const locator of multipleCheckboxesIdentifiers) {
//         const checkbox = page.locator(locator);

//         // Verify before unchecking
//         if (await checkbox.isChecked()) {
//             await checkbox.uncheck();
//             console.log(`Checkbox ${locator} was unchecked.`);
//             await expect(checkbox).not.toBeChecked(); // Optional assertion
//         }
//     }


//     await page.waitForTimeout(3000);

// })

// Mutliple Selection the easy way

const { test, expect } = require('@playwright/test');

test('Handling Checkboxes', async ({ page }) => {
    await page.goto('https://testautomationcentral.com/demo/checkboxes.html');

    // General Locator for all checkboxes
    const allCheckBoxes = page.locator("//label[@class='simple-checkbox-container']/input");

    // Count the number of checkboxes
    const checkboxesCount = await allCheckBoxes.count();
    console.log(`Total checkboxes found: ${checkboxesCount}`);

    // Selecting all checkboxes dynamically
    for (let i = 0; i < checkboxesCount; i++) {
        const checkbox = allCheckBoxes.nth(i);
        await checkbox.check();
        // Verify checkbox is selected
        await expect(checkbox).toBeChecked();
        console.log(`Checkbox ${i + 1} is checked.`);
    }

    await page.waitForTimeout(3000);

    // Uncheck all checkboxes dynamically
    for (let i = 0; i < checkboxesCount; i++) {
        const checkbox = allCheckBoxes.nth(i);

        // Only uncheck if selected
        if (await checkbox.isChecked()) {
            await checkbox.uncheck();
            console.log(`Checkbox ${i + 1} is unchecked.`);
            await expect(checkbox).not.toBeChecked();
        }
    }

    await page.waitForTimeout(3000);
});