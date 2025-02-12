import {ProfilePage} from "../../pages/Profile"

describe('PROFILE TESTING in LIGHT MODE', () => {

    beforeEach(() => {
        cy.visit("/");
        cy.reload();
        localStorage.setItem("theme", "light-mode");
      });
    
      afterEach(() => {
        //clear data for next test
        cy.clearLocalStorage();
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
            cy.get(ProfilePage.mainTitle).should('have.css', 'color', 'rgb(30, 41, 59)');
        });
    });

    describe('PROFILE ABOUT SUBTITLE TESTING', () => {
        it('Verify subtitle text', () => {
            cy.get(ProfilePage.aboutTitle).should('have.text', 'About Me');
        });

        it('Verify subtitle text color', () => {
            cy.get(ProfilePage.aboutTitle).should('have.css', 'color', 'rgb(30, 41, 59)');
        });
    });

    describe('PROFILE ABOUT PARAGRAPH TESTING', () => {
        const firstHighLight = '.profile > :nth-child(4)  > :nth-child(1)';
        const secondHighLight = '.profile > :nth-child(4)  > :nth-child(2)';
        const thirdHighLight = '.profile > :nth-child(4)  > :nth-child(3)';
        
        it('Verify paragraph text color', () => {
            cy.get(ProfilePage.aboutParagraph).should('have.css', 'color', 'rgb(30, 41, 59)');
        });
        
        it('Verify paragraph highlighted text', () => {
            cy.get(firstHighLight).should('have.text', 'Quality Assurance Engineer');
            cy.get(secondHighLight).should('have.text', 'Manual');
            cy.get(thirdHighLight).should('have.text', 'Automation');
        });

        it('Verify paragraph highlighted text color', () => {
            cy.get(firstHighLight).should('have.css', 'color', 'rgb(144, 43, 245)');
            cy.get(secondHighLight).should('have.css', 'color', 'rgb(144, 43, 245)');
            cy.get(thirdHighLight).should('have.css', 'color', 'rgb(144, 43, 245)');
        });
    });

    describe('PROFILE EDUCATION SUBTITLE TESTING', () => {
        it('Verify subtitle text', () => {
            cy.get(ProfilePage.educationTitle).should('have.text', 'Education');
        });

        it('Verify subtitle text color', () => {
            cy.get(ProfilePage.educationTitle).should('have.css', 'color', 'rgb(30, 41, 59)');
        });
    });

    describe('PROFILE EDUCATION PARAGRAPH TESTING', () => {
        const firstHighLight = '.profile > :nth-child(6)  > :nth-child(1)';
        const secondHighLight = '.profile > :nth-child(6)  > :nth-child(2)';
        
        it('Verify paragraph text color', () => {
            cy.get(ProfilePage.educationParagraph).should('have.css', 'color', 'rgb(30, 41, 59)');
        });
        
        it('Verify paragraph highlighted text', () => {
            cy.get(firstHighLight).should('have.text', 'Bachelor of Computer Science');
            cy.get(secondHighLight).should('have.text', 'California State University San Marcos');
        });

        it('Verify paragraph highlighted text color', () => {
            cy.get(firstHighLight).should('have.css', 'color', 'rgb(144, 43, 245)');
            cy.get(secondHighLight).should('have.css', 'color', 'rgb(144, 43, 245)');
        });
    });

    describe('PROFILE COURSES SUBTITLE TESTING', () => {
        it('Verify subtitle text', () => {
            cy.get(ProfilePage.coursesTitle).should('have.text', 'Courses Taken');
        });

        it('Verify subtitle text color', () => {
            cy.get(ProfilePage.coursesTitle).should('have.css', 'color', 'rgb(30, 41, 59)');
        });
    });

    describe('PROFILE COURSES PARAGRAPH TESTING', () => {
        it('Verify paragraph text color', () => {
            cy.get(ProfilePage.coursesParagraph).should('have.css', 'color', 'rgb(30, 41, 59)');
        });
        
        it('Verify no highlights', () => {
            cy.get(ProfilePage.coursesParagraph).should('not.have.descendants', 'strong');
        });
    });
});