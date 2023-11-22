import methods from './methods/methods'; './methods/methods';
import swag from './const/swag';


describe('Visit and check Swag Labs website components', () => {
    it('User should be able to visit website', () => {
        cy.visit('https://www.saucedemo.com');
    })
    it('User should be able to see login form and Login button', () => {
        cy.get('.login_logo').should('have.text', 'Swag Labs').and('be.visible');
        cy.get('[data-test="username"]').should('have.attr', 'placeholder', 'Username').and('be.visible');;
        cy.get('[data-test="password"]').should('have.attr', 'placeholder', 'Password').and('be.visible');;
        cy.get('[data-test="login-button"]').should('have.value', 'Login');
    })

    it('User should be able see title and all usernames', () => {
        methods.assertLoginOptions(swag.usernames).and('be.visible');
    });

    it('User should be able see title and password', () => {
        methods.assertPasswordOption(swag.password).and('be.visible');
    });
})
