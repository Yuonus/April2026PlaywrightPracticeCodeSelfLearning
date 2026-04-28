
import { test, expect, chromium } from '@playwright/test'; // ES6 Module

test('Handling New Pages/Windows', async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page1 = await context.newPage();
    // Finding number of windows count
    const allPages = context.pages();
    console.log('Number of pages/windows created:', allPages.length);

    // Navigating to different applications
    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    const title1 = await page1.title();
    console.log('Parent window Title:', title1);
    await expect(page1).toHaveTitle('OrangeHRM');

    // triggering the event
    const pagePromise = context.waitForEvent('page');
    await page1.locator("//a[text()='OrangeHRM, Inc']").click();

    const newPage = await pagePromise;

    const newPageTitle = await newPage.title();
    console.log('Child window Title:', newPageTitle);
    await expect(newPage).toHaveTitle('OrangeHRM: All in One HR Software for Businesses');
    // URL verification
    const newPageURL = await newPage.url();
    console.log('Child window URL is:', newPageURL);
    await expect(newPageURL).toContain('orangehrm.com');
    // Waiting time
    await page1.waitForTimeout(2000);
    await newPage.waitForTimeout(2000);

    //Closing the browser
    await browser.close();

});