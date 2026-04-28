
import { test, expect, chromium } from '@playwright/test'; // ES6 Module
// const {test, expect, chromium} = require('@playwright/test');

test('Handling pages/windows', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page1 = await context.newPage();
    const page2 = await context.newPage();
    // Finding number of windows count
    const allPages = context.pages();
    console.log('Number of pages/windows created:', allPages.length);
    // Navigating to different applications
    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    const title1 = await page1.title();
    console.log('Page 1 Title:', title1);
    await expect(page1).toHaveTitle('OrangeHRM');
    await page2.goto('https://orangehrm.com/');
    const title2 = await page2.title();
    console.log('Page 2 Title:', title2);
    await expect(page2).toHaveTitle('OrangeHRM: All in One HR Software for Businesses');

});