using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;

namespace SwagLabs.Pages
{
    using System.Collections.ObjectModel;
    public class BasePage
    {
        protected IWebDriver driver;
        protected WebDriverWait wait;

        public BasePage(IWebDriver driver)
        {
            this.driver = driver;
            wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));
        }

        protected IWebElement Find(By by)
        {
            return wait.Until(d => d.FindElement(by));
        }

        protected ReadOnlyCollection<IWebElement> FindElements(By locator)
        {
            return driver.FindElements(locator);
        }

        protected string GetText(By locator)
        {
            return driver.FindElement(locator).Text;
        }

        protected void Click(By by)
        {
            Find(by).Click();
        }

        protected void Type(By by, string text)
        {
            var el = Find(by);
            el.Clear();
            el.SendKeys(text);
        }
    }
}