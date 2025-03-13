import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na página de login do Saucedemo", () => {
  cy.visit("https://www.saucedemo.com/v1");
});

When("faço login com usuário {string} e senha {string}", (username, password) => {
  cy.get('[data-test="username"]').type(username);
  cy.get('[data-test="password"]').type(password);
  cy.get('#login-button').click();
});

Then("sou redirecionado para a página de produtos", () => {
  cy.get('.product_label').should('contain.text', 'Products');
});

When("adiciono os seguintes produtos ao carrinho:", (table) => {
  table.hashes().forEach((row) => {
    cy.contains('.inventory_item_name', row.Produto).click();
    cy.get('.btn_primary').click();
    cy.get('.inventory_details_back_button').click({ force: true });
  });
});

Then("vejo {int} itens no carrinho", (quantity) => {
  cy.get('#shopping_cart_container').click();
  cy.get('.cart_item').should('have.length', quantity);
});

When("acesso o carrinho", () => {
  cy.get('#shopping_cart_container').click();
});

Then("os produtos no carrinho são:", (table) => {
  table.hashes().forEach((row, index) => {
    cy.get('.cart_item').eq(index).find('.inventory_item_name').should('contain.text', row.Produto);
  });
});

When("realizo o checkout preenchendo {string}, {string} e {string}", (firstName, lastName, postalCode) => {
  cy.get('.checkout_button').click();
  cy.url().should('include', '/checkout-step-one');
  cy.get('[data-test="firstName"]').type(firstName);
  cy.get('[data-test="lastName"]').type(lastName);
  cy.get('[data-test="postalCode"]').type(postalCode);
  cy.get('.cart_button').click();
});

Then("sou redirecionado para a página de revisão do pedido", () => {
  cy.url().should('include', '/checkout-step-two');
  cy.get('.subheader').should('contain.text', 'Checkout: Overview');
});

When("confirmo a compra", () => {
  cy.get('.cart_button').click();
});

Then("vejo a mensagem de confirmação {string}", (message) => {
  cy.url().should('include', '/checkout-complete');
  cy.get('.complete-header').should('contain.text', message);
});
