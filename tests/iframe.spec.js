
const { test, expect } = require('@playwright/test');

test('Handling iFrames', async ({ page }) => {
    await page.goto('https://demoqa.com/frames');

    await page.waitForSelector('#frame1');
    await page.waitForSelector('#frame2');
    // Finding number of frames
    const allFrames = await page.frames();
    console.log('Numbers of iframes available in this page:', allFrames.length);

    const iframeCount = await page.locator('//iframe').count();
    console.log('iframe elements in DOM:', iframeCount);

    const frames = page.frames();
    console.log('frames loaded:', frames.length);

    const headerOneText = await page.frameLocator('#frame1').locator("//h1[text()='This is a sample page']").textContent();
    console.log('Text of the header 1 inside the iframe:', headerOneText);
    await expect(headerOneText).toContain('This is a sample page')

    const headerTwoText = await page.frameLocator('#frame2').locator("//h1[text()='This is a sample page']").innerText();
    console.log('Text of the header 2 inside the iframe:', headerTwoText);
    await expect(headerTwoText).toContain('This is a sample page')

    const paragraphText = await page.locator("//div[contains(text(),'Sample Iframe page')]").textContent();
    console.log('The paragraph test is', paragraphText);
    await expect(paragraphText).toContain('firebug to check out the HTML source. In');

 }); 
