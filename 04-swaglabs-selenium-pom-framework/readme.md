# 🧪 SwagLabs Selenium UI Automation Framework

## 📌 Overview

This project is a UI automation test framework built for the SwagLabs demo application using Selenium WebDriver, C#, NUnit, and the Page Object Model (POM) design pattern.

The framework automates core user workflows such as authentication, product interaction, cart management, and checkout processes.

---

## 🛠️ Tech Stack

* C#
* .NET 8
* Selenium WebDriver
* NUnit
* Page Object Model (POM)

---

## 🧱 Framework Architecture

The project is built using the Page Object Model (POM) design pattern to ensure:

* Separation of test logic and page logic
* Reusable UI components
* Maintainable and scalable automation structure
* Clear abstraction between pages and tests

### Core Layers

* **BasePage** → Shared Selenium actions (Click, Type, GetText, Find, FindElements)
* **BaseTest** → Test setup and teardown logic
* **Page Objects** → Encapsulation of UI behavior per page
* **Test Classes** → Test scenarios grouped by feature

---

## 📂 Project Structure

### 📄 Pages

```
Pages/
├── BasePage.cs
├── LoginPage.cs
├── InventoryPage.cs
├── CartPage.cs
├── CheckoutPage.cs
├── HiddenMenuPage.cs
```

### 🧪 Tests

```
Tests/
├── BaseTest.cs
├── LoginTests.cs
├── InventoryTests.cs
├── CartPageTests.cs
├── CheckoutPageTests.cs
├── HiddenMenuTests.cs
```

---

## ▶️ How to Run Tests

* Prerequisites

- .NET 8 SDK installed
- Google Chrome installed
- Visual Studio / Rider (recommended)

* Run from Visual Studio

1. Open SwagLabs.sln
2. Build the solution
3. Open Test Explorer
4. Click Run All Tests

* Run from Terminal

1. Navigate to the project root:
cd 04-swaglabs-selenium-pom-framework

2. Restore dependencies:
dotnet restore

3. Build the project:
dotnet build

4. Run tests:
dotnet test

* Run specific test class *
dotnet test --filter "FullyQualifiedName~LoginTests"

---

## ✅ Automated Test Coverage

### 🔐 Authentication

* Valid login with `standard_user`
* Invalid login with incorrect credentials

### 📦 Inventory

* Product display validation
* Add-to-cart functionality

### 🛒 Cart

* Cart item validation
* Checkout navigation

### 💳 Checkout

* Checkout flow execution
* Order process validation

### 🧭 Navigation / Session

* Hidden menu interactions
* Logout flow handling

---

## 🔄 Recent Updates (June 2026)

* Completed full Page Object Model (POM) framework implementation
* Expanded page coverage to include Cart and Checkout pages
* Added full test suite separation per feature area
* Improved framework structure and maintainability
* Stabilized end-to-end UI test flows across multiple pages
* Enhanced BasePage reusable method set for Selenium actions

---

## 🎯 Key Learning Outcomes

* Selenium WebDriver automation in C#
* Page Object Model (POM) architecture design
* NUnit test framework structure
* UI test framework development
* Multi-page workflow automation
* Maintainable test design principles

---

## 📌 Project Goal

This project demonstrates practical QA automation engineering skills by implementing a scalable UI automation framework based on real-world testing practices, including structured page modeling, reusable components, and modular test design.