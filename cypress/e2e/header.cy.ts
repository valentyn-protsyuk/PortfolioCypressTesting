import {HeaderPage} from "../pages/Header"

describe("Header testing", () => {

  beforeEach(() => {
    cy.visit("/");
    cy.reload();
  });

  //ELEMENT ORDER
  it("Header elements order", () => {
    // 1 profile btn
    cy.get('.header__menu li:nth-child(1)').contains('Profile');
    // 2 links btn
    cy.get('.header__menu li:nth-child(2)').contains('Links');
    // 3 skills btn
    cy.get('.header__menu li:nth-child(3)').contains('Skills');
    // 4 projects btn
    cy.get('.header__menu li:nth-child(4)').contains('Projects');
    // 5 line
    cy.get('.header__menu li:nth-child(5)').should('have.class','header__line');
    // 6 sun btn
    cy.get('.header__menu li:nth-child(6)').find('button.header__sun').should('exist');
  });

  //BTN HOVER
  it("Profile btn hover color change", () => {
    // profile btn selector
    let profileSelector = '.header__link[href*="profile"]';
    //initial color
    cy.get(profileSelector)
      .should("have.css", "color", "rgb(71, 85, 105)");
    // on hover text should be violet
    HeaderPage.hoverViolet(profileSelector);
  });

  it("Links btn hover color change", () => {
    // links btn selector
    let linksSelector = '.header__link[href*="links"]';
    //initial color
    cy.get(linksSelector)
      .should("have.css", "color", "rgb(71, 85, 105)");
    // on hover text should be violet
    HeaderPage.hoverViolet(linksSelector);
  });

  it("Skills btn hover color change", () => {
    // skills btn selector
    let skillsSelector = '.header__link[href*="skills"]';
    //initial color
    cy.get(skillsSelector)
      .should("have.css", "color", "rgb(71, 85, 105)");
    // on hover text should be violet
    HeaderPage.hoverViolet(skillsSelector);
  });

  it("Projects btn hover color change", () => {
    // projects btn selector
    let projectsSelector = '.header__link[href*="projects"]';
    //initial color
    cy.get(projectsSelector)
      .should("have.css", "color", "rgb(71, 85, 105)");
    // on hover text should be violet
    HeaderPage.hoverViolet(projectsSelector);
  });

  //BTN CLICK
  it.only("Profile btn navigation on click", () => {
    cy.viewport(1024, 768);
    // profile btn selector
    let profileSelector = '.header__link[href*="profile"]';
    let imgSelector = '.profile__img[alt="My Photo"]';
    //scroll down
    cy.scrollTo('bottom');
    cy.wait(1000);
    //click profile btn
    cy.get(profileSelector).click();
    //img should be in viewport
    cy.wait(1000);
    cy.isInViewport(imgSelector)
      
  });
});
