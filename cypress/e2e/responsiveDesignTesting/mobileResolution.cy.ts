import { HeaderPage } from "../../pages/Header";
import { ProfilePage } from "../../pages/Profile";
import { LinksPage } from "../../pages/Links";
import { SkillsPage } from "../../pages/Skills";
import { ProjectsPage } from "../../pages/Projects";

//font sizes in rem
const xxs = 0.5;
const xs = 0.75;
const s = 0.875;
const base = 1;
const l = 1.125;
const xl = 1.25;
const two_xl = 1.5;
const three_xl = 1.875;
const four_xl = 2.25;
const five_xl = 3;
const six_xl = 3.75;
const seven_xl = 4.5;
const eight_xl = 6;
const nine_xl = 8;
const ten_xl = 10;


describe('TESTING PORTFOLIO WEBSITE WITH WIDTH < 475px', () => {
    beforeEach(() => {
            cy.visit("/");
            cy.viewport(474, 800)
            cy.reload();
        });

    describe('TESTING PROFILE WITH MOBILE RESOLUTION', () => {
        it('Verify profile gap', () => {
            const rem = 1; //gap in rem unit
            cy.remToPx(rem).then(pxGap => {
                cy.get(ProfilePage.profileContainer).should('have.css', 'gap', `${pxGap}px`); 
            })
        });



        it('Verify profile img top margin', () => {
            const rem = 5; //margin in rem unit
            cy.remToPx(rem).then(pxMargin => {
                cy.get(ProfilePage.img).should('have.css', 'margin-top', `${pxMargin}px`); 
            })
        });

        it('Verify profile img dimensions', () => {
            const remWidth = 6; //width in rem unit
            const remHeight = 9; //height in rem unit
            //check width
            cy.remToPx(remWidth).then(pxWidth => {
                cy.get(ProfilePage.img).should('have.css', 'width', `${pxWidth}px`); 
            });
            //check height
            cy.remToPx(remHeight).then(pxHeight => {
                cy.get(ProfilePage.img).should('have.css', 'height', `${pxHeight}px`); 
            });
        });

        it('Verify font size of main title', () => {
            cy.remToPx(four_xl).then(pxFontSize => {
                cy.get(ProfilePage.mainTitle).should('have.css', 'font-size', `${pxFontSize}px`);
            });
        });

        // it.only('Verify letter spacing of main title', () => {
        //     const rem = -0.05;
        //     cy.remToPx(rem).then(pxSpacing => {
        //         cy.get(ProfilePage.mainTitle).should('have.css', 'letter-spacing', `${pxSpacing}px`);
        //     });
        // });

        // it.only('Verify line height of main title', () => {
        //     const lineHeight = 0.9;
        //     cy.remToPx(four_xl).then(pxFontSize => {
        //         cy.get(ProfilePage.mainTitle).should('have.css', 'font-size', `${pxFontSize * lineHeight}px`);
        //     });
        // });


        it('Verify font size of subtitles', () => {
            cy.remToPx(base).then(pxFontSize => {
                cy.get(ProfilePage.aboutTitle).should('have.css', 'font-size', `${pxFontSize}px`);
                cy.get(ProfilePage.educationTitle).should('have.css', 'font-size', `${pxFontSize}px`);
                cy.get(ProfilePage.coursesTitle).should('have.css', 'font-size', `${pxFontSize}px`); 
            });
        });

        // it.only('Verify line height of subtitles', () => {
        //     const lineHeight = 0.9;
        //     cy.remToPx(base).then(pxFontSize => {
        //         cy.get(ProfilePage.aboutTitle).should('have.css', 'font-size', `${pxFontSize * lineHeight}px`);
        //         cy.get(ProfilePage.educationTitle).should('have.css', 'font-size', `${pxFontSize * lineHeight}px`);
        //         cy.get(ProfilePage.coursesTitle).should('have.css', 'font-size', `${pxFontSize * lineHeight}px`); 
        //     });
        // });

        it('Verify font size of paragraphs', () => {
            cy.remToPx(s).then(pxFontSize => {
                cy.get(ProfilePage.aboutParagraph).should('have.css', 'font-size', `${pxFontSize}px`);
                cy.get(ProfilePage.educationParagraph).should('have.css', 'font-size', `${pxFontSize}px`);
                cy.get(ProfilePage.coursesParagraph).should('have.css', 'font-size', `${pxFontSize}px`); 
            });
        });

        it('Verify width of paragraphs', () => {
            const width = '60ch'
            cy.get(ProfilePage.aboutParagraph).should('have.css', 'max-width', '481.32px');
            cy.get(ProfilePage.educationParagraph).should('have.css', 'max-width', '481.32px');
            cy.get(ProfilePage.coursesParagraph).should('have.css', 'max-width', '481.32px'); 
        });
    });

    describe('TESTING CONTACT SECTION WITH MOBILE RESOLUTION', () => {
        it('Verify contact gap', () => {
            const rem = 1; //gap in rem unit
            cy.remToPx(rem).then(pxGap => {
                cy.get(LinksPage.linksContainer).should('have.css', 'gap', `${pxGap}px`); 
            })
        });

        it('Verify main title font size', () => {
            cy.remToPx(two_xl).then(pxFontSize => {
                cy.get(LinksPage.mainTitle).should('have.css', 'font-size', `${pxFontSize}px`);
            });
        });

        it('Verify font size of subtitles', () => {
            cy.remToPx(l).then(pxFontSize => {
                cy.get(LinksPage.contactSubtitle).should('have.css', 'font-size', `${pxFontSize}px`);
            });

            cy.remToPx(l).then(pxFontSize => {
                cy.get(LinksPage.otherSubtitle).should('have.css', 'font-size', `${pxFontSize}px`);
            });
        });

        it('Verify gap between links', () => {
            const rem = 1; //gap in rem unit
            cy.remToPx(rem).then(pxGap => {
                cy.get(LinksPage.ulContainers)
                    .eq(0)
                    .should("have.css", "gap", `${pxGap}px`);
                cy.get(LinksPage.ulContainers)
                    .eq(1)
                    .should("have.css", "gap", `${pxGap}px`);
            })
        });

        it('Verify fontsize of links', () => {
            const rem = 1; //gap in rem unit

            cy.remToPx(base).then(pxFontSize => {
                cy.get(LinksPage.linkedinLink).should('have.css', 'font-size', `${pxFontSize}px`);
                cy.get(LinksPage.emailLink).should('have.css', 'font-size', `${pxFontSize}px`);
                cy.get(LinksPage.githubLink).should('have.css', 'font-size', `${pxFontSize}px`);
                cy.get(LinksPage.resumeLink).should('have.css', 'font-size', `${pxFontSize}px`);
            });
        });
    });

    describe('TESTING SKILLS SECTION WITH MOBILE RESOLUTION', () => {
        it('Verify container gap', () => {
            const rem = 1; //gap in rem unit
            cy.remToPx(rem).then(pxGap => {
                cy.get(SkillsPage.skillsContainer).should('have.css', 'gap', `${pxGap}px`); 
            })
        });

        it('Verify main title font size', () => {
            cy.remToPx(two_xl).then(pxFontSize => {
                cy.get(SkillsPage.mainTitle).should('have.css', 'font-size', `${pxFontSize}px`);
            });
        });

        it('Verify subtitles font size', () => {
            cy.remToPx(s).then(pxFontSize => {
                cy.get(SkillsPage.subTitles)
                    .eq(0)
                    .should("have.css", "font-size", `${pxFontSize}px`);
                cy.get(SkillsPage.subTitles)
                    .eq(1)
                    .should("have.css", "font-size", `${pxFontSize}px`);
            })
        });
        
        it("Verify font size for all list items", () => {
            cy.remToPx(s).then(pxFontSize => {
                //hard skills
                cy.get(SkillsPage.hsListItems).each(($el) => {
                    cy.wrap($el).should("have.css", "font-size", `${pxFontSize}px`);
                });
                //soft skills
                cy.get(SkillsPage.ssListItems).each(($el) => {
                    cy.wrap($el).should("have.css", "font-size", `${pxFontSize}px`);
                });
            });
        });
    });

    describe('TESTING PROJECTS SECTION WITH MOBILE RESOLUTION', () => {
        it('Verify main title font size', () => {
            cy.remToPx(two_xl).then(pxFontSize => {
                cy.get(ProjectsPage.sectionTitle).should('have.css', 'font-size', `${pxFontSize}px`);
            });
        });

        it('Verify subtitles font size', () => {
            cy.remToPx(l).then(pxFontSize => {
                cy.get(ProjectsPage.portfolioTitle).should("have.css", "font-size", `${pxFontSize}px`);
                cy.get(ProjectsPage.rouletteTitle).should("have.css", "font-size", `${pxFontSize}px`);
            })
        });
        
        it("Verify font size for all links", () => {
            cy.remToPx(s).then(pxFontSize => {
                //all links
                cy.get(ProjectsPage.projectContentLinks).each(($el) => {
                    cy.wrap($el).should("have.css", "font-size", `${pxFontSize}px`);
                });
            });
        });

        it("Verify font size for all descriptions", () => {
            cy.remToPx(s).then(pxFontSize => {
                //all descriptions
                cy.get(ProjectsPage.projectDescriptions).each(($el) => {
                    cy.wrap($el).should("have.css", "font-size", `${pxFontSize}px`);
                });
            });
        });

        it("Verify font size for all labels", () => {
            cy.remToPx(base).then(pxFontSize => {
                //all labels
                cy.get(ProjectsPage.projectLabels).each(($el) => {
                    cy.wrap($el).should("have.css", "font-size", `${pxFontSize}px`);
                });
            });
        });

        it("Verify font size for all Tech list items", () => {
            cy.remToPx(s).then(pxFontSize => {
                //all labels
                cy.get(ProjectsPage.projectTechItems).each(($el) => {
                    cy.wrap($el).should("have.css", "font-size", `${pxFontSize}px`);
                });
            });
        });

        it("Verify font size for all Tech list items", () => {
            cy.remToPx(s).then(pxFontSize => {
                //all labels
                cy.get(ProjectsPage.projectTechItems).each(($el) => {
                    cy.wrap($el).should("have.css", "font-size", `${pxFontSize}px`);
                });
            });
        });

        it.only("Verify project layout", () => {
            cy.remToPx(s).then(pxFontSize => {
                //column layout
                cy.get(ProjectsPage.projectInfoContainers).each(($el) => {
                    cy.wrap($el).should("have.css", "flex-direction", 'column');
                });
                //iframe position (padding)
                const paddingPercent = 0.5625; //56.25%
                cy.get(ProjectsPage.projectIframeContainers).each(($el) => {
                    cy.get(ProjectsPage.projectIframeContainers).should('have.css', 'width').then((width) => {
                        const pxWidth = parseFloat(width);
                        const expectedPadding = pxWidth * paddingPercent;
                        //check the padding-top
                        cy.get(ProjectsPage.projectIframeContainers).should('have.css', 'padding-top', `${expectedPadding}px`);
                    });
                });
            });
        });
    });
});