import "cypress-real-events/support";

class Skills {
  skillsContainer: string = ".skills.container";
  mainTitle: string = ".skills .skills__title";
  subTitles: string = "h3.skills__subtitle";
  hsContainer: string = "div.skills__info-container";
  hsListContainers: string = "div.skills__info-container div";
  hsLabels: string = "h3.skills__label";
  hsListItems: string = "ul .skills__hs-li";
  ssContainer: string = "div.skills__two-ul";
  ssListItems: string = "ul .skills__li";
}

export const SkillsPage = new Skills();
