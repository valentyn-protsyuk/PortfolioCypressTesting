import { ProjectsPage } from "../../pages/Projects";
import "cypress-real-events/support";

describe("PROJECT SECTION TESTING in DARK MODE", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.reload();
  });

  //SECTION TESTS
  describe("PROJECT CONTAINER Testing", () => {
    it("Verify section container has vertical layout", () => {
      cy.get(ProjectsPage.sectionContainer).should(
        "have.css",
        "display",
        "flex"
      );
      cy.get(ProjectsPage.sectionContainer).should(
        "have.css",
        "flex-direction",
        "column"
      );
    });
  });

  describe("PROJECTS SECTION TITLE TESTING", () => {
    it("Verify title text", () => {
      cy.get(ProjectsPage.sectionTitle)
        .invoke("text")
        .should("match", /my projects/i);
    });

    it("Verify title text is uppercase", () => {
      cy.get(ProjectsPage.sectionTitle).should(
        "have.css",
        "text-transform",
        "uppercase"
      );
    });

    it("Verify title text color", () => {
      cy.get(ProjectsPage.sectionTitle).should(
        "have.css",
        "color",
        "rgb(241, 245, 249)"
      );
    });
  });
  //GENERAL STYLE TESTS
  describe("GENERAL STYLES TESTING", () => {
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
        cy.wrap($el).should(
          "have.css",
          "border-color",
          "rgba(225, 29, 79, 0.7)"
        );
      });
    });
  });
  //PORTFOLIO PROJECT TESTS
  describe("PORTFOLIO PROJECT SECTION TESTING", () => {
    describe("PORTFOLIO PROJECT SUBTITLE TESTING", () => {
      it("Verify subtitle text", () => {
        cy.get(ProjectsPage.portfolioTitle).should(
          "have.text",
          "Portfolio Website Testing"
        );
      });
    });

    describe("PORTFOLIO PROJECT DESCRIPTION TESTING", () => {
      it("Verify Description title text", () => {
        cy.get(ProjectsPage.portfolioDescLabel).should(
          "have.text",
          "Description"
        );
      });

      it("Verify Description paragraph text", () => {
        cy.get(ProjectsPage.portfolioDescText).should(
          "have.text",
          "For this project, I applied my QA knowledge to ensure functionality and performance of my portfolio website. This included testing features like navigation and links, cross-browser compatibility, and responsive design across devices and screen sizes for a smooth, user-friendly experience."
        );
      });
    });

    describe("PORTFOLIO PROJECT TECH USED SECTION TESTING", () => {
      it("Verify Section title text", () => {
        cy.get(ProjectsPage.portfolioTechLabel).should(
          "have.text",
          "Tech Used"
        );
      });

      it("Verify Item text", () => {
        cy.get(ProjectsPage.portfolioTechItems).eq(0).should("have.text", "JS");
        cy.get(ProjectsPage.portfolioTechItems)
          .eq(1)
          .should("have.text", "CSS");
        cy.get(ProjectsPage.portfolioTechItems)
          .eq(2)
          .should("have.text", "HTML");
        cy.get(ProjectsPage.portfolioTechItems)
          .eq(3)
          .should("have.text", "TypeScript");
        cy.get(ProjectsPage.portfolioTechItems)
          .eq(4)
          .should("have.text", "Cypress");
      });
    });

    describe("PORTFOLIO PROJECT CONTENT LINKS SECTION TESTING", () => {
      it("Verify Section title text", () => {
        cy.get(ProjectsPage.portfolioContentLabel).should(
          "have.text",
          "Table of Contents"
        );
      });

      it("Verify Repository link text", () => {
        cy.get(ProjectsPage.portfolioRepoLink).should(
          "have.text",
          "Portfolio Repository"
        );
      });
      it("Verify Cypress testing Repository link text", () => {
        cy.get(ProjectsPage.portfolioAutomationLink).should(
          "have.text",
          "Cypress Testing Repository"
        );
      });
      it("Verify Manual testing link text", () => {
        cy.get(ProjectsPage.portfolioManualLink).should(
          "have.text",
          "Manual Testing Docs"
        );
      });
    });
  });

  //PORTFOLIO PROJECT TESTS
  describe("RUSSIAN ROULETTE PROJECT SECTION TESTING", () => {
    describe("ROULETTE PROJECT SUBTITLE TESTING", () => {
      it("Verify subtitle text", () => {
        cy.get(ProjectsPage.rouletteTitle).should(
          "have.text",
          "Russian Roulette Game testing"
        );
      });
    });

    describe("ROULETTE PROJECT DESCRIPTION TESTING", () => {
      it("Verify Description title text", () => {
        cy.get(ProjectsPage.rouletteDescLabel).should(
          "have.text",
          "Description"
        );
      });

      it("Verify Description paragraph text", () => {
        cy.get(ProjectsPage.rouletteDescText).should(
          "have.text",
          "For this project, I tested a Russian Roulette game from my game programming class. My testing approach included verifying the functionality of in-game assets such as GIFs, audio files, links, and buttons. I performed end-to-end testing to ensure the user could complete the full game loop. This testing helped ensure a smooth and immersive user experience."
        );
      });
    });

    describe("ROULETTE PROJECT TECH USED SECTION TESTING", () => {
      it("Verify Section title text", () => {
        cy.get(ProjectsPage.portfolioTechLabel).should(
          "have.text",
          "Tech Used"
        );
      });

      it("Verify Item text", () => {
        cy.get(ProjectsPage.rouletteTechItems).eq(0).should("have.text", "JS");
        cy.get(ProjectsPage.rouletteTechItems).eq(1).should("have.text", "CSS");
        cy.get(ProjectsPage.rouletteTechItems)
          .eq(2)
          .should("have.text", "HTML");
        cy.get(ProjectsPage.rouletteTechItems)
          .eq(3)
          .should("have.text", "JSON");
        cy.get(ProjectsPage.rouletteTechItems)
          .eq(4)
          .should("have.text", "Playwright");
      });
    });

    describe("ROULETTE PROJECT CONTENT LINKS SECTION TESTING", () => {
      it("Verify Section title text", () => {
        cy.get(ProjectsPage.rouletteContentLabel).should(
          "have.text",
          "Table of Contents"
        );
      });

      it("Verify Repository link text", () => {
        cy.get(ProjectsPage.rouletteRepoLink).should(
          "have.text",
          "Russian Roulette Repository"
        );
      });
      it("Verify Playwright testing Repository link text", () => {
        cy.get(ProjectsPage.rouletteAutomationLink).should(
          "have.text",
          "Playwright Testing Repository"
        );
      });
      it("Verify Manual testing link text", () => {
        cy.get(ProjectsPage.rouletteManualLink).should(
          "have.text",
          "Manual Testing Docs"
        );
      });
    });
  });
});
