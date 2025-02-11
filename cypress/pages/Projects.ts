import "cypress-real-events/support";

class Projects {
    sectionContainer: string = '.projects.container';
    sectionTitle: string = 'h2.projects__subtitle';
    projectTitles: string = 'h3.projects__title';

}

export const ProjectsPage = new Projects();