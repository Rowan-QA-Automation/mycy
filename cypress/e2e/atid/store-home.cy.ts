describe('Atid Store', () => {
    before(() => {
        cy.visit('/');
    });

    it('Verifies Title Text', () => {
        cy.get('h1').should('contain.text', 'ATID Demo Store');
    });

    it('Goes to Store', () => {
        cy.contains('Shop Now').click();
    });
});
