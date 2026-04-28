
export class LoginPage {


    // Page Object Repository (Constructor) -- This is the recommended verison 
    constructor(page) {
        this.page = page;
        this.loginLink = page.locator('#login2');
        this.userName = page.locator('#loginusername');
        this.password = page.locator('#loginpassword');
        this.loginBtn = page.locator("button[onclick='logIn()']");
    }

    // Page Object Repository (Constructor) -- raw selectors string
    // constructor(page) {
    //     this.page = page;
    //     this.loginLink = '#login2';
    //     this.userName = '#loginusername';
    //     this.password = '#loginpassword';
    //     this.loginBtn = "button[onclick='logIn()']";
    // }

    async doLogin(usrename, password) {
        await this.loginLink.click();
        await this.userName.fill(usrename);
        await this.password.fill(password);
        await this.loginBtn.click();
    }

    // For raw selectors
    // async doLogin(usrename, password) {
    //     await this.page.locator(this.loginLink).click();
    //     await this.page.locator(this.userName).fill(usrename);
    //     await this.page.locator(this.password).fill(password);
    //     await this.page.locator(this.loginBtn).click();
    // }

    // Page Methods
    async navigateToLoginPage() {
        await this.page.goto('https://www.demoblaze.com/');
    }

}

