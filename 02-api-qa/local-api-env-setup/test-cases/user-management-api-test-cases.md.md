API Test Cases



Test Scenario 1 - Login Test Cases



Test Case 1

Precondition - API endpoint is accessible

Steps
1 - login with valid credentials - Given API uses email \& password
Send POST request to api/login with body
{
"email": "user@example.com",
"password": "1234"
}



Expected result -
Status code 200 OK
Response contains user Token/user session info
Response contains Login Successful message



Test Case 2

Precondition - API endpoint is accessible

Steps -
1 - login with invalid credentials - wrong email with correct password
Send POST request to api/login with body
{
"email": "wronguseremail@example.com",
"password": "1234"
}



Expected result -
Status code 400 Bad Request
Response contains Wrong email/password message



Test Case 4

Precondition - API endpoint is accessible

Steps -
1 - login with invalid credentials - wrong password with correct email
Send POST request to api/login with body
{
"email": "user@example.com",
"password": "wrongpassword"
}



Expected result -
Status code 400
Response contains Wrong email/password message



Test Case 5

Precondition - API endpoint is accessible

Steps -
1 - login with valid credentials using exactly lowest number of symbols required for password presuming API is set to two minimum symbol password
Send POST request to api/login with body


{
"email": "user@example.com",
"password": "12"
}



Expected result -
Status code 200 OK
Response contains user Token/user session info
Response contains Login Successful message



Test Case 6

Precondition - API endpoint is accessible

Steps -
1 - login with valid credentials using exactly the highest possible required for password presuming API is set to eighteen maximum symbol password
Send POST request to api/login with body
{
"email": "user@example.com",
"password": "123456789012345678"
}



Expected result -
Status code 200 OK
Response contains user Token/user session info
Response contains Login Successful message



Test Case 7

Precondition - API endpoint is accessible

Steps -
1 - Try to login with valid email, but left password field empty
Send POST request to API/login with body


{
"email": "user@example.com",
"password": ""
}



Expected result -
Status code 400
Validation error - password is required



Test Case 8

Precondition - API endpoint is accessible

Steps -
1 - Try to login with valid password, but left email field empty
Send POST request to API/login with body


{
"email": "",
"password": "1234"
}



Expected result -
Status code 400
Validation error - email is required



Test Scenario 2 - Security concern - numbers only password should not be allowed at registration, password length must be twelve or more than twelve characters and must include a capital letter, one symbol and one number at le



Test Case 1

Precondition - API endpoint is accessible
User registered with password covered by password requirements

Steps -
1 - Login with correct username and password with mentioned requirements

Send POST request to API/login with body


{
"email": "user@example.com",
"password": "Password12#$"
}



Expected result -
Status code 200 OK
Response contains user Token/user session info
Response contains Login Successful message

