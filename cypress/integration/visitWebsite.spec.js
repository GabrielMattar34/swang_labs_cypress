import methods from './methods/methods'; './methods/methods';
import swag from './const/swag';


describe('Visit and check Swag Labs website components', () => {
    it('User should be able to visit website', () => {
        methods.vistWebsite('https://www.saucedemo.com');
    })
    it('User should be able to see Login form and Login button', () => {
        methods.assertTextAndBeVisible('.login_logo', 'Swag Labs');
        methods.assertAttrAndText('[data-test="username"]', 'Username');
        methods.assertAttrAndText('[data-test="password"]', 'Password');
        methods.assertValue('[data-test="login-button"]', 'Login');
    })

    it('User should be able see title and all usernames', () => {
        methods.assertLoginAndPAsswordList('#login_credentials', swag.usernamesList);
    });

    it('User should be able see title and password', () => {
        methods.assertLoginAndPAsswordList('.login_password', swag.passwordList);
    });
})
