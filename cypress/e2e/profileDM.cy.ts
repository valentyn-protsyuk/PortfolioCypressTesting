import {ProfilePage} from "../pages/Profile"

describe('PROFILE TESTING in DARK MODE', () => {

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

    describe('PROFILE IMG TESTING', () => {
        it('Verify Img Visible', () => {
            cy.get(ProfilePage.img).should('be.visible');
        });
    
        it('Verify Img round corner', () => {
            cy.get(ProfilePage.img).should('have.css','border-radius', '50%');
        });
    });

    describe('PROFILE MAIN TITLE TESTING', () => {
        it('Verify main title text', () => {
            cy.get(ProfilePage.mainTitle).invoke('text').should('match', /qa tester/i);
        });

        it('Verify main title text is uppercase', () => {
            cy.get(ProfilePage.mainTitle).should('have.css', 'text-transform', 'uppercase');
        });

        it('Verify main title text color', () => {
            cy.get(ProfilePage.mainTitle).should('have.css', 'color', 'rgb(148, 163, 184)');
        });
    });

    describe('PROFILE ABOUT SUBTITLE TESTING', () => {
        it('Verify subtitle text', () => {
            cy.get(ProfilePage.aboutTitle).should('have.text', 'About Me');
        });

        it('Verify subtitle text color', () => {
            cy.get(ProfilePage.aboutTitle).should('have.css', 'color', 'rgb(71, 85, 105)');
        });
    });

    describe.only('PROFILE ABOUT PARAGRAPH TESTING', () => {
        const firstHighLight = '.profile > :nth-child(4)  > :nth-child(1)';
        const secondHighLight = '.profile > :nth-child(4)  > :nth-child(2)';
        const thirdHighLight = '.profile > :nth-child(4)  > :nth-child(3)';
        
        it('Verify paragraph text color', () => {
            cy.get(ProfilePage.aboutParagraph).should('have.css', 'color', 'rgb(71, 85, 105)');
        });
    });
});