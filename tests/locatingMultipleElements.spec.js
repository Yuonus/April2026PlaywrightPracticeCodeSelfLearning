
const { test, expect } = require('@playwright/test');

test('LocatingMultipleElements', async ({ page }) => {
    await page.goto('https://demoblaze.com/');

    const pageLinks = await page.$$('a');
    // for (const link of pageLinks) {
    //     const linkTexts = await link.textContent();
    //     console.log(linkTexts)
    // }
    console.log("----- LINKS -----");
    for (let i = 0; i < pageLinks.length; i++) {
        const linkText = await pageLinks[i].textContent();
        console.log(linkText);
    }

    console.log("----- PRODUCTS -----");
    // Locating page products
    await page.waitForSelector("//div[@id='tbodyid']//div//h4//a");
    const products = await page.$$("//div[@id='tbodyid']//div//h4//a");
    // for (const product of products) {
    //     const productName = await product.textContent();

    //     console.log(productName);
    // }
    // Simple for loop
    for (let i = 0; i < products.length; i++) {
        const productName = await products[i].textContent();
        console.log(productName);
    }
    // total number of products
    console.log("Total number of products:", products.length);
})

