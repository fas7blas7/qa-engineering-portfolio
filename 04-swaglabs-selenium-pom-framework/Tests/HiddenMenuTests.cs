using OpenQA.Selenium;
using TestProject.Core;
using TestProject.Flows;
using TestProject.Pages;

namespace TestProject.Tests
{
    internal class HiddenMenuTests : BaseTest
    {

        [Test]
        public void NavigateToInventory()
        {
            driver.Navigate().GoToUrl(BaseUrl);
            var loginFlow = new LoginFlow(driver);
            loginFlow.LoginAsStandardUser();

            var cartPage = new CartPage(driver);
            cartPage.GoToCart();

            var hiddenMenuPage = new HiddenMenuPage(driver);
            hiddenMenuPage.ClickBurgerButton();
            hiddenMenuPage.ClickInventoryButton();

            Assert.That(driver.Url, Is.EqualTo(BaseUrl + "inventory.html"));
        }

        [Test]
        public void NavigateToAbout()
        {
            driver.Navigate().GoToUrl(BaseUrl);
            var loginFlow = new LoginFlow(driver);
            loginFlow.LoginAsStandardUser();

            var hiddenMenuPage = new HiddenMenuPage(driver);
            hiddenMenuPage.ClickBurgerButton();
            hiddenMenuPage.ClickAboutButton();

            Assert.That(driver.Url, Is.EqualTo("https://saucelabs.com/"));
        }

        [Test]
        public void Logout()
        {
            driver.Navigate().GoToUrl(BaseUrl);
            var loginFlow = new LoginFlow(driver);
            loginFlow.LoginAsStandardUser();

            var hiddenMenuPage = new HiddenMenuPage(driver);
            hiddenMenuPage.ClickBurgerButton();
            hiddenMenuPage.ClikLogoutButton();

            Assert.That(driver.Url, Is.EqualTo(BaseUrl));
        }
    }
}
