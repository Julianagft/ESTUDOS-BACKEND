describe('Funcionalidades de Cadastro', () => { // Especificação da Funcionalidade
    beforeEach(() => {
      cy.visit('https://automationexercise.com'); // Visita a página inicial da aplicação utilizando a API do Cypress com o alias "cy"
    });
    
    it('cadastrar um novo usuário', () => {
      cy.get('a > img').should('be.visible');
  
      cy.get('.shop-menu > .nav > :nth-child(1) > a').should('be.visible');  
      cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
  
      cy.get('.signup-form > h2').should('be.visible');
  
      cy.get('[data-qa="signup-name"]').type('Juliana');
      cy.get('[data-qa="signup-email"]').type('julianateste200@email.com');
  
      cy.get('[data-qa="signup-button"]').click();
  
      cy.get(':nth-child(1) > b').should('be.visible');
  
      cy.get('#id_gender2').click();
  
      cy.get('[data-qa="name"]').clear().type('Juliana');
      cy.get('[data-qa="email"]').should('have.value','julianateste200@email.com');
      cy.get('[data-qa="password"]').type('juliana123!');
      cy.get('[data-qa="days"]').select('29');
      cy.get('[data-qa="months"]').select('May');
      cy.get('[data-qa="years"]').select('1995');
  
      cy.get('#newsletter').click();
      cy.get('#optin').click();
  
      cy.get('[data-qa="first_name"]').type('Juliana');
      cy.get('[data-qa="last_name"]').type('Rodrigues');
      cy.get('[data-qa="company"]').type('704');
      cy.get('[data-qa="address"]').type('Rua A, 123');
      cy.get('[data-qa="address2"]').type('Rua B, 321');
      cy.get('[data-qa="country"]').type('Brasil');
      cy.get('[data-qa="state"]').type('CE');
      cy.get('[data-qa="city"]').type('Fortaleza');
      cy.get('[data-qa="zipcode"]').type('60512396');
      cy.get('[data-qa="mobile_number"]').type('(85)984523214');
  
      cy.get('[data-qa="create-account"]').click();
  
      cy.get('b').should('be.visible');
  
      cy.get('[data-qa="continue-button"]').click();
  
      cy.get('b').should('have.text', 'Juliana')
      
      cy.get('.shop-menu > .nav > :nth-child(5) > a').click();
  
      cy.get('[data-qa="account-deleted"]').should('be.visible');
  
      cy.get('[data-qa="continue-button"]').click();  
      
    })
    
  })