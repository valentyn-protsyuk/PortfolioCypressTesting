import {ProfilePage} from "../pages/Profile"

describe('PROFILE TESTING', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.reload();
    });

    describe('PROFILE CONTAINER Testing', () => {
        it('Verify profile container has vertical layout', () => {
            cy.get(ProfilePage.profileContainer).should('have.css','display', 'flex');
            cy.get(ProfilePage.profileContainer).should('have.css','flex-direction', 'column');
        });
    
        it('Verify profile container content is centered', () => {
            cy.get(ProfilePage.profileContainer).should('have.css','text-align', 'center');
            cy.get(ProfilePage.profileContainer).should('have.css','justify-content', 'center');
            cy.get(ProfilePage.profileContainer).should('have.css','align-items', 'center');
        });
    });

    describe('IMG TESTING', () => {
        it('Verify Img Visible', () => {
            cy.get(ProfilePage.img).should('be.visible');
        });
    
        it('Verify Img round corner', () => {
            cy.get(ProfilePage.img).should('have.css','border-radius', '50%');
        });
    });

    describe('MAIN TITLE TESTING', () => {
        it('Verify main title text', () => {
            cy.get(ProfilePage.mainTitle).invoke('text').should('match', /qa tester/i);
        });
    
    });


});