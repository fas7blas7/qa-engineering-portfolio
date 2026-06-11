using OpenQA.Selenium;
using TestProject.Core;

namespace TestProject.Pages
{
    public class InventoryPage : BasePage
    {
        private readonly By ProductTitle = By.CssSelector("[data-test=inventory-item-name]");
        private readonly By InventoryItem = By.CssSelector("[class=inventory_item]");        

        public InventoryPage(IWebDriver driver) : base(driver)
        {
        }

        public void AddToCartByName(string productName)
        {
            var addButton = By.XPath($"//div[text()='{productName}']" +
                                    $"/ancestor::div[@class='inventory_item']//button");
            Click(addButton);
        }

        public void AddAllProducts()
        {
            var products = FindElements(InventoryItem);
            foreach (var product in products)
            {
                product.FindElement(By.TagName("button")).Click();
            }
        }

        public void RemoveProduct(string productName)
        {
            var removeButton = By.XPath($"//div[text()='{productName}']" +
                                    $"/ancestor::div[@class='inventory_item']//button");
            Click(removeButton);
        }

        public bool IsPageLoaded()
        {
            return FindElements(InventoryItem).Any();
        }

        public bool ProductTitleExists(string productTitle)
        {
            return FindElements(ProductTitle)
            .Any(element => element.Text == productTitle);
        }
    }
}
