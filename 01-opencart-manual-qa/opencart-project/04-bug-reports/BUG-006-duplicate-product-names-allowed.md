## BUG-006 — System Allows Creation of Products With Duplicate Names

## Summary
System allows creation of multiple products with identical product names without validation or warning.

---

## Environment:

* OpenCart Local Environment
* XAMPP
* Product Creation Module

---

## Preconditions:

* Admin user logged in

---

## Steps to Reproduce:

1. Navigate to Catalog > Products
2. Create product with name “Test Product”
3. Create another product with same name

---

## Expected Result:

 * System should prevent duplicate product names
 * OR warn user

---

## Actual Result: 
* System successfully creates multiple products with identical names.

---

## Severity:
Medium

---

## Priority: 
Medium

---

## Impact:
Duplicate product names may cause confusion during product management, search operations, reporting, and catalog maintenance.

---

## Additional Notes:

* System displays generic success message: "Success: You have modified products!"
* No warning or duplicate validation is presented.

---

## Status:

Open