
//const LoginPage = require('../pageobjects/login.page.js');
import LoginPage from '../pageobjects/login.page'
describe('Login functionality', () => {
    beforeEach(() => {
        LoginPage.open();
        console.log
      });
  
    it('should display error message with invalid credentials', async () => {
      //  LoginPage.open();
      // browser.url("https://www.saucedemo.com/")
      // LoginPage.usernameInput.setValue('invalidusername');
      // LoginPage.passwordInput.setValue('invalidpassword');
       LoginPage.submit();
       LoginPage.errorMessage.waitForExist();
      await expect(LoginPage.isErrorMessageDisplayed()).toBe(true);
      await expect(LoginPage.getErrorMessageText()).toBe('Invalid username/password');
    });
});
