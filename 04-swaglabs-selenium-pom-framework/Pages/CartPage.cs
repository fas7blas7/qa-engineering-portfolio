using OpenQA.Selenium;
using TestProject.Core;

namespace TestProject.Pages
{

    public class CartPage : BasePage
    {
        private readonly By cartButton = By.ClassName("shopping_cart_link");
        private readonly By cartList = By.CssSelector(".cart_item");
        private readonly By removeButton = By.CssSelector(".cart_button");
        private readonly By productTitle = By.CssSelector(".inventory_item_name");        
        private readonly By continueShoppingButton = By.Id("continue-shopping");
        private readonly By checkoutButton = By.Id("checkout");


        public CartPage(IWebDriver driver) : base(driver)
        {
        }

        public void GoToCart()
        {
            Click(cartButton);
        }

        public int GetCartItemCount()
        {
            return FindElements(cartList).Count;
        }

        public bool ProductExistsInCart(string productName)
        {
            return FindElements(productTitle).Any(x => x.Text.Equals(productName));
        }

        public bool IsCartEmpty()
        {
            return !FindElements(cartList).Any();
        }

        public void RemoveProductByName(string productName)
        {            
            var item = FindElements(cartList).FirstOrDefault(i => i.FindElement(productTitle).Text.Contains(productName))
                                                            ?? throw new Exception($"Product not found: {productName}");
            item.FindElement(removeButton).Click();
        }        

        public void RemoveAllExcept(string keepProductName)
        {
            var items = FindElements(cartList);

            foreach (var item in items)
            {
                var name = item.FindElement(productTitle).Text;

                if (name == keepProductName)
                    continue;

                item.FindElement(removeButton).Click();
            }
        }

        public void ContinueShopping()
        {
            Click(continueShoppingButton);
        }

        public void Checkout()
        {
            Click(checkoutButton);
        }


    }
}
