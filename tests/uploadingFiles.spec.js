
const { test, expect } = require('@playwright/test');

test.skip('Handling Single File Upload', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/upload');
    // await page.locator('#file-upload').click();
    await page.locator('#file-upload').setInputFiles('tests/uploadFiles/Test1.pdf');
    await page.locator('#file-submit').click();
    const uploadedFileText = await page.locator('h3').textContent();
    console.log('Uploaded File Confirmation:', uploadedFileText);
    await expect(page.locator('h3')).toHaveText('File Uploaded!');
    await page.waitForTimeout(2000);
});

test('Handling Multiple File Upload', async ({ page }) => {
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
    await page.locator('#filesToUpload').setInputFiles([
        'tests/uploadFiles/Test1.pdf',
        'tests/uploadFiles/Test2.pdf'
    ]);
    const successMessage = await page.locator("//strong[text()='Files You Selected:']").textContent();
    console.log('Multiple files confirmation message:', successMessage);
    await expect(page.locator("//strong[text()='Files You Selected:']")).toHaveText('Files You Selected:');

    // Verifying the Texts of the File
    // await expect(page.locator('#fileList li:nth-child(1)')).toHaveText('Test1.pdf');
    // await expect(page.locator('#fileList li:nth-child(2)')).toHaveText('Test2.pdf');

    // Instead of checking each file manually, you can validate both in one go:
    await expect(page.locator('#fileList li')).toHaveText([
        'Test1.pdf',
        'Test2.pdf'
    ]);

    await page.waitForTimeout(3000);

    // File Removal
    await page.locator('#filesToUpload').setInputFiles([]);
    // Removal Verification
    const filesRemovalText = await page.locator('#fileList li').textContent();
    console.log('Removed/Cleared File Confirmation:', filesRemovalText);
    await expect(page.locator('#fileList li')).toHaveText('No Files Selected');


    await page.waitForTimeout(3000);
});

