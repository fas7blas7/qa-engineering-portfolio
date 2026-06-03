# 🧪 API Test Cases — ReqRes API

---

## TC-001 — Get All Users

### Preconditions

API endpoint is accessible.

### Steps

1. Send GET request to:
   `/api/users?page=2`

### Expected Result

* Status code is 200
* Response contains users array
* Each user has:

  * id
  * email
  * first_name
  * last_name
  * avatar

---

## TC-002 — Get Single User

### Preconditions

User with ID 2 exists.

### Steps

1. Send GET request to:
   `/api/users/2`

### Expected Result

* Status code is 200
* Correct user data is returned
* User ID equals 2

---

## TC-003 — Successful Login

### Preconditions

Valid credentials are available.

### Steps

1. Send POST request to:
   `/api/login`

2. Provide valid email and password.

### Expected Result

* Status code is 200
* Authentication token is returned

---

## TC-004 — Login Without Password

### Preconditions

API endpoint is accessible.

### Steps

1. Send POST request to:
   `/api/login`

2. Provide email only.

### Expected Result

* Status code is 400
* Error message is returned
* Login is rejected
