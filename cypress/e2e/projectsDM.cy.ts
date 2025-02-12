import { ProjectsPage } from "../pages/Projects";
import "cypress-real-events/support";

describe("PROJECT SECTION TESTING in DARK MODE", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.reload();
  });

  //SECTION TESTS
  describe("PROJECT CONTAINER Testing", () => {
    it("Verify section container has vertical layout", () => {
      cy.get(ProjectsPage.sectionContainer).should("have.css", "display", "flex");
      cy.get(ProjectsPage.sectionContainer).should("have.css","flex-direction","column");
    });
  });

  
  describe('PROJECTS SECTION TITLE TESTING', () => {
    it('Verify title text', () => {
        cy.get(ProjectsPage.sectionTitle).invoke('text').should('match', /my projects/i);
    });

    it('Verify title text is uppercase', () => {
        cy.get(ProjectsPage.sectionTitle).should('have.css', 'text-transform', 'uppercase');
    });

    it('Verify title text color', () => {
        cy.get(ProjectsPage.sectionTitle).should('have.css', 'color', 'rgb(241, 245, 249)');
    });
});
//GENERAL STYLE TESTS
describe.only("GENERAL STYLES TESTING", () => {
    it("Verify project title text color", () => {
      cy.get(ProjectsPage.projectTitles).each(($el) => {
        cy.wrap($el).should("have.css", "color", "rgb(148, 163, 184)");
        });
    });

    it("Verify project labels text color", () => {
        cy.get(ProjectsPage.projectLabels).each(($el) => {
          cy.wrap($el).should("have.css", "color", "rgb(241, 245, 249)");
          });
      });

      it("Verify project Description text text color", () => {
        cy.get(ProjectsPage.projectDescriptions).each(($el) => {
          cy.wrap($el).should("have.css", "color", "rgb(71, 85, 105)");
          });
      });

      it("Verify project list item text color", () => {
        cy.get(ProjectsPage.projectTechItems).each(($el) => {
          cy.wrap($el).should("have.css", "color", "rgb(71, 85, 105)");
          });
      });

      it("Verify project links text color", () => {
        cy.get(ProjectsPage.projectContentLinks).each(($el) => {
          cy.wrap($el).should("have.css", "color", "rgba(225, 29, 79, 0.7)");
          });
      });

      it("Verify project iframe has red border", () => {
        cy.get(ProjectsPage.projectIframes).each(($el) => {
          cy.wrap($el).should("have.css", "border-color", "rgba(225, 29, 79, 0.7)");
          });
      });
});
//PORTFOLIO PROJECT TESTS
      describe("PORTFOLIO PROJECT SUBTITLE TESTING", () => {
        it("Verify subtitle text", () => {
          cy.get(ProjectsPage.portfolioTitle).should("have.text", "Portfolio Website Testing");
        });
    
        it("Verify subtitle text color", () => {
          cy.get(ProjectsPage.portfolioTitle)
            .should("have.css", "color", "rgb(148, 163, 184)");
        });
      });

      describe("PORTFOLIO PROJECT DESCRIPTION TESTING", () => {
        it("Verify Description title text", () => {
          cy.get(ProjectsPage.portfolioDescLabel).should("have.text", "Description");
        });
    
        it("Verify Description title text color", () => {
          cy.get(ProjectsPage.portfolioDescLabel)
            .should("have.css", "color", "rgb(241, 245, 249)");
        });
      });
      
});