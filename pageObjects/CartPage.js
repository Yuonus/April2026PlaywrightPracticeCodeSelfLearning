export class CartPage {

    constructor(page) {
        this.page = page;
        this.productNames = page.locator("//tbody[@id='tbodyid']//tr/td[2]");
    }

    async isProductInCart(productName) {
        const count = await this.productNames.count();

        for (let i = 0; i < count; i++) {
            const text = (await this.productNames.nth(i).textContent()).trim();

            console.log("Product in cart:", text);

            if (text === productName) {
                return true;
            }
        }

        return false;
    }
}