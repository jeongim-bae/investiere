# Investiere Login Page Testing

This repo contains the testing of the login page with cypress.
It covers the only one positive test case and one negative test case.

## How to set up

The steps below will take you all the way through Cypress. It is assumed you have nothing installed except for node + git.

### 1. Install Cypress

[Follow these instructions to install Cypress.](https://on.cypress.io/guides/installing-and-running#section-installing)

### 2. Fork this repo

```bash
## clone this repo to a local directory
git clone https://github.com/<your-username>/investiere.git

## cd into the cloned repo
cd investiere

## install the node_modules
npm install
```

### 3. Update an user email and a password

- open a loginpage.spec.js
  file location : ./cypress/integration/loginpage.spec.js

- user email and password is not embedded for a security reason.

```bash
  // please type a valid test email address before running test
  const validEmail = "<valid-email>";
  // please type a valid test password running test
  const validPassword = "<valid-password>";
```

### 4. Run a test on cypress

```bash
## open cypress
npm rum cypress
```

- on the test runner, select Electron 80 or firefox
- click loginpage.spec.js or Run all specs
