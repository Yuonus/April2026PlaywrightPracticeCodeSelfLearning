
const { test, expect } = require('@playwright/test');

test.skip('Alert Handling', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Triggering Dialog Window Handler (This enables alert handling)
    page.on('dialog', async dialog => {
        // Verifying dialog type
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        console.log('Alert message:', dialog.message());
        await dialog.accept(); // closing the dialog
    });
    // Trigger the alert by clicking the button
    // await page.locator("button#alertBtn[onclick='myFunctionAlert()']").click();
    // or 
    await page.click("button#alertBtn[onclick='myFunctionAlert()']");
    await page.waitForTimeout(3000); // Optional: wait to visually see the alert

});

test.skip('Confirm Dialog Handling', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Triggering Dialog Window Handler (This enables confirm handling)
    page.on('dialog', async dialog => {
        // Verifying dialog type
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        console.log('Confirm message:', dialog.message());
        // await dialog.accept(); // closing the dialog by clicking Ok button
        await dialog.dismiss(); // closing the confirm dialog by clicking the cancel
    });
    // Trigger the confirm by clicking the Confirmation Alert button
    // await page.locator("button#confirmBtn[onclick='myFunctionConfirm()']").click();
    // or 
    await page.click("button#confirmBtn[onclick='myFunctionConfirm()']");
    // Verification: If Ok button is clicked
    // const okConfirmationMessage = await page.locator('#demo').textContent();
    // console.log("Message after clicking the confirm's Ok:", okConfirmationMessage);
    // await expect(okConfirmationMessage).toContain('You pressed OK!');

    // Verification: If Cancel button is clicked
    const cancelConfirmationMessage = await page.locator('#demo').textContent();
    console.log("Message after clicking the confirm's Cancel button:", cancelConfirmationMessage);
    await expect(cancelConfirmationMessage).toContain('You pressed Cancel!');
    await page.waitForTimeout(3000); // Optional: wait to visually see the alert

});

test('Prompt Dialog Handling', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Triggering Dialog Window Handler (This enables prompt handling)
    page.on('dialog', async dialog => {
        // Verifying dialog type
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        console.log('Prompt message:', dialog.message());
        expect(dialog.defaultValue()).toContain('Harry Potter');
        console.log('Prompt default text:', dialog.defaultValue());
        await dialog.accept('S_Tech'); // closing the dialog by clicking Ok button
        // await dialog.dismiss('S_Tech'); // closing the confirm dialog by clicking the cancel
    });
    // Trigger the Prompt by clicking the Prompt Alert button
    await page.locator("#promptBtn[onclick]").click();

      // Verification: If Ok button is clicked
    const okPromptMessage = await page.locator('#demo').textContent();
    console.log("Message after clicking the Prompt's Ok:", okPromptMessage);
    await expect(okPromptMessage).toContain('Hello S_Tech! How are you today?')

          // Verification: If Prompt Cancel button is clicked
    // const cancelPromptMessage = await page.locator('#demo').textContent();
    // console.log("Message after clicking the Prompt's Ok:", cancelPromptMessage);
    // await expect(cancelPromptMessage).toContain('User cancelled the prompt.')

    await page.waitForTimeout(3000); // Optional: wait to visually see the alert

});


