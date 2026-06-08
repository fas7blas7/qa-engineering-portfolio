using NUnit.Framework;
using SwagLabs.Pages;

namespace SwagLabs.Tests
{
    public class LoginTests : BaseTest
    {
        [Test]
        public void ValidUserCanLogin()
        {
            driver.Navigate().GoToUrl("https://www.saucedemo.com/");

            var loginPage = new LoginPage(driver);

            loginPage.Login("standard_user", "secret_sauce");

            Assert.That(driver.Url, Is.EqualTo("https://www.saucedemo.com/inventory.html"));
            Console.WriteLine($"Current URL after login: {driver.Url}");
        }

        [Test]
        public void invalidUserCanNotLogin()
        {
            driver.Navigate().GoToUrl("https://www.saucedemo.com/");

            var loginPage = new LoginPage(driver);

            loginPage.Login("wrongname", "wrongpass");

            Assert.That(loginPage.GetErrorMessage(),
                Is.EqualTo("Epic sadface: Username and password do not match any user in this service"));

        }
    }
}