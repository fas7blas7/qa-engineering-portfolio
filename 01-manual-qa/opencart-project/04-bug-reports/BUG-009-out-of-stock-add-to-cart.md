# BUG-009 — Out-of-Stock Product Can Be Added to Cart

## Summary

System allows users to add products with stock quantity equal to 0 to the shopping cart.

---

## Environment

* OpenCart Local Environment
* Browser: Brave (Chromium-based)

---

## Preconditions

* Product stock quantity is set to 0

---

## Steps to Reproduce

1. Open storefront
2. Navigate to product with stock quantity equal to 0
3. Click "Add to Cart"

---

## Expected Result

System should reject action and display appropriate out-of-stock warning message.

---

## Actual Result

System successfully adds product to cart and displays message:

"Success: You have added 'PRODUCTNAME' to your shopping cart!"

---

## Severity

Medium

---

## Priority

High

---

## Impact

Users may attempt to purchase unavailable products, causing confusion, failed orders, and negative shopping experience.

---

## Status

Open