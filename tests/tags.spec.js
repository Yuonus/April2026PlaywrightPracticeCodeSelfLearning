
const { test, expect } = require('@playwright/test');

test('1st Test @Smoke', async ({ page }) => {
    console.log('This is my 1st Test ...');
});

test('2nd Test @Smoke', async ({ page }) => {
    console.log('This is my 2nd Test ...');
});

test('3rd Test @Regression', async ({ page }) => {
    console.log('This is my 3rd Test ...');
});

test('4th Test @Regression', async ({ page }) => {
    console.log('This is my 4th Test ...');
});

test('5th Test @Sanity', async ({ page }) => {
    console.log('This is my 5th Test ...');
});

test('6th Test @Regression@Sanity', async ({ page }) => {
    console.log('This is my 6th Test ...');
});

// New Tag Property 
test('7th Test', { tag: ['@Smoke'] }, async ({ page }) => {
    console.log('This is my 7th Test ...');
});

test('8th Test', { tag: ['@adhoc'] }, async ({ page }) => {
    console.log('This is my 8th Test ...');
});
// You can also use Multiple tags with new Tag Property
test('9th Test', { tag: ['@adhoc', '@Smoke'] }, async ({ page }) => {
    console.log('This is my 9th Test ...');
});




