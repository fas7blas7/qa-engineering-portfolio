const { test, expect } = require('@playwright/test');

test.describe("OpenCart Admin Panel", () => {

    test("successfull login with valid credentials", async ({ page }) => {

        // 1. Navigate to login page
        await page.goto('http://127.0.0.1/adminqa', { waitUntil: 'domcontentloaded' });
        await page.waitForSelector('#input-username', { timeout: 20000 });

        // 2. Fill in username
        await page.fill("#input-username", "admin");

        // 3. Fill in password
        await page.fill("#input-password", "admin");

        // 4. Click Login Button
        await page.click('button[type="submit"]');

        // 5. Assert dashboard loaded
        await expect(page).toHaveURL(/route=common\/dashboard/);

        // 6. Assert UI
        await expect(page.locator('h1')).toBeVisible();
        await expect(page.locator('h1')).toHaveText('Dashboard');
    });    
});

test.describe("Invalid login", () => {

    test("Login fails with invalid credentials", async ({ page }) => {
        
        // 1. Navigate to login page
        await page.goto('http://127.0.0.1/adminqa', { waitUntil: 'domcontentloaded' });
        await page.waitForSelector('#input-username', { timeout: 20000 });

        // 2. Fill in username
        await page.fill("#input-username", "wrong-username");

        // 3. Fill in password
        await page.fill("#input-password", "wrong-password");

        // 4. Click Login Button
        await page.click('button[type="submit"]');

        // 5. Assert error message
        await expect(page.locator('.alert-danger')).toContainText("No match for Username and/or Password.");
    });

    test("Login fails with empty credentials", async ({ page }) => {
        // 1. Navigate to login page
        await page.goto('http://127.0.0.1/adminqa', { waitUntil: 'domcontentloaded' });
        await page.waitForSelector('#input-username', { timeout: 20000 });

        // 2. Fill in username
        await page.fill("#input-username", "");

        // 3. Fill in password
        await page.fill("#input-password", "");

        // 4. Click Login Button
        await page.click('button[type="submit"]'); 
        
        const alertMsg = page.locator('[class="alert alert-danger alert-dismissible"]');
        await expect(alertMsg).toBeVisible();
        await expect(alertMsg).toContainText('No match for Username and/or Password.');
        console.log("✅ Correct Alert Appeared");
    });
});