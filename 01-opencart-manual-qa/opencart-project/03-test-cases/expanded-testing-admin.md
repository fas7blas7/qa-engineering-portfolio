EXPANDED DEEPER TESTING

1. Product Image & Media Handling

TC-FUNC-023 — Add Product With Image Upload

Type: Functional / Positive

Steps:
Go to Catalog → Products → Add New
Upload product image
Fill required fields
Click Save

Expected Result:

Product is created successfully
Image is displayed in product list

Note - File size or scale of image limitation/requirements must be taken into account. Feature not working with certain files. Further exploration of allowed files for upload necessary.

TC-FUNC-024 — Add Product Without Image

Type: Functional / Negative (UI validation)

Steps:
Create product without uploading image
Save product

Expected Result:

Either:
* Default image is applied
* Validation warning appears (depends on system design)

Status - Pass

Note - Current behaviour is - Default image is applied

2. Category Assignment Behavior
TC-FUNC-025 — Assign Product to Category

Type: Functional

Steps:

Create new product
Go to Data tab
Assign category
Save product

Expected Result:
Product appears under assigned category
Actual Result:
Product appears under assigned category

Status - Pass

TC-FUNC-026 — Product Without Category

Type: Negative / Edge

Steps:
Create product without selecting category
Save product

Expected Result:
Either validation error OR product saved in default/unassigned group
Actual Result:
Product is created. Can be found only trough search function.

Status - Fail

Note - Product is added, but is nowhere to be found in the website. Only way to find is by searching its name, therefore making it impossible to find, as user wouldn't know it even exists.

3. Duplicate & Consistency Testing

TC-FUNC-027 — Duplicate Product Name

Type: Negative

Steps:
Create product with name “Test Product”
Create another product with same name

Expected Result: System should prevent duplicates OR warn user

Actual Result: System creates duplicate.
            Error message is - "Success: You have modified products!"
Status - Fail

TC-FUNC-028 — Duplicate Model Name

Type: Negative / Data integrity

Steps:
Create product with model “ABC123”
Create another product with same model

Expected Result: System enforces uniqueness OR handles duplicates safely

Actual Result: System allows the creation of product with same model name

Status - Fail


4. Edit Behavior Validation

TC-FUNC-029 — Edit Product Price Only

Type: Functional

Steps:
Open existing product
Change price only
Save

Expected Result: Only price updates. Other fields remain unchanged
Actual Result: Only price updates. Other fields remain unchanged
Status: Pass

TC-FUNC-030 — Try to Edit Product Without Saving

Type: Negative / UX

Steps:
Open product edit page
Modify fields
Navigate away without saving

Expected Result: Warning prompt OR data loss occurs (should be checked)

Actual Result: No warnings given, data loss occurs
Status: Fail

5. Stock & Business Logic Testing

TC-FUNC-031 — Stock Becomes 0 After Purchase Simulation (Manual assumption test)

Type: Functional / Business logic

Steps:
Set product quantity to 1
Simulate reduction (manual edit in admin)
Save

Expected Result:
Stock updates correctly
Product may show “out of stock” if quantity = 0

Actual Result: 
* Stock updates correctly.
* Stock quantity shows as zero. Out of stock status of product should be pre-set when adding/editing product to show certain options like 2-3 days out of stock/in stock/out of stock/pre-order.

Status: Pass