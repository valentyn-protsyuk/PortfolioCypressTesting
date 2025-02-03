import "cypress-real-events/support";

class Header {

    hoverViolet(selector:string){
        // Trigger hover on the link
        cy.get(selector)
            .realHover()
            .then(() => {
                cy.wait(1000);
                cy.get(selector)
                    .should('have.css', 'color', 'rgb(144, 43, 245)'); //color after hover should be violet
            });
    }
}

export const HeaderPage = new Header();