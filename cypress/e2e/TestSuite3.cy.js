describe('Web Suite 3 - Search Filters', () => {
  beforeEach(() => {
    cy.visit('https://www.99.co/singapore');
  });

  const tabs = ['Buy', 'Rent'];

  tabs.forEach(tab => {
    it(`should check that filters under "${tab}" tab work as expected`, () => {
      cy.contains('button', tab).click();
      cy.get('.filter-options').should('be.visible');
      
      cy.get('.filter-options select').each(($select) => {
        cy.wrap($select).select($select.find('option').eq(1).text());
        cy.get('.apply-filters-button').click();
        cy.get('.results-list').should('be.visible');
      });
    });
  });
});
