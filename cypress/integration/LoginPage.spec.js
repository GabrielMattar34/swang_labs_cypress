import methods from "./methods/methods";

describe('Login page validation', () => {
    beforeEach (() => {
        methods.vistWebsite('https://www.saucedemo.com');
    });

    it('User should not be able to login without fill username', () => {
        methods.clickOnElement('[data-test="login-button"]');
        // Error message
        methods.elementIsVisible('[data-icon="times"]');
        methods.assertMessage('Epic sadface: Username is required');
    });

    it('User should not be able to login without fill password', () => {
        methods.typeValueOnElement('[data-test="username"]', 'standard_user');
        methods.clickOnElement('[data-test="login-button"]');
        // Error message
        methods.elementIsVisible('[data-icon="times"]');
        methods.assertMessage('Epic sadface: Password is required');
    });

    it('User should not be able to login user wrong username or password', () => {
        methods.typeValueOnElement('[data-test="username"]', 'test');
        methods.typeValueOnElement('[data-test="password"]', 'test');
        methods.clickOnElement('[data-test="login-button"]');
        // Error message
        methods.elementIsVisible('[data-icon="times"]');
        methods.assertMessage('Epic sadface: Username and password do not match any user in this service');
    })

    it('User should be able to login using correct username and password', () => {
        methods.typeValueOnElement('[data-test="username"]', 'standard_user');
        methods.typeValueOnElement('[data-test="password"]', 'secret_sauce');
        methods.clickOnElement('[data-test="login-button"]');
        // Confirm new page was opening
        methods.assertTextAndBeVisible('.title', 'Products')
        methods.assertTextAndBeVisible('.active_option', 'Name (A to Z)')
    });
})