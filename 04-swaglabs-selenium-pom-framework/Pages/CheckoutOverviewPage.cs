using OpenQA.Selenium;
using TestProject.Core;

namespace TestProject.Pages
{
    public class CheckoutOverviewPage : BasePage
    {
        
            
            private readonly By finishButton = By.Id("finish");
            private readonly By completeHeader = By.CssSelector(".complete-header");

            public CheckoutOverviewPage(IWebDriver driver) : base(driver)
            {
            }

            public void ClickFinish()
            {
                Click(finishButton);
            }

            public bool IsPageLoaded()
            {
                return driver.Url.Contains("checkout-step-two.html");
            }

            public bool IsCheckoutComplete()
            {
                return GetText(completeHeader) == "Thank you for your order!";
            }
    }
}
