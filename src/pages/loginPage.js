exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;

    this.usernameField = 'username'
    this.passwordField = 'password'
    this.loginBtn = 'login-button'
  }

  async inputUsername(username){
    await this.page.getByTestId(this.usernameField).type(username)
  }

  async inputPassword(password){
    await this.page.getByTestId(this.passwordField).type(password)
  }

  async clickLoginBtn(){
    await this.page.getByTestId(this.loginBtn).click()
  }

  async login(username, password){
    await this.inputUsername(username)
    await this.inputPassword(password)
    await this.clickLoginBtn()
  }
}