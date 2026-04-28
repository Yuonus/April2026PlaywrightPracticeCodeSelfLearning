
const { test, expect } = require('@playwright/test');

test('Drag and Drop', async ({ page }) => {
    await page.goto('https://www.learnaqa.info/drag-and-drop/');
    const sourceElement = page.locator('#item-1');
    const dropZone = page.locator('#drop-zone');
    const sourceElement2 = page.locator('#item-2');

    // Drag and Drop using dragTo() method
    await sourceElement.dragTo(dropZone);
    // Verification: check item is inside drop zone
    await expect(dropZone).toContainText('Item 1'); // partial string is passed

    // Drag and Drop using the Manual Approach
    await sourceElement2.hover();
    await page.mouse.down(); // This method click and hold the source element
    await dropZone.hover();
    await page.mouse.up(); // This method release the source element into the drop zone
    // Verification: check item is inside drop zone
    await expect(dropZone).toContainText('Item 2'); // partial string is passed

    await page.waitForTimeout(3000);
});


