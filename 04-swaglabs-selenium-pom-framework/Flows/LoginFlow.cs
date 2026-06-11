using OpenQA.Selenium;
using TestProject.Pages;

namespace TestProject.Flows
{
    public class LoginFlow
    {
        private IWebDriver driver;

        public LoginFlow(IWebDriver driver)
        {
            this.driver = driver;
        }

        public void LoginAsStandardUser()
        {
            var loginPage = new LoginPage(driver);
            loginPage.Login("standard_user", "secret_sauce");
        }
    }
}
