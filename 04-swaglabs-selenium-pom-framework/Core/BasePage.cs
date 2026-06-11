using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;

namespace TestProject.Core
{
    public abstract class BasePage
    {
        protected IWebDriver driver;
        protected WebDriverWait wait;

        public BasePage(IWebDriver driver)
        {
            this.driver = driver;
            this.wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));
        }

        protected IWebElement Find(By locator)
        {
            return wait.Until(d => d.FindElement(locator));
        }

        protected IWebElement WaitForClickable(By locator)
        {
            return wait.Until(driver => 
            { var element = driver.FindElement(locator);
                return element.Enabled && element.Displayed ? element : null;
            });
        }

        protected void Click(By locator)
        {
            Find(locator).Click();
        }

        protected void Type(By locator, string text)
        {
            var element = Find(locator);
            element.Clear();
            element.SendKeys(text);
        }

        protected string GetText(By locator)
        {
            return Find(locator).Text;
        }

        protected IReadOnlyCollection<IWebElement> FindElements(By locator)
        {
            return driver.FindElements(locator);
        }
    }
}
