using OpenQA.Selenium;
using TestProject.Core;

namespace TestProject.Pages
{
    public class CheckoutInfoPage : BasePage
    {
        private readonly By firstNameField = By.Id("first-name");
        private readonly By lastNameField = By.Id("last-name");
        private readonly By postalCodeField = By.Id("postal-code");
        private readonly By continueButton = By.Id("continue");

        public CheckoutInfoPage(IWebDriver driver) : base(driver)
        {
        }

        public bool IsPageLoaded()
        {
            return driver.Url.Contains("checkout-step-one.html");
        }

        public void EnterFirstName(string firstName)
        {
            Type(firstNameField, firstName);
        }

        public void EnterLastName(string lastName)
        {
            Type(lastNameField, lastName);
        }

        public void EnterPostalCode(string postalCode)
        {
            Type(postalCodeField, postalCode);
        }

        public void ClickContinue()
        {
            Click(continueButton);
        }








    }
}
