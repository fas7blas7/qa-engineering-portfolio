# API Test Automation Framework

[![API CI Pipeline](https://github.com/fas7blas7/qa-engineering-portfolio/actions/workflows/api-ci.yml/badge.svg)](https://github.com/fas7blas7/qa-engineering-portfolio/actions/workflows/api-ci.yml)

## 📌 Overview

This project is an API testing automation framework built as part of my QA Engineering portfolio.

It demonstrates automated validation of REST APIs using a containerized environment, Postman collections, Newman execution, and GitHub Actions CI/CD pipelines.

The goal is to simulate a real-world QA workflow using industry-standard tools and maintainable test architecture.

---

## 🧭 Project Structure

```text
02-dummyjson-api-qa/
└── dockerized-api-qa/
    ├── api/               (Node.js REST API using Express)
    ├── newman/            (Postman collections, environments, reports)
    ├── reports/           (Generated HTML reports)
    └── docker-compose.yml (Docker orchestration)
```

---

## 🧪 Testing Scope

### CRUD Testing

* Create resources
* Read data
* Update resources
* Delete resources
* Full lifecycle validation

### Negative Testing

* Invalid endpoints
* Missing fields
* Invalid payloads
* Non-existent resources
* Error response validation

### Edge Case Testing

* Empty values
* Invalid formats
* Boundary value scenarios

---

## 🛠 Tools & Technologies

* Postman
* Newman
* Docker
* Node.js
* Express
* GitHub Actions

---

## ▶️ Running Tests Locally

### Prerequisites

Install:

* Docker Desktop
* Node.js
* Newman

Install Newman globally:

```bash
npm install -g newman
```

### Run Newman

Navigate to the Newman folder:

```bash
cd 02-dummyjson-api-qa/dockerized-api-qa/newman
```

Run the collection:

```bash
newman run collections/dummyjson.json -e environments/dummyjson.env.json
```

Expected result:

```text
✔ All requests executed successfully
✔ CRUD operations validated
✔ Assertions passed
```

### Important Note

Use the correct Postman environment when executing tests.

Incorrect environment configuration may cause requests to target invalid endpoints and result in failed assertions.

---

## 🐳 Docker Execution

Run from the directory containing `docker-compose.yml`:

```bash
docker compose up --build
```

This command:

* Builds the API image
* Starts the API container
* Executes the Newman collection
* Generates HTML reports

### Expected Behavior

* The `api` container remains running.
* The `newman` container exits automatically after test execution.
* An exited Newman container with exit code `0` indicates successful execution.

Stop all containers:

```bash
docker compose down
```

---

## 🔍 Example Test Flow

```text
Create User
→ Get User By ID
→ Update User
→ Delete User
→ Verify User No Longer Exists
```

---

## 📊 Current Coverage

### Positive Tests

* Create user
* Get user by ID
* Update user
* Delete user

### Negative Tests

* Verify deleted user returns 404
* Verify error response after deletion

---

## 🔄 CI/CD Pipeline

This project uses GitHub Actions to execute API tests automatically on pushes to the main branch.

Pipeline workflow:

```text
Checkout Repository
→ Build Environment
→ Start API Service
→ Execute Newman Collection
→ Validate Assertions
→ Generate Reports
→ Upload Artifacts
```

---

## 📈 Reporting

Test execution generates:

* Newman CLI output
* HTML reports (htmlextra)
* GitHub Actions artifacts

Reports help analyze:

* API stability
* Test failures
* Response correctness
* Automation execution results

---

## 🎯 Learning Outcomes

This project demonstrates:

* API automation testing
* CRUD validation
* Positive and negative testing
* Environment management
* Docker containerization
* Newman automation
* CI/CD integration
* Test reporting
* QA workflow automation

---

## 📌 Purpose

This project demonstrates practical QA Engineering skills focused on:

* API automation
* Containerized test environments
* CI/CD integration
* Scalable test execution
* Real-world QA workflows

It is part of a broader QA portfolio that includes:

* Manual Testing
* API Automation
* UI Automation
* CI/CD Pipelines

---

## 🧪 Local API Environment (Learning Setup)

A separate local environment is included for experimentation and learning.

### Purpose

* Practice API testing against local endpoints
* Experiment with Postman and Newman execution
* Validate API behavior before automation implementation
* Understand request and response workflows

### Status

Learning / exploratory setup (not part of CI/CD execution)

### Location

```text
local-api-env-setup/
```