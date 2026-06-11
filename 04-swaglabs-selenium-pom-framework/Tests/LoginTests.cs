using TestProject.Flows;
using TestProject.Core;
using TestProject.Pages;

namespace TestProject.Tests
{
    public class LoginTests : BaseTest
    {        

        [Test]
        public void ValidUserLogin()
        {
            driver.Navigate().GoToUrl(BaseUrl);
            var loginFlow = new LoginFlow(driver);
            loginFlow.LoginAsStandardUser();

            Assert.That(driver.Url, Is.EqualTo("https://www.saucedemo.com/inventory.html"));
        }

        [Test]
        public void InvalidLogin()
        {
            driver.Navigate().GoToUrl(BaseUrl);
            var loginPage = new LoginPage(driver);

            loginPage.Login("wrong_username", "wrong_pass");

            Assert.That(loginPage.GetErrorMessage(),
                Is.EqualTo("Epic sadface: Username and password do not match any user in this service"));
        }
    }
}