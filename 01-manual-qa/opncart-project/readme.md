# 🧪 OpenCart QA Portfolio Project

## 📌 Overview

This project demonstrates a complete QA engineering workflow using the OpenCart e-commerce application.

It combines:
- 🧪 Manual QA (requirements, test design, bug reporting)
- ⚙️ API Testing (Postman + Newman)
- 🤖 UI Automation (Playwright)
- 🔄 End-to-End CRUD validation
- 📊 CI/CD preparation and scalable QA structure

The goal is to simulate a real-world QA environment and showcase both **manual and automation QA skills** in a structured, production-style project.

---

## 🎯 Project Scope

### ✔ In Scope

#### 🛠 Admin Panel Testing
- Login authentication (valid/invalid scenarios)
- Product management (CRUD: Create / Read / Update / Delete)
- Input validation (positive & negative testing)
- Table filtering & data verification

#### 🛒 Storefront Testing
- Product visibility validation
- Cart behavior checks
- UI consistency validation

#### 🤖 UI Automation (Playwright)
- Admin login automation
- Product CRUD automation
- Dynamic test data generation
- Table validation & filtering
- Dialog handling (alerts/confirm popups)

---

### ❌ Out of Scope

- Payment gateway integration testing
- Performance / load testing
- Production deployment validation
- Third-party service integrations

---

## 🧪 Testing Types Performed

- Functional Testing
- Negative Testing
- UI/UX Testing
- Exploratory Testing
- Boundary Testing
- Data Integrity Testing
- Business Rule Validation
- End-to-End Workflow Testing
- UI Automation Testing (Playwright)

---

## 🤖 UI Automation (Playwright)

UI automation is implemented using **Playwright (JavaScript)**.

### 📌 Key Features Automated

- Admin authentication flows
- Product CRUD lifecycle:
  - Create product
  - Search/filter product
  - Edit product
  - Delete product
- Dynamic data generation (unique product names)
- Table row validation (strict locator handling)
- Checkbox selection in dynamic tables
- Browser dialog handling (confirm delete)
- Assertion-based validation of UI states

📁 Location:

03-ui-automation/

---

## 🧪 Automated Test Coverage

### 🔐 Authentication
- Login with valid credentials
- Login failure scenarios

### 📦 Product Management (CRUD)
- Create product (dynamic data)
- Edit product (state update validation)
- Delete product (full lifecycle validation)
- Search & filter validation

---

## 🐞 Defect Management

Multiple functional and UI defects were identified and documented:

- Missing validation for product fields
- Duplicate product handling inconsistencies
- Cart and stock rule inconsistencies
- UI/UX navigation issues
- Data integrity issues in product management

All defects are stored in:

/04-bug-reports


---

## 🐞 Bug Summary Overview

| ID | Title | Severity | Priority | Status |
|----|------|----------|----------|--------|
| BUG-001 | Login allows empty password | Medium | Medium | Open |
| BUG-002 | Incorrect shipping calculation | Medium | High | Open |
| BUG-003 | Missing category images | Medium | Medium | Open |
| BUG-004 | Product allows zero price/quantity | High | High | Open |
| BUG-005 | Product not visible in storefront | High | Medium | Open |
| BUG-006 | Duplicate product names allowed | Medium | Medium | Open |
| BUG-007 | Duplicate model names allowed | Medium | Medium | Open |
| BUG-008 | No unsaved changes warning | Medium | Medium | Open |
| BUG-009 | Out-of-stock product added to cart | High | High | Open |
| BUG-010 | Product created without category | Medium | Medium | Open |

---

## 🧩 Project Structure

OpenCart-QA-Project/
│
├── 01-requirements/
├── 02-test-plan/
├── 03-test-cases/
├── 04-bug-reports/
├── 05-test-data/
├── 06-exploratory-testing/
├── 07-environment/
├── 08-api-testing/ (reference only)
│
└── 03-ui-automation/
    └── playwright/
        ├── pages/
        ├── tests/
        ├── utils/
        ├── playwright.config.js

---

## 🔧 Tools & Technologies

- 🧪 OpenCart (Local XAMPP environment)
- ⚙️ Playwright (UI Automation)
- 📬 Postman (API Testing)
- 🚀 Newman (CLI execution)
- 🐳 Docker (API test environment)
- 🔄 Git & GitHub (Version control)

---

## 📸 Screenshots

📁 Location:

QA-2026-Comeback/
│
├── screenshots-evidence/

### 🖥️ Admin Dashboard

screenshots/admin-dashboard.png

### 📦 Product Management

screenshots/product-create.png

### 🐞 Bug Evidence

screenshots/bug-example.png

### 🛒 Storefront View

screenshots/storefront.png

---

### 🤖 UI Automation Execution

screenshots/e2e-opencart.png
screenshots/productsPage.png
screenshots/loginPage.png
screenshots/terminal-pom.png
---

## 🧠 Key Skills Demonstrated

- Test design from requirements
- Manual + exploratory testing execution
- Defect reporting & analysis
- API testing fundamentals
- UI automation with Playwright
- CRUD lifecycle validation
- Locator strategy & debugging
- Page Object Model design
- End-to-end test workflow design

---

## 📊 Key Achievements

- Built full QA workflow for OpenCart system
- Designed structured manual test suite
- Identified real functional and UI defects
- Implemented Playwright automation framework
- Created reusable CRUD automation logic
- Built foundation for CI/CD integration

---

## 📌 Conclusion

This project demonstrates a complete QA engineering workflow including manual testing, API testing, and UI automation.

It reflects real-world QA practices:
- structured test design
- defect tracking
- automation framework development
- end-to-end validation of e-commerce workflows

The project is actively evolving toward:
- stronger Playwright framework architecture
- API automation expansion
- CI/CD integration
- improved scalability and maintainability