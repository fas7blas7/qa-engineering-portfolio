# Login Module Requirements (OpenCart)

## Functional Requirements

REQ-LOGIN-001:
The system shall allow registered users to log in using a valid email and password combination.

REQ-LOGIN-002:
The system shall reject login attempts with invalid credentials and display a generic authentication error message.

REQ-LOGIN-003:
The system shall validate that both email and password fields are required before submitting the login form.

REQ-LOGIN-004:
The password field shall mask user input to prevent visible exposure of characters.

REQ-LOGIN-005:
Upon successful login, the user shall be redirected to the account dashboard page.

REQ-LOGIN-006:
The system shall maintain the user session until the user explicitly logs out.

---

## Validation Rules

REQ-LOGIN-007:
The system shall not allow login submission when email field is empty.

REQ-LOGIN-008:
The system shall not allow login submission when password field is empty.

---

## Security / UX Behavior

REQ-LOGIN-009:
The system shall display a generic error message for authentication failures to prevent information leakage.

---

## Session Behavior

REQ-LOGIN-010:
The system shall retain the user session after page refresh.

REQ-LOGIN-011:
The system shall terminate the session upon logout action.