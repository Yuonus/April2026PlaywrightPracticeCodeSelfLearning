
const { test, expect } = require('@playwright/test');

test('1st Test', async ({ page }) => {
    // test.slow();
    test.setTimeout(4000);
    await page.goto('https://www.demoblaze.com/');
    console.log('This is my 1st Test ...');
});

// test('2nd Test', async ({ page }) => {
//     console.log('This is my 2nd Test ...');
// });

// test('3rd Test', async ({ page }) => {
//     console.log('This is my 3rd Test ...');
// });

// test('4th Test', async ({ page }) => {
//     console.log('This is my 4th Test ...');
// });

// test('5th Test', async ({ page }) => {
//     console.log('This is my 5th Test ...');
// });





