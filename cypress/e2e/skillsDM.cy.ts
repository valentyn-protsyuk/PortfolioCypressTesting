import { SkillsPage } from "../pages/Skills";
import "cypress-real-events/support";

describe('SKILLS SECTION TESTING in DARK MODE', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.reload();
    });

    describe('MY SKILLS CONTAINER Testing', () => {
            it('Verify skills container has vertical layout', () => {
                cy.get(SkillsPage.skillsContainer).should('have.css','display', 'flex');
                cy.get(SkillsPage.skillsContainer).should('have.css','flex-direction', 'column');
            });
    });
});