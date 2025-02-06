import {ProfilePage} from "../pages/Profile"

describe('PROFILE TESTING', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.reload();
    });

    //PROFILE CONTAINER Testing
    it('Verify profile container has vertical layout', () => {
        cy.get(ProfilePage.profileContainer).should('have.css','display', 'flex');
        cy.get(ProfilePage.profileContainer).should('have.css','flex-direction', 'column');
    });

    

    //IMG TESTING
    it('Verify Img Visible', () => {
        cy.get(ProfilePage.img).should('be.visible');
    });

    it('Verify Img round corner', () => {
        cy.get(ProfilePage.img).should('have.css','border-radius', '50%');
    });

    //MAIN TITLE TESTING
    it('Verify main title text', () => {
        
    });

    it('Verify main title text centered', () => {
        
    });

    it('Verify main title text is uppercase', () => {
        
    });

    it('Verify main title text color', () => {
        
    });

    it('Verify main title letter spacing', () => {
        
    });


});