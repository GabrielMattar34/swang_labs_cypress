import methods from "./methods/methods";
import swag from "./const/swag";

describe('Validate all componentes in shopping page', () => {
    beforeEach (() => {
        methods.vistWebsite('https://www.saucedemo.com');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
    });

    it('Validade primary header', () => {
        // Validade menu
        methods.assertMenuOptions(swag.menuOptions);

        // Validade title
        methods.assertTextAndBeVisible('.header_label > .app_logo', 'Swag Labs');

        // Validade shopping cart icon
        methods.elementIsVisible('.shopping_cart_link');
    });

    it('Validade second header', () => {
        // Validade Products title
        methods.assertTextAndBeVisible('.title', 'Products');
        // Validade sort icon
        methods.assertTextAndBeVisible('.active_option', 'Name (A to Z)');
    });

    it('Validade items list', () => {
        methods.assertInventoryItems(swag.itemsList)
    });
})