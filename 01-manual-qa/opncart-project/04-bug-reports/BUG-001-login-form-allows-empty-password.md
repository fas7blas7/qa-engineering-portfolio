# BUG-001 — Login Form Allows Submission With Empty Password Field

## Summary

Login form allows submission attempt when password field is left empty instead of validating input before request submission.

---

## Environment

* OpenCart Login Module
* Browser: Brave (Chromium-based)

---

## Preconditions

* Login page opened

---

## Steps to Reproduce

1. Open login page
2. Enter valid username
3. Leave password field empty
4. Click Login

---

## Expected Result

System should validate required password field before submitting login request and display validation warning to user.

---

## Actual Result

System attempts login request despite empty password field.

---

## Severity

Medium

---

## Priority

Medium

---

## Impact

Missing frontend validation may cause unnecessary server requests and creates inconsistent user experience during authentication attempts.

---

## Status

Open
