class LoginPage {
    get usernameInput() {
      return $('#username')
    }
  
    get passwordInput() {
      return $('#password')
    }
  
    get loginButton() {
      return $('#login-button')
    }
  
    open() {
      browser.url('/')
    }
  
    login(username, password) {
      this.usernameInput.setValue(username)
      this.passwordInput.setValue(password)
      this.loginButton.click()
    }
  
    get errorMessage() {
      return $('#error')
    }
  
    isErrorMessageDisplayed() {
      return this.errorMessage.isDisplayed()
    }
    getErrorMessageText () {
        if (this.isErrorMessageDisplayed()) {
          return this.errorAlert.getText()
        } else {
          return ''
        }
    }
  }
  
  export default new LoginPage()
  