const { test, expect } = require('@playwright/test');

//const { adminLogin } = require('../utils/login'); nested login for tests comfortability and avoiding repeating code
const createdProducts = [];

test.describe('Product Management', () => {

  
  test('Add product successfully', async ({ page }) => {

    await page.goto('http://localhost:80/opencart/upload/adminqa');

    await page.fill('#input-username', 'admin');

    await page.fill('#input-password', 'admin');

    await page.click('button[type="submit"]');

    // 1. Click Catalog Collapse Menu
    await page.click('[id="menu-catalog"]');

    // 2. Click Products
    await page.click('text=Products');
    
    // 3. Click Add New button
    await page.click('[class="btn btn-primary"]');
    
    // 4. Enter product name
    const random = Math.floor(Math.random() * 1000);
    const productName = `TestProd${random}`;

    createdProducts.push(productName);

    console.log(createdProducts);

    await page.click('[id="input-name-1"]');
    await page.fill('[id="input-name-1"]', productName);
    
    // 5. Enter Meta tag Title 
    await page.click('[id="input-meta-title-1"]');
    await page.fill('[id="input-meta-title-1"]', 'newprdct');
    
    // 6. Click Data Tab
    await page.click('[href="#tab-data"]');
    
    // 7. Enter model name
    await page.click('[id="input-model"]');
    await page.fill('[id="input-model"]', '101');
    
    // 8. Click SEO Tab
    await page.click('[href="#tab-seo"]');    
    // 9. Enter SEO Keyword
    
    const randomSEO = Math.floor(Math.random() * 10000);
    const seoUrl = `seo-url-${randomSEO}`

    await page.click('[name="product_seo_url[0][1]"]');
    await page.fill('[name="product_seo_url[0][1]"]', seoUrl);

    // 10. Click Save button
    await page.click('button[type="submit"]');

    // 11. Assert creation    
    await expect(page.locator('.alert-success')).toBeVisible();

    const alertMsg = page.locator('.alert-success');
    if(await alertMsg.isVisible()) {
      console.log("✅ Success Alert Appeared");
    };
    
  });

  test('Edit product', async ({ page }) => {

    await page.goto('http://localhost:80/opencart/upload/adminqa');

    await page.fill('#input-username', 'admin');
    await page.fill('#input-password', 'admin');
    await page.click('button[type="submit"]');
    // 1. Click Catalog Collapse Menu
    await page.click('#menu-catalog');

    // 2. Click Products
    await page.click('text=Products');

    // 3. Fill product name in filters
    await page.fill('#input-name', createdProducts[0])
    
    // 4. Click Filter button
    await page.click('#button-filter');

    // 5. Assert product is visible in table
    await expect(page.locator('table')).toContainText(createdProducts[0]);
    console.log("✅ Correct Element found", createdProducts[0])

    // 6. Mark and Edit the product
    await page.click('.form-check-input');
    await page.click('[title="Edit"]');
    const random = Math.floor(Math.random() * 10000);
    const editedProduct = `EditedProduct-${random}`;
    await page.fill('#input-name-1', editedProduct);
    await page.click('.btn.btn-primary');

    // 11. Assert successful edit    
    await expect(page.locator('.alert-success')).toBeVisible();

    const alertMsg = page.locator('.alert-success');
    if(await alertMsg.isVisible()) {
      console.log("✅ Success Alert Appeared");
    };

  });

  test('Delete product', async ({ page }) => {

    await page.goto('http://localhost:80/opencart/upload/adminqa');

    await page.fill('#input-username', 'admin');
    await page.fill('#input-password', 'admin');
    await page.click('button[type="submit"]');

    // 1. Click Catalog Collapse Menu
    await page.click('[id="menu-catalog"]');

    // 2. Click Products
    await page.click('text=Products');

    // 3. Click Add New button
    await page.click('[class="btn btn-primary"]');
    
    // 4. Enter product name
    const random = Math.floor(Math.random() * 1000);
    const productName = `TestProd${random}`;

    createdProducts.push(productName);

    console.log(createdProducts);

    await page.click('[id="input-name-1"]');
    await page.fill('[id="input-name-1"]', productName);
    
    // 5. Enter Meta tag Title 
    await page.click('[id="input-meta-title-1"]');
    await page.fill('[id="input-meta-title-1"]', 'newprdct');
    
    // 6. Click Data Tab
    await page.click('[href="#tab-data"]');
    
    // 7. Enter model name
    await page.click('[id="input-model"]');
    await page.fill('[id="input-model"]', '101');
    
    // 8. Click SEO Tab
    await page.click('[href="#tab-seo"]');    

    // 9. Enter SEO Keyword    
    const randomSEO = Math.floor(Math.random() * 10000);
    const seoUrl = `seo-url-${randomSEO}`

    await page.click('[name="product_seo_url[0][1]"]');
    await page.fill('[name="product_seo_url[0][1]"]', seoUrl);

    // 10. Click Save button
    await page.click('button[type="submit"]');

    // 11. Assert creation    
    await expect(page.locator('.alert-success')).toBeVisible();  

    // 12. Filter the product for deletion
    await page.click('#collapse-1 > li.active > a');    
    await page.fill('#input-name', createdProducts[0]);
    await page.click('.form-check-input');

    page.on('dialog', async dialog => {
      console.log(dialog.message());
      await page.waitForTimeout(2000);
      await dialog.accept();

    });

    await page.click('#content > div.page-header > div > div > button.btn.btn-danger');

    const alertMsg = page.locator('.alert-success');
      if(await alertMsg.isVisible()) {
      console.log("✅ Success Alert Appeared");
      };

      await page.reload();

      await page.locator('#input-name').fill(productName);
      await page.locator('#button-filter').click();
      await expect(page.locator('table')).not.toContainText(productName);   

  });

});