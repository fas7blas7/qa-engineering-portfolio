# BUG-0010 — Product Without Category Not Visible in Storefront

## Summary

System allows creation of products without assigning a category, causing products to become inaccessible through normal storefront navigation.

---

## Environment

* OpenCart Local Environment
* XAMPP
* Admin Panel → Product Creation

---

## Preconditions

* Admin user logged in

---

## Steps to Reproduce

1. Navigate to Catalog → Products
2. Click Add New
3. Fill all required product fields
4. Leave Category field empty
5. Save product

---

## Expected Result

System should:

* either require category assignment
* OR place product in a default/unassigned category

---

## Actual Result

Product is created successfully but does not appear in storefront category navigation. Product can only be accessed through direct search.

---

## Severity

High

---

## Priority

Medium

---

## Impact

Users cannot discover the product through normal browsing behavior, potentially causing hidden inventory and reduced product visibility.

---

## Status

Open