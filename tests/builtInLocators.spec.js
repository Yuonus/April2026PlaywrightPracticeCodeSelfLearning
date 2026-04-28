
/*
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByPlaceholder() to locate an input by placeholder.
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
*/


const { test, expect } = require('@playwright/test');

test('Playwright Semantic Locators', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    const logo = page.getByAltText('company-branding');
    await expect(logo).toBeVisible();

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { type: 'submit' }).click();

    // This test migh break as the user name is dynamically changing
    // await expect(await page.getByText('João Souza')).toBeVisible();

    // dynamically capturing the user name
    const userProfileName = await page.locator("//p[@class='oxd-userdropdown-name']").textContent();
    console.log('User name is: ' + userProfileName);

    const dashBoardText = await page.locator("//h6[text()='Dashboard']").textContent();
    console.log("The Header of the application is: ", dashBoardText);
    await expect(dashBoardText).toBeVisible();
})



