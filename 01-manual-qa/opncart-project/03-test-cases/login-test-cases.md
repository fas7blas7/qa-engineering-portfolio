# Login Test Cases - OpenCart

## Common Preconditions
- User is registered
- Browser: Brave (Chromium-based)
- Application: https://demo.opencart.com

---

## TC-LOGIN-001 — Successful Login

**Priority:** High  
**Type:** Functional

### Steps:
1. Navigate to login page
2. Enter valid email
3. Enter valid password
4. Click Login

### Expected Result:
- User is successfully logged in
- Redirected to account page
- URL contains `/account/account`
- Session token is generated

---

## TC-LOGIN-002 — Login with Empty Fields

**Priority:** High  
**Type:** Validation

### Steps:
1. Leave email empty
2. Leave password empty
3. Click Login

### Expected Result:
- Login is rejected
- Warning displayed:
  "Warning: No match for E-Mail Address and/or Password."

### Note:
Current system uses generic authentication message instead of field-level validation.

---

## TC-LOGIN-003 — Login with Only Email

**Priority:** High  
**Type:** Validation

### Expected Result:
- Login rejected
- Same warning message displayed

---

## TC-LOGIN-004 — Login with Only Password

**Priority:** High  
**Type:** Validation

### Expected Result:
- Login rejected
- Same warning message displayed

---

## TC-LOGIN-005 — Password Field Masking

**Priority:** Medium  
**Type:** UI / Security

### Expected Result:
- Password is masked
- No visible plaintext characters

## TC-LOGIN-006 — Special Characters in email
Test data - Login - test@@abv.bg
            Password - 1234


**Priority:** High  
**Type:** Validation

### Expected Result:
- Login rejected

## TC-LOGIN-007 — Wrong email format
Test data - Login - test#$@abv
            Password - 1234

**Priority:** High  
**Type:** Validation

### Expected Result:
- Login rejected

## TC-LOGIN-008 — Password with spaces only
Test data - Login - test#$@abv
            Password - "     "

**Priority:** High  
**Type:** Validation

### Expected Result:
- Login rejected

## TC-LOGIN-009 — SQL Injection
Test data - Login - test'; DROP users--
            Password - 1' or '1'='1

**Priority:** High  
**Type:** Validation

### Expected Result:
- Login attempt rejected
- Application remains stable
- No system/database error messages displayed

## TC-LOGIN-0010 — Password with spaces only
Test data - Login - test'; DROP users--
            Password - 1' or '1'='1

**Priority:** High  
**Type:** Validation

### Expected Result:
- Request rejected

### Actual Result:
- Request rejected

## TC-LOGIN-011 — Extremely long input for login and password
Test data - Login - verylongtestusernamethatiswaybeyondnormalapplicationlimitsandshouldbetestedforvalidationpurposes1234567890abcdefghijklmnopqrstuvwxyz@example-super-long-domain-name-testing-validation.com
            Password - P@ssword123!P@ssword123!P@ssword123!P@ssword123!P@ssword123!P@ssword123!P@ssword123!P@ssword123!P@ssword123!P@ssword123!

**Priority:** High  
**Type:** Validation

### Expected Result:
- Request rejected