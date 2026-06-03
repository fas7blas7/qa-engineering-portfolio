const { test, expect, } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');

test.describe("OpenCart Admin Panel", () => {

    test('Login test', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login('admin', 'admin');

        await expect(page.locator ('h1')).toContainText("Dashboard");
});
    
});

test.describe("Invalid login", () => {
    test("Login fails with invalid credentials", async ({ page }) => {
        const loginPage = new LoginPage(page);
        
        await loginPage.goto();
        await loginPage.login('wrong-name', 'wrong-pass');    

    });
    
});