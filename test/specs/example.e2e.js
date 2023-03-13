
const LoginPage = require('../pageobjects/login.page');

describe('Login functionality', () => {
    it('should allow user to login with valid credentials', () => {
        LoginPage.open();
        LoginPage.username.setValue('standard_user');
        LoginPage.password.setValue('secret_sauce');
        LoginPage.submit();
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });
    browser.pause(5000);
    it('should display error message with invalid credentials', () => {
        LoginPage.open();
        LoginPage.username.setValue('invalidusername');
        LoginPage.password.setValue('invalidpassword');
        LoginPage.submit();
        const errorMsg = LoginPage.getErrorMessage();
        expect(errorMsg).toEqual('Epic sadface: Username is required');
    });
});


