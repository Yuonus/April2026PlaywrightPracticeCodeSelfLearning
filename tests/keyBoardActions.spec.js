
const { test, expect } = require('@playwright/test');

test.skip('Automating Keyboard Actions', async ({ page }) => {
    await page.goto('https://gotranscript.com/text-compare');
    await page.locator("textarea[name='text1']").fill('S_Tech guarantees your automation journey with professional training.');
    // page.type("textarea[name='text1']", 'S_Tech guarantees your automation journey with professional training.'); // page.type() deprecated
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Control+C');
    // await page.keyboard.press('Tab');

    // We can also use Tab like the code below
    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');

    await page.keyboard.press('Control+V');
    await page.waitForTimeout(3000);

});

// Tabbing is not recommended, instead use the second input field and paste the copied text into it
test.skip('Automation of Keyboard Actions', async ({ page }) => {
    await page.goto('https://gotranscript.com/text-compare');

    const text1 = page.locator("textarea[name='text1']");
    const text2 = page.locator("textarea[name='text2']");

    const inputText = 'S_Tech guarantees your automation journey with professional training.';
    // Fill first textarea
    await text1.fill(inputText);

    // Copy
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Control+C');

    // Paste into second textarea
    // await text2.press('Control+V'); // This code works fine here, but the target area is not focused and it can be a brittle code with other applications
    await text2.focus(); // This piece focuses on the paste area
    // await text2.click(); // Or -- This piece focuses on the paste area
    await page.keyboard.press('Control+V');
    // Get value from second textarea
    const pastedText = await text2.inputValue();

    // Print to console
    console.log('Pasted Text:', pastedText);

    // Assertion (verification)
    await expect(text2).toHaveValue(inputText);
});

// Third Approach of copy and paste
test('Automation of Keyboard Actions -- different approach', async ({ page }) => {
    await page.goto('https://gotranscript.com/text-compare');

    const text1 = page.locator("textarea[name='text1']");
    const text2 = page.locator("textarea[name='text2']");

    await text1.fill('S_Tech guarantees your automation journey with professional training.');

    // Copy value programmatically
    const value = await text1.inputValue();

    // Paste into second box (no keyboard needed)
    await text2.fill(value);

    await page.waitForTimeout(3000);
});

