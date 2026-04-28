
import { test, expect, chromium } from '@playwright/test';

test('1st Test -- DemoBlaze.com', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');
    const demoBlazePageTitle = await page.title();
    console.log('Demo Blaze Page title is:', demoBlazePageTitle);
    await expect(page).toHaveTitle('STORE');
});

test('2nd Test -- OrangeHRM.com', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    const orangeHRMPageTitle = await page.title();
    console.log('OrangeHRM page title is:', orangeHRMPageTitle);
    await expect(page).toHaveTitle('OrangeHRM');
});

test('3rd Test -- YourStore.com', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    const yourStorePageTitle = await page.title();
    console.log('YourStore page title is:', yourStorePageTitle);
    await expect(page).toHaveTitle('Account Login');
});




