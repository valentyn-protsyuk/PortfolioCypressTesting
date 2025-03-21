# UI Tests for my Portfolio Website

Welcome to the **Portfolio Testing** project! This repository contains end-to-end (E2E) tests for my portfolio ✨

## Project Structure 📁

Here's a quick overview of the project structure:
```plaintext
📦 PortfolioCypressTesting
├── 📂 cypress
│ ├── 📂 e2e
│ │ ├── 📂 darkModeTesting
| │ │ ├── headerDM.cy.ts
| │ │ ├── linksDM.cy.ts
| │ │ ├── profileDM.cy.ts
| │ │ ├── projectsDM.cy.ts
| │ │ └── skillsDM.cy.ts
│ │ ├── 📂 lightModeTesting
| │ │ ├── headerLM.cy.ts
| │ │ ├── linksLM.cy.ts
| │ │ ├── profileLM.cy.ts
| │ │ ├── projectsLM.cy.ts
| │ │ └── skillsLM.cy.ts
│ │ ├── 📂 responsiveDesignTesting
| │ │ ├── computeResolution.cy.ts
| │ │ ├── laptopResolution.cy.ts
| │ │ ├── mobileMenuDM.cy.ts
| │ │ ├── mobileMenuLM.cy.ts
| │ │ ├── mobileResolution.cy.ts
| │ │ ├── tabletResolution.cy.ts
| │ │ └── wideScreen.cy.ts
│ ├── 📂 fixtures
│ ├── 📂 pages
│ │ ├── Header.ts
│ │ ├── Links.ts
│ │ ├── MobileMenu.ts
│ │ ├── Profile.ts
│ │ ├── Projects.ts
│ │ └── Skills.ts
│ ├── 📂 support
│ │ ├── commands.ts
│ │ └── e2e.ts
│ └── tsconfig.json
├── .gitignore
├── cypress.config.ts
├── .gitignore
├── package-lock.json
└── package.json

```


## Installation 🛠️

Clone the repository:
   ```sh
   git clone https://github.com/valentyn-protsyuk/PortfolioCypressTesting.git
   ```
## Navigate to the project directory:



  ```sh
cd PortfolioCypressTesting
 ```
## Install dependencies:

  ```sh

npm install
 ```

## Running Tests 🚀

  ```sh

npm run open
 ```


## Folder Structure 🗂️
```plaintext
cypress/e2e: Contains the E2E test files categorized into different collections such as dark mode, light mode, and responsive testing.
cypress/support: Contains custom commands and utility functions.
cypress/pages: Folder for page objects.
 ```
