import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('Dado que o usuário esteja na página de login', () => {
  cy.visit('https://www.saucedemo.com/v1');
});

When('o usuário preenche as credenciais válidas e clica no botão de login', () => {
  cy.get('[data-test="username"]').type('standard_user');
  cy.get('[data-test="password"]').type('secret_sauce');
  cy.get('#login-button').click();
});

Then('o usuário deve ser redirecionado para a página de produtos e visualizar o título "Products"', () => {
  cy.url().should('include', '/inventory.html');
  cy.get('.product_label').should('be.visible').and('contain.text', 'Products');
});
