import "cypress-real-events/support";

class Projects {
    //section
    sectionContainer: string = '.projects.container';
    sectionTitle: string = 'h2.projects__subtitle';

    //general (more than one item selected)
    projectTitles: string = 'h3.projects__title';
    projectInfoContainers: string = 'div.projects__info';
    projectTextContainers: string = 'div.projects__text';
    projectIframes: string = 'iframe.projects__iframe';
    projectLabels: string = 'h3.projects__label';
    projectDescriptions: string = 'p.projects__description';
    projectLists: string = 'ul.projects__ul';
    projectTechItems: string = 'li.projects__li';
    projectContentLinks: string = 'a.projects__link';


    //portfolio project
    portfolioTitle:string = '.projects__title.portfolio';
    portfolioDescLabel: string = '.description-title.portfolio';
    portfolioDescText: string = '.description-text.portfolio';
    portfolioTechLabel: string = '.tech-title.portfolio';
    portfolioTechItems: string = '.projects__li.portfolio';
    portfolioContentLabel: string = '.contents-title.portfolio';
    portfolioRepoLink: string = 'a.portfolio-rep';
    portfolioAutomationLink: string = 'a.portfolio-automation';
    portfolioManualLink: string = 'a.portfolio-manual';

    //roulette project
    rouletteTitle:string = '.projects__title.roulette';
    rouletteDescLabel: string = '.description-title.roulette';
    rouletteDescText: string = '.description-text.roulette';
    rouletteTechLabel: string = '.tech-title.roulette';
    rouletteTechItems: string = '.projects__li.roulette';
    rouletteContentLabel: string = '.contents-title.roulette';
    rouletteRepoLink: string = 'a.roulette-rep';
    rouletteAutomationLink: string = 'a.roulette-automation';
    rouletteManualLink: string = 'a.roulette-manual';
}

export const ProjectsPage = new Projects();