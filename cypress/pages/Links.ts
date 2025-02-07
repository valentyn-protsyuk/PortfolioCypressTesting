import "cypress-real-events/support";

class Links {
    linksContainer: string = '.contact.container';
    mainTitle: string = '.contact .contact__title';
    subTitles: string = '.contact .contact__links-title';
    allLinks: string = '.contact .contact__link';

    
}

export const LinksPage = new Links();