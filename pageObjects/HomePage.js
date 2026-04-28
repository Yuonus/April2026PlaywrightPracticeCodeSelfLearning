
export class HomePage {

    // Page Constructor
    constructor(page) {
        this.page = page;
        this.productLists = page.locator("//div[@id='tbodyid']//h4[@class='card-title']/a[@class='hrefch']");
        this.addToCartBtn = page.locator("//a[text()='Add to cart']");
        this.cart = page.locator('#cartur');

    }

    // Page Methods
    async addProductToCart(productName) {

        const productsCount = await this.productLists.count();

        for (let i = 0; i < productsCount; i++) {
            const productText = await this.productLists.nth(i).textContent();

            if (productText.trim() === productName) {
                await this.productLists.nth(i).click();
                break;
            }
        }

        await this.page.on('dialog', async dialog => {
            if (dialog.message().includes('added')) {
                await dialog.accept();
            }
        });

        await this.addToCartBtn.click();
    }



    // // Using $$() method
    // async addProductToCart(productName) {
    //     const productList = await this.page.$$(this.productLists);
    //     for (const product of productList) {

    //         if (productName === await product.textContent()) {
    //             await product.click();
    //             break;
    //         }
    //     }

    //     await this.page.on('dialog', async dialog => {
    //         if (dialog.message().includes('added')) {
    //             await dialog.accept();
    //         }
    //     });

    //     await this.page.click(this.addToCartBtn);
    // }

    async navigateToCart() {
        await this.cart.click();
    }

}





