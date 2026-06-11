using TestProject.Core;
using TestProject.Flows;
using TestProject.Pages;

namespace TestProject.Tests
{

    [TestFixture]
    public class CheckoutTests : BaseTest
    {
        [Test]
        public void TestCheckoutPageLoaded()
        {
            driver.Navigate().GoToUrl(BaseUrl);
            var loginFlow = new LoginFlow(driver);
            loginFlow.LoginAsStandardUser();

            var inventoryPage = new InventoryPage(driver);
            inventoryPage.IsPageLoaded();

            inventoryPage.AddToCartByName("Sauce Labs Backpack");
            var cartPage = new CartPage(driver);
            cartPage.GoToCart();
            cartPage.Checkout();

            var checkoutInfoPage = new CheckoutInfoPage(driver);
            
            Assert.That(checkoutInfoPage.IsPageLoaded(), Is.True, "The checkout page did not load correctly.");
        }

       
        [Test]
        public void TestContinueToNextStep()
        {
            driver.Navigate().GoToUrl(BaseUrl);
            var loginFlow = new LoginFlow(driver);
            loginFlow.LoginAsStandardUser();

            var inventoryPage = new InventoryPage(driver);
            inventoryPage.IsPageLoaded();

            inventoryPage.AddToCartByName("Sauce Labs Backpack");
            var cartPage = new CartPage(driver);
            cartPage.GoToCart();
            cartPage.Checkout();

            var checkoutInfoPage = new CheckoutInfoPage(driver);
            checkoutInfoPage.EnterFirstName("John");
            checkoutInfoPage.EnterLastName("Doe");
            checkoutInfoPage.EnterPostalCode("12345");
            checkoutInfoPage.ClickContinue();

            // Assert that the user is redirected to the next step in the checkout process
            Assert.That(driver.Url.Contains("checkout-step-two.html"), Is.True, "The user was not redirected to the next step in the checkout process.");
        }

        [Test]
        public void TestCompleteOrder()
        {
            driver.Navigate().GoToUrl(BaseUrl);
            var loginFlow = new LoginFlow(driver);
            loginFlow.LoginAsStandardUser();

            var inventoryPage = new InventoryPage(driver);
            inventoryPage.IsPageLoaded();

            inventoryPage.AddToCartByName("Sauce Labs Backpack");
            var cartPage = new CartPage(driver);
            cartPage.GoToCart();
            cartPage.Checkout();

            var checkoutInfoPage = new CheckoutInfoPage(driver);
            checkoutInfoPage.EnterFirstName("John");
            checkoutInfoPage.EnterLastName("Doe");
            checkoutInfoPage.EnterPostalCode("12345");
            checkoutInfoPage.ClickContinue();

            // Click the "Finish" button
            var checkoutOverviewPage = new CheckoutOverviewPage(driver);
            checkoutOverviewPage.ClickFinish();

            // Assert that the user is redirected to the checkout complete page
            Assert.That(driver.Url.Contains("checkout-complete.html"), Is.True, "The user was not redirected to the checkout complete page.");

            // Assert that the order completion message is displayed
            Assert.That(checkoutOverviewPage.IsCheckoutComplete(), Is.True, "The order completion message was not displayed.");
        }
    }
}


