import { ProjectsPage } from "../pages/Projects";
import "cypress-real-events/support";

describe("PROJECT SECTION TESTING in DARK MODE", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.reload();
  });

  describe("PROJECT CONTAINER Testing", () => {
    it("Verify section container has vertical layout", () => {
      cy.get(ProjectsPage.sectionContainer).should("have.css", "display", "flex");
      cy.get(ProjectsPage.sectionContainer).should("have.css","flex-direction","column");
    });
  });

});