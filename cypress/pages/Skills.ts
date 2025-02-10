import "cypress-real-events/support";

class Skills {
    skillsContainer: string = '.skills.container';
    mainTitle: string = '.skills .skills__title';
    subTitles: string = 'h3.skills__subtitle';
    hsContainer: string = 'div.skills__info-container';
    hsLabels: string = 'h3.skills__label';
    hsLists: string = 'ul.skills__hs-ul';
}

export const SkillsPage = new Skills();