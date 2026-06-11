using OpenQA.Selenium;
using TestProject.Core;

namespace TestProject.Pages 
{ 
    public class HiddenMenuPage : BasePage
    {
        private readonly By burgerButton = By.Id("react-burger-menu-btn");
        private readonly By closeBurgerMenuButton = By.Id("react-burger-cross-btn");
        private readonly By inventoryButton = By.Id("inventory_sidebar_link");
        private readonly By aboutButton = By.Id("about_sidebar_link");
        private readonly By logoutButton = By.Id("logout_sidebar_link");

        public HiddenMenuPage(IWebDriver driver) : base(driver)
        {
        }

        public void ClickBurgerButton()
        {
            Click(burgerButton);
        }

        public void CloseBurgerMenu()
        {
            WaitForClickable(closeBurgerMenuButton).Click();            
        }

        public void ClickInventoryButton()
        {
            WaitForClickable(inventoryButton).Click();
        }

        public void ClickAboutButton()
        {
            WaitForClickable(aboutButton).Click();
        }

        public void ClikLogoutButton()
        {
            WaitForClickable(logoutButton).Click();
        }
    }
}
