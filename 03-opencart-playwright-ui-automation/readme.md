# 🤖 UI Automation – Playwright OpenCart Framework

## 📌 Overview

This project is a UI automation testing framework built for the OpenCart admin panel using Playwright.
It demonstrates real-world QA automation practices including scalable test design, Page Object Model architecture, and CI-ready structure.

The framework simulates end-to-end product management workflows and focuses on maintainability, reusability, and cross-browser execution.

---

## 🧱 Key Features

* End-to-end UI automation for OpenCart Admin
* Page Object Model (POM) architecture
* Cross-browser execution (Chromium, Firefox, WebKit)
* Product CRUD workflows (Create, Read, Update, Delete)
* Dynamic test data generation
* Reusable utility functions (test data & cleanup)
* `beforeEach` authentication setup for consistent test state
* Stable locator strategies for UI reliability

---

## 🏗️ Framework Structure

```
pages/
│   loginPage.js
│   productPage.js

tests/
│   auth/
│   legacy/
│   product/

utils/
│   testData.js

```

---

## ⚙️ Tech Stack

* Playwright
* JavaScript (Node.js)
* Page Object Model (POM)
* GitHub Actions (CI integration ready)

---

## ▶️ How to Run Tests

Install dependencies:

```bash
npm install
```

Run all tests:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run specific test suite:

```bash
npx playwright test tests/product/products.spec.js
```

View HTML report:

```bash
npx playwright show-report
```

---

## 🧪 Test Coverage

### Authentication

* Admin login validation

### Product Management

* Create product
* Edit product
* Delete product
* Product search and filtering

### UI Validations

* Alerts and success messages
* Dialog handling
* Table validation checks

---

## 🧠 Design Decisions

* Page Object Model used for maintainability and separation of concerns
* Test data abstraction implemented via utility layer
* beforeEach hook ensures consistent authentication state
* Randomized data generation to avoid test conflicts
* Focus on stability over excessive test parallelism

---

## 📸 Evidence

Test execution evidence is available in the main portfolio repository under the screenshots section, including:

* Playwright HTML reports
* Test execution results
* CI pipeline runs

---

## 🎯 Purpose

This project demonstrates practical QA automation skills including:

* UI test automation design
* scalable framework structure
* maintainable test architecture
* real-world testing workflows

It is part of a broader QA Engineering portfolio covering Manual QA, API Automation, and CI/CD integration.
