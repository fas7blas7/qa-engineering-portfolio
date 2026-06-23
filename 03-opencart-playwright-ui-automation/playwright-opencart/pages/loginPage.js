class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('http://127.0.0.1/adminqa/index.php?route=common/login/', {
       waitUntil: 'domcontentloaded' });
   
       await this.page.locator('#input-username').waitFor({ timeout: 60000 });    
  };

  async login(username, password) {    
    await this.page.fill('#input-username', "admin");
    await this.page.fill('#input-password', "admin");
    await this.page.click('button[type="submit"]');
  }
};

module.exports = { LoginPage };