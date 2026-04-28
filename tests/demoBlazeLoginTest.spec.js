

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  // Extra Steps -- This steps is generated when the user first click the username input field (not required needs to be removed)
  // await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('pavanol');
  // Extra step
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('test@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();

  // Just leaving the extra steps for observance but it is recommended to remove them in the code
  // I am just leaving it here so the reader could easily notice them
});