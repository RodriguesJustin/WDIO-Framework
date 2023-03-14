
import { open, username, password, submit, getErrorMessage } from '../pageobjects/login.page.js';

describe('Login functionality', () => {
    it('should allow user to login with valid credentials', () => {
        open();
        username.setValue('standard_user');
        password.setValue('secret_sauce');
        submit();
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });
    browser.pause(5000);
    it('should display error message with invalid credentials', () => {
        open();
        username.setValue('invalidusername');
        password.setValue('invalidpassword');
        submit();
        const errorMsg = getErrorMessage();
        expect(errorMsg).toEqual('Epic sadface: Username is required');
    });
});


