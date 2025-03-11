
describe('testes no site saucedemo', () => {

it('Realiza login, valida itens no carrinho, preenche checkout, finaliza compra e valida confirmação', () => {
  cy.visit('https://www.saucedemo.com/v1')
  cy.get('[data-test="username"]').type('standard_user')
  cy.get('[data-test="password"]').type('secret_sauce')
  cy.get('#login-button').click()
  cy.get('.product_label').should('contain.text', 'Products')

  // Adicionando o primeiro item ao carrinho
  cy.get('#item_4_title_link > .inventory_item_name').click()
  cy.get('.btn_primary').click()
  cy.get('.inventory_details_back_button').click({ force: true });

  // Adicionando o segundo item ao carrinho
  cy.get('#item_0_title_link > .inventory_item_name').click()
  cy.get('.btn_primary').click()
  cy.get('.inventory_details_back_button').click({ force: true });

  // Adicionando o terceiro item ao carrinho
  cy.get('#item_1_title_link > .inventory_item_name').click()
  cy.get('.btn_primary').click()
  cy.get('.inventory_details_back_button').click({ force: true });

  // Acessando o carrinho
  cy.get('#shopping_cart_container').click()

  // Verificando os itens no carrinho
  cy.get('.cart_item').should('have.length', 3)

  // Verificando o primeiro item no carrinho
  cy.get('.cart_item').eq(0).find('.inventory_item_name').should('contain.text', 'Sauce Labs Backpack')
  // Verificando o segundo item no carrinho
  cy.get('.cart_item').eq(1).find('.inventory_item_name').should('contain.text', 'Sauce Labs Bike Light')
  // Verificando o terceiro item no carrinho
  cy.get('.cart_item').eq(2).find('.inventory_item_name').should('contain.text', 'Sauce Labs Bolt T-Shirt')

  // Clicando no botão de checkout para concluir a compra
  cy.get('.checkout_button').click()

  // Validando a página de informações de checkout
  cy.url().should('include', '/checkout-step-one')
  cy.get('.subheader').should('be.visible').and('contain.text', 'Checkout: Your Information')

  // Preenchendo os campos de checkout
  cy.get('[data-test="firstName"]').type('Felipe').should('have.value', 'Felipe') // Validando o campo First Name
  cy.get('[data-test="lastName"]').type('Teste').should('have.value', 'Teste')   // Validando o campo Last Name
  cy.get('[data-test="postalCode"]').type('06700287').should('have.value', '06700287') // Validando o campo Postal Code

  // Clicando no botão de continuar
  cy.get('.cart_button').click()

  // Validando que a página de revisão da compra foi carregada
  cy.url().should('include', '/checkout-step-two')
  cy.get('.subheader').should('be.visible').and('contain.text', 'Checkout: Overview')

  // Clicando no botão de finalizar a compra
  cy.get('.cart_button').click()

  // Validando que a compra foi concluída com sucesso
  cy.url().should('include', '/checkout-complete')
  cy.get('.complete-header').should('contain.text', 'THANK YOU FOR YOUR ORDER')
})
})
