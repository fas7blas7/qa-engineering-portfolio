## BUG-008 — Edit without saving

## Summary

System allows user to navigate away while editing without prompt

---

## Environment

* OpenCart Local Environment
* XAMPP
* Product Creation

---

## Preconditions

* Admin user logged in

Priority: Medium
Severity low

---

## Steps to reproduce:

1. Open product edit page
2. Modify fields
3. Navigate away without saving

---

## Expected Result: 

* System should display warning or confirmation prompt before leaving page with unsaved changes.

---

## Actual Result: 

* System allows navigation away from page without warning
* All unsaved changes are lost

---

## Severity:

Medium

---

## Priority:

Medium

---

## Impact:

Navigation without proper prompt while editing, can lead to data loss, confusion, time loss if no confirmation is presented by the system.

---

## Status:

Open