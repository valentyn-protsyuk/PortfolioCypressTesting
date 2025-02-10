import { SkillsPage } from "../pages/Skills";
import "cypress-real-events/support";

describe("SKILLS SECTION TESTING in DARK MODE", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.reload();
  });

  describe("SKILLS CONTAINER Testing", () => {
    it("Verify skills container has vertical layout", () => {
      cy.get(SkillsPage.skillsContainer).should("have.css", "display", "flex");
      cy.get(SkillsPage.skillsContainer).should(
        "have.css",
        "flex-direction",
        "column"
      );
    });
  });

  describe("LINKS MAIN TITLE TESTING", () => {
    it("Verify main title text", () => {
      cy.get(SkillsPage.mainTitle)
        .invoke("text")
        .should("match", /skills/i);
    });

    it("Verify main title text is uppercase", () => {
      cy.get(SkillsPage.mainTitle).should(
        "have.css",
        "text-transform",
        "uppercase"
      );
    });

    it("Verify main title text color", () => {
      cy.get(SkillsPage.mainTitle).should(
        "have.css",
        "color",
        "rgb(241, 245, 249)"
      );
    });
  });


  describe('HARD SKILLS SUBTITLE TESTING', () => {
          it('Verify subtitle text', () => {
              cy.get(SkillsPage.subTitles).eq(0).should('have.text', 'Hard Skills');
          });
  
          it('Verify subtitle text color', () => {
              cy.get(SkillsPage.subTitles).eq(0).should('have.css', 'color', 'rgb(148, 163, 184)');
          });
    });

    describe('HARD SKILLS LABELS TESTING', () => {
        it('Verify 1st label text', () => {
            cy.get(SkillsPage.hsLabels).eq(0).should('have.text', 'Testing');
        });

        it('Verify 2nd label text', () => {
            cy.get(SkillsPage.hsLabels).eq(1).should('have.text', 'Programming');
        });

        it('Verify 3rd label text', () => {
            cy.get(SkillsPage.hsLabels).eq(2).should('have.text', 'Other');
        });

        it('Verify text color for all labels', () => {
            cy.get(SkillsPage.hsLabels).each(($el) => {
                cy.wrap($el).should('have.css', 'color', 'rgb(241, 245, 249)');
            });
        });
  });

});
