/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<void>
    }
  }
}

Cypress.Commands.add("isInViewport", (selector) => {
    cy.window({ log: false }).then((win) => {
      // get the current viewport of the application
      const { innerHeight, innerWidth } = win
      cy.log(JSON.stringify({ innerHeight, innerWidth }))
  
      cy.get(selector).should(($el) => {
          const rect = $el[0].getBoundingClientRect()

          if (rect.bottom > 0 && rect.top < innerHeight) {
            // the element is outside the viewport vertically
            return
          }
          throw new Error(`Element: ${selector} with top coordinate: ${rect.top} is not in current viewport`)
      })
    })
  
    cy.log(`${selector} is visible in viewport`)
  })