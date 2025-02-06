import "cypress-real-events/support";

class Profile {
    img: string = '.profile__img[alt*="Photo"]';
    mainTitle: string = 'h1.profile__maintitle';
    aboutTitle: string = '.profile > :nth-child(3)';
    aboutParagraph: string = '.profile > :nth-child(4)';
    educationTitle: string = '.profile > :nth-child(5)';
    educationParagraph: string = '.profile > :nth-child(6)';
    coursesTitle: string = '.profile > :nth-child(7)';
    coursesParagraph: string = '.profile > :nth-child(8)';
}

export const ProfilePage = new Profile();