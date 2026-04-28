
const { test, expect } = require('@playwright/test')

test('Soft Assertions', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');

    const pageTitle = await page.title();
    console.log('Page title is:', pageTitle)
    await expect(pageTitle).toHaveTitle('STORE');

    // Hard Assertions
    // await expect(page).toHaveTitle('STORE11');

    // URL Verification
    //    const pageURL = page.url();
    //    console.log('Page URL is:', pageURL);
    //    await expect(page).toHaveURL('https://www.demoblaze.com/');

    //    // Logo Verification
    //    await expect(page.locator('#nava.navbar-brand')).toBeVisible();

    //Soft Assertions
    await expect.soft(page).toHaveTitle('STORE11');
    const pageURL = page.url();
    console.log('Page URL is:', pageURL);
    await expect.soft(page).toHaveURL('https://www.demoblaze.com/');

    // Logo Verification
    await expect.soft(page.locator('#nava.navbar-brand')).toBeVisible();

})


