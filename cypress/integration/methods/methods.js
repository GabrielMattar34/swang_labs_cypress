class methods {
    static assertLoginOptions(listLabel) {
        cy.get('#login_credentials').find('h4').each((label, i) => {
            expect(label).to.have.text(listLabel[i])
        });
    }

    static assertPasswordOption(listLabel) {
        cy.get('.login_password').find('h4').each((label, i) => {
            expect(label).to.have.text(listLabel[i])
        });
    }

    static assertMenuOptions(listaLabel) {
        cy.get('#react-burger-menu-btn').should('be.visible').click();
        cy.get('.bm-item-list').find('a').each((label, i) => {
            expect(label).to.have.text(listaLabel[i]);
        });
        cy.get('.bm-cross-button');
    }
}

export default methods