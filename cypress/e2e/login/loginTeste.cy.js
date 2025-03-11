describe('testes no site saucedemo', () => {

  it('Realiza login e valida que está na página de produtos', () => {
    cy.visit('https://www.saucedemo.com/v1')

    // Preenchendo os campos de login
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()

    // Validando que o login foi bem-sucedido e estamos na página correta
    cy.url().should('include', '/inventory.html')
    cy.get('.product_label').should('be.visible').and('contain.text', 'Products')
  })
})