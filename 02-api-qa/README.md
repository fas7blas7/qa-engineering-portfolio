# API Test Automation Framework (2026 QA Comeback)

## Overview

This project is an API testing automation framework built as part of my QA engineering portfolio.

It demonstrates automated validation of REST APIs using a containerized environment, test collections, and CI/CD execution.

The goal is to simulate a real-world QA workflow using industry tools and scalable architecture.

---

## Project Structure

02-api-qa/
└── dockerized-api-qa/
    ├── api/               (Node.js REST API using Express)
    ├── newman/            (Postman collections, environments, reports)
    ├── docker-compose.yml (Docker orchestration)

---

## Testing Scope

### CRUD Testing
- Create resources
- Read data
- Update resources
- Delete resources
- Full lifecycle validation

### Negative Testing
- Invalid endpoints
- Missing fields
- Wrong payloads
- Non-existent resources

### Edge Case Testing
- Empty values
- Invalid formats
- Boundary values
- Error response validation

---

## Tools & Technologies

- Postman (API test design)
- Newman (CLI test execution)
- Docker (containerized environment)
- Node.js (API server)
- Express (REST API framework)
- GitHub Actions (CI/CD pipeline)

---

## Docker Execution

Run locally:

docker compose up --build

This will:
- Start the API server
- Prepare the test environment
- Enable automated test execution

---

## CI/CD Pipeline

This project uses GitHub Actions to run API tests in a containerized environment.

Pipeline steps:

1. Checkout repository
2. Set up Node.js
3. Build Docker containers
4. Start API service using docker-compose
5. Run Postman collections using Newman
6. Generate HTML reports (htmlextra)
7. Upload reports as GitHub Actions artifacts

---

## Reporting

Test execution generates:
- Newman CLI output
- HTML reports (htmlextra)
- CI artifacts in GitHub Actions

These reports help analyze:
- API stability
- Test failures
- Response correctness

---

## Key Highlights

- Fully containerized API testing framework
- Automated CI/CD execution
- Environment-based test configuration
- Scalable Postman + Newman structure
- Real-world QA workflow simulation

---

## Purpose

This project demonstrates:
- API automation testing
- CI/CD integration in QA workflows
- Docker-based test environments
- Practical QA engineering skills

It is part of a broader QA portfolio including:
- Manual testing
- API automation
- UI automation
- CI/CD pipelines
- Local API Environment

## Local API Environment (Learning Setup)

This folder contains a local API testing environment used for learning and experimentation.

### Purpose:
- Practice API testing against local endpoints
- Experiment with Postman and Newman execution
- Validate API behavior before automation framework design
- Understand request/response flows in a controlled environment

### Status:
Learning / exploratory setup (not part of CI/CD pipeline)

### Location:
local-api-env-setup/