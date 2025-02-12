import { HeaderPage } from "../../pages/Header";

describe("HEADER TESTING IN LIGHT MODE", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.reload();
    localStorage.setItem("theme", "light-mode");
  });

  afterEach(() => {
    //clear data for next test
    cy.clearLocalStorage();
  });

  //ELEMENT ORDER
  it("Header elements order", () => {
    // 1 profile btn
    cy.get(".header__menu li:nth-child(1)").contains("Profile");
    // 2 links btn
    cy.get(".header__menu li:nth-child(2)").contains("Links");
    // 3 skills btn
    cy.get(".header__menu li:nth-child(3)").contains("Skills");
    // 4 projects btn
    cy.get(".header__menu li:nth-child(4)").contains("Projects");
    // 5 line
    cy.get(".header__menu li:nth-child(5)").should(
      "have.class",
      "header__line"
    );
    // 6 sun btn
    cy.get(".header__menu li:nth-child(6)")
      .find("button.header__sun")
      .should("exist");
  });

  //BTN HOVER
  describe("BTNS HOVER TESTS", () => {
    it("Profile btn hover color change", () => {
      let profileSelector = '.header__link[href*="profile"]';
      cy.get(profileSelector).should("have.css", "color", "rgb(30, 41, 59)");
      HeaderPage.hoverViolet(profileSelector);
    });

    it("Links btn hover color change", () => {
      let linksSelector = '.header__link[href*="links"]';
      cy.get(linksSelector).should("have.css", "color", "rgb(30, 41, 59)");
      HeaderPage.hoverViolet(linksSelector);
    });

    it("Skills btn hover color change", () => {
      let skillsSelector = '.header__link[href*="skills"]';
      cy.get(skillsSelector).should("have.css", "color", "rgb(30, 41, 59)");
      HeaderPage.hoverViolet(skillsSelector);
    });

    it("Projects btn hover color change", () => {
      let projectsSelector = '.header__link[href*="projects"]';
      cy.get(projectsSelector).should("have.css", "color", "rgb(30, 41, 59)");
      HeaderPage.hoverViolet(projectsSelector);
    });
  });

  //BTN CLICKS
  describe("HEADER NAVIGATION TESTING", () => {
    it("Profile btn navigation on click", () => {
      let profileSelector = '.header__link[href*="profile"]';
      let imgSelector = '.profile__img[alt="My Photo"]';
      HeaderPage.inViewport(profileSelector, imgSelector);
    });

    it("Links btn navigation on click", () => {
      let btnSelector = '.header__link[href*="links"]';
      let titleSelector = ".contact .contact__title";
      HeaderPage.inViewport(btnSelector, titleSelector);
    });

    it("Skills btn navigation on click", () => {
      let btnSelector = '.header__link[href*="skills"]';
      let titleSelector = ".skills .skills__title";
      HeaderPage.inViewport(btnSelector, titleSelector);
    });

    it("Projects btn navigation on click", () => {
      let btnSelector = '.header__link[href*="projects"]';
      let titleSelector = ".projects .projects__subtitle";
      HeaderPage.inViewport(btnSelector, titleSelector);
    });
  });

  describe("THEME TESTING", () => {
    it("Light to dark mode color change", () => {
      let btnSelector = "#theme-toggle.header__sun";
      cy.get("body").should(
        "have.css",
        "background-color",
        "rgb(241, 245, 249)"
      );
      cy.get(btnSelector).click();
      cy.get("body").should("have.css", "background-color", "rgb(7, 10, 19)");
      cy.clearLocalStorage();
    });

    it("Dark to light mode color change", () => {
      let btnSelector = "#theme-toggle.header__sun";
      cy.get(btnSelector).click();
      cy.get("body").should("have.css", "background-color", "rgb(7, 10, 19)");
      cy.get(btnSelector).click();
      cy.get("body").should(
        "have.css",
        "background-color",
        "rgb(241, 245, 249)"
      );
      cy.clearLocalStorage();
    });

    it("Dark mode after refresh", () => {
      let btnSelector = "#theme-toggle.header__sun";
      cy.get(btnSelector).click();
      cy.get("body").should("have.css", "background-color", "rgb(7, 10, 19)");
      cy.reload();
      cy.get("body").should("have.css", "background-color", "rgb(7, 10, 19)");
      cy.window().then((page) => {
        const themeValue = page.localStorage.getItem("theme");
        expect(themeValue).to.be.null;
      });
    });
  });
});
