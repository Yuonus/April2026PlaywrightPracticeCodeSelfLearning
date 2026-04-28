

import { test, expect } from '@playwright/test';

import { LoginPage } from '../pageObjects/LoginPage';
import { HomePage } from '../pageObjects/HomePage';
import { CartPage } from '../pageObjects/CartPage';

test('Buying Merchandise Full automation', async ({ page }) => {

    // Login Page Test
    // Object of the LoginPage class
    const login = new LoginPage(page);
    await login.navigateToLoginPage();
    await login.doLogin('pavanol', 'test@123');

    // HomePage Test
    // Object of the HomePage class
    const homePage = new HomePage(page);
    await homePage.addProductToCart('Nexus 6');
    await homePage.navigateToCart();
    await page.waitForTimeout(2000);

    // CartPage Test
    // Object of the CartPage class
    const cartPage = new CartPage(page);
    //   await cartPage.isProductInCart('Nexus 6');
    // Verification

    const status = await cartPage.isProductInCart('Nexus 6');
    await expect(status).toBe(true);
});