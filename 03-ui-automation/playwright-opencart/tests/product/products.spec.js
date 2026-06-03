const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage.js');
const { ProductPage } = require('../pages/productPage.js')

test.describe('Product Management', () => {

  test('Add product successfully', async ({ page }) => {

    const loginPage = new LoginPage(page)
    await loginPage.goto();
    await loginPage.login();
    
    const productPage = new ProductPage(page);
    const productName = await productPage.createProduct()

    // Assert creation 
    const alertMsg = page.locator('.alert-success');   
    await expect (alertMsg).toBeVisible();
    await expect (alertMsg).toContainText("Success: You have modified products!")
    console.log("✅ Correct Alert Appeared")
    
    
  });

  test('Edit product', async ({ page }) => {
   
    const loginPage = new LoginPage(page)
    await loginPage.goto();
    await loginPage.login();

    const productPage = new ProductPage(page);
    const productName = await productPage.createProduct()     
    console.log("✅ Correct Object found", productName);
    
    const editedProduct = await productPage.editProduct() 
    const alertMsg = page.locator('.alert-success');
    await expect(alertMsg).toBeVisible();
    console.log(`✅ Success Alert Appeared for ${editedProduct}`);
    
    await productPage.openProductsPage()
    //  Assert successful edit      
    await expect(page.locator('#form-product tbody tr').filter({hasText: editedProduct})).toContainText(editedProduct);    
        
  });

  test('Delete product', async ({ page }) => {

    const loginPage = new LoginPage(page)
    await loginPage.goto();
    await loginPage.login();
    
    const productPage = new ProductPage(page);
    const alertMsg = page.locator('.alert-success');
    const productName = await productPage.deleteProduct()

    // Assert creation 
    await expect (alertMsg).toBeVisible();    
    console.log("✅ Correct Alert Appeared", productName);    

    await expect (alertMsg).toBeVisible();
    await expect (alertMsg).toContainText("Success: You have modified products!");
    
    console.log("✅ Success Alert Appeared");  

  });

});

    