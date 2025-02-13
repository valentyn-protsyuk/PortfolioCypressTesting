import { MobileMenuPage } from "../../pages/MobileMenu";

describe("HEADER TESTING IN DARK MODE", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.viewport('iphone-xr')
        cy.reload();
        cy.get(MobileMenuPage.hamburgerMenu).click();
        cy.wait(100);
    });

  //ELEMENT ORDER
  it("Header elements order", () => {
    // 1 profile btn
    cy.get(MobileMenuPage.mobileMenuListItems).eq(0).contains("Profile");
    // 2 links btn
    cy.get(MobileMenuPage.mobileMenuListItems).eq(1).contains("Links");
    // 3 skills btn
    cy.get(MobileMenuPage.mobileMenuListItems).eq(2).contains("Skills");
    // 4 projects btn
    cy.get(MobileMenuPage.mobileMenuListItems).eq(3).contains("Projects");
    // 5 line
    cy.get(MobileMenuPage.mobileMenuListItems).eq(4).should(
      "have.class",
      "mobile-nav__link-line"
    );
    // 6 sun btn
    cy.get(MobileMenuPage.mobileMenuListItems).eq(5)
      .find(MobileMenuPage.mobileMenuSun)
      .should("be.visible");
  });

  //BTN HOVER
  describe("BTNS HOVER TESTS", () => {
    it("Profile btn hover color change", () => {
      // profile btn selector
      //initial color
      cy.get(MobileMenuPage.mobileMenuProfile).should("have.css", "color", "rgb(71, 85, 105)");
      // on hover text should be violet
      MobileMenuPage.hoverViolet(MobileMenuPage.mobileMenuProfile);
    });

    it("Links btn hover color change", () => {
      //initial color
      cy.get(MobileMenuPage.mobileMenuLinks).should("have.css", "color", "rgb(71, 85, 105)");
      // on hover text should be violet
      MobileMenuPage.hoverViolet(MobileMenuPage.mobileMenuLinks);
    });

    it("Skills btn hover color change", () => {
      //initial color
      cy.get(MobileMenuPage.mobileMenuSkills).should("have.css", "color", "rgb(71, 85, 105)");
      // on hover text should be violet
      MobileMenuPage.hoverViolet(MobileMenuPage.mobileMenuSkills);
    });

    it("Projects btn hover color change", () => {
      //initial color
      cy.get(MobileMenuPage.mobileMenuProjects).should("have.css", "color", "rgb(71, 85, 105)");
      // on hover text should be violet
      MobileMenuPage.hoverViolet(MobileMenuPage.mobileMenuProjects);
    });
  });

  //BTN CLICKS
  describe("HEADER NAVIGATION TESTING", () => {
    it("Profile btn navigation on click", () => {
      let imgSelector = '.profile__img[alt="My Photo"]';
      //test navigation
    MobileMenuPage.inViewport(MobileMenuPage.mobileMenuProfile, imgSelector);
    });

    it("Links btn navigation on click", () => {
      let titleSelector = ".contact .contact__title";
      //test navigation
      MobileMenuPage.inViewport(MobileMenuPage.mobileMenuLinks, titleSelector);
    });

    it("Skills btn navigation on click", () => {
      //top element of the section
      let titleSelector = ".skills .skills__title";
      //test navigation
    MobileMenuPage.inViewport(MobileMenuPage.mobileMenuSkills, titleSelector);
    });

    it("Projects btn navigation on click", () => {
      //top element of the section
      let titleSelector = ".projects .projects__subtitle";
      //test navigation
    MobileMenuPage.inViewport(MobileMenuPage.mobileMenuProjects, titleSelector);
    });
  });

  describe.only("THEME TESTING", () => {
    it("Dark to light mode color change", () => {
      //default background color (dark)
      cy.get("body").should("have.css", "background-color", "rgb(7, 10, 19)");
      //click theme btn
      cy.get(MobileMenuPage.mobileMenuSun).click();
      //updated background (light)
      cy.get("body").should(
        "have.css",
        "background-color",
        "rgb(241, 245, 249)"
      );
      //clear data for next test
      cy.clearLocalStorage();
    });

    it("Light to dark mode color change", () => {
      //click theme btn
      cy.get(MobileMenuPage.mobileMenuSun).click();
      //light mode background (light)
      cy.get("body").should(
        "have.css",
        "background-color",
        "rgb(241, 245, 249)"
      );
      //click theme btn
      cy.get(MobileMenuPage.mobileMenuSun).click();
      //light mode background (dark)
      cy.get("body").should("have.css", "background-color", "rgb(7, 10, 19)");
      //clear data for next test
      cy.clearLocalStorage();
    });

    it("Light mode after refresh", () => {
      //click theme btn
      cy.get(MobileMenuPage.mobileMenuSun).click();
      //light mode background (light)
      cy.get("body").should(
        "have.css",
        "background-color",
        "rgb(241, 245, 249)"
      );
      //click theme btn
      cy.reload();
      //still in light mode
      cy.get("body").should(
        "have.css",
        "background-color",
        "rgb(241, 245, 249)"
      );
      cy.window().then((page) => {
        const themeValue = page.localStorage.getItem("theme");
        expect(themeValue).to.equal("light-mode");
      });
      //clear data for next test
      cy.clearLocalStorage();
    });
  });
});