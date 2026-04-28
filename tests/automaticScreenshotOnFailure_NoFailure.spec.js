const { test, expect } = require('@playwright/test');

test('Screenshot on Failure and No Failure', async({page})=>{
    await page.goto('https://www.demoblaze.com/');
    // await expect(page.locator('#login2')).toBeVisible();
    await expect(page.locator('#login2')).not.toBeVisible(); // For Failure
    await page.locator('#login2').click();
    await page.fill('#loginusername', 'pavanol');
    await page.fill('#loginpassword', 'test@123');
    await page.click("button[onclick='logIn()']");
});