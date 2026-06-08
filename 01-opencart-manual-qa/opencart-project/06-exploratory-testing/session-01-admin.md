# Exploratory Testing Session 01 — OpenCart Admin

## Area Tested
Authentication, Navigation, Catalog (Admin Panel)

---

# 🔐 Authentication Observations

## OBS-001 — SQL Injection Attempt in Login

**Steps:**
1. Open Admin Login Page
2. Enter:
   - Username: admin
   - Password: 1' or '1'='1
3. Click Login

**Expected Result:**
System should prevent SQL injection and reject login

**Actual Result:**
Login rejected with message: "No match for Username and/or Password."

**Severity:**
Medium

**Notes:**
No indication of vulnerability exploitation. System appears safe.

---

## OBS-002 — Excessively Long Input Handling (Login Form)

**Steps:**
1. Open Admin Login Page
2. Enter extremely long strings in username and password fields
3. Submit login

**Actual Result:**
Login rejected, system remains stable

**Severity:**
Low

**Notes:**
No crash or UI break observed. Input validation exists but response is generic.

---

## OBS-003 — Empty Input Submission

**Steps:**
1. Open Admin Login Page
2. Submit empty username and password fields

**Actual Result:**
Login rejected

**Severity:**
Low

**Notes:**
Standard validation behavior.

---

# 📦 Catalog Observations

## OBS-004 — Missing Category Images

**Steps:**
1. Navigate to Catalog → Categories
2. Review category list

**Actual Result:**
Some categories display images, others do not

**Severity:**
Low / Medium (UX)

**Notes:**
Inconsistent visual presentation affects usability but not functionality

---

## OBS-005 — Inconsistent Product Naming vs Model Values

**Steps:**
1. Navigate to Catalog → Products
2. Review product list

**Actual Result:**
Some products have mismatched or unclear naming conventions between product name and model fields

**Examples:**
- MacBook → Model: Product 16  
- MacBook Air → Model: Product 17  
- Samsung Galaxy Tab → Model: SAM1  

**Severity:**
Medium

**Notes:**
Data inconsistency reduces clarity in product management UI. No functional failure observed.

---

# 📊 Summary

- Total Observations: 5
- Critical Issues: 0
- Functional Bugs: 0
- UI/UX Observations: 2
- Data Quality Issues: 1

---

# 🧾 Conclusion

System is stable from functional perspective. Minor UI and data consistency issues observed, but no critical defects identified during exploratory testing session.