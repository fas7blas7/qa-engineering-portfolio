using TestProject.Core;
using TestProject.Flows;
using TestProject.Pages;

namespace TestProject.Tests
{
    public class CartTests : BaseTest
    {
        [Test]
        public void GoToCart()
        {
            driver.Navigate().GoToUrl(BaseUrl);
            var loginFlow = new LoginFlow(driver);
            loginFlow.LoginAsStandardUser();

            var cartPage = new CartPage(driver);
            cartPage.GoToCart();

            Assert.That(driver.Url, Is.EqualTo($"{BaseUrl}cart.html"));
        }

        [Test]
        public void GetCartItemCount()
        {
            driver.Navigate().GoToUrl(BaseUrl);
            var loginFlow = new LoginFlow(driver);
            loginFlow.LoginAsStandardUser();

            var inventoryPage = new InventoryPage(driver);
            inventoryPage.IsPageLoaded();
            inventoryPage.AddToCartByName("Sauce Labs Backpack");

            var cartPage = new CartPage(driver);
            cartPage.GoToCart();
            cartPage.GetCartItemCount();

            Assert.That(cartPage.GetCartItemCount(), Is.EqualTo(1));
        }

        [Test]
        public void ProductExistsInCart()
        {
            driver.Navigate().GoToUrl(BaseUrl);
            var loginFlow = new LoginFlow(driver);
            loginFlow.LoginAsStandardUser();

            var inventoryPage = new InventoryPage(driver);
            inventoryPage.IsPageLoaded();
            var productName = "Sauce Labs Backpack";
            inventoryPage.AddToCartByName(productName);

            var cartPage = new CartPage(driver);
            cartPage.GoToCart();
            cartPage.ProductExistsInCart(productName);

            Assert.That(cartPage.ProductExistsInCart(productName), Is.True);
        }

        [Test]
        public void SpecificProductRemains()
        {
            driver.Navigate().GoToUrl(BaseUrl);
            var loginFlow = new LoginFlow(driver);
            loginFlow.LoginAsStandardUser();

            var inventoryPage = new InventoryPage(driver);
            inventoryPage.IsPageLoaded();

            inventoryPage.AddAllProducts();
            
            var cartPage = new CartPage(driver);
            var keepProductName = "Sauce Labs Onesie";
            cartPage.GoToCart();
            cartPage.RemoveAllExcept(keepProductName);

            Assert.That(cartPage.ProductExistsInCart("Sauce Labs Onesie"));
        }

        [Test]
        public void ContinueShopping()
        {
            driver.Navigate().GoToUrl(BaseUrl);
            var loginFlow = new LoginFlow(driver);
            loginFlow.LoginAsStandardUser();

            var cartPage = new CartPage(driver);
            cartPage.GoToCart();
            cartPage.ContinueShopping();

            Assert.That(driver.Url, Is.EqualTo($"{BaseUrl}inventory.html"));
        }

        [Test]
        public void IsCartEmpty()
        {
            driver.Navigate().GoToUrl(BaseUrl);
            var loginFlow = new LoginFlow(driver);
            loginFlow.LoginAsStandardUser();

            var inventoryPage = new InventoryPage(driver);
            inventoryPage.IsPageLoaded();

            inventoryPage.AddToCartByName("Sauce Labs Backpack");

            var cartPage = new CartPage(driver);
            cartPage.GoToCart();

            Assert.That(cartPage.IsCartEmpty(), Is.False);
        }

        [Test]
        public void RemoveProductByName()
        {
            var loginFlow = new LoginFlow(driver);
            loginFlow.LoginAsStandardUser();

            var inventoryPage = new InventoryPage(driver);
            inventoryPage.IsPageLoaded();

            var productName = "Sauce Labs Bike Light";
            inventoryPage.AddToCartByName(productName);

            var cartPage = new CartPage(driver);
            cartPage.GoToCart();

            Assert.That(cartPage.IsCartEmpty(), Is.False);
            
            cartPage.RemoveProductByName(productName);

            Assert.That(cartPage.IsCartEmpty(), Is.True);
        }

        [Test]
        public void Checkout()
        {
            driver.Navigate().GoToUrl(BaseUrl);
            var loginFlow = new LoginFlow(driver);
            loginFlow.LoginAsStandardUser();

            var inventoryPage = new InventoryPage(driver);
            inventoryPage.IsPageLoaded();

            inventoryPage.AddToCartByName("Sauce Labs Backpack");

            var cartPage = new CartPage(driver);
            cartPage.GoToCart();

            Assert.That(cartPage.IsCartEmpty(), Is.False);

            cartPage.Checkout();

            Assert.That(driver.Url, Is.EqualTo(BaseUrl + "checkout-step-one.html"));
        }
    }
}
