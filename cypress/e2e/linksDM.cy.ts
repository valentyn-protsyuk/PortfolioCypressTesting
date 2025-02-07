import {LinksPagePage} from "../pages/LinksPage"
import { LinksPage } from "../pages/Links";

describe('LINKS SECTION TESTING in DARK MODE', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.reload();
    });

    describe.only('MY LINKS CONTAINER Testing', () => {
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
});