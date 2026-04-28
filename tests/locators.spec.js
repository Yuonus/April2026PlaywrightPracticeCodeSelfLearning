
// const {test, expect} = require('@playwright/test')
import {test, expect} from '@playwright/test'

test('Locators', async ({page})=>{
    await page.goto('https://demoblaze.com/');
    // Clicking on Log in button --- using some property
    // await page.locator('id=login2').click();
    await page.click('id=login2');

    // using CSS locator -- Filling Username
    await page.locator('#loginusername').fill('pavanol');
    await page.fill('#loginusername', 'pavanol');

    // Using Xpath locator --- Filling the Password field
    // await page.locator("//input[@id='loginpassword']").fill('testWith@Playwright')
    await page.fill("//input[@id='loginpassword']", 'test@123');

    // clicking log in --- CSS
    await page.click("button[onclick='logIn()']");

    // Verifying the Log out button
    const logoutLink = await page.locator('#logout2');
    await expect(logoutLink).toBeVisible();

    await page.close();

})


// Playwright Built-in locators
// import { test, expect } from '@playwright/test';

// test('Locators with semantic methods', async ({ page }) => {
//     await page.goto('https://demoblaze.com/');

//     // Click "Log in" button
//     await page.getByText('Log in').click();

//     // Fill username and password
//     await page.getByPlaceholder('Username').fill('pavanol');
//     await page.getByPlaceholder('Password').fill('test@123');

//     // Click log in
//     await page.getByText('Log in').click();

//     // Verify log out
//     await page.getByText('Log out').waitFor({ state: 'visible' });
//     await expect(page.getByText('Log out')).toBeVisible();

//     await page.close();
// });

