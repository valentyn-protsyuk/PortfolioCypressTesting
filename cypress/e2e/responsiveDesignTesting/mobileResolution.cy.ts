import { HeaderPage } from "../../pages/Header";
import { ProfilePage } from "../../pages/Profile";
import { LinksPage } from "../../pages/Links";
import { SkillsPage } from "../../pages/Skills";
import { ProjectsPage } from "../../pages/Projects";

describe('TESTING PORTFOLIO WEBSITE WITH WIDTH < 475px', () => {
    beforeEach(() => {
            cy.visit("/");
            cy.viewport(474, 800)
            cy.reload();
        });

        
});