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

  
  describe('PROJECTS MAIN TITLE TESTING', () => {
    it('Verify main title text', () => {
        cy.get(ProjectsPage.sectionTitle).invoke('text').should('match', /my projects/i);
    });

    it('Verify main title text is uppercase', () => {
        cy.get(ProjectsPage.sectionTitle).should('have.css', 'text-transform', 'uppercase');
    });

    it('Verify main title text color', () => {
        cy.get(ProjectsPage.sectionTitle).should('have.css', 'color', 'rgb(241, 245, 249)');
    });
});
});