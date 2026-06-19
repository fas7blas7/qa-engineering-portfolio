const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/loginPage');
const { ProductPage } = require('../../pages/productPage')
const { deleteTestProduct, generateProductName, generateSEOKeyword, generateEditedProduct } = require('../../utils/testData');

test.describe('Product Management', () => {

  test.beforeEach(async ({ page }) => {

    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login();
  });

  test('Add product successfully', async ({ page }) => {

    const productPage = new ProductPage(page);
    const productName = generateProductName();
    const seoKeyword = generateSEOKeyword();
    await productPage.createProduct(productName, seoKeyword);

    // Assert creation 
    const alertMsg = page.locator('.alert-success');   
    await expect (alertMsg).toBeVisible();
    await expect (alertMsg).toContainText("Success: You have modified products!");
    console.log("✅ Correct Alert Appeared", productName);
    
     await deleteTestProduct(productPage, productName);    
  });

  test('Edit product', async ({ page }) => {
    await page.pause();
    const productPage = new ProductPage(page);
    const productName = generateProductName();
    const seoKeyword = generateSEOKeyword();
    await productPage.createProduct(productName, seoKeyword);           
    
    const editedProduct = generateEditedProduct();
    await productPage.searchProduct(productName);
    await productPage.editProduct(productName, editedProduct);
    const alertMsg = page.locator('.alert-success');
    await expect(alertMsg).toBeVisible();
    console.log(`✅ Success Alert Appeared for ${editedProduct}`);
    // Open Products Page
    await productPage.openProductsPage();
    //  Assert successful edit      
    await expect(page.locator('#form-product tbody tr').filter({hasText: editedProduct})).toContainText(editedProduct);     
    await productPage.deleteProduct(editedProduct);
  });

  test('Delete product', async ({ page }) => {
    
    const productPage = new ProductPage(page);

    const productName = generateProductName();
    const seoUrl = generateSEOKeyword();
    await productPage.createProduct(productName, seoUrl);

    await productPage.deleteProduct(productName);

    // Assert creation 
    const alertMsg = page.locator('.alert-success');
    await expect (alertMsg).toBeVisible();    
    console.log("✅ Correct Alert Appeared", productName);    

    await expect (alertMsg).toBeVisible();
    await expect (alertMsg).toContainText("Success: You have modified products!");    
    console.log("✅ Success Alert Appeared"); 
  });
});