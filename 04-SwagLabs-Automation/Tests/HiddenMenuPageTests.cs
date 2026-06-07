using SwagLabs.Pages;

namespace SwagLabs.Tests
{
   [TestFixture]
        public class HiddenMenuTests : BaseTest
        {
        [SetUp]
        public void Login()
        {
            driver.Navigate().GoToUrl("https://www.saucedemo.com/");
            var loginPage = new LoginPage(driver);
            loginPage.Login("standard_user", "secret_sauce");
        }

        [Test]
        public void UserCanLogout()
        {
            var hiddenMenuPage = new HiddenMenuPage(driver);
            hiddenMenuPage.OpenMenu();

            // Verify that the logout button is displayed when the menu is opened
            Assert.That(hiddenMenuPage.IsMenuOpen(), Is.True, "The menu did not open correctly.");
        

            hiddenMenuPage.Logout();

            Assert.That(driver.Url, Is.EqualTo("https://www.saucedemo.com/"));
        }
    }
}
