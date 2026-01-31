# Assignment 1 - SwiftTranslator Automation (Playwright)

This repository contains the automated test suite for the **SwiftTranslator** web application (Singlish to Sinhala conversion), developed using **Playwright**.

## Student Details
* **Name:** AROSHANA M.M.D
* **Registration Number:** IT23141124 
* **Subject:** IT3040 - ITPM

---

## Prerequisites
Before running the tests, ensure you have the following installed on your machine:
1. **Node.js** (Version 14 or higher) - [Download Here](https://nodejs.org/)
2. **Visual Studio Code** 

---

## Installation Instructions

Follow these steps to set up the project:

1. **Clone the Repository**
   ```bash
   git clone [https://github.com/DushanAroshana/Test-cases-automation---Playwright]

2. **Navigate to the Project Folder Open your terminal and move into the project directory:**.
   ```bash
   cd IT23141124

4. **Install Dependencies Run the following command to install the required Node.js packages:**
   ```bash
   npm install

6. **Install Playwright Browsers This downloads the necessary browser binaries (Chromium, Firefox, WebKit):**
   ```bash
   npx playwright install


## How to Run the Tests

# Run with Browser Visible
This runs the tests in "Headed" mode using Google Chrome (Chromium) so, you can watch the automation happening.
npx playwright test --project=chromium --headed


## Viewing the Test Report
After the tests have finished running, a report is generated automatically. To view the HTML report in your browser, 
run:
npx playwright show-report


## Project Structure
1. tests/assignment.spec.js: Contains all 37 test cases (Positive, Negative, and UI scenarios).
2. playwright.config.js: Configuration settings for timeouts and browser options.
3. package.json: List of project dependencies.


