
import { ProjectsPage } from "../../pages/Projects";

//font sizes in rem
const xxs = 0.5;
const xs = 0.75;
const s = 0.875;
const base = 1;
const l = 1.125;
const xl = 1.25;
const two_xl = 1.5;
const three_xl = 1.875;
const four_xl = 2.25;
const five_xl = 3;
const six_xl = 3.75;
const seven_xl = 4.5;
const eight_xl = 6;
const nine_xl = 8;
const ten_xl = 10;

describe("TESTING PORTFOLIO WEBSITE WITH WIDTH > 1536px", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.viewport(1600, 800);
    cy.reload();
  });
describe("TESTING PROJECTS SECTION WITH COMPUTER RESOLUTION", () => {
    it("Verify main title font size", () => {
      cy.remToPx(five_xl).then((pxFontSize) => {
        cy.get(ProjectsPage.sectionTitle).should(
          "have.css",
          "font-size",
          `${pxFontSize}px`
        );
      });
    });

    it("Verify subtitles font size", () => {
      cy.remToPx(three_xl).then((pxFontSize) => {
        cy.get(ProjectsPage.portfolioTitle).should(
          "have.css",
          "font-size",
          `${pxFontSize}px`
        );
        cy.get(ProjectsPage.rouletteTitle).should(
          "have.css",
          "font-size",
          `${pxFontSize}px`
        );
      });
    });

    it("Verify font size for all links", () => {
      cy.remToPx(xl).then((pxFontSize) => {
        //all links
        cy.get(ProjectsPage.projectContentLinks).each(($el) => {
          cy.wrap($el).should("have.css", "font-size", `${pxFontSize}px`);
        });
      });
    });

    it("Verify font size for all descriptions", () => {
      cy.remToPx(xl).then((pxFontSize) => {
        //all descriptions
        cy.get(ProjectsPage.projectDescriptions).each(($el) => {
          cy.wrap($el).should("have.css", "font-size", `${pxFontSize}px`);
        });
      });
    });

    it("Verify font size for all labels", () => {
      cy.remToPx(two_xl).then((pxFontSize) => {
        //all labels
        cy.get(ProjectsPage.projectLabels).each(($el) => {
          cy.wrap($el).should("have.css", "font-size", `${pxFontSize}px`);
        });
      });
    });

    it("Verify font size for all Tech list items", () => {
      cy.remToPx(xl).then((pxFontSize) => {
        //all labels
        cy.get(ProjectsPage.projectTechItems).each(($el) => {
          cy.wrap($el).should("have.css", "font-size", `${pxFontSize}px`);
        });
      });
    });

    it("Verify font size for all Tech list items", () => {
      cy.remToPx(xl).then((pxFontSize) => {
        //all labels
        cy.get(ProjectsPage.projectTechItems).each(($el) => {
          cy.wrap($el).should("have.css", "font-size", `${pxFontSize}px`);
        });
      });
    });

    it("Verify project layout", () => {
      //row reverse layout
      cy.get(ProjectsPage.projectInfoContainers).each(($el) => {
        cy.wrap($el).should("have.css", "flex-direction", "row-reverse");
      });
      cy.get(ProjectsPage.projectInfoContainers).each(($el) => {
        cy.wrap($el).should("have.css", "justify-content", "space-between");
      });
      cy.get(ProjectsPage.projectInfoContainers).each(($el) => {
        cy.wrap($el).should("have.css", "align-items", "normal");
      });
      cy.get(ProjectsPage.projectIframeContainers).each(($el) => {
        cy.get(ProjectsPage.projectIframeContainers)
          .should("have.css", "width")
          .then((width) => {
            cy.get(ProjectsPage.projectIframeContainers).should(
              "have.css",
              "padding-top",
              '0px'
            );
          });
      });
    });
  });
});