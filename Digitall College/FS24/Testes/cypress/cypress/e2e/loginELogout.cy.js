describe('Funcionalidades de Cadastro', () => { 
    
    beforeEach(() => {
      cy.visit('https://automationexercise.com'); 
    });
    
    it('Fazer login e logout do usuário', () => {
      cy.get('a > img').should('be.visible'); 

      cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

      cy.get('.shop-menu > .nav > :nth-child(4) > a').should('be.visible'); 

      cy.get('[data-qa="login-email"]').type('julianateste200@email.com');

      cy.get('[data-qa="login-password"]').type('juliana123!');

      cy.get('[data-qa="login-button"]').click();

      cy.get('.shop-menu > .nav > :nth-child(4) > a').click();

    })
    
  })