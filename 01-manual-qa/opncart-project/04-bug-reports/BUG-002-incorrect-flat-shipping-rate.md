# BUG-002 — Incorrect Flat Rate Shipping Cost Applied

## Summary

System applies incorrect shipping cost after selecting Flat Rate shipping option.

---

## Environment

* Browser: Brave (Chromium-based)
* OpenCart Demo Environment

---

## Steps to Reproduce

1. Add product to cart
2. Open Shipping Estimate
3. Enter valid shipping location
4. Select Flat Rate ($8.00)
5. Click Apply Shipping

---

## Expected Result

Shipping cost should be applied as $8.00 and total order amount should update correctly.

---

## Actual Result

Shipping cost is applied as $5.00 instead of $8.00, resulting in incorrect total calculation.

---

## Severity

Medium

---

## Priority

High

---

## Impact

Incorrect order totals may cause pricing inconsistencies, customer confusion, and potential financial discrepancies.

---

## Status

Open
