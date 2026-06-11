# 🧪 SwagLabs Selenium POM Automation Framework

# 📌 Overview

* This project is a QA Automation Framework built using Selenium WebDriver, C#, NUnit, and the Page Object Model (POM) design pattern.
* It simulates real-world end-to-end user flows on the SwagLabs demo application and demonstrates scalable UI automation architecture.

### The framework covers:

* UI automation testing
* Page Object Model design
* Reusable test flows
* End-to-end checkout process
* Cart and inventory validation
* Menu navigation and logout functionality

---

# 🏗️ Project Structure

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

# ▶️ How to Run Tests

### Run Tests in Visual Studio

* Test Explorer (Recommended)

- Open the solution:

* 04-swaglabs-selenium-pom-framework/TestProject.slnx
* Wait for Visual Studio to load all dependencies

* Go to:

* Test → Test Explorer
* Click:
* Run All Tests
- or
* Run individual test classes (LoginTests, CartTests, CheckoutTests)

# ⚠️ Notes

- Tests run on Chrome by default
- Make sure ChromeDriver version matches your browser version
- If tests fail to start, ensure NuGet packages are restored

### Prerequisites

- .NET 8 SDK installed
- Chrome browser installed

### Run All Tests

* bash >
* dotnet test
* Run Specific Project
* dotnet test ./04-swaglabs-selenium-pom-framework/TestProject.csproj

---

# 🧱 Core Layer

### BaseTest

- Responsible for:
* WebDriver initialization
* Browser configuration
* Test setup and teardown
* BasePage

Provides reusable Selenium wrapper methods used across all page objects.

# 🔄 Flows Layer

# LoginFlow

* Encapsulates reusable login behavior such as:

# Standard user login

* Used to reduce duplication across test classes and improve readability.

# 📄 Pages Layer

- Each page represents a UI component of the application:
* LoginPage → login functionality and error handling
* InventoryPage → product listing and add/remove cart actions
* HiddenMenuPage → navigation, logout, and external links
* CartPage → cart validation and checkout navigation
* CheckoutInfoPage → user information input
* CheckoutOverviewPage → order summary and finalization

# 🧪 Test Coverage

* LoginTests
* ValidUserLogin
* InvalidLogin
* InventoryTests
* AddToCartByName
* RemoveFromCart
* HiddenMenuTests
* NavigateToInventory
* NavigateToAbout
* Logout
* CartTests
* GoToCart
* GetCartItemCount
* ProductExistsInCart
* SpecificProductRemains
* ContinueShopping
* IsCartEmpty
* RemoveProductByName
* Checkout
* CheckoutTests
* TestCheckoutPageLoaded
* TestContinueToNextStep
* TestCompleteOrder

# 🛠️ Tools & Technologies

* C#
* .NET
* Selenium WebDriver
* NUnit
* Page Object Model (POM)
* ChromeDriver

# 🔁 End-to-End Flow

### The main automated user journey:

* Login → Add Product → Cart → Checkout → Order Completion

# 🎯 Key Features

* Page Object Model architecture
* Clean separation of concerns
* Reusable base classes
* Modular test design
* End-to-end UI automation coverage
* Cart and product validation logic
* Multi-step checkout automation

# 📌 Future Improvements

* Add explicit wait wrapper (WebDriverWait utility)
* Improve locator strategy consistency
* Add test reporting (Allure / ExtentReports)
* Add CI/CD pipeline (GitHub Actions)
* Add parallel test execution

# 🧠 Learning Outcome
- This project demonstrates practical QA automation skills including:

* Selenium UI automation
* Framework design principles
* POM architecture
* Debugging UI automation issues
* Structuring scalable test suites
* End-to-end test workflow design