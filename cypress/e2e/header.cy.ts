import {HeaderPage} from "../pages/Header"

describe("Header testing", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.reload();
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
