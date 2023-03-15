
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
       await expect(browser).toHaveUrl('http://uitestingplayground.com/sampleapp');
    });
      
    it('should display error message with invalid credentials', async () => {
        const loginstatus = await $('#loginstatus')
         LoginPage.usernameInput.setValue('invalidusername');
         LoginPage.passwordInput.setValue('invalidpassword');
         LoginPage.submit();
         LoginPage.errorMessage.waitForExist({timeout: 2000});
         expect(loginstatus).toHaveId('loginstatus');
          
        });
    });
