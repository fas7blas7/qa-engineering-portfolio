using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;

namespace SwagLabs.Pages
{
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