class methods {

    // visitWebsite
    static vistWebsite (url) {
        cy.visit(url);
    }

    static assertTextAndBeVisible(element, text) {
        cy.get(element).should('have.text', text).and('be.visible');
    }

    static assertLoginAndPAsswordList(element, listLabel) {
        cy.get(element).find('h4').each((label, i) => {
            cy.wrap(label).should('be.visible').and('have.text', listLabel[i]);
        });
    }

    static assertAttrAndText(element, text) {
        cy.get(element)
        .should('have.attr', 'placeholder', text)
        .and('be.visible');
    }

    static assertValue(element, value) {
        cy.get(element).should('have.value', value)
    };

    // LoginPage
    static clickOnElement(element) {
        cy.get(element).click();
    }

    static assertMessage(message) {
        cy.get('[data-test="error"]').should('have.text', message).and('be.visible');
    }

    static elementIsVisible(element) {
        cy.get(element).should('be.visible');
    }

    static typeValueOnElement(element, value) {
        cy.get(element).type(value);
    }

    // ShoppingPage

    static assertMenuOptions(listaLabel) {
        cy.get('#react-burger-menu-btn').should('be.visible').click();
        cy.get('.bm-item-list').find('a').each((label, i) => {
            expect(label).to.have.text(listaLabel[i]);
        });
    }

    static assertInventoryItems() {
        cy.get('[data-test="inventory-item"]').each(($item) => {
            cy.wrap($item).within(() => {
                // Validar a imagem
                cy.get('img.inventory_item_img').should('exist');
    
                // Validar o nome do item
                cy.get('[data-test="inventory-item-name"]').should('exist');
    
                // Validar a descrição do item
                cy.get('[data-test="inventory-item-desc"]').should('exist');
    
                // Validar o preço do item
                cy.get('[data-test="inventory-item-price"]').should('exist');
    
                // Validar o botão "Add to cart"
                cy.get('button[data-test^="add-to-cart"]').should('exist');
            });
        });
    }     
}

export default methods