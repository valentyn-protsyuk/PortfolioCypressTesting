import "cypress-real-events/support";

class Links {
    linksContainer: string = '.contact.container';
    mainTitle: string = '.contact .contact__title';
    contactSubtitle: string = '.contact > :nth-child(2)';
    linkedinLink: string = '.contact > :nth-child(3) >:nth-child(1)';
    emailLink: string = '.contact > :nth-child(3) >:nth-child(2)';
    otherSubtitle: string = '.contact > :nth-child(4)';
    githubLink: string = '.contact > :nth-child(5) >:nth-child(1)';
    resumeLink: string = '.contact > :nth-child(5) >:nth-child(2)';
    
}

export const LinksPage = new Links();