import {ProfilePage} from "../pages/Profile"

describe('PROFILE TESTING', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.reload();
    });

    //IMG TESTING
    it('Verify Img Visible', () => {
        cy.get(ProfilePage.img).should('be.visible');
    });

    it('Verify Img centered', () => {
        
    });

    it('Verify Img round corner', () => {
        
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