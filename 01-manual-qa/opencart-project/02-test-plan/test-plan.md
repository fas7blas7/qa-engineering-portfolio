# OpenCart Login & Cart Test Plan

## 1. Introduction
This test plan defines the testing approach for the OpenCart Login, Cart, and Checkout modules. The goal is to ensure functional correctness, usability, and reliability of core user flows.

---

## 2. Scope

### In Scope:
- User Login
- Session management
- Product browsing
- Add to Cart functionality
- Cart management
- Shipping estimation
- Checkout flow (up to payment step)

### Out of Scope:
- Payment gateway processing (restricted in environment)
- Backend admin panel testing
- Performance/load testing

---

## 3. Test Objectives

- Validate login functionality
- Verify cart behavior and calculations
- Ensure session persistence works correctly
- Detect functional defects and UI inconsistencies
- Validate checkout workflow up to available system limits

---

## 4. Test Approach

Testing will be performed using:

- Manual Functional Testing
- Exploratory Testing
- Positive & Negative Test Scenarios
- UI Validation
- Basic Security Checks (input validation)

---

## 5. Test Types

- Functional Testing
- UI Testing
- Validation Testing
- Negative Testing
- Regression Testing (manual re-check after changes)

---

## 6. Test Environment

- Application: OpenCart Demo
- Browser: Brave (Chromium-based)
- OS: Windows 11
- Network: Standard broadband connection

---

## 7. Entry Criteria

- Application is accessible
- Test environment is stable
- Test data is available
- Login credentials are valid

---

## 8. Exit Criteria

- All planned test cases executed
- Critical defects reported and documented
- Major flows validated (login, cart, checkout)

---

## 9. Risks & Assumptions

### Risks:
- Payment system is restricted (cannot be fully tested)
- Demo environment may reset data
- UI changes may affect test stability

### Assumptions:
- System behaves consistently across sessions
- Test data remains valid during execution

---

## 10. Deliverables

- Test Cases
- Bug Reports
- Test Execution Results
- QA Documentation (this project)