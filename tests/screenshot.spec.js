
import { test, expect } from '@playwright/test';

test('View Port/Page Screenshot', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    // Adds the screenshots into the project root directory
    // await page.screenshot({path: 'HomePage.png'});

    // Configuring a separate Folder for screenshots
    // await page.screenshot({path: 'tests/screenshots/' + 'HomePage.png'});
    // await page.screenshot({ path: 'tests/screenshots/HomePage.png'}); // No Concatenation

    // keeping track of all previous screenshots
    //  await page.screenshot({path: 'tests/screenshots/' + Date.now() + 'HomePage.png'});
    await page.screenshot({ path: 'tests/screenshots/HomePage-' + Date.now() + '.png' })

});

test('Full Page Screenshot', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    // await page.screenshot({ path: 'FullScreenPicutre.png', fullPage: true }); // Adds the screenshots into the project root directory
    await page.screenshot({ path: 'FullScreenPicture-' + Date.now() + '.png', fullPage: true });
    await page.screenshot({ path: 'tests/screenshots/' + 'FullScreenPicture-' + Date.now() + '.png', fullPage: true }); // Storing at screenshots folder
    await page.screenshot({ path: 'tests/screenshots/FullScreenPicture-' + Date.now() + '.png', fullPage: true }); // Storing at screenshots folder No Concatenation
});

test.only('Element Screenshot', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    const element = page.locator("img[src = 'img/logos/Browsers.png']");
    await element.screenshot({ path: 'BrowserScreenshot.png' }); // Stores at root directory

    // await element.screenshot({path: 'tests/screenshots/' + 'BrowserScreenshot.png'}); // Stores at screenshots folder
    await element.screenshot({ path: 'tests/screenshots/BrowserScreenshot.png' }); // Stores at screenshots folder -- No Concatenation

    // Overwriting prevention using timestamp
    await element.screenshot({path: 'tests/screenshots/BrowserScreenshot-' + Date.now() + '.png'});

});