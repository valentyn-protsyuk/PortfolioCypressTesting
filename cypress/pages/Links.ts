import "cypress-real-events/support";

class Links {
  linksContainer: string = ".contact.container";
  mainTitle: string = ".contact .contact__title";
  contactSubtitle: string = ".contact > :nth-child(2)";
  ulContainers: string = "ul.contact__links";
  linkedinLink: string = 'a[href*="linkedin"]';
  emailLink: string = 'a[href*="yahoo"]';
  otherSubtitle: string = ".contact > :nth-child(4)";
  githubLink: string = '.contact__link[href*="github"]';
  resumeLink: string = '.contact__link[href*="docs"]';

  hoverViolet(selector: string) {
    //click to navigate into links section
    cy.get(":nth-child(2) > .header__link").click();
    //header gets in the way so remove it for now
    cy.get("header.header").invoke("css", "display", "none");
    //cy.wait(200);
    // Trigger hover on the link
    cy.get(selector)
      .realHover()
      .then(() => {
        cy.wait(1000);
        cy.get(selector).should("have.css", "color", "rgb(144, 43, 245)"); //color after hover should be violet
      });
  }

  verifyLink(selector: string, expectedUrl: string) {
    //click to navigate into links section
    cy.get(":nth-child(2) > .header__link").click();
    //header gets in the way so remove it for now
    cy.get("header.header").invoke("css", "display", "none");
    //cy.wait(200);
    // Trigger hover on the link
    cy.get(selector).should("have.attr", "href", expectedUrl);
  }
}

export const LinksPage = new Links();
