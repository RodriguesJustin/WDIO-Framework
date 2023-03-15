class LoginPage {
    get usernameInput() {
      return $('input[name="UserName"]'); 
    }
  
    get passwordInput() {
      return $('input[name="Password"]');
    }
  
    get loginButton() {
      return $('#login');
    }
  
    get errorMessage() {
      return $('#loginstatus');
    }
    
  
    async  open() {
    await  browser.url('/sampleapp');
    }
    submit() {
        this.loginButton.click()
    }

    login(username, password) {
      this.usernameInput.setValue(username);
      this.passwordInput.setValue(password);
      this.loginButton.click();
    }
  
    waitForLoginPage() {
      this.usernameInput.waitForExist();
      this.passwordInput.waitForExist();
      this.loginButton.waitForExist();
      this.errorMessage.waitForExist();
    }
  
    isErrorMessageDisplayed() {
        return this.errorMessage.toHaveText();
      }
    
    getErrorMessageText() {
        if (this.isErrorMessageDisplayed()) {
          return this.errorMessage.getText();
        } else {
          return '';
        }
      }
    }
  
  export default new LoginPage();
  
  