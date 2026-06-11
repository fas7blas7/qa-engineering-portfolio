using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;

namespace TestProject.Core
{
    public abstract class BaseTest
    {
        protected IWebDriver driver;
        protected const string BaseUrl = "https://www.saucedemo.com/";
        
        [SetUp]
        public void Setup()
        {
            var options = new ChromeOptions();

            options.AddArgument("--guest");
            options.AddArgument("--disable-save-password-bubble");
            options.AddUserProfilePreference("profile.password_manager_enabled", false);
            options.AddUserProfilePreference("credentials_enable_service", false);
            options.AddArgument("--headless=new");
            options.AddArgument("--no-sandbox");
            options.AddArgument("--disable-dev-shm-usage");

            driver = new ChromeDriver(options);

            driver.Manage().Window.Size = new System.Drawing.Size(1920, 1080);
            driver.Navigate().GoToUrl(BaseUrl);
        }

        [TearDown]
        public void TearDown()
        {
            driver.Dispose();
            driver.Quit();
        }
    }
}


