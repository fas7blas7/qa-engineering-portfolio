using TestProject.Core;
using TestProject.Flows;
using TestProject.Pages;

namespace TestProject.Tests
{

    public class InventoryTests : BaseTest
    {
        [Test]
        public void AddToCartByName()
        {
            driver.Navigate().GoToUrl(BaseUrl);
            var loginFlow = new LoginFlow(driver);
            loginFlow.LoginAsStandardUser();

            var inventoryPage = new InventoryPage(driver);
            inventoryPage.IsPageLoaded();

            inventoryPage.AddToCartByName("Sauce Labs Backpack");
        }

        [Test]
        public void RemoveFromCart()
        {
            driver.Navigate().GoToUrl(BaseUrl);
            var loginFlow = new LoginFlow(driver);
            loginFlow.LoginAsStandardUser();

            var inventoryPage = new InventoryPage(driver);
            inventoryPage.IsPageLoaded();

            var productName = "Sauce Labs Bike Light";
            inventoryPage.AddToCartByName(productName);
            inventoryPage.RemoveProduct(productName);
        }
    }
}
