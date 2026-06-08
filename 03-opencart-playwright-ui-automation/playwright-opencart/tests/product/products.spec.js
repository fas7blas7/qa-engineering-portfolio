const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/loginPage.js');
const { ProductPage } = require('../../pages/productPage.js')
const { deleteTestProduct } = require('../../utils/testData');

test.describe('Product Management', () => {

  test.beforeEach(async ({ page }) => {

    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login();

  });

  test('Add product successfully', async ({ page }) => {

    const productPage = new ProductPage(page);
    const productName = await productPage.createProduct()

    // Assert creation 
    const alertMsg = page.locator('.alert-success');   
    await expect (alertMsg).toBeVisible();
    await expect (alertMsg).toContainText("Success: You have modified products!");
    console.log("✅ Correct Alert Appeared", productName);
    
     await deleteTestProduct(productPage, productName);
    
  });

  test('Edit product', async ({ page }) => {

    const productPage = new ProductPage(page);
    const productName = await productPage.createProduct();   
        
    const editedProduct = await productPage.editProduct(productName);
    const alertMsg = page.locator('.alert-success');
    await expect(alertMsg).toBeVisible();
    console.log(`✅ Success Alert Appeared for ${editedProduct}`);
    
    await productPage.openProductsPage();
    //  Assert successful edit      
    await expect(page.locator('#form-product tbody tr').filter({hasText: editedProduct})).toContainText(editedProduct);    
    
     await deleteTestProduct(productPage, editedProduct);

  });

  test('Delete product', async ({ page }) => {
    
    const productPage = new ProductPage(page);
    const productName = await productPage.createProduct();
    await productPage.deleteProduct(productName);
    
    const alertMsg = page.locator('.alert-success');
    
    // Assert creation 
    await expect (alertMsg).toBeVisible();    
    console.log("✅ Correct Alert Appeared", productName);    

    await expect (alertMsg).toBeVisible();
    await expect (alertMsg).toContainText("Success: You have modified products!");
    
    console.log("✅ Success Alert Appeared");  

  });

});