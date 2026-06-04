const { test, expect, } = require('@playwright/test');
const { LoginPage } = require('/Users/skyli/Desktop/qa-engineering-portfolio/03-ui-automation/playwright-opencart/pages/loginPage.js');

test.describe("OpenCart Admin Panel", () => {

    test('Login test', async ({ page }) => {

        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('', '');

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