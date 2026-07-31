# OpenCart Playwright Test Automation Framework

A TypeScript-based web test automation framework developed using Playwright.

This project automates functional test scenarios for the OpenCart e-commerce application. It follows the Page Object Model and uses reusable page components, custom Playwright fixtures, data-driven testing, environment configuration, reporting, and database utilities.

> 🚧 **Project Status: Work in Progress**
>
> This framework is currently under development. Login and registration functionality has been implemented, while additional OpenCart modules and framework improvements will be added gradually.

## 🚀 About Me

Hi, my name is **Davinder Raju**, and I have more than 6 years of experience in automation testing using technologies such as Selenium WebDriver, Playwright, Rest Assured, TestNG, Java, and TypeScript.

My major expertise is in designing reusable and maintainable test automation frameworks.

## Author

GitHub: [@idavinde](https://github.com/idavinde)

Email Address: [davinderraju@gmail.com](mailto:davinderraju@gmail.com)

## 🔗 Project Link

GitHub Repository:

https://github.com/idavinde/OpenCart-Playwright

## Features Currently Implemented

* Web automation using Playwright
* TypeScript-based framework
* Page Object Model
* Reusable `BasePage`
* Reusable header component
* Custom Playwright page fixtures
* Login test scenarios
* Positive and negative login validation
* Registration test scenarios
* Registration field validation
* Existing-email registration validation
* Newsletter subscription validation
* Faker-based dynamic test-data generation
* JSON, CSV, and Excel test-data utilities
* Environment-variable management using dotenv
* MySQL database connection utility
* Cross-browser configuration
* HTML reporting
* Allure reporting integration
* Screenshots on test failure
* Videos retained for failed tests
* Playwright traces on retry
* Automatic retry for failed tests

## Test Scenarios Currently Covered

### Login

* Login using valid credentials
* Login using invalid credentials
* Data-driven login testing
* Error-message validation
* User logout after successful login

### Registration

* Registration using all required fields
* Registration with newsletter selected
* Registration without newsletter selected
* Registration using an existing email address
* Empty registration form validation
* Navigation to the registration page using different links
* Successful account-creation validation

## Technologies Used

* TypeScript
* Playwright
* Node.js
* npm
* Faker
* dotenv
* JSON
* CSV
* XLSX
* MySQL
* Playwright HTML Report
* Allure Report

## Project Structure

```text
OpenCart-Playwright/
│
├── component/
│   └── HeaderComponent.ts
│
├── config/
│   └── environment.ts
│
├── data/
│   └── Test data files
│
├── dataProvider/
│   └── DataProvider.ts
│
├── database/
│   ├── DatabaseClient.ts
│   └── CustomerQuery.ts
│
├── fixtures/
│   └── pageFixtures.ts
│
├── pages/
│   ├── BasePage.ts
│   ├── HomePage.ts
│   ├── LoginPage.ts
│   ├── RegistrationPage.ts
│   ├── AccountSuccessPage.ts
│   ├── MyAccountPage.ts
│   └── NewsLetterSubscriptionPage.ts
│
├── tests/
│   ├── dataDrivenTest/
│   └── registration/
│
├── types/
│   └── Test-data models
│
├── utility/
│   ├── FakerDataGenerator.ts
│   └── createLoginTests.ts
│
├── .env.example
├── package.json
├── playwright.config.ts
└── tsconfig.json
```

## Prerequisites

Before running the framework, install:

* Node.js
* npm
* Git
* Playwright browsers
* XAMPP or another local server for OpenCart
* MySQL, when running database-related tests
* Allure Commandline, optional for viewing Allure reports

Verify Node.js and npm:

```bash
node --version
npm --version
```

## Setup Instructions

### Clone the Repository

```bash
git clone https://github.com/idavinde/OpenCart-Playwright.git
```

Open the project folder:

```bash
cd OpenCart-Playwright
```

### Install Project Dependencies

```bash
npm install
```

### Install Playwright Browsers

```bash
npx playwright install
```

## Environment Configuration

Create a `.env` file in the project root.

On macOS or Linux:

```bash
cp .env.example .env
```

On Windows:

```bash
copy .env.example .env
```

Add the required environment values:

```env
BASE_URL=http://localhost/opencart/upload/
EMAIL=existing-user-email
PASSWORD=existing-user-password

DB_HOST=localhost
DB_USER=database-user
DB_PASSWORD=database-password
DB_NAME=opencart-database-name
DB_PORT=3306
```

Do not commit the `.env` file to GitHub.

Make sure the OpenCart application and database are running before starting the tests.

## Running Tests

### Run All Tests

```bash
npm test
```

### Run Tests in Headed Mode

```bash
npm run test:headed
```

### Run Tests Using Playwright UI Mode

```bash
npm run test:ui
```

### Run Tests on Chromium

```bash
npx playwright test --project=chromium
```

### Run Tests on Firefox

```bash
npx playwright test --project=firefox
```

### Run Tests on WebKit

```bash
npx playwright test --project=webkit
```

### Run a Specific Test File

```bash
npx playwright test tests/registration/registration-positive.spec.ts
```

## Reports

### Playwright HTML Report

After test execution, open the Playwright HTML report:

```bash
npm run report
```

The HTML report is generated inside:

```text
playwright-report/
```

### Allure Report

Allure result files are generated inside:

```text
allure-results/
```

After installing Allure Commandline, generate the report:

```bash
allure generate allure-results --clean -o allure-report
```

Open the report:

```bash
allure open allure-report
```

## Test Evidence

The framework is configured to collect the following evidence:

* Screenshots when a test fails
* Videos for failed tests
* Playwright traces when a failed test is retried
* HTML test results
* Allure test results

## Data-Driven Testing

The framework includes utilities to read test data from:

* JSON files
* CSV files
* Excel files

Faker is also used to generate dynamic registration data such as:

* First name
* Last name
* Email address
* Password

## Database Support

The project includes a MySQL database client and customer-query utility.

Database validation is currently being developed and will be expanded to verify that data submitted through the OpenCart user interface is stored correctly in the database.

## Roadmap

The following functionality is planned as the project continues:

* Complete login framework refactoring
* Expand database validation
* Product search testing
* Product details testing
* Add-to-cart testing
* Shopping-cart validation
* Wishlist testing
* Checkout workflow testing
* Order-history testing
* Currency-selection testing
* Test-data cleanup
* Improved exception handling
* Logging integration
* GitHub Actions integration
* Continuous integration execution
* Code linting and formatting
* Additional reusable Playwright fixtures
* Expanded negative and boundary test scenarios

## Project Status

This is an actively developing personal automation project.

The current focus is building a professional Playwright framework structure and gradually adding complete OpenCart business workflows. Features listed under the roadmap should not be considered completed yet.
