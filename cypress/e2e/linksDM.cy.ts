import { LinksPage } from "../pages/Links";
import { HeaderPage } from "../pages/Header";
import "cypress-real-events/support";

describe('LINKS SECTION TESTING in DARK MODE', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.reload();
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
            cy.get(LinksPage.mainTitle).should('have.css', 'color', 'rgb(241, 245, 249)');
        });
    });

    describe('MY LINKS CONTACT SUBTITLE TESTING', () => {
        it('Verify subtitle text', () => {
            cy.get(LinksPage.contactSubtitle).should('have.text', 'Ways to contact me');
        });

        it('Verify subtitle text color', () => {
            cy.get(LinksPage.contactSubtitle).should('have.css', 'color', 'rgb(148, 163, 184)');
        });

        it('Verify subtitle text capitalized', () => {
            cy.get(LinksPage.contactSubtitle).should('have.css', 'text-transform', 'capitalize');
        });
    });

      describe.only('LINKEDIN BTN TESTS', () => {
        it('Verify btn text', () => {
            cy.get(LinksPage.linkedinLink).should('have.text', 'Go to my LinkedIn');
        });

      });



    describe('MY LINKS OTHER SUBTITLE TESTING', () => {
        it('Verify subtitle text', () => {
            cy.get(LinksPage.otherSubtitle).should('have.text', 'Other');
        });

        it('Verify subtitle text color', () => {
            cy.get(LinksPage.otherSubtitle).should('have.css', 'color', 'rgb(148, 163, 184)');
        });

        it('Verify subtitle text capitalized', () => {
            cy.get(LinksPage.otherSubtitle).should('have.css', 'text-transform', 'capitalize');
        });
    });
});