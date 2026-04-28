const { test, expect } = require('@playwright/test');

let page;

// ---------------- BEFORE EACH (LOGIN) ----------------
test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();

    await page.goto('https://www.demoblaze.com/index.html');

    // Login
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.locator("button[onclick='logIn()']").click();
});

// ---------------- AFTER EACH (LOGOUT) ----------------
test.afterEach(async () => {
    // Logout
    await page.locator('#logout2').click();

    // Close page (good practice since we used browser.newPage())
    await page.close();
});

// ---------------- TEST 1 ----------------
test('Home Page Test --- No Hooks', async () => {
    const products = await page.$$('.hrefch');
    expect(products.length).toBe(9);

    await page.waitForTimeout(2000);
});

// ---------------- TEST 2 ----------------
test('Product addition to the cart', async () => {

    // Handle alert BEFORE triggering action (important fix)
    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Product added');
        await dialog.accept();
    });

    // Add product to cart
    await page.locator("//a[text()='Samsung galaxy s6']").click();
    await page.locator("//a[text()='Add to cart']").click();

    await page.waitForTimeout(2000);
});