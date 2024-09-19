## Installation

Playwright has its own test runner for end-to-end tests, we call it Playwright Test.

```Shell
npm i -D @playwright/test
# install supported browsers
npx playwright install
```

### Dependencies

Allure Report
```
npm install --save-dev allure-commandline
```
```
npm install --save-dev allure-playwright
```

## How to Run

npx playwright test

## Generate Report

npx allure generate ./allure-results -o ./allure-report

npx allure open allure-report 