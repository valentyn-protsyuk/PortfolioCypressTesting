describe('Header testing', () => {
  it('Verify Profile btn color change', () => {
    cy.visit('/')
    cy.get('.header__link[href="#my-profile"]').contains('Profile')
    cy.wait(1000);
    cy.get('.header__link[href="#my-profile"]').screenshot('hovered-state');
    cy.get('.header__link[href="#my-profile"]').should('not.have.css', 'color', 'rgb(71, 85, 105)');
  })
})