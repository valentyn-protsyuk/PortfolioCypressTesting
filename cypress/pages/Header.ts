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

    inViewport(selector:string){
        cy.get(selector).then(($el) =>{
            const box = $el[0].getBoundingClientRect();
            cy.log(`box.top: ${box.top}`);
            cy.log(`viewportHeight: ${window.innerHeight}`);
            expect(box.top).to.be.within(0,600);
        })
    }
}

export const HeaderPage = new Header();