using OpenQA.Selenium;

namespace SwagLabs.Pages
{
    public class HiddenMenuPage : BasePage
    {
        private readonly By menuButton = By.Id("react-burger-menu-btn");
        private readonly By logoutButton = By.Id("logout_sidebar_link");

        public HiddenMenuPage(IWebDriver driver) : base(driver)
        {
        }

        public void OpenMenu()
        {
            Click(menuButton);            
        }


        public void Logout()
        {            
            Click(logoutButton);
        }

        public bool IsMenuOpen()
        {
            try
            {
                wait.Until(d =>
                    d.FindElement(logoutButton).Displayed);

                return true;
            }
            catch
            {
                return false;
            }
        }
    }
}