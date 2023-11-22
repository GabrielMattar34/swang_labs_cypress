import methods from "./methods/methods";
import swag from "./const/swag";

describe('Validate all componentes in shopping page', () => {
    beforeEach (() => {
        cy.visit('https://www.saucedemo.com');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
    });

    it('Validade menu', () => {
        methods.assertMenuOptions(swag.menuOptions);
    })
})