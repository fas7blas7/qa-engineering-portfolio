🧪 SwagLabs Selenium POM Automation Framework

📌 Overview

This project is a QA Automation Framework built using Selenium WebDriver, C#, NUnit, and the Page Object Model (POM) design pattern.

It simulates real-world end-to-end user flows on the SwagLabs demo application and demonstrates scalable UI automation architecture.

The framework covers:

UI automation testing
Page Object Model design
Reusable test flows
End-to-end checkout process
Cart and inventory validation
Menu navigation and logout functionality

🏗️ Project Structure
```
Core/
    BasePage.cs
    BaseTest.cs

Flows/
    LoginFlow.cs

Pages/
    LoginPage.cs
    InventoryPage.cs
    HiddenMenuPage.cs
    CartPage.cs
    CheckoutInfoPage.cs
    CheckoutOverviewPage.cs

Tests/
    LoginTests.cs
    InventoryTests.cs
    HiddenMenuTests.cs
    CartTests.cs
    CheckoutTests.cs

swag-labs.csproj
swag-labs-pom.slnx
```

🧱 Core Layer

BaseTest

Responsible for:

WebDriver initialization
Browser configuration
Test setup and teardown
BasePage

Provides reusable Selenium wrapper methods used across all page objects.

🔄 Flows Layer

LoginFlow

Encapsulates reusable login behavior such as:

Standard user login

Used to reduce duplication across test classes and improve readability.

📄 Pages Layer

Each page represents a UI component of the application:

LoginPage → login functionality and error handling
InventoryPage → product listing and add/remove cart actions
HiddenMenuPage → navigation, logout, and external links
CartPage → cart validation and checkout navigation
CheckoutInfoPage → user information input
CheckoutOverviewPage → order summary and finalization

🧪 Test Coverage

LoginTests
ValidUserLogin
InvalidLogin
InventoryTests
AddToCartByName
RemoveFromCart
HiddenMenuTests
NavigateToInventory
NavigateToAbout
Logout
CartTests
GoToCart
GetCartItemCount
ProductExistsInCart
SpecificProductRemains
ContinueShopping
IsCartEmpty
RemoveProductByName
Checkout
CheckoutTests
TestCheckoutPageLoaded
TestContinueToNextStep
TestCompleteOrder

🛠️ Tools & Technologies
C#
.NET
Selenium WebDriver
NUnit
Page Object Model (POM)
ChromeDriver

🔁 End-to-End Flow

The main automated user journey:

Login → Add Product → Cart → Checkout → Order Completion

🎯 Key Features
Page Object Model architecture
Clean separation of concerns
Reusable base classes
Modular test design
End-to-end UI automation coverage
Cart and product validation logic
Multi-step checkout automation

📌 Future Improvements
Add explicit wait wrapper (WebDriverWait utility)
Improve locator strategy consistency
Add test reporting (Allure / ExtentReports)
Add CI/CD pipeline (GitHub Actions)
Add parallel test execution

🧠 Learning Outcome

This project demonstrates practical QA automation skills including:

Selenium UI automation
Framework design principles
POM architecture
Debugging UI automation issues
Structuring scalable test suites
End-to-end test workflow design