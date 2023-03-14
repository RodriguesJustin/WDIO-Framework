
//const LoginPage = require('../pageobjects/login.page.js');
import LoginPage from '../pageobjects/login.page'
describe('Login functionality', () => {
    beforeEach(() => {
        LoginPage.open();
        console.log
      });
    it('should allow user to login with valid credentials', async () => {
       // LoginPage.open();
        LoginPage.usernameInput.setValue('standarduser');
        LoginPage.passwordInput.setValue('pwd');
        LoginPage.submit();
       await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });
  
   /* it('should display error message with invalid credentials', () => {
        LoginPage.open();
       // browser.url("https://www.saucedemo.com/")
       // LoginPage.usernameInput.setValue('invalidusername');
       // LoginPage.passwordInput.setValue('invalidpassword');
        LoginPage.submit();

        LoginPage.errorMessage.waitForExist();
        expect(LoginPage.isErrorMessageDisplayed()).toBe(true);
        expect(LoginPage.getErrorMessageText()).toBe('Epic sadface: Username and password do not match any user in this service');
    });
    */
});


