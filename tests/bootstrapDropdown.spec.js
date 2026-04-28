
// Verification and printing the dropdown options part

// const { test, expect } = require('@playwright/test');

// test('Handling Bootstrap dropdown', async ({ page }) => {
//     await page.goto('https://codepen.io/mushel/pen/XWJvLRw');

//     // Get iframe locator by id 'result' - this iframe contains the dropdown demo
//     const frameLocator = page.frameLocator('iframe#result');

//     // Now use the frameLocator to locate the dropdown button INSIDE the iframe
//     await frameLocator.locator('button.multiselect.dropdown-toggle.btn.btn-default').click();



//     //Verifications
//     // 1st Approach: Verifying options total count
//     const option = frameLocator.locator("//ul[@class='multiselect-container dropdown-menu']/li//label");
//     console.log('Number of the Select Language dropdown options are:', await option.count());
//     await expect(option).toHaveCount(7);

//     // 2nd Approach: Check total number of options using Javascript Array $$() method
//     // Use frame.$$ to get array of element handles and check length
//     const frame = await page.frame({ name: 'CodePen' }); // get the frame object by name

//     const option1 = await frame.$$("//ul[@class='multiselect-container dropdown-menu']/li//label");
//     // Since $$ returns an array of elements, use the length property to get the total number of options
//     console.log('Number of the Select Language dropdown options are:', await option1.length);
//     await expect(option1.length).toBe(7);

//     // 3rd Approach: Checking presence of a specific option
//     const options1 = frameLocator.locator("//ul[@class='multiselect-container dropdown-menu']/li//label");
//     // Get all texts
//     const allTexts = await options1.allTextContents();
//     // Positive check
//     await expect(allTexts.join(' ')).toContain('Java');
//     // Negative check
//     await expect(allTexts.join(' ')).not.toContain('TypeScript');

//     // Locate options inside the iframe after dropdown is opened
//     // Remember not use page.locator() method as the options are inside the iframe so you will have to use frameLocator.locator() method
//     const options = frameLocator.locator("//ul[@class='multiselect-container dropdown-menu']/li//label");
//     // Getting Count of options
//     const count = await options.count();
//     let actualOptions = [];
//     // Loop through each options and printing its text
//     for (let i = 0; i < count; i++) {
//         const text = await options.nth(i).textContent();
//         const trimmedText = text.trim(); // remove spaces/newlines
//         console.log(trimmedText);
//         actualOptions.push(trimmedText);
//     }

//     // Verify
//     const expectedOptions = ['Select all', 'PHP', 'JavaScript', 'Java', 'SQL', 'Jquery', '.Net'];
//     await expect(actualOptions).toEqual(expectedOptions);
// });


//                  Selecting and Deselecting options from the dropdown Part
const { test, expect } = require('@playwright/test');

test('Handling Bootstrap dropdown', async ({ page }) => {
    await page.goto('https://codepen.io/mushel/pen/XWJvLRw');

    // Get iframe locator by id 'result' - this iframe contains the dropdown demo
    const frameLocator = page.frameLocator('iframe#result');

    // Now use the frameLocator to locate the dropdown button INSIDE the iframe
    await frameLocator.locator('button.multiselect.dropdown-toggle.btn.btn-default').click();


    //Verifications
    // 1st Approach: Verifying options total count
    const options = frameLocator.locator("//ul[@class='multiselect-container dropdown-menu']/li//label");
    console.log('Number of the Select Language dropdown options are:', await options.count());
    await expect(options).toHaveCount(7);

    // Selecting Java, JavaScript and SQL From the list
    // Select specific options

    // Store count in a variable 
    const count = await options.count();
    for (let i = 0; i < count; i++) {
        const option = options.nth(i);
        const text = (await option.textContent()).trim();

        console.log('Option:', text);

        if (
            text.includes('Java') ||
            text.includes('JavaScript') ||
            text.includes('SQL')
        ) {
            await option.click();
        }
    }

    await page.waitForTimeout(4000);

    // Step 2: Verify Java, JavaScript, SQL are selected
    for (let i = 0; i < count; i++) {
        const option = options.nth(i);
        const text = (await option.textContent()).trim();
        const checkbox = option.locator('input');

        if (
            text.includes('Java') ||
            text.includes('JavaScript') ||
            text.includes('SQL')
        ) {
            await expect(checkbox).toBeChecked();
            console.log('Verified selected:', text);
        }
    }

    // Step 2: Deselect SQL and Select .Net
    for (let i = 0; i < count; i++) {
        const option = options.nth(i);
        const text = (await option.textContent()).trim();

        if (text.includes('SQL')) {
            await option.click(); // toggles → deselect
            console.log('Deselected:', text);
        }

        if (text.includes('.Net')) {
            await option.click(); // select .Net
            console.log('Selected:', text);
        }
    }

    // Step 3: Verify checkbox states
    for (let i = 0; i < count; i++) {
        const option = options.nth(i);
        const text = (await option.textContent()).trim();
        const checkbox = option.locator('input');

        if (text.includes('SQL')) {
            await expect(checkbox).not.toBeChecked();
            console.log('Verified SQL is deselected ✅');
        }

        if (text.includes('.Net')) {
            await expect(checkbox).toBeChecked();
            console.log('Verified .Net is selected ✅');
        }
    }

    await page.waitForTimeout(4000);

});
