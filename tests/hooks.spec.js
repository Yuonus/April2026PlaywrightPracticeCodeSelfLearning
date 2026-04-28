
const { test, expect } = require('@playwright/test');

test('Home Page Test --- No Hooks', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');
    // Login
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.fill('#loginpassword', 'test@123');
    await page.locator("button[onclick='logIn()']").click();
    const products = await page.$$('.hrefch');
    expect(products).toHaveLength(9);
    // Logout
    await page.locator('#logout2').click();

    await page.waitForTimeout(2000);

});

test('Product addition to the cart', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');
    // Login
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.fill('#loginpassword', 'test@123');
    await page.locator("button[onclick='logIn()']").click();

    // Adding products to the cart
    await page.locator("//a[text()='Samsung galaxy s6']").click();
    await page.locator("//a[text()='Add to cart']").click();

    // Handling Alert
    page.on('dialog', async dialog=>{
        expect(dialog.message()).toContain('Product added.');
        await dialog.accept();
    });

    // Logout
    await page.locator('#logout2').click();


});

