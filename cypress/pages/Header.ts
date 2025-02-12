import "cypress-real-events/support";

class Header {
  headerContainer: string = "header.header";
  headerNavList: string = "ul.header__menu";
  headerProfile: string = '.header a[href*="profile"]';
  headerLinks: string = 'header a[href*="links"]';
  headerSkills: string = 'header a[href*="skills"]';
  headerProjects: string = 'header a[href*="projects"]';
  headerLine: string = "header .header__line";
  headerSun: string = "header .header__sun";

  hoverViolet(selector: string) {
    // Trigger hover on the link
    cy.get(selector)
      .realHover()
      .then(() => {
        cy.wait(1000);
        cy.get(selector).should("have.css", "color", "rgb(144, 43, 245)"); //color after hover should be violet
      });
  }

  inViewport(btnSelector: string, topElSelector: string) {
    //scroll down
    cy.scrollTo("bottom");
    cy.wait(500);
    //click navigation btn
    cy.get(btnSelector).click();
    //Top element should be in current viewport
    cy.wait(500);
    cy.isInViewport(topElSelector);
  }
}

export const HeaderPage = new Header();
