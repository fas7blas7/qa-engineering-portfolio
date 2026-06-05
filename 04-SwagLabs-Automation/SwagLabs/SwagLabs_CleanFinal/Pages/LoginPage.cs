using OpenQA.Selenium;

namespace SwagLabs.Pages
{
    public class LoginPage : BasePage
    {
        private readonly By usernameField = By.Id("user-name");
        private readonly By passwordField = By.Id("password");
        private readonly By loginButton = By.Id("login-button");
        private readonly By errorMessage = By.CssSelector("[data-test='error']");

        public LoginPage(IWebDriver driver) : base(driver)
        {
        }

        public void EnterUsername(string username)
        {
            Type(usernameField, username);
        }

        public void EnterPassword(string password)
        {
            Type(passwordField, password);
        }

        public void ClickLogin()
        {
            Click(loginButton);
        }

        public string GetErrorMessage()
        {
            return Find(errorMessage).Text;
        }

        public void Login(string username, string password)
        {
            EnterUsername(username);
            EnterPassword(password);
            ClickLogin();
        }
    }
}