describe('Testa a página do google', () => {

  it('Pesquisar algo no google', () => {
    cy.visit('https://google.com')

    cy.get('textarea.gLFyf').should('be.visible').type('abóboras{enter}');

    cy.get('#search').should('be.visible');

    cy.get('#search a').first().click();

  })

})