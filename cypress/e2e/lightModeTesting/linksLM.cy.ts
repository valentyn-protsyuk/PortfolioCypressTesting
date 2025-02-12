import { LinksPage } from "../../pages/Links";
import "cypress-real-events/support";

describe('LINKS SECTION TESTING in LIGHT MODE', () => {

    beforeEach(() => {
        cy.visit("/");
        cy.reload();
        localStorage.setItem("theme", "light-mode");
      });
    
      afterEach(() => {
        //clear data for next test
        cy.clearLocalStorage();
      });

    describe('MY LINKS CONTAINER Testing', () => {
        it('Verify links container has vertical layout', () => {
            cy.get(LinksPage.linksContainer).should('have.css','display', 'flex');
            cy.get(LinksPage.linksContainer).should('have.css','flex-direction', 'column');
        });
    
        it('Verify profile container content is centered', () => {
            cy.get(LinksPage.linksContainer).should('have.css','text-align', 'center');
            cy.get(LinksPage.linksContainer).should('have.css','justify-content', 'center');
            cy.get(LinksPage.linksContainer).should('have.css','align-items', 'center');
        });
    });

    describe('MY LINKS MAIN TITLE TESTING', () => {
        it('Verify main title text', () => {
            cy.get(LinksPage.mainTitle).invoke('text').should('match', /my links/i);
        });

        it('Verify main title text is uppercase', () => {
            cy.get(LinksPage.mainTitle).should('have.css', 'text-transform', 'uppercase');
        });

        it('Verify main title text color', () => {
            cy.get(LinksPage.mainTitle).should('have.css', 'color', 'rgb(7, 10, 19)');
        });
    });

    describe('MY LINKS CONTACT SUBTITLE TESTING', () => {
        it('Verify subtitle text', () => {
            cy.get(LinksPage.contactSubtitle).should('have.text', 'Ways to contact me');
        });

        it('Verify subtitle text color', () => {
            cy.get(LinksPage.contactSubtitle).should('have.css', 'color', 'rgb(30, 41, 59)');
        });

        it('Verify subtitle text capitalized', () => {
            cy.get(LinksPage.contactSubtitle).should('have.css', 'text-transform', 'capitalize');
        });
    });

    describe('LINKEDIN BTN TESTS', () => {
        it('Verify btn text', () => {
            cy.get(LinksPage.linkedinLink).should('have.text', 'Go to my LinkedIn');
        });
        
        it('Verify btn initial color', () => {
            cy.get(LinksPage.linkedinLink).should('have.css', 'color', 'rgba(225, 29, 79, 0.7)');
        });
        it('Verify btn text underlined', () => {
            cy.get(LinksPage.linkedinLink).should('have.css', 'text-decoration').and('include','underline');
        });
        it("btn color change on hover", () => {
          // on hover text should be violet
          LinksPage.hoverViolet(LinksPage.linkedinLink);
        });
        it("verify btn link", () => {
            //test navigation
            LinksPage.verifyLink(LinksPage.linkedinLink, 'https://www.linkedin.com/in/valentyn-protsyuk/')
          });
    });

    describe('EMAIL BTN TESTS', () => {
        it('Verify btn text', () => {
            cy.get(LinksPage.emailLink).should('have.text', 'Send me an email');
        });
        
        it('Verify btn initial color', () => {
            cy.get(LinksPage.emailLink).should('have.css', 'color', 'rgba(225, 29, 79, 0.7)');
        });
        it('Verify btn text underlined', () => {
            cy.get(LinksPage.emailLink).should('have.css', 'text-decoration').and('include','underline');
        });
        it("btn color change on hover", () => {
            // on hover text should be violet
            LinksPage.hoverViolet(LinksPage.emailLink);
        });
        it("verify btn link", () => {
            LinksPage.verifyLink(LinksPage.emailLink, 'mailto:valentyn.protsyuk@yahoo.com');
        });
    });

    describe('MY LINKS OTHER SUBTITLE TESTING', () => {
        it('Verify subtitle text', () => {
            cy.get(LinksPage.otherSubtitle).should('have.text', 'Other');
        });

        it('Verify subtitle text color', () => {
            cy.get(LinksPage.otherSubtitle).should('have.css', 'color', 'rgb(30, 41, 59)');
        });

        it('Verify subtitle text capitalized', () => {
            cy.get(LinksPage.otherSubtitle).should('have.css', 'text-transform', 'capitalize');
        });
    });

    describe('GITHUB BTN TESTS', () => {
        it('Verify btn text', () => {
            cy.get(LinksPage.githubLink).should('have.text', 'Checkout my Github');
        });
        
        it('Verify btn initial color', () => {
            cy.get(LinksPage.githubLink).should('have.css', 'color', 'rgba(225, 29, 79, 0.7)');
        });
        it('Verify btn text underlined', () => {
            cy.get(LinksPage.githubLink).should('have.css', 'text-decoration').and('include','underline');
        });
        it("btn color change on hover", () => {
            // on hover text should be violet
            LinksPage.hoverViolet(LinksPage.githubLink);
        });
        it("verify btn href", () => {
            LinksPage.verifyLink(LinksPage.githubLink, 'https://github.com/valentyn-protsyuk');
        });
    });

    describe('RESUME BTN TESTS', () => {
        it('Verify btn text', () => {
            cy.get(LinksPage.resumeLink).should('have.text', 'Checkout my Resume');
        });
        
        it('Verify btn initial color', () => {
            cy.get(LinksPage.resumeLink).should('have.css', 'color', 'rgba(225, 29, 79, 0.7)');
        });
        
        it('Verify btn text underlined', () => {
            cy.get(LinksPage.resumeLink).should('have.css', 'text-decoration').and('include','underline');
        });
        
        it("btn color change on hover", () => {
            // on hover text should be violet
            LinksPage.hoverViolet(LinksPage.resumeLink);
        });

        it("verify btn href", () => {
            LinksPage.verifyLink(LinksPage.resumeLink, 'https://docs.google.com/document/d/1RPsT-rBYSbn3MPvw1z5EogvEGY6PXEydN-taSgRib0o/edit?usp=sharing');
        });
    });
});