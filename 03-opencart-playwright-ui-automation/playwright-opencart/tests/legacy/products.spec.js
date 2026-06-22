const { test, expect } = require('@playwright/test');

  test.describe('Product Management Flow', () => {

  const createdProduct = `TestProd-${Date.now()}`;
  const editedProduct = `EditedProduct-${Date.now()}`;

  test('Add product successfully', async ({ page }) => {

    await page.goto('http://127.0.0.1/adminqa');

    await page.fill('#input-username', 'admin');
    await page.fill('#input-password', 'admin');
    await page.click('button[type="submit"]');

    await page.click('#menu-catalog');
    await page.click('text=Products');

    await page.click('[class="btn btn-primary"]');

    await page.fill('#input-name-1', createdProduct);
    await page.fill('#input-meta-title-1', 'newprdct');

    await page.click('[href="#tab-data"]');
    await page.fill('#input-model', '101');

    await page.click('[href="#tab-seo"]');

    const seoUrl = `seo-url-${Date.now()}`;
    await page.fill('[name="product_seo_url[0][1]"]', seoUrl);

    await page.click('button[type="submit"]');
    await expect(page.locator('.alert-success')).toBeVisible();
    
    await page.click('#menu-dashboard');
    await page.click('#menu-catalog');
    await page.click('text=Products');
    // IMPORTANT: verify product exists
    await page.fill('#input-name', createdProduct);
    await page.click('#button-filter');

    const row = page.locator('#form-product tbody tr')
                    .filter({ hasText: createdProduct });

    await expect(row).toBeVisible();
});

  test('Edit product', async ({ page }) => {

    await page.goto('http://127.0.0.1/adminqa');
    
    await page.fill('#input-username', 'admin');
    await page.fill('#input-password', 'admin');
    await page.click('button[type="submit"]');    
    
    await page.click('#menu-catalog');
    await page.click('text=Products');
    
    await page.fill('#input-name', createdProduct);
    await page.click('#button-filter');
    
    const row = page.locator('#form-product tbody tr')
      .filter({ hasText: createdProduct });
    
    await expect(row).toBeVisible();
    
    await row.locator('[title="Edit"]').click();
    
    await page.fill('#input-name-1', editedProduct);
    await page.click('.btn.btn-primary');
    
    await expect(page.locator('.alert-success')).toBeVisible();
    
    // verify edit persisted
    await page.click('#menu-dashboard');
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    await page.click('#menu-catalog');
    await page.click('text=Products');
    await page.fill('#input-name', editedProduct);
    await page.click('#button-filter');
    
    await expect(page.locator('table')).toContainText(editedProduct);
});

  test('Delete product', async ({ page }) => {

    await page.goto('http://127.0.0.1/adminqa');

    await page.fill('#input-username', 'admin');
    await page.fill('#input-password', 'admin');
    await page.click('button[type="submit"]');

    await page.click('#menu-dashboard');
    await page.click('#menu-catalog');
    await page.click('text=Products');

    await page.fill('#input-name', editedProduct);
    await page.click('#button-filter');

    const row = page.locator('#form-product tbody tr')
      .filter({ hasText: editedProduct });

    await expect(row).toBeVisible();

    // ensure table finished updating after filter
    await page.waitForTimeout(300); // small controlled stabilization

    const checkbox = row.locator('input[type="checkbox"]');

    // re-evaluate locator right before action
    await expect(checkbox).toBeVisible();

    await checkbox.check({ force: true });

    // MUST register BEFORE click
    page.once('dialog', async dialog => {
      await page.waitForTimeout(1000);
      await dialog.accept();
    });

    await page.click('button.btn.btn-danger');

    // WAIT for UI update (THIS FIXES HEADLESS ISSUE)
    await expect(page.locator('.alert-success')).toBeVisible();

    await page.click('#menu-dashboard');
    await page.click('#menu-catalog');
    await page.click('text=Products');

    await page.fill('#input-name', editedProduct);
    await page.click('#button-filter');

    const deletedRow = page.locator('#form-product tbody tr')
      .filter({ hasText: "No results!" });

    await expect(deletedRow).toBeVisible()
  });

});