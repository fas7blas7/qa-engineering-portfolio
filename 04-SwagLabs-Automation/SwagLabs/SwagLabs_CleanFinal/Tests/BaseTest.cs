using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;

namespace SwagLabs.Tests
{
    public abstract class BaseTest
    {
        protected IWebDriver driver = null!;

        [SetUp]
        public void Setup()
        {
            var options = new ChromeOptions();

            options.AddUserProfilePreference(
                "profile.password_manager_enabled",
                false);

            driver = new ChromeDriver(options);

            driver.Manage().Window.Maximize();
        }

        [TearDown]
        public void TearDown()
        {
            driver.Dispose();
            driver.Quit();
        }
    }
}