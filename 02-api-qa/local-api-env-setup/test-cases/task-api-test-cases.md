Test Scenario - Create
Test case 1 - Create a user successfully - API endpoint /api/register
Preconditions - API endpoint is accessible
Use Create operation with required JSON body structure - e.g. 
{
	"username": "username",
	"email": "email@domain.com",
	"password": "password1234"
}
Expected output - 
Status 200 OK
Output message - Registration successful

Test case 2 - Create a user successfully - API endpoint /api/register
Preconditions - API endpoint is accessible
Use Create operation with required JSON body structure - e.g. 
{
	"username": "username",
	"email": "",
	"password": "password1234"
}
Expected output - 
Status 400
Output message - email is required for registration

Test case 3 - Create a user with wrong username - API endpoint /api/register
Preconditions - API endpoint is accessible
Use Create operation with required JSON body structure - e.g. 
{
	"username": "username@domain.com",
	"email": "email@domain.com",
	"password": "password1234"
}
Expected output - 
Status 400
Output message - wrong username

Test Scenario - Read

Test case 1 - Get all users API endpoint is /api/users
Preconditions - API endpoint is accessible

Use Get operation

Expected output -
Status 200 OK
An array with users

Test case 2 - Get all users API endpoint is /api/users/id
Preconditions - API endpoint is accessible

Use Get operation

Expected output -
Status 200 OK
An array with user

Test Scenario - Update

Test Case 1 - Edit user - API endpoint is /api/users/id
Preconditions - API endpoints is accessible

Use Patch operation with body for e.g.
{
	"username": "username",
	"email": "editedemail@domain.com",
	"password": "editedpassword",
}

Expected output -
Status 200 OK
Key/value pair for email and password changed with new edited values in the object response.
Output message - User data Changed Successfully

Test Case 2 - Edit user - API endpoint is /api/users/id
Preconditions - API endpoints is accessible

Use Patch operation with body for e.g.
{
	"username": "username",
	"email": "editedemail@domain.com",
	"password": "password",
}

Expected output -
Status 200 OK
Key/value pair for email in user object changed with new edited parameters.
Output message - User email Changed Successfully

Test Scenario - Delete 

Test Case 1 - Delete user - API endpoint is /api/user/id
Precondition - API endpoint is accessible

Use Delete operation

Expected output -
Status 200 OK
Output message - User deleted successfully
Check with Get operation at /api/user/id if user is deleted successfully

Test Case 2 - Delete non-existent user - API endpoint is /api/user/id
Precondition - Provide non existent id for user

Use Delete operation

Expected output -
Status 400 
Output message - User does not exist

Test Scenario - Login

Test Case 1 - Login with username and password - API endpoint is /api/login

Precondition - API endpoint is accessible

Use POST operation with body - e.g.
{
	"username":"username",
	"password":"password"
}

Expected output -
200 OK
User token and user session/info is returned
Output message - Logged in successfully

Test Case 2 - Login with Empty user name field - API endpoint is /api/login

Precondition - API endpoint is accessible

Use POST operation with body - e.g.
{ 	
	"email": "",
	"password": "1234"
}
Expected output -
400 Bad Request or 401 Unauthorized
Clear validation message

Test Case 2 - Login with Empty password field - API endpoint is /api/login

Precondition - API endpoint is accessible

Use POST operation with body - e.g.
{ 	
	"email": "user@domain.com",
	"password": ""
}
Expected output -
400 Bad Request or 401 Unauthorized
Validation error

Test Case 3 - Login with Empty password field - API endpoint is /api/login

Precondition - API endpoint is accessible

Use POST operation with body - e.g.
{ 	
	"email": "user@domain.com"
}
Expected output -
400 Bad Request

Test Case 4 - Login with Empty password field - API endpoint is /api/login

Precondition - API endpoint is accessible

Use POST operation with body - e.g.
{ 	
	"email": "null",
	"password": "null"
}
Expected output -
400 Bad Request

Test Scenario - Format Boundary tests

Test Case 1 - Login with bad/wrong format for email password field - API endpoint is /api/login

Precondition - API endpoint is accessible

Use POST operation with body - e.g.
{ 	
	"email": "not-an-email",
	"password": "password"
}
Expected output -
400 Bad Request or 401

Test Case 1 - Login with leading/trailing spaces in email field - API endpoint is /api/login

Precondition - API endpoint is accessible

Use POST operation with body - e.g.
{ 	
	"email": " user@domain.com ",
	"password": "password"
}
Expected output -
either trimmed + success OR rejected (depends on spec)

Test Scenario - SQL Injection

Test Case 1 - Login with well-known security weaknesses for SQL - API endpoint is /api/login

Precondition - API endpoint is accessible

Use POST operation with body - e.g.
{
	"username":"admin",
	"password":"1' or '1'='1"
}

Expected output -
Status 401 - Unauthorized

Lastly I would like to Automate a process with Newman that includes CRUD operations only thing is that my sequence will be CRLUD. So every time I run automation It will create, login, read, update and finally delete a user.
