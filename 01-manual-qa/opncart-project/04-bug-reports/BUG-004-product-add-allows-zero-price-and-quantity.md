# BUG-004 — Product Can Be Created With Zero Price and Quantity

## Summary

System allows creation of a product with both price and quantity set to 0.

---

## Environment

* OpenCart Local Environment
* XAMPP
* Admin Panel

---

## Preconditions

* Admin user logged in

---

## Steps to Reproduce

1. Navigate to Catalog → Products
2. Click Add New
3. Fill all required fields
4. Set:
   * Price = 0
   * Quantity = 0
5. Click Save

---

## Expected Result

System should reject product creation or display validation warning for invalid product values.

---

## Actual Result

Product is successfully created and success message is displayed.

---

## Severity

Medium

---

## Priority

Medium

---

## Notes

Behavior may cause invalid or unintended products to appear in catalog. Requires business rule clarification whether zero-value products are allowed.
