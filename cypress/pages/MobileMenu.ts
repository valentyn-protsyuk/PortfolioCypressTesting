import "cypress-real-events/support";

class MobileMenu {
  hamburgerMenu: string = "button.header__bars";
  mobileMenuContainer: string = "div.mobile-nav";
  mobileMenuNavList: string = ".mobile-nav ul";
  mobileMenuProfile: string = '.mobile-nav a[href*="profile"]';
  mobileMenuLinks: string = '.mobile-nav a[href*="links"]';
  mobileMenuSkills: string = '.mobile-nav a[href*="skills"]';
  mobileMenuProjects: string = '.mobile-nav a[href*="projects"]';
  mobileMenuLine: string = ".mobile-nav .mobile-nav__link-line";
  mobileMenuSun: string = ".mobile-nav .mobile-nav__sun";

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
    //click navigation btn
    cy.get(btnSelector).click();
    //Top element should be in current viewport
    cy.wait(500);
    cy.isInViewport(topElSelector);
  }
}

export const MobileMenuPage = new MobileMenu();
