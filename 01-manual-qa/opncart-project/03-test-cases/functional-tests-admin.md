MODULE 1 — Authentication & Session

TC-FUNC-001 — Valid Admin Login

Type: Functional

Steps:
Open admin login page
Enter valid username and password
Click Login

Expected Result:
User is logged in successfully
Dashboard is displayed

Result - Pass

TC-FUNC-002 — Invalid Login Credentials

Type: Negative

Steps:
Enter invalid username/password
Click Login

Expected Result:
Login is rejected
Error message is displayed

Result - Pass

TC-FUNC-003 — Session Persistence

Type: Functional

Steps:
Login to admin
Refresh page

Expected Result:
User remains logged in

Result - Pass

MODULE 2 — Catalog (Core ecommerce functionality)

TC-FUNC-004 — Open Products List

Type: Functional

Steps:
Login to admin
Navigate to Catalog → Products

Expected Result:
Product list loads successfully

Result - Pass

TC-FUNC-005 — Add New Product (UI check only for now)

Type: Functional

Steps:
Go to Catalog → Products
Click “Add New” button

Expected Result:
Product creation form opens

Result - Pass

TC-FUNC-006 — Product Form Validation (Empty Submit)

Type: Negative

Steps:
Open Add Product form
Click Save without filling fields

Expected Result:
Validation errors are displayed
Product is NOT created

Result - Pass

MODULE 3 — Navigation & UI Stability

TC-FUNC-007 — Main Menu Navigation

Type: Functional

Steps:
Click through all main menu items
Dashboard
Catalog
Extensions
System

Expected Result:
All pages load without errors

Result - Pass

TC-FUNC-008 — Page Reload Stability

Type: Stability

Steps:
Open any admin page
Refresh browser multiple times

Expected Result:
No crashes or broken UI

Result - Pass

MODULE 4 — Logout & Security

TC-FUNC-009 — Logout Functionality

Type: Functional

Steps:
Click Logout

Expected Result:
User is redirected to login page

Result - Pass

TC-FUNC-010 — Direct URL Access After Logout

Type: Security / Negative

Steps:
Logout
Try accessing admin URL directly (http://localhost:8080/opencart/upload/adminqa/index.php?route=common/dashboard&user_token=d930a2dd7d8805ce01381f52f808c8e1)

Expected Result:
User is redirected to login page
Invalid token session error message is displayed.

Result - Pass

Module 5 - Managing products - add, delete, edit, add variant

TC-FUNC-011 — Add a product with empty fields

Type: Functional / Negative

Steps:
Logged in admin panel
Go to Products panel
Click Add new
Click Save

Expected Result:
Product is not added
Error message is displayed

Result - Pass

TC-FUNC-012 — Add a product only with numeric values in name field
Type: Functional / Negative

Steps:
Logged in admin panel
Go to Products panel
Click Add new
Fill in name field with numeric values only
Fill in the rest of the required fields in all tabs with correct values
Click Save

Expected Result:
Product is not added
Error message is displayed

Result - Pass

TC-FUNC-013 — Add a product with special characters in required fields

Type: Functional / Negative

Steps:
Logged in admin panel
Go to Products panel
Click Add new
Fill in required fields with special characters
Click Save

Expected Result:
Product is not added
Error message is displayed

Result - Pass

TC-FUNC-014 — Add a product with unicode characters in required fields

Type: Functional / Negative

Steps:
Logged in admin panel
Go to Products panel
Click Add new
Fill in required fields with unicode characters
Click Save

Expected Result:
Product is not added
Error message is displayed

Result - Pass

TC-FUNC-015 — Add a product with 0 for price and quantity

Type: Functional / Negative

Steps:
Logged in admin panel
Go to Products panel
Click Add new
Fill in required fields in every tab
Fill in 0 for price and 0 for quantity
Click Save

Expected Result:
Product is not added
Error message is displayed

Result - Fail

Note - Product is added

TC-FUNC-016 — Add a product with correct values for name, price, quantity, tag, model and seo url

Type: Functional / Positive

Steps:
Logged in admin panel
Go to Products panel
Click Add new
Fill in required fields in every tab
Click Save

Expected Result:
Product is added
Success message is displayed

Result - Pass

TC-FUNC-017 — Fill in negative value for price

Type: Functional / Negative

Steps:
Logged in admin panel
Go to Products panel
Click Add new
Fill in required fields in every tab
Fill in negative value for price
Click Save

Expected Result:
Product is not added
Failure message is displayed

Result - Pass

TC-FUNC-018 — Fill in negative value for quantity

Type: Functional / Negative

Steps:
Logged in admin panel
Go to Products panel
Click Add new
Fill in required fields in every tab
Fill in negative value for quantity
Click Save

Expected Result:
Product is not added
Failure message is displayed

Result - Pass

TC-FUNC-019 — Edit a product

Type: Functional / Positive

Steps:
Logged in admin panel
Go to Products panel
Pick a product from Product List and mark the tick field
Click Edit button
Edit the desired data/fields/characteristics
Click Save button

Expected Result:
Product is edited
Success message is displayed

Result - Pass


TC-FUNC-020 — Add a variant of a product

Type: Functional / Positive

Steps:
Logged in admin panel
Go to Products panel
Pick a product from Product List and mark the tick field
Click The Down Arrow button
Edit the SEO of the product
Click Save button

Expected Result:
A variant of the product is added
Success message is displayed

Result - Pass

TC-FUNC-021 — Refresh page while adding a product

Type: Functional / Positive

Steps:
Logged in admin panel
Go to Products panel
Click Add New button
Fill in fields
Refresh page

Expected Result:
Page refreshes, filled in information is lost.

Result - Pass

TC-FUNC-022 — Refresh page while adding a product

Type: Functional / Positive

Steps:
Logged in admin panel
Go to Products panel
Pick a product from Product List and mark the tick field
Click Delete button
Click Yes in pop-up window

Expected Result:
Product is deleted
Success message is displayed

Result - Pass