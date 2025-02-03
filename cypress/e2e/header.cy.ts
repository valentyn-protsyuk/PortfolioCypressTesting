import {HeaderPage} from "../pages/Header"

describe("Header testing", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.reload();
  });

  it("Header elements order", () => {
    // 1 profile btn
    cy.get('.header__menu li:nth-child(1)').contains('Profile');
    // 2 links btn
    cy.get('.header__menu li:nth-child(2)').contains('Links');
    // 3 skills btn
    cy.get('.header__menu li:nth-child(3)').contains('Skills');
    // 4 projects btn
    cy.get('.header__menu li:nth-child(4)').contains('Projects');
    // 5 line
    cy.get('.header__menu li:nth-child(5)').should('have.class','header__line');
    // 6 sun btn
    cy.get('.header__menu li:nth-child(6)').find('button.header__sun').should('exist');
  });

  it("Profile btn hover color change", () => {
    // profile btn selector
    let profileSelector = '.header__link[href*="profile"]';
    //initial color
    cy.get(profileSelector)
      .should("have.css", "color", "rgb(71, 85, 105)");
    // on hover text should be violet
    HeaderPage.hoverViolet(profileSelector);
  });

});
