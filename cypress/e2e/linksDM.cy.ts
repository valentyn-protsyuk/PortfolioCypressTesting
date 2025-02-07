import {LinksPagePage} from "../pages/LinksPage"
import { LinksPage } from "../pages/Links";

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

    describe.only('PROFILE MAIN TITLE TESTING', () => {
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
});