import { HeaderPage } from "../../pages/Header";
import { ProfilePage } from "../../pages/Profile";
import { LinksPage } from "../../pages/Links";
import { SkillsPage } from "../../pages/Skills";
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

describe("TESTING PORTFOLIO WEBSITE WITH WIDTH > 1280px && < 1536px", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.viewport(1535, 800);
    cy.reload();
  });

  describe("TESTING PROFILE WITH COMPUTER RESOLUTION", () => {
    it("Verify profile gap", () => {
      const rem = 2; //gap in rem unit
      cy.remToPx(rem).then((pxGap) => {
        cy.get(ProfilePage.profileContainer).should(
          "have.css",
          "gap",
          `${pxGap}px`
        );
      });
    });

    it("Verify profile img top margin", () => {
      const rem = 5; //margin in rem unit
      cy.remToPx(rem).then((pxMargin) => {
        cy.get(ProfilePage.img).should(
          "have.css",
          "margin-top",
          `${pxMargin}px`
        );
      });
    });

    it("Verify profile img dimensions", () => {
      const remWidth = 10; //width in rem unit
      const remHeight = 14; //height in rem unit
      //check width
      cy.remToPx(remWidth).then((pxWidth) => {
        cy.get(ProfilePage.img).should("have.css", "width", `${pxWidth}px`);
      });
      //check height
      cy.remToPx(remHeight).then((pxHeight) => {
        cy.get(ProfilePage.img).should("have.css", "height", `${pxHeight}px`);
      });
    });

    it("Verify font size of main title", () => {
      cy.remToPx(nine_xl).then((pxFontSize) => {
        cy.get(ProfilePage.mainTitle).should(
          "have.css",
          "font-size",
          `${pxFontSize}px`
        );
      });
    });

    // it.only('Verify letter spacing of main title', () => {
    //     const rem = -0.05;
    //     cy.remToPx(rem).then(pxSpacing => {
    //         cy.get(ProfilePage.mainTitle).should('have.css', 'letter-spacing', `${pxSpacing}px`);
    //     });
    // });

    // it.only('Verify line height of main title', () => {
    //     const lineHeight = 0.9;
    //     cy.remToPx(five_xl).then(pxFontSize => {
    //         cy.get(ProfilePage.mainTitle).should('have.css', 'font-size', `${pxFontSize * lineHeight}px`);
    //     });
    // });

    it("Verify font size of subtitles", () => {
      cy.remToPx(four_xl).then((pxFontSize) => {
        cy.get(ProfilePage.aboutTitle).should(
          "have.css",
          "font-size",
          `${pxFontSize}px`
        );
        cy.get(ProfilePage.educationTitle).should(
          "have.css",
          "font-size",
          `${pxFontSize}px`
        );
        cy.get(ProfilePage.coursesTitle).should(
          "have.css",
          "font-size",
          `${pxFontSize}px`
        );
      });
    });

    // it.only('Verify line height of subtitles', () => {
    //     const lineHeight = 0.9;
    //     cy.remToPx(l).then(pxFontSize => {
    //         cy.get(ProfilePage.aboutTitle).should('have.css', 'font-size', `${pxFontSize * lineHeight}px`);
    //         cy.get(ProfilePage.educationTitle).should('have.css', 'font-size', `${pxFontSize * lineHeight}px`);
    //         cy.get(ProfilePage.coursesTitle).should('have.css', 'font-size', `${pxFontSize * lineHeight}px`);
    //     });
    // });

    it("Verify font size of paragraphs", () => {
      cy.remToPx(xl).then((pxFontSize) => {
        cy.get(ProfilePage.aboutParagraph).should(
          "have.css",
          "font-size",
          `${pxFontSize}px`
        );
        cy.get(ProfilePage.educationParagraph).should(
          "have.css",
          "font-size",
          `${pxFontSize}px`
        );
        cy.get(ProfilePage.coursesParagraph).should(
          "have.css",
          "font-size",
          `${pxFontSize}px`
        );
      });
    });
  });

  describe("TESTING CONTACT SECTION WITH COMPUTER RESOLUTION", () => {
    it("Verify contact gap", () => {
      const rem = 2; //gap in rem unit
      cy.remToPx(rem).then((pxGap) => {
        cy.get(LinksPage.linksContainer).should(
          "have.css",
          "gap",
          `${pxGap}px`
        );
      });
    });

    it("Verify main title font size", () => {
      cy.remToPx(five_xl).then((pxFontSize) => {
        cy.get(LinksPage.mainTitle).should(
          "have.css",
          "font-size",
          `${pxFontSize}px`
        );
      });
    });

    it("Verify font size of subtitles", () => {
      cy.remToPx(three_xl).then((pxFontSize) => {
        cy.get(LinksPage.contactSubtitle).should(
          "have.css",
          "font-size",
          `${pxFontSize}px`
        );
        cy.get(LinksPage.otherSubtitle).should(
          "have.css",
          "font-size",
          `${pxFontSize}px`
        );
      });
    });

    it("Verify gap between links", () => {
      const rem = 2; //gap in rem unit
      cy.remToPx(rem).then((pxGap) => {
        cy.get(LinksPage.ulContainers)
          .eq(0)
          .should("have.css", "gap", `${pxGap}px`);
        cy.get(LinksPage.ulContainers)
          .eq(1)
          .should("have.css", "gap", `${pxGap}px`);
      });
    });

    it("Verify fontsize of links", () => {
      cy.remToPx(two_xl).then((pxFontSize) => {
        cy.get(LinksPage.linkedinLink).should(
          "have.css",
          "font-size",
          `${pxFontSize}px`
        );
        cy.get(LinksPage.emailLink).should(
          "have.css",
          "font-size",
          `${pxFontSize}px`
        );
        cy.get(LinksPage.githubLink).should(
          "have.css",
          "font-size",
          `${pxFontSize}px`
        );
        cy.get(LinksPage.resumeLink).should(
          "have.css",
          "font-size",
          `${pxFontSize}px`
        );
      });
    });
  });
});