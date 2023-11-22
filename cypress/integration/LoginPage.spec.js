
describe('Login page validation', () => {
    beforeEach (() => {
        cy.visit('https://www.saucedemo.com');
    });

    it('User should not be able to login without fill username', () => {
        cy.get('[data-test="login-button"]').click();
        // Error message
        cy.get('[data-icon="times"]').should('be.visible');
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username is required').and('be.visible');
    });

    it('User should not be able to login without fill password', () => {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="login-button"]').click();
        // Error message
        cy.get('[data-icon="times"]').should('be.visible');
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Password is required').and('be.visible');
    });

    it('User should not be able to login user wrong username or password', () => {
        cy.get('[data-test="username"]').type('test');
        cy.get('[data-test="password"]').type('test');
        cy.get('[data-test="login-button"]').click();
        // Error message
        cy.get('[data-icon="times"]').should('be.visible');
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service').and('be.visible');
    })

    it('user should be able to login using correct username and password', () => {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        // Confirm new page was opening
        cy.get('.title').should('have.text', 'Products').and('be.visible');
        cy.get('.active_option').should('have.text', 'Name (A to Z)').and('be.visible');
    });
})